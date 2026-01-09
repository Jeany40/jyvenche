// app/services/page.tsx
// Services route: renders content/pages/services.json.
// Modernized with glass cards and enhanced typography.

import Container from "@/components/layout/Container";
import FinalCTA from "@/components/sections/FinalCTA";

import services from "@/content/pages/services.json";

export default function ServicesPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Container className="pt-64 pb-20 sm:pt-72">
                {/* Page header */}
                <header className="animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">
                        {services.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-foreground-secondary leading-relaxed">
                        {services.intro}
                    </p>
                </header>

                {/* Service cards */}
                <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in [animation-delay:200ms]">
                    {services.services.map((s) => (
                        <div key={s.title} className="glass-card hover:border-accent/30 group">
                            <h2 className="text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors">{s.title}</h2>
                            <p className="mt-4 text-white/70 leading-relaxed">{s.body}</p>
                            <div className="mt-6 pt-6 border-t border-white/5">
                                <span className="text-xs uppercase tracking-wider text-white/40 block mb-2">Outcome</span>
                                <p className="text-sm text-white/90 font-medium">{s.outcome}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Process */}
                <section className="mt-24">
                    <h2 className="text-2xl font-semibold tracking-tight mb-8">How the Work Happens</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {services.process.map((step, i) => (
                            <div key={step} className="p-6 rounded-xl border border-white/10 bg-white/[0.02] flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
                                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm font-semibold text-white/60 border border-white/10">
                                    {i + 1}
                                </span>
                                <div className="text-sm font-medium text-white/90">{step}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <FinalCTA
                    headline="Have a project in mind?"
                    body="If you’re looking to build something structured, scalable, and intentional, I’d be happy to review your project."
                    primary={{ label: services.finalCta.label, href: services.finalCta.href }}
                    secondary={{ label: "View Work", href: "/work" }}
                />
            </Container>
        </main>
    );
}
