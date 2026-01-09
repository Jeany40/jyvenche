/**
 * Payment Terms Page
 * 
 * Wired to JSON content.
 */

import { Metadata } from 'next'
import paymentTerms from '@/content/pages/payment-terms.json'

export const metadata: Metadata = {
    title: paymentTerms.title,
    description: paymentTerms.intro,
}

export default function PaymentTermsPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-64 sm:pt-72 pb-24 border-b border-border">
                <div className="container-custom">
                    <h1 className="text-foreground mb-6">
                        {paymentTerms.title}
                    </h1>
                    <p className="text-xl text-foreground-secondary max-w-3xl leading-relaxed">
                        {paymentTerms.intro}
                    </p>
                </div>
            </section>

            {/* Terms Sections */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl space-y-16">

                        {paymentTerms.sections.map((section, index) => (
                            <div key={section.title}>
                                {index > 0 && <div className="divider mb-16" />}

                                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
                                    {section.title}
                                </h2>

                                <p className="text-foreground-secondary leading-relaxed mb-6">
                                    {section.body}
                                </p>

                                {section.bullets && (
                                    <ul className="space-y-3 text-foreground-secondary">
                                        {section.bullets.map((bullet) => (
                                            <li key={bullet} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}
