"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { SelectedWorkProps, SelectedWorkCard } from "@/types/content";

/**
 * ParallaxCardBackground
 * - A reused parallax layer for project cards.
 * - Simulates depth by moving slower than scroll.
 */
function ParallaxBackground({ index = 0 }: { index?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const { top } = ref.current.getBoundingClientRect();
            // Calculate partial scroll offset based on position in viewport
            const speed = 0.08 + (index * 0.02); // Vary speed slightly by index
            setOffset(top * speed * -1);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initial
        return () => window.removeEventListener("scroll", handleScroll);
    }, [index]);

    return (
        <div ref={ref} className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
            {/* 
               We don't have real images yet, so we use a large abstract gradient 
               that is larger than the container to allow for movement.
            */}
            <div
                className="absolute inset-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-white/5 via-transparent to-accent/5 opacity-30"
                style={{ transform: `translateY(${offset}px)` }}
            >
                {/* Add a secondary texture blob for more detail */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[80px]" />
            </div>

            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>
    );
}

/**
 * WorkCard
 * - Now includes parallax background.
 */
function WorkCard({
    title,
    label,
    summary,
    href,
    featured,
    index = 0,
}: SelectedWorkCard & { featured?: boolean; index?: number }) {
    return (
        <div className={`relative h-full flex flex-col justify-between group rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-accent/40 ${featured ? "min-h-[320px] sm:min-h-[400px]" : "min-h-[280px] sm:min-h-[300px]"
            }`}>
            {/* Parallax Background Layer */}
            <ParallaxBackground index={index} />

            {/* Content Layer */}
            <div className="relative z-10 p-5 sm:p-8 flex flex-col h-full bg-black/20 group-hover:bg-black/10 transition-colors duration-500">
                <div>
                    {/* Decorative top accent */}
                    {featured && (
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                            <div className="w-32 h-32 rounded-full bg-accent blur-[60px]" />
                        </div>
                    )}

                    <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-3 sm:mb-4 flex items-center gap-2">
                        {label}
                        {featured && <span className="w-1.5 h-1.5 rounded-full bg-white/40" />}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                        {title}
                    </h3>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-lg">
                        {summary}
                    </p>
                </div>

                <div className="mt-auto pt-6 sm:pt-8">
                    <Link href={href} className="inline-flex items-center text-sm font-medium text-white hover:text-accent transition-colors py-2">
                        View Case Study
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function SelectedWork({ intro, featured, secondary }: SelectedWorkProps) {
    return (
        <section className="mt-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-fade-in">
                <div>
                    <h2 className="text-3xl font-semibold tracking-tight text-white">Selected Work</h2>
                    <p className="mt-4 max-w-xl text-foreground-secondary leading-relaxed">{intro}</p>
                </div>
                <Link href="/work" className="text-sm font-medium text-accent hover:text-white transition-colors pb-1 border-b border-accent/30 hover:border-white">
                    View All Projects
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3 items-stretch">
                {/* Featured card spans 2 columns on desktop */}
                <div className="lg:col-span-2 space-y-4 animate-fade-in [animation-delay:200ms]">
                    <WorkCard {...featured} featured index={0} />

                    {/* Sub-system links */}
                    {featured.subSystems?.length ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            {featured.subSystems.map((s) => (
                                <Link
                                    key={s.href}
                                    href={s.href}
                                    className="group flex items-center justify-between p-3 sm:p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
                                >
                                    <span className="text-sm text-foreground-secondary group-hover:text-white transition-colors">{s.title}</span>
                                    <span className="text-white/20 group-hover:text-accent text-xs transition-colors">↗</span>
                                </Link>
                            ))}
                        </div>
                    ) : null}
                </div>

                {/* Secondary card */}
                <div className="lg:col-span-1 h-full animate-fade-in [animation-delay:400ms]">
                    <WorkCard {...secondary} index={1} />
                </div>
            </div>
        </section>
    );
}
