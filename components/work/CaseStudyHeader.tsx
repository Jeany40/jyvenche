/**
 * CaseStudyHeader Component
 * 
 * Header section for individual case study pages.
 * Displays project title, client, category, and year.
 */

interface CaseStudyHeaderProps {
    title: string
    client: string
    category: string
    year: string
    overview: string
}

export default function CaseStudyHeader({
    title,
    client,
    category,
    year,
    overview,
}: CaseStudyHeaderProps) {
    return (
        <header className="section-padding border-b border-border">
            <div className="container-custom">

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="text-accent text-sm uppercase tracking-wider">
                        {category}
                    </span>
                    <span className="text-foreground-muted">•</span>
                    <span className="text-foreground-secondary text-sm">
                        {client}
                    </span>
                    <span className="text-foreground-muted">•</span>
                    <span className="text-foreground-secondary text-sm">
                        {year}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-foreground mb-8">
                    {title}
                </h1>

                {/* Overview */}
                <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed max-w-3xl">
                    {overview}
                </p>

            </div>
        </header>
    )
}
