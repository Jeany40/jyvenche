// app/pricing/page.tsx
// Pricing route: uses content/pages/pricing.json.
// Modernized with glass cards and consistent styling.

import Container from "@/components/layout/Container";
import FinalCTA from "@/components/sections/FinalCTA";

import pricing from "@/content/pages/pricing.json";

export default function PricingPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Container className="pt-64 pb-20 sm:pt-72">
                {/* Page header */}
                <header className="animate-fade-in relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">
                        {pricing.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-foreground-secondary leading-relaxed">
                        {pricing.intro}
                    </p>
                    <div className="mt-6 inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="text-sm text-foreground-secondary">
                            Minimum project size: <span className="text-white font-medium ml-1">{pricing.minimum}</span>
                        </span>
                    </div>
                </header>

                {/* Ranges */}
                <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in [animation-delay:200ms]">
                    {pricing.ranges.map((r) => (
                        <div key={r.service} className="glass-card flex flex-col justify-between hover:border-accent/40 group">
                            <div>
                                <h2 className="text-xl font-semibold tracking-tight text-white group-hover:text-accent transition-colors">{r.service}</h2>
                                <div className="mt-6 text-3xl font-bold tracking-tighter text-gradient-gold">{r.range}</div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/5 text-sm text-foreground-muted">
                                Typical range
                            </div>
                        </div>
                    ))}
                </section>

                {/* Retainers */}
                <section className="mt-24">
                    <h2 className="text-2xl font-semibold tracking-tight mb-8">Ongoing Support</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {pricing.retainers.map((r) => (
                            <div key={r.type} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                                <div className="text-lg font-medium text-white">{r.type}</div>
                                <div className="mt-2 text-xl font-semibold text-accent">{r.range}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Payment structure */}
                <section className="mt-24 glass-card">
                    <h2 className="text-2xl font-semibold tracking-tight mb-6">Payment Structure</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pricing.paymentStructure.map((p) => (
                            <li key={p} className="flex gap-4 items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                <span className="text-foreground-secondary">{p}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* CTA */}
                <FinalCTA
                    headline="Ready to discuss your project?"
                    body="If these ranges align with your expectations, the next step is to share a few details."
                    primary={{ label: pricing.finalCta.label, href: pricing.finalCta.href }}
                    secondary={{ label: "View Services", href: "/services" }}
                />
            </Container>
        </main>
    );
}
