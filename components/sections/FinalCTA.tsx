"use client";

import Link from "next/link";
import type { FinalCTAProps } from "@/types/content";

/**
 * FinalCTA
 * - A bold, centered closing section.
 */
export default function FinalCTA({ headline, body, primary, secondary }: FinalCTAProps) {
    return (
        <section className="mt-32 mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 rounded-3xl -z-10" />

            <div className="glass-card text-center py-20 px-6 md:px-12 border-white/10 hover:border-white/20">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                    {headline}
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-foreground-secondary mb-10 leading-relaxed">
                    {body}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={primary.href}
                        className="btn-primary min-w-[160px]"
                    >
                        {primary.label}
                    </Link>

                    {secondary ? (
                        <Link
                            href={secondary.href}
                            className="btn-secondary min-w-[160px]"
                        >
                            {secondary.label}
                        </Link>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
