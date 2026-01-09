"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Navbar
 * - Uses glassmorphism effect.
 * - Highlights active link.
 * - Responsive: Hamburger menu on mobile.
 */
export type NavItem = {
    label: string;
    href: string;
};

export type NavbarProps = {
    brand: string;
    items: NavItem[];
};

export default function Navbar({ brand, items }: NavbarProps) {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (!mounted) return;
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen, mounted]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${mobileOpen
                ? "bg-transparent border-transparent" // When open, overlay handles bg
                : scrolled
                    ? "bg-black/80 backdrop-blur-md border-white/10 py-3"
                    : "bg-transparent border-transparent py-6"
                }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand */}
                <Link href="/" className="relative z-50 flex items-center group">
                    <img
                        src="/logo-premium.png"
                        alt="Jyvenche Logo"
                        className="w-20 h-20 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {items.map((item) => {
                        const isActive = item.href === "/"
                            ? pathname === "/"
                            : pathname === item.href || pathname.startsWith(item.href + "/");
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm transition-colors duration-300 ${isActive
                                    ? "text-white font-medium"
                                    : "text-white/60 hover:text-white"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden relative z-50 p-2 text-white hover:text-accent focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                        <span className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-left ${mobileOpen ? "rotate-45 translate-x-px" : "translate-x-0"}`} />
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`} />
                        <span className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-left ${mobileOpen ? "-rotate-45 translate-x-px" : "translate-x-0"}`} />
                    </div>
                </button>

                {/* Mobile Overlay - Only render when open */}
                {mobileOpen && (
                    <div
                        id="mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        className="fixed inset-0 z-[999] bg-black flex flex-col pt-24 pb-10 px-6 overflow-y-auto md:hidden"
                    >
                        <div className="flex flex-col items-center gap-6 w-full">
                            {items.map((item) => {
                                const isActive = item.href === "/"
                                    ? pathname === "/"
                                    : pathname === item.href || pathname.startsWith(item.href + "/");
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`text-lg font-bold tracking-tight py-3 block w-full text-center ${isActive ? "text-accent" : "text-white"
                                            }`}
                                        style={{ color: isActive ? '#C9A962' : '#FFFFFF' }}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}

                            <div className="mt-12 w-full flex justify-center border-t border-white/20 pt-8">
                                <Link href="/" className="text-xs uppercase tracking-[0.2em] text-white/50">
                                    {brand}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
