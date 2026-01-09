/**
 * WhatIDo Component
 * 
 * Displays capabilities in Design, Development, Delivery.
 */

interface CapabilityItem {
    title: string
    points: string[]
}

interface WhatIDoData {
    intro: string
    items: CapabilityItem[]
}

interface WhatIDoProps {
    data: WhatIDoData
}

export default function WhatIDo({ data }: WhatIDoProps) {
    return (
        <section className="section-padding border-b border-border bg-background-secondary">
            <div className="container-custom">

                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                    What I Do
                </h2>

                <p className="text-foreground-secondary mb-12 max-w-2xl">
                    {data.intro}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.items.map((item) => (
                        <div key={item.title} className="card p-8">
                            <h3 className="text-lg font-semibold text-foreground mb-4">
                                {item.title}
                            </h3>
                            <ul className="space-y-3">
                                {item.points.map((point) => (
                                    <li key={point} className="flex items-start gap-3 text-foreground-secondary text-sm">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
