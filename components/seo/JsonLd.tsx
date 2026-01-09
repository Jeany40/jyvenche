/**
 * JSON-LD Structured Data Component
 * 
 * Provides structured data for SEO enhancement.
 * https://schema.org/Organization
 */

export function OrganizationSchema() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Jyvenche",
        "description": "Premium digital product studio specializing in web development, design systems, and product strategy.",
        "url": "https://jyvenche.com",
        "logo": "https://jyvenche.com/logo-premium.png",
        "sameAs": [],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "hello@jyvenche.com",
            "contactType": "customer service"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}

export function WebsiteSchema() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Jyvenche",
        "url": "https://jyvenche.com",
        "description": "Premium digital experiences for discerning clients."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}

export function ServiceSchema({
    name,
    description
}: {
    name: string;
    description: string;
}) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "provider": {
            "@type": "Organization",
            "name": "Jyvenche"
        },
        "name": name,
        "description": description
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
