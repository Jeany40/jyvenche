/**
 * Page Content Registry
 * 
 * Centralized import of all page JSON files.
 */

import home from '@/content/pages/home.json'
import work from '@/content/pages/work.json'
import services from '@/content/pages/services.json'
import pricing from '@/content/pages/pricing.json'
import about from '@/content/pages/about.json'
import startProject from '@/content/pages/start-project.json'
import paymentTerms from '@/content/pages/payment-terms.json'
import payInvoice from '@/content/pages/pay-invoice.json'

// Export all page content
export const pageContent = {
    home,
    work,
    services,
    pricing,
    about,
    startProject,
    paymentTerms,
    payInvoice,
}

// Type exports for each page
export type HomeContent = typeof home
export type WorkContent = typeof work
export type ServicesContent = typeof services
export type PricingContent = typeof pricing
export type AboutContent = typeof about
export type StartProjectContent = typeof startProject
export type PaymentTermsContent = typeof paymentTerms
export type PayInvoiceContent = typeof payInvoice
