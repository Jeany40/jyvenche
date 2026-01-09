// app/page.tsx
// Home route that renders content from content/pages/home.json.
// Keep route files thin: import content, pass props to components.

import Container from "@/components/layout/Container";
import HomeHero from "@/components/sections/HomeHero";
import SelectedWork from "@/components/sections/SelectedWork";
import Credibility from "@/components/sections/Credibility";
import FinalCTA from "@/components/sections/FinalCTA";

// Hint: JSON imports work in Next.js when resolveJsonModule is enabled in tsconfig.
import home from "@/content/pages/home.json";

export default function HomePage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Container className="pb-16">
                {/* Hero */}
                <HomeHero
                    brand={home.hero.brand}
                    headline={home.hero.headline}
                    subheadline={home.hero.subheadline}
                    primaryCta={home.hero.primaryCta}
                    secondaryCta={home.hero.secondaryCta}
                    trustLine={home.hero.trustLine}
                />

                {/* Work preview */}
                <SelectedWork
                    intro={home.selectedWork.intro}
                    featured={home.selectedWork.featured}
                    secondary={home.selectedWork.secondary}
                />

                {/* Credibility block */}
                <Credibility
                    title={home.credibility.title}
                    body={home.credibility.body}
                    bullets={home.credibility.bullets}
                />

                {/* Closing CTA */}
                <FinalCTA
                    headline={home.finalCta.headline}
                    body={home.finalCta.body}
                    primary={home.finalCta.primary}
                    secondary={home.finalCta.secondary}
                />
            </Container>
        </main>
    );
}
