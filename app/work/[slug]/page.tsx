import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import CaseStudyHeader from '@/components/sections/CaseStudyHeader'
import FinalCTA from '@/components/sections/FinalCTA'
import { getCaseStudyBySlug, allCaseStudies, type CaseStudySection } from '@/lib/caseStudies'

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
 * Section Renderer - renders different section types from JSON
 */
function renderSection(section: CaseStudySection, index: number) {
    // Simple alternation or standard styling
    const isEven = index % 2 === 0

    switch (section.type) {
        case 'overview':
        case 'problem':
        case 'solution':
        case 'outcome':
        case 'takeaway':
            return (
                <section key={index} className="py-12 border-t border-white/10">
                    <div className="max-w-3xl">
                        <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                            {section.title}
                        </h2>
                        <p className="text-white/70 leading-relaxed text-lg whitespace-pre-line">
                            {section.body}
                        </p>
                    </div>
                </section>
            )

        case 'features':
            return (
                <section key={index} className="py-12 border-t border-white/10">
                    <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">
                        {section.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {section.bullets?.map((bullet, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-8 h-8 flex-shrink-0 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/50">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {bullet}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )

        case 'stack':
            return (
                <section key={index} className="py-12 border-t border-white/10">
                    <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">
                        {section.title}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {section.bullets?.map((tech) => (
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

        default:
            return null
    }
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
                            <div className="text-xs uppercase tracking-wider text-white/40 mb-2">Timeline</div>
                            {/* Assuming timeline might be added later, currently mostly status or just reusing role/status */}
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

                {/* Content Sections */}
                <div className="mt-8">
                    {caseStudy.sections.map((section, index) => renderSection(section, index))}
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
