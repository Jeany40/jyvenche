/**
 * SEO Utilities
 * 
 * Helper functions for generating metadata and structured data.
 * Used across pages for consistent SEO optimization.
 */

import type { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

// ===========================================
// TYPE DEFINITIONS
// ===========================================

interface PageSEO {
    title: string
    description: string
    path?: string
    image?: string
    noIndex?: boolean
}

// ===========================================
// METADATA GENERATION
// ===========================================

/**
 * Generates Next.js Metadata object for a page.
 * Includes Open Graph and Twitter Card data.
 */
export function generateMetadata({
    title,
    description,
    path = '',
    image,
    noIndex = false,
}: PageSEO): Metadata {
    const url = `https://jyvenche.com${path}`

    return {
        title,
        description,
        openGraph: {
            title: `${title} | ${SITE_CONFIG.name}`,
            description,
            url,
            siteName: SITE_CONFIG.name,
            type: 'website',
            ...(image && { images: [{ url: image, width: 1200, height: 630 }] }),
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | ${SITE_CONFIG.name}`,
            description,
            ...(image && { images: [image] }),
        },
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    }
}

/**
 * Generates JSON-LD structured data for organization.
 * Include in head of homepage for search engine rich results.
 */
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: 'https://jyvenche.com',
        email: SITE_CONFIG.email,
        address: {
            '@type': 'PostalAddress',
            addressLocality: SITE_CONFIG.location,
            addressCountry: 'US',
        },
    }
}

/**
 * Generates JSON-LD structured data for a service.
 * Use on service detail pages.
 */
export function generateServiceSchema(service: {
    name: string
    description: string
    url: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
        },
        url: service.url,
    }
}

/**
 * Generates JSON-LD structured data for a case study/project.
 * Use on work detail pages.
 */
export function generateProjectSchema(project: {
    name: string
    description: string
    url: string
    image?: string
    datePublished?: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.name,
        description: project.description,
        url: project.url,
        creator: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
        },
        ...(project.image && { image: project.image }),
        ...(project.datePublished && { datePublished: project.datePublished }),
    }
}
