// app/about/page.tsx
// About route: uses content/pages/about.json.
// Modernized with glass cards and consistent layout.

import Container from "@/components/layout/Container";
import FinalCTA from "@/components/sections/FinalCTA";

import about from "@/content/pages/about.json";

export default function AboutPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Container className="pt-64 pb-20 sm:pt-72">
                {/* Page header */}
                <header className="animate-fade-in relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">
                        {about.title}
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg text-foreground-secondary leading-relaxed text-balance">
                        {about.intro}
                    </p>
                </header>

                {/* Philosophy */}
                <section className="mt-20 glass-card animate-fade-in [animation-delay:200ms]">
                    <h2 className="text-2xl font-semibold tracking-tight mb-8">What I Focus On</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none">
                        {about.philosophy.map((p) => (
                            <li key={p} className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/[0.03] transition-colors">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                <span className="text-white/80 leading-relaxed">{p}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Process */}
                <section className="mt-24">
                    <h2 className="text-2xl font-semibold tracking-tight mb-8">How I Work</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {about.process.map((step, i) => (
                            <div key={step} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-center min-h-[140px] hover:border-white/20 transition-all">
                                <div className="text-xs uppercase tracking-wider text-accent mb-2">Step {i + 1}</div>
                                <div className="text-lg font-medium text-white">{step}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Fit */}
                <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-card border-accent/20">
                        <h2 className="text-xl font-semibold tracking-tight text-white mb-6 flex items-center gap-2">
                            <span className="text-accent">✓</span> Good Fit If You Value
                        </h2>
                        <ul className="space-y-4 list-none">
                            {about.fit.goodFor.map((item) => (
                                <li key={item} className="flex gap-4 items-start">
                                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-white/40 flex-shrink-0" />
                                    <span className="text-foreground-secondary">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl border border-white/5 bg-transparent opacity-80 hover:opacity-100 transition-opacity">
                        <h2 className="text-xl font-semibold tracking-tight text-white mb-6 text-white/50">
                            Not a Fit If You Need
                        </h2>
                        <ul className="space-y-4 list-none">
                            {about.fit.notFor.map((item) => (
                                <li key={item} className="flex gap-4 items-start">
                                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-white/10 flex-shrink-0" />
                                    <span className="text-foreground-muted">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <FinalCTA
                    headline="Interested in working together?"
                    body="If you want to approach your build with structure and long-term thinking, I’d be happy to review your project."
                    primary={{ label: about.finalCta.label, href: about.finalCta.href }}
                    secondary={{ label: "View Work", href: "/work" }}
                />
            </Container>
        </main>
    );
}
