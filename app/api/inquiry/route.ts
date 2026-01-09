// app/api/inquiry/route.ts
// Minimal inquiry endpoint:
// - Validates required fields
// - Blocks spam using a honeypot field
// - Returns { ok: true } on success
// Next step later: send an email (Resend) or save to Notion/DB.

import { NextResponse } from "next/server";

// Keep this type aligned with StartProjectFormData in your form component.
type InquiryPayload = {
    fullName: string;
    email: string;
    company: string;
    website: string;
    projectType: string;
    projectDescription: string;
    primaryGoals: string[];
    scopeSize: string;
    budgetRange: string;
    timeline: string;
    decisionReadiness: string;
    companyWebsite: string; // honeypot (must be empty)
};

// Small helper: basic email sanity check (server still should not over-trust it).
function looksLikeEmail(value: string) {
    // Hint: This is intentionally simple. Avoid heavy regex that rejects valid emails.
    return value.includes("@") && value.includes(".");
}

function isNonEmpty(value: unknown) {
    return typeof value === "string" && value.trim().length > 0;
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as Partial<InquiryPayload>;

        // 1) Honeypot spam check
        // Bots often fill hidden fields; if this has a value, reject quietly.
        if (typeof body.companyWebsite === "string" && body.companyWebsite.trim().length > 0) {
            return NextResponse.json({ ok: true }, { status: 200 });
            // Hint: Responding "ok" prevents bots from learning your filters.
        }

        // 2) Required field validation
        const errors: Record<string, string> = {};

        if (!isNonEmpty(body.fullName)) errors.fullName = "Full name is required.";
        if (!isNonEmpty(body.email)) errors.email = "Email is required.";
        if (typeof body.email === "string" && !looksLikeEmail(body.email)) {
            errors.email = "Email is invalid.";
        }
        if (!isNonEmpty(body.projectType)) errors.projectType = "Project type is required.";
        if (!isNonEmpty(body.projectDescription)) errors.projectDescription = "Project description is required.";
        if (typeof body.projectDescription === "string" && body.projectDescription.trim().length < 30) {
            errors.projectDescription = "Project description must be at least 30 characters.";
        }
        if (!isNonEmpty(body.scopeSize)) errors.scopeSize = "Scope size is required.";
        if (!isNonEmpty(body.budgetRange)) errors.budgetRange = "Budget range is required.";
        if (!isNonEmpty(body.timeline)) errors.timeline = "Timeline is required.";
        if (!isNonEmpty(body.decisionReadiness)) errors.decisionReadiness = "Decision readiness is required.";

        // primaryGoals is optional, but if present it should be an array of strings
        if (body.primaryGoals !== undefined) {
            const isValidGoals =
                Array.isArray(body.primaryGoals) && body.primaryGoals.every((g) => typeof g === "string");
            if (!isValidGoals) errors.primaryGoals = "Primary goals must be an array of strings.";
        }

        if (Object.keys(errors).length > 0) {
            return NextResponse.json({ ok: false, errors }, { status: 400 });
        }

        // 3) At this point, data is valid enough to accept.
        // Next step later:
        // - send an email
        // - store in Notion/DB
        // - create a CRM lead
        // For now, just return ok.
        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (err) {
        // Hint: Avoid leaking server errors to the client.
        return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
    }
}
