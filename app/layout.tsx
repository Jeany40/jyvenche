/**
 * Root Layout
 * 
 * Provides the base HTML structure for the entire application.
 * Includes global metadata, fonts, and shared layout components.
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'
import { OrganizationSchema, WebsiteSchema } from '@/components/seo/JsonLd'

// Initialize Inter font with Latin subset
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

// Navigation configuration
const navItems = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Start Project', href: '/start-project' },
]

const footerLinks = [
    { label: 'Client Portal', href: '/client-portal' },
    { label: 'Payment Terms', href: '/payment-terms' },
    { label: 'Pay Invoice', href: '/pay' },
]

// Global metadata for SEO
export const metadata: Metadata = {
    title: {
        default: 'Jyvenche | Digital Product Studio',
        template: '%s | Jyvenche',
    },
    description: 'Premium digital experiences for discerning clients. Web development, design systems, and product strategy.',
    keywords: ['web development', 'digital studio', 'product design', 'next.js', 'react'],
    authors: [{ name: 'Jyvenche' }],
    creator: 'Jyvenche',
    icons: {
        icon: '/logo-premium.png',
        apple: '/logo-premium.png',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: 'Jyvenche',
        title: 'Jyvenche | Digital Product Studio',
        description: 'Premium digital experiences for discerning clients.',
        images: [
            {
                url: '/og.jpg',
                width: 1200,
                height: 630,
                alt: 'Jyvenche | Digital Product Studio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jyvenche | Digital Product Studio',
        description: 'Premium digital experiences for discerning clients.',
        images: ['/og.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
}

/**
 * RootLayout Component
 * 
 * Wraps all pages with consistent header, footer, and styling.
 * Now passes configuration props to layout components.
 */
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <OrganizationSchema />
                <WebsiteSchema />
            </head>
            <body className="min-h-screen flex flex-col bg-background text-foreground antialiased" suppressHydrationWarning>
                {/* Navigation header */}
                <Navbar
                    brand="Jyvenche"
                    items={navItems}
                />

                {/* Main content area - grows to fill available space */}
                <main className="flex-1">
                    {children}
                </main>

                {/* Footer with links */}
                <Footer
                    brand="Jyvenche"
                    links={footerLinks}
                />
                <Analytics />
            </body>
        </html>
    )
}
