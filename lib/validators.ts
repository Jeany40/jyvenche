/**
 * Form Validation Utilities
 * 
 * Server-side and client-side validation for inquiry form.
 * Used by both the form component and the API route.
 */

// ===========================================
// TYPE DEFINITIONS
// ===========================================

export interface InquiryFormData {
    fullName: string
    email: string
    company: string
    website: string
    projectType: string
    projectDescription: string
    primaryGoals: string[]
    scopeSize: string
    budgetRange: string
    timeline: string
    decisionReadiness: string
    companyWebsite: string // Honeypot field - should be empty
}

export interface ValidationResult {
    isValid: boolean
    errors: Record<string, string>
}

// ===========================================
// VALIDATION FUNCTIONS
// ===========================================

/**
 * Validates email format using a standard regex pattern.
 * Not exhaustive but catches most common formatting issues.
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

/**
 * Validates URL format. Accepts URLs with or without protocol.
 */
export function isValidUrl(url: string): boolean {
    if (!url) return true // URL is optional

    try {
        // Add protocol if missing for URL validation
        const urlToTest = url.startsWith('http') ? url : `https://${url}`
        new URL(urlToTest)
        return true
    } catch {
        return false
    }
}

/**
 * Main validation function for inquiry form data.
 * Returns validation result with field-specific error messages.
 */
export function validateInquiryForm(data: Partial<InquiryFormData>): ValidationResult {
    const errors: Record<string, string> = {}

    // Required field: Full Name
    if (!data.fullName?.trim()) {
        errors.fullName = 'Full name is required'
    } else if (data.fullName.trim().length < 2) {
        errors.fullName = 'Full name must be at least 2 characters'
    }

    // Required field: Email
    if (!data.email?.trim()) {
        errors.email = 'Email is required'
    } else if (!isValidEmail(data.email)) {
        errors.email = 'Please enter a valid email address'
    }

    // Optional field: Website (validate format if provided)
    if (data.website && !isValidUrl(data.website)) {
        errors.website = 'Please enter a valid URL'
    }

    // Required field: Project Type
    if (!data.projectType?.trim()) {
        errors.projectType = 'Please select a project type'
    }

    // Required field: Project Description (minimum length)
    if (!data.projectDescription?.trim()) {
        errors.projectDescription = 'Please describe your project'
    } else if (data.projectDescription.trim().length < 20) {
        errors.projectDescription = 'Please provide more detail (at least 20 characters)'
    }

    // Required field: Primary Goals (at least one)
    if (!data.primaryGoals || data.primaryGoals.length === 0) {
        errors.primaryGoals = 'Please select at least one primary goal'
    }

    // Required field: Scope Size
    if (!data.scopeSize?.trim()) {
        errors.scopeSize = 'Please select a scope size'
    }

    // Required field: Budget Range
    if (!data.budgetRange?.trim()) {
        errors.budgetRange = 'Please select a budget range'
    }

    // Required field: Timeline
    if (!data.timeline?.trim()) {
        errors.timeline = 'Please select a timeline'
    }

    // Required field: Decision Readiness
    if (!data.decisionReadiness?.trim()) {
        errors.decisionReadiness = 'Please indicate your decision readiness'
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    }
}

/**
 * Checks if the honeypot field is filled.
 * If filled, the submission is likely from a bot.
 */
export function isSpamSubmission(honeypotValue: string): boolean {
    return honeypotValue?.trim().length > 0
}

/**
 * Sanitizes string input to prevent basic XSS.
 * Used before storing or displaying user input.
 */
export function sanitizeString(input: string): string {
    if (!input) return ''

    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .trim()
}
