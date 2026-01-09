"use client";

import Link from "next/link";
import type { CaseStudyHeaderProps } from "@/types/content";

/**
 * CaseStudyHeader
 * - Used on /work/[slug] for a consistent case study top block.
 */
export default function CaseStudyHeader({ title, label, summary, liveUrl, badge }: CaseStudyHeaderProps) {
    return (
        <header className="pt-32 sm:pt-40">
            <div className="flex flex-wrap items-center gap-3">
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">{label}</div>
                {badge ? (
                    <div className="text-xs rounded-full border border-white/15 px-3 py-1 text-white/70">
                        {badge}
                    </div>
                ) : null}
            </div>

            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h1>

            {summary ? <p className="mt-3 max-w-2xl text-sm text-white/70">{summary}</p> : null}

            {liveUrl ? (
                <div className="mt-5">
                    <Link
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-white hover:opacity-80 transition"
                    >
                        View Live
                    </Link>
                </div>
            ) : null}
        </header>
    );
}
