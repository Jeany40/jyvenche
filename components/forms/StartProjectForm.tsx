"use client";

import { useMemo, useState } from "react";
import FormSuccess from "./FormSuccess";
import type { StartProjectFormProps, StartProjectFormData, StartProjectFormErrors } from "@/types/content";

const INITIAL: StartProjectFormData = {
    fullName: "",
    email: "",
    company: "",
    website: "",
    projectType: "",
    projectDescription: "",
    primaryGoals: [],
    scopeSize: "",
    budgetRange: "",
    timeline: "",
    decisionReadiness: "",
    companyWebsite: ""
};

/**
 * StartProjectForm
 * - Modern inputs with glass frames.
 */
export default function StartProjectForm({ successHeadline, successBody }: StartProjectFormProps) {
    const [data, setData] = useState<StartProjectFormData>(INITIAL);
    const [errors, setErrors] = useState<StartProjectFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [globalError, setGlobalError] = useState<string>("");

    const projectTypeOptions = useMemo(
        () => [
            "Brand / Marketing Website",
            "Platform / Web App",
            "Admin Dashboard / Internal Tool",
            "Redesign / Upgrade",
            "Not sure yet"
        ],
        []
    );

    const primaryGoalOptions = useMemo(
        () => [
            "Increase credibility / trust",
            "Generate leads / inquiries",
            "Deliver digital content / media",
            "Manage content internally",
            "Launch a scalable platform",
            "Other"
        ],
        []
    );

    function validateClient(next: StartProjectFormData): StartProjectFormErrors {
        const nextErrors: StartProjectFormErrors = {};
        if (!next.fullName.trim()) nextErrors.fullName = "Full name is required.";
        if (!next.email.trim()) nextErrors.email = "Email is required.";
        if (!next.projectType) nextErrors.projectType = "Project type is required.";
        if (!next.projectDescription.trim()) nextErrors.projectDescription = "Project description is required.";
        if (next.projectDescription.trim().length > 0 && next.projectDescription.trim().length < 30) {
            nextErrors.projectDescription = "Please include a bit more detail (at least 30 characters).";
        }
        if (!next.scopeSize) nextErrors.scopeSize = "Scope size is required.";
        if (!next.budgetRange) nextErrors.budgetRange = "Budget range is required.";
        if (!next.timeline) nextErrors.timeline = "Timeline is required.";
        if (!next.decisionReadiness) nextErrors.decisionReadiness = "Decision readiness is required.";
        return nextErrors;
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
        // Hint: Clear the error for that field as soon as user edits it.
        setErrors((prev) => ({ ...prev, [name]: undefined }));
        setGlobalError("");
    }

    function toggleGoal(goal: string) {
        setData((prev) => {
            const has = prev.primaryGoals.includes(goal);
            return {
                ...prev,
                primaryGoals: has ? prev.primaryGoals.filter((g) => g !== goal) : [...prev.primaryGoals, goal]
            };
        });
        // Proactive error clearing
        setGlobalError("");
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const nextErrors = validateClient(data);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        setIsSubmitting(true);
        try {
            const res = await fetch("/api/inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            // If the server rejected it, show field errors (if provided).
            if (!res.ok) {
                const result = (await res.json()) as { ok: boolean; errors?: Record<string, string>; error?: string };
                setGlobalError(result.error ?? "Something went wrong. Please try again.");

                // If server returned field-level errors, merge them into state.
                if (result.errors) {
                    setErrors((prev) => ({ ...prev, ...result.errors }));
                }
                return;
            }

            // Success
            setIsSuccess(true);
        } catch (err) {
            setGlobalError("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return <FormSuccess headline={successHeadline} body={successBody} />;
    }

    return (
        <form onSubmit={handleSubmit} className="glass-card">
            <div className="hidden">
                <label htmlFor="companyWebsite">Company Website</label>
                <input id="companyWebsite" name="companyWebsite" value={data.companyWebsite} onChange={handleChange} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-1">
                    <label htmlFor="fullName" className="input-label">Full Name *</label>
                    <input
                        id="fullName"
                        name="fullName"
                        value={data.fullName}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Your name"
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    />
                    {errors.fullName ? (
                        <p id="fullName-error" className="mt-2 text-xs text-red-400/90 font-medium animate-fade-in" role="alert">
                            {errors.fullName}
                        </p>
                    ) : null}
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="email" className="input-label">Email *</label>
                    <input
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="you@email.com"
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email ? (
                        <p id="email-error" className="mt-2 text-xs text-red-400/90 font-medium animate-fade-in" role="alert">
                            {errors.email}
                        </p>
                    ) : null}
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="company" className="input-label">Company / Brand</label>
                    <input
                        id="company"
                        name="company"
                        value={data.company}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Optional"
                        autoComplete="organization"
                    />
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="website" className="input-label">Current Website</label>
                    <input
                        id="website"
                        name="website"
                        value={data.website}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Optional"
                        autoComplete="url"
                    />
                </div>
            </div>

            <div className="mt-8">
                <label htmlFor="projectType" className="input-label">Project Type *</label>
                <select
                    id="projectType"
                    name="projectType"
                    value={data.projectType}
                    onChange={handleChange}
                    className="input-field appearance-none"
                    aria-required="true"
                    aria-invalid={!!errors.projectType}
                    aria-describedby={errors.projectType ? "projectType-error" : undefined}
                >
                    <option value="" className="bg-background">Select one</option>
                    {projectTypeOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-background">
                            {opt}
                        </option>
                    ))}
                </select>
                {errors.projectType ? (
                    <p id="projectType-error" className="mt-2 text-xs text-red-400/90 font-medium animate-fade-in" role="alert">
                        {errors.projectType}
                    </p>
                ) : null}

                <div className="mt-6">
                    <label htmlFor="projectDescription" className="input-label">Project Description *</label>
                    <textarea
                        id="projectDescription"
                        name="projectDescription"
                        value={data.projectDescription}
                        onChange={handleChange}
                        className="input-field min-h-[120px]"
                        placeholder="What are you building, and what problem does it solve?"
                        aria-required="true"
                        aria-invalid={!!errors.projectDescription}
                        aria-describedby={errors.projectDescription ? "projectDescription-error" : undefined}
                    />
                    {errors.projectDescription ? (
                        <p id="projectDescription-error" className="mt-2 text-xs text-red-400/90 font-medium animate-fade-in" role="alert">
                            {errors.projectDescription}
                        </p>
                    ) : null}
                </div>
            </div>

            <div className="mt-8">
                <div className="input-label mb-3">Primary Goals</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {primaryGoalOptions.map((goal) => {
                        const checked = data.primaryGoals.includes(goal);
                        return (
                            <button
                                key={goal}
                                type="button"
                                onClick={() => toggleGoal(goal)}
                                className={`text-left rounded-xl px-4 py-3 text-sm transition-all duration-300 border ${checked
                                    ? "bg-accent/10 border-accent text-white shadow-[0_0_15px_rgba(201,169,98,0.15)]"
                                    : "bg-white/[0.02] border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                                    }`}
                            >
                                {goal}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="scopeSize" className="input-label">Scope Size *</label>
                    <select
                        id="scopeSize"
                        name="scopeSize"
                        value={data.scopeSize}
                        onChange={handleChange}
                        className="input-field appearance-none"
                        aria-required="true"
                        aria-invalid={!!errors.scopeSize}
                        aria-describedby={errors.scopeSize ? "scopeSize-error" : undefined}
                    >
                        <option value="" className="bg-background">Select one</option>
                        <option value="Small" className="bg-background">Small (1–4 pages)</option>
                        <option value="Medium" className="bg-background">Medium (5–10 pages)</option>
                        <option value="Large" className="bg-background">Large (platform)</option>
                        <option value="Not sure" className="bg-background">Not sure</option>
                    </select>
                    {errors.scopeSize ? (
                        <p id="scopeSize-error" className="mt-2 text-xs text-red-400/90 font-medium animate-fade-in" role="alert">
                            {errors.scopeSize}
                        </p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="budgetRange" className="input-label">Budget Range *</label>
                    <select
                        id="budgetRange"
                        name="budgetRange"
                        value={data.budgetRange}
                        onChange={handleChange}
                        className="input-field appearance-none"
                        aria-required="true"
                        aria-invalid={!!errors.budgetRange}
                        aria-describedby={errors.budgetRange ? "budgetRange-error" : undefined}
                    >
                        <option value="" className="bg-background">Select one</option>
                        <option value="$1,500 – $3,500" className="bg-background">$1,500 – $3,500</option>
                        <option value="$3,500 – $7,500" className="bg-background">$3,500 – $7,500</option>
                        <option value="$7,500 – $15,000" className="bg-background">$7,500 – $15,000</option>
                        <option value="$15,000+" className="bg-background">$15,000+</option>
                        <option value="Not sure yet" className="bg-background">Not sure yet</option>
                    </select>
                    {errors.budgetRange ? (
                        <p id="budgetRange-error" className="mt-2 text-xs text-red-400/90 font-medium animate-fade-in" role="alert">
                            {errors.budgetRange}
                        </p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="timeline" className="input-label">Timeline *</label>
                    <select
                        id="timeline"
                        name="timeline"
                        value={data.timeline}
                        onChange={handleChange}
                        className="input-field appearance-none"
                        aria-required="true"
                        aria-invalid={!!errors.timeline}
                        aria-describedby={errors.timeline ? "timeline-error" : undefined}
                    >
                        <option value="" className="bg-background">Select one</option>
                        <option value="2–4 weeks" className="bg-background">2–4 weeks</option>
                        <option value="1–2 months" className="bg-background">1–2 months</option>
                        <option value="2–3 months" className="bg-background">2–3 months</option>
                        <option value="Flexible" className="bg-background">Flexible</option>
                    </select>
                    {errors.timeline ? (
                        <p id="timeline-error" className="mt-2 text-xs text-red-400/90 font-medium animate-fade-in" role="alert">
                            {errors.timeline}
                        </p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="decisionReadiness" className="input-label">Decision Readiness *</label>
                    <select
                        id="decisionReadiness"
                        name="decisionReadiness"
                        value={data.decisionReadiness}
                        onChange={handleChange}
                        className="input-field appearance-none"
                        aria-required="true"
                        aria-invalid={!!errors.decisionReadiness}
                        aria-describedby={errors.decisionReadiness ? "decisionReadiness-error" : undefined}
                    >
                        <option value="" className="bg-background">Select one</option>
                        <option value="Ready to start" className="bg-background">Ready to start</option>
                        <option value="Within 1 month" className="bg-background">Within 1 month</option>
                        <option value="Exploring options" className="bg-background">Exploring options</option>
                    </select>
                    {errors.decisionReadiness ? (
                        <p id="decisionReadiness-error" className="mt-2 text-xs text-red-400/90 font-medium animate-fade-in" role="alert">
                            {errors.decisionReadiness}
                        </p>
                    ) : null}
                </div>
            </div>

            {globalError ? (
                <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-400/90 font-medium animate-fade-in flex items-center gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    {globalError}
                </div>
            ) : null}

            <button
                type="submit"
                disabled={isSubmitting}
                className="mt-10 w-full btn-primary"
            >
                {isSubmitting ? "Submitting..." : "Request Project Review"}
            </button>

            <p className="mt-4 text-xs text-center text-white/40">
                You’ll receive a response within 1–2 business days.
            </p>
        </form>
    );
}
