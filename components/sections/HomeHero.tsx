"use client";

import Link from "next/link";
import type { HomeHeroProps } from "@/types/content";

/**
 * HomeHero
 * - Hero content is passed in as props from home.json.
 * - Updated with modern design tokens (buttons, gradients).
 */
export default function HomeHero({
    brand,
    headline,
    subheadline,
    primaryCta,
    secondaryCta,
    trustLine,
}: HomeHeroProps) {
    return (
        <section className="pt-64 pb-20 sm:pt-72 sm:pb-24 animate-fade-in relative">
            {/* Background Glow Spot */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] opacity-50 pointer-events-none" />

            {/* Small brand line */}
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-6">
                {brand}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-balance leading-[1.1]">
                <span className="text-gradient">{headline}</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-foreground-secondary leading-relaxed">
                {subheadline}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                {/* Primary CTA */}
                <Link
                    href={primaryCta.href}
                    className="btn-primary"
                >
                    {primaryCta.label}
                </Link>

                {/* Secondary CTA */}
                <Link
                    href={secondaryCta.href}
                    className="btn-secondary"
                >
                    {secondaryCta.label}
                </Link>
            </div>

            {trustLine ? (
                <div className="mt-12 pt-8 border-t border-white/5">
                    <p className="text-sm text-foreground-muted max-w-md">
                        {trustLine}
                    </p>
                </div>
            ) : null}
        </section>
    );
}
