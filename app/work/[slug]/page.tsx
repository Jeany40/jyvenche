import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import CaseStudyHeader from '@/components/sections/CaseStudyHeader'
import FinalCTA from '@/components/sections/FinalCTA'
import { getCaseStudyBySlug, allCaseStudies } from '@/lib/caseStudies'

/**
 * Generate static params for all case studies.
 */
export function generateStaticParams() {
    return allCaseStudies.map((cs) => ({
        slug: cs.slug,
    }))
}

/**
 * Generate metadata for individual case study pages.
 */
export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const caseStudy = getCaseStudyBySlug(slug)

    if (!caseStudy) {
        return { title: 'Not Found' }
    }

    return {
        title: `${caseStudy.title} | Work`,
        description: caseStudy.summary,
    }
}

/**
 * Section component for text content
 */
function TextSection({ title, body }: { title: string; body: string }) {
    return (
        <section className="py-12 border-t border-white/10">
            <div className="max-w-3xl">
                <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                    {title}
                </h2>
                <p className="text-white/70 leading-relaxed text-lg whitespace-pre-line">
                    {body}
                </p>
            </div>
        </section>
    )
}

/**
 * Section component for bullet lists
 */
function BulletSection({ title, bullets }: { title: string; bullets: string[] }) {
    return (
        <section className="py-12 border-t border-white/10">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center text-sm font-semibold text-accent/70 group-hover:text-accent group-hover:border-accent/40 transition-colors">
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-white/70 text-sm leading-relaxed pt-2">
                            {bullet}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

/**
 * Section for approach (simpler list)
 */
function ApproachSection({ bullets }: { bullets: string[] }) {
    return (
        <section className="py-12 border-t border-white/10">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">
                Approach
            </h2>
            <ul className="space-y-4 max-w-3xl">
                {bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span className="text-accent/60 mt-1">→</span>
                        <span className="text-white/70 leading-relaxed">{bullet}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

/**
 * Section for technical notes (tag style)
 */
function TechnicalNotesSection({ bullets }: { bullets: string[] }) {
    return (
        <section className="py-12 border-t border-white/10">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">
                Technical Notes
            </h2>
            <div className="flex flex-wrap gap-3">
                {bullets.map((tech) => (
                    <span
                        key={tech}
                        className="px-4 py-2 rounded-lg border border-white/10 text-white/70 text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </section>
    )
}

/**
 * Section for outcomes
 */
function OutcomesSection({ bullets }: { bullets: string[] }) {
    return (
        <section className="py-12 border-t border-white/10">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">
                Outcomes
            </h2>
            <ul className="space-y-4 max-w-3xl">
                {bullets.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-white/70 leading-relaxed">{outcome}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

/**
 * Gallery section
 */
function GallerySection({ items }: { items: Array<{ src: string; alt: string; caption?: string }> }) {
    if (!items || items.length === 0) return null

    return (
        <section className="py-12 border-t border-white/10">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">
                Gallery
            </h2>
            <div className="space-y-8">
                {items.map((item, i) => (
                    <figure key={i} className="max-w-5xl">
                        <div className="rounded-xl border border-white/10 bg-black/50 overflow-hidden shadow-2xl">
                            {/* Browser Header */}
                            <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                            </div>
                            {/* Image Container */}
                            <div className="relative aspect-video bg-white/5 flex items-center justify-center">
                                {/* Placeholder for screenshot */}
                                <div className="text-white/30 text-sm">[Screenshot: {item.alt}]</div>
                            </div>
                        </div>
                        {item.caption && (
                            <figcaption className="mt-4 text-sm text-white/40 italic">
                                {item.caption}
                            </figcaption>
                        )}
                    </figure>
                ))}
            </div>
        </section>
    )
}

export default async function CaseStudyPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const caseStudy = getCaseStudyBySlug(slug)

    if (!caseStudy) {
        notFound()
    }

    return (
        <main className="bg-black text-white min-h-screen">
            <Container className="pb-16">

                {/* Header */}
                <CaseStudyHeader
                    title={caseStudy.title}
                    label={caseStudy.label}
                    summary={caseStudy.summary}
                    badge={caseStudy.meta?.status}
                    liveUrl={caseStudy.links?.live}
                />

                {/* Part Of Parent Link (custom for now since it's specific) */}
                {caseStudy.meta?.partOf && (
                    <div className="mt-6 mb-12">
                        <Link
                            href="/work/fondamantal"
                            className="text-sm text-white/50 hover:text-white transition"
                        >
                            ← Part of {caseStudy.meta.partOf}
                        </Link>
                    </div>
                )}

                {/* Meta Grid */}
                {caseStudy.meta && (
                    <div className="mt-10 py-8 border-y border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <div className="text-xs uppercase tracking-wider text-white/40 mb-2">Role</div>
                            <div className="text-sm text-white/80">{caseStudy.meta.role?.join(', ')}</div>
                        </div>
                        <div>
                            <div className="text-xs uppercase tracking-wider text-white/40 mb-2">Status</div>
                            <div className="text-sm text-white/80">{caseStudy.meta.status}</div>
                        </div>
                    </div>
                )}

                {/* Platform Breakdown (Fondamantal) */}
                {caseStudy.platformBreakdown && (
                    <section className="py-12">
                        <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">
                            Platform Ecosystem
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {caseStudy.platformBreakdown.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="group block rounded-xl border border-white/10 p-6 hover:bg-white/5 transition"
                                >
                                    <span className="font-semibold text-white group-hover:text-white">
                                        {item.title}
                                    </span>
                                    <div className="mt-1 text-sm text-white/50">View System →</div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Content Sections - New Flat Structure */}
                <div className="mt-8">
                    {/* Overview */}
                    <TextSection title="Overview" body={caseStudy.overview} />

                    {/* Problem */}
                    <TextSection title="The Problem" body={caseStudy.problem} />

                    {/* Approach */}
                    <ApproachSection bullets={caseStudy.approach} />

                    {/* Key Features */}
                    <BulletSection title="Key Features" bullets={caseStudy.keyFeatures} />

                    {/* Technical Notes */}
                    <TechnicalNotesSection bullets={caseStudy.technicalNotes} />

                    {/* Outcomes */}
                    <OutcomesSection bullets={caseStudy.outcomes} />

                    {/* Gallery */}
                    {caseStudy.gallery && <GallerySection items={caseStudy.gallery} />}
                </div>

                {/* Final CTA */}
                <FinalCTA
                    headline={caseStudy.cta.headline}
                    body={caseStudy.cta.body}
                    primary={{ label: caseStudy.cta.label || "Contact Me", href: caseStudy.cta.href }}
                />

            </Container>
        </main>
    )
}
