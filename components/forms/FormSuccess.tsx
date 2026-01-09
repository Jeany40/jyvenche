"use client";

import type { FormSuccessProps } from "@/types/content";

/**
 * FormSuccess
 * - Displayed after successful inquiry submission.
 */
export default function FormSuccess({ headline, body, note }: FormSuccessProps) {
    return (
        <div className="rounded-3xl border border-white/10 p-10 bg-white/[0.03] backdrop-blur-xl text-center animate-fade-in">
            <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h2 className="text-3xl font-serif text-white mb-4">{headline}</h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-md mx-auto">{body}</p>
            {note && (
                <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-xs uppercase tracking-widest text-white/40">{note}</p>
                </div>
            )}
        </div>
    );
}
