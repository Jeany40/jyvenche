// lib/constants.ts
// Central place for environment-backed constants.
// Keep defaults safe so the UI can render even when env vars are missing.

/**
 * Stripe Pay Link (or Stripe invoice payment URL)
 * - Set this in .env.local as STRIPE_PAY_LINK_URL="https://..."
 * - If missing, the Pay page should show a fallback message instead of a broken button.
 */
export const STRIPE_PAY_LINK_URL: string = process.env.STRIPE_PAY_LINK_URL ?? "";

/**
 * API Rate Limits
 */
export const RATE_LIMIT = {
    WINDOW_MS: 60 * 60 * 1000, // 1 hour
    MAX_REQUESTS: 5            // 5 requests per hour per IP
};

/**
 * Site Configuration
 * - Used for SEO and general metadata.
 */
export const SITE_CONFIG = {
    name: "Jyvenche",
    title: "Jyvenche | Digital Product Studio",
    description: "Premium digital experiences for discerning clients. Web development, design systems, and product strategy.",
    url: "https://jyvenche.com",
    email: "hello@jyvenche.com",
    location: "New York, NY",
    ogImage: "https://jyvenche.com/og.jpg",
};
