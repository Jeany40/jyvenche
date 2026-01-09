"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CaseStudyCardProps } from "@/types/content";

function ParallaxLayer({ index }: { index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            // Calculate distance from center of viewport to apply parallax
            const rect = ref.current.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const itemCenter = rect.top + rect.height / 2;

            // Distance from center
            const diff = itemCenter - viewportCenter;

            // Apply small shift
            setOffset(diff * 0.05);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={ref} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Abstract Gradient Blob */}
            <div
                className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%]"
                style={{
                    transform: `translateY(${offset}px)`,
                    background: `radial-gradient(circle at 50% 50%, rgba(200, 170, 100, 0.03), transparent 70%)`
                }}
            />
        </div>
    );
}

export default function CaseStudyCard({ title, label, summary, href, featured, index = 0 }: CaseStudyCardProps & { index?: number }) {
    return (
        <div className={`glass-card h-full flex flex-col justify-between group relative overflow-hidden ${featured ? "border-accent/30 bg-accent/5 hover:bg-accent/10" : "bg-white/[0.03]"
            }`}>
            <ParallaxLayer index={index} />

            {featured && (
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-[50px] pointer-events-none" />
            )}

            <div className="relative z-10">
                <div className="text-xs uppercase tracking-[0.2em] text-accent/80 font-medium mb-3">
                    {label}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                    {title}
                </h3>
                <p className="text-foreground-secondary leading-relaxed text-sm md:text-base">
                    {summary}
                </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                <Link href={href} className="flex items-center text-sm font-medium text-white hover:text-accent transition-colors">
                    View Case Study
                    <span className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                </Link>
            </div>
        </div>
    );
}
