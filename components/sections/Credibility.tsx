"use client";

import type { CredibilityProps } from "@/types/content";

/**
 * Credibility
 * - Using glass panel and modern list styling.
 */
export default function Credibility({ title, body, bullets }: CredibilityProps) {
    return (
        <section className="mt-20 sm:mt-32 glass-card relative overflow-hidden">
            {/* Decorative gradient blob */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">{title}</h2>
                    <p className="mt-3 sm:mt-4 text-foreground-secondary leading-relaxed text-base sm:text-lg">{body}</p>
                </div>

                {bullets?.length ? (
                    <ul className="grid grid-cols-1 gap-3 sm:gap-4">
                        {bullets.map((b) => (
                            <li key={b} className="flex gap-3 sm:gap-4 items-start group">
                                <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full border border-accent/30 flex items-center justify-center bg-accent/5 group-hover:bg-accent/20 transition-colors">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                </span>
                                <span className="text-sm sm:text-base text-foreground-secondary group-hover:text-white transition-colors">{b}</span>
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </section>
    );
}
