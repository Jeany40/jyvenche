// app/work/page.tsx
// Work index route: uses work.json for page copy + case study JSON for cards.

import Container from "@/components/layout/Container";
import CaseStudyCard from "@/components/cards/CaseStudyCard";
import FinalCTA from "@/components/sections/FinalCTA";

import work from "@/content/pages/work.json";

// Hint: Import case studies directly (simple and reliable for small portfolios).
import fondamantal from "@/content/case-studies/fondamantal.json";
import blisspointwell from "@/content/case-studies/blisspointwell.json";

export default function WorkPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Container className="pt-64 pb-20 sm:pt-72 animate-fade-in relative">
                {/* Page header */}
                <header>
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{work.title}</h1>
                    <p className="mt-3 max-w-2xl text-sm text-white/70">{work.intro}</p>
                </header>

                {/* Featured case study */}
                <section className="mt-10">
                    <CaseStudyCard
                        title={fondamantal.title}
                        label={fondamantal.label}
                        summary={fondamantal.summary}
                        href={`/work/${fondamantal.slug}`}
                        featured
                    />

                    {/* Hint: show platform breakdown links only for the parent platform case */}
                    {fondamantal.platformBreakdown?.length ? (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {fondamantal.platformBreakdown.map((s) => (
                                <a
                                    key={s.href}
                                    href={s.href}
                                    className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/80 hover:border-white/25 transition"
                                >
                                    {s.title}
                                </a>
                            ))}
                        </div>
                    ) : null}
                </section>

                {/* Additional projects */}
                <section className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <CaseStudyCard
                            title={blisspointwell.title}
                            label={blisspointwell.label}
                            summary={blisspointwell.summary}
                            href={`/work/${blisspointwell.slug}`}
                        />
                    </div>
                </section>

                {/* Final CTA (re-using the home CTA component for consistency) */}
                <FinalCTA
                    headline={work.finalCta.headline}
                    body={work.finalCta.body}
                    primary={{ label: "Start a Project", href: work.finalCta.href }}
                />
            </Container>
        </main>
    );
}
