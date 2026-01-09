"use client";

import Link from "next/link";

/**
 * Footer
 * - Keep it minimal.
 * - Provide important utility links (Payment Terms, Pay Invoice).
 */
export type FooterProps = {
    brand: string;
    links: Array<{ label: string; href: string }>;
    copyright?: string;
};

export default function Footer({ brand, links, copyright }: FooterProps) {
    return (
        <footer className="border-t border-white/10 mt-16">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center">
                        <img
                            src="/logo-premium.png"
                            alt="Jyvenche Logo"
                            className="w-24 h-24 object-contain"
                        />
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {links.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="text-sm text-white/70 hover:text-white transition"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-xs text-white/50">
                    {copyright ?? `© ${new Date().getFullYear()} ${brand}`}
                </div>
            </div>
        </footer>
    );
}
