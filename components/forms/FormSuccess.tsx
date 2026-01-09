"use client";

import type { FormSuccessProps } from "@/types/content";

/**
 * FormSuccess
 * - Displayed after successful inquiry submission.
 */
export default function FormSuccess({ headline, body, note }: FormSuccessProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-md animate-fade-in">
            <div className="max-w-md w-full rounded-3xl border border-white/10 p-10 bg-white/[0.03] text-center">
                <img
                    src="/logo-premium.png"
                    alt="Jyvenche"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto mb-6"
                />
                <h2 className="text-3xl font-serif text-white mb-4">{headline}</h2>
                <p className="text-lg text-white/60 leading-relaxed max-w-md mx-auto">{body}</p>
                {note && (
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-xs uppercase tracking-widest text-white/40">{note}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
