// types/content.ts
// Centralized prop/type definitions for all content-driven sections.
// Keeping types here prevents prop drift across components.

export type Link = {
    label: string;
    href: string;
};

export type SimpleCta = {
    label: string;
    href: string;
};

export type BulletSection = {
    title: string;
    body?: string;
    bullets?: string[];
};

export type Step = {
    title: string;
    body: string;
};

export type CaseStudyMeta = {
    role?: string[];
    status?: string;
    partOf?: string;
};

export type CaseStudyLinkMap = {
    live?: string;
};

export type CaseStudySection =
    | { type: "overview" | "problem" | "solution" | "outcome" | "takeaway"; title: string; body: string }
    | { type: "features" | "stack"; title: string; bullets: string[] };

export type CaseStudyCta = {
    headline: string;
    body: string;
    label: string;
    href: string;
};

export type CaseStudy = {
    slug: string;
    title: string;
    label: string;
    summary: string;
    links?: CaseStudyLinkMap;
    meta?: CaseStudyMeta;
    platformBreakdown?: Array<{ title: string; href: string }>;
    sections: CaseStudySection[];
    cta: CaseStudyCta;
};

export type ContainerProps = {
    // Children content inside a centered max-width wrapper.
    children: React.ReactNode;
    // Optional extra Tailwind classes for layout control.
    className?: string;
};

export type NavItem = {
    label: string;
    href: string;
};

export type NavbarProps = {
    brand: string;          // "Jyvenche"
    items: NavItem[];       // top navigation links
};

export type FooterProps = {
    brand: string;
    // Optional nav links in footer (e.g., Payment Terms, Pay Invoice).
    links: Array<{ label: string; href: string }>;
    // Optional copyright line.
    copyright?: string;
};

export type HomeHeroProps = {
    brand: string;
    headline: string;
    subheadline: string;
    primaryCta: SimpleCta;
    secondaryCta: SimpleCta;
    trustLine?: string;
};

export type WorkSubSystemLink = {
    title: string;
    href: string;
};

export type SelectedWorkCard = {
    title: string;
    label: string;
    summary: string;
    href: string;
};

export type FeaturedSelectedWorkCard = SelectedWorkCard & {
    // Fondamantal sub-system links (Music Library, Album Player, etc.)
    subSystems?: WorkSubSystemLink[];
};

export type SelectedWorkProps = {
    intro: string;
    featured: FeaturedSelectedWorkCard;
    secondary: SelectedWorkCard;
};

export type CredibilityProps = {
    title: string;
    body: string;
    bullets?: string[];
};

export type FinalCTAProps = {
    headline: string;
    body: string;
    primary: SimpleCta;
    secondary?: SimpleCta;
};

export type CaseStudyCardProps = {
    title: string;
    label: string;
    summary: string;
    href: string;        // internal route: /work/[slug]
    // Optional: show a "Featured" badge.
    featured?: boolean;
};

export type CaseStudyHeaderProps = {
    title: string;
    label: string;
    summary?: string;
    // Live link if available.
    liveUrl?: string;
    // Optional: small badge like "Part of Fondamantal Platform".
    badge?: string;
};

export type FormSuccessProps = {
    headline: string;
    body: string;
    // Optional secondary text (e.g., "If aligned, you'll receive a proposal…")
    note?: string;
};

// These props let you customize success copy from start-project.json
export type StartProjectFormProps = {
    successHeadline: string;
    successBody: string;
};

// Data shape your form submits to /api/inquiry
export type StartProjectFormData = {
    fullName: string;
    email: string;
    company: string;
    website: string;
    projectType: string;
    projectDescription: string;
    primaryGoals: string[];
    scopeSize: string;
    budgetRange: string;
    timeline: string;
    decisionReadiness: string;
    companyWebsite: string; // honeypot (must remain empty)
};

// Optional: a simple error map (keyed by field name)
export type StartProjectFormErrors = Partial<Record<keyof StartProjectFormData, string>>;

export type HomeContent = {
    hero: HomeHeroProps;
    selectedWork: SelectedWorkProps;
    credibility: CredibilityProps;
    finalCta: FinalCTAProps;
    // Optional: whatIDo section if you keep it on home
    whatIDo?: {
        intro: string;
        items: Array<{ title: string; points: string[] }>;
    };
};

export type WorkIndexContent = {
    title: string;
    intro: string;
    featured: {
        title: string;
        label: string;
        href: string;
        highlights: string[];
    };
    additional: Array<{
        title: string;
        label: string;
        href: string;
        highlights: string[];
    }>;
    finalCta: {
        headline: string;
        body: string;
        href: string;
    };
};

export type ServicesContent = {
    title: string;
    intro: string;
    services: Array<{
        title: string;
        body: string;
        outcome: string;
    }>;
    process: string[];
    finalCta: { label: string; href: string };
};

export type PricingContent = {
    title: string;
    intro: string;
    minimum: string;
    ranges: Array<{ service: string; range: string }>;
    retainers: Array<{ type: string; range: string }>;
    paymentStructure: string[];
    finalCta: { label: string; href: string };
};

export type AboutContent = {
    title: string;
    intro: string;
    philosophy: string[];
    process: string[];
    fit: {
        goodFor: string[];
        notFor: string[];
    };
    finalCta: { label: string; href: string };
};

export type StartProjectPageContent = {
    title: string;
    intro: string;
    responseTime: string;
    leftColumn: {
        howItWorksTitle: string;
        howItWorksSteps: Array<{ title: string; body: string }>;
        whatIBuildTitle: string;
        whatIBuildBullets: string[];
        budgetTitle: string;
        budgetBullets: string[];
        minimumProject: string;
        timelineTitle: string;
        timelineBullets: string[];
    };
    rightColumn: {
        beforeSubmitTitle: string;
        beforeSubmitBody: string;
        privacyTitle: string;
        privacyBody: string;
    };
    successState: { headline: string; body: string };
    footerNote?: string;
};

export type PaymentTermsContent = {
    title: string;
    intro: string;
    sections: Array<{
        title: string;
        body: string;
        bullets?: string[];
    }>;
};

export type PayInvoiceContent = {
    title: string;
    intro: string;
    sections: Array<{
        title: string;
        body?: string;
        bullets?: string[];
    }>;
};
