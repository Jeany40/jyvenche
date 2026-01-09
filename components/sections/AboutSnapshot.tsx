/**
 * AboutSnapshot Component
 * 
 * Brief about section for the homepage.
 * Links to full about page.
 */

import Link from 'next/link'

export default function AboutSnapshot() {
    return (
        <section className="section-padding">
            <div className="container-custom">

                <div className="max-w-3xl">

                    <p className="text-accent text-sm font-medium uppercase tracking-widest mb-4">
                        About Jyvenche
                    </p>

                    <p className="text-xl text-foreground-secondary leading-relaxed mb-8">
                        Jyvenche is a freelance development studio focused on building modern
                        web experiences with a product mindset. I prioritize structure first—so
                        the design looks intentional, the build stays maintainable, and the
                        platform can grow without rewriting everything.
                    </p>

                    <Link
                        href="/about"
                        className="inline-block text-foreground hover:text-accent transition-colors duration-300"
                    >
                        Learn More →
                    </Link>

                </div>

            </div>
        </section>
    )
}
