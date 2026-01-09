/**
 * Slug Utilities
 * 
 * Functions for generating and handling URL slugs.
 * Used for case study URLs and other dynamic routes.
 */

/**
 * Generates a URL-friendly slug from a string.
 * Converts to lowercase, replaces spaces with hyphens,
 * and removes special characters.
 */
export function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/--+/g, '-') // Replace multiple hyphens with single
        .replace(/^-+/, '') // Remove leading hyphens
        .replace(/-+$/, '') // Remove trailing hyphens
}

/**
 * Converts a slug back to a readable title.
 * Replaces hyphens with spaces and capitalizes words.
 */
export function slugToTitle(slug: string): string {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

/**
 * Validates that a slug follows expected format.
 * Only allows lowercase letters, numbers, and hyphens.
 */
export function isValidSlug(slug: string): boolean {
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
    return slugRegex.test(slug)
}
