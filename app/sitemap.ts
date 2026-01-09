
import { MetadataRoute } from 'next'
import { allCaseStudies } from '@/lib/caseStudies'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jyvenche.com' // Replace with your actual domain

    // Static pages
    const routes = [
        '',
        '/work',
        '/services',
        '/pricing',
        '/about',
        '/start-project',
        '/pay',
        '/payment-terms',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic case studies
    const caseStudies = allCaseStudies.map((cs) => ({
        url: `${baseUrl}/work/${cs.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    return [...routes, ...caseStudies]
}
