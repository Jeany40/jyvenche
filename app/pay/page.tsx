// app/pay/page.tsx
// Pay Invoice route: uses content/pages/pay-invoice.json and a Stripe Pay Link URL.
// Hint: Read the URL from an env-backed constant so you never hardcode it.

import Container from "@/components/layout/Container";
import Link from "next/link";

import pay from "@/content/pages/pay-invoice.json";

// Hint: Create lib/constants.ts and export STRIPE_PAY_LINK_URL from process.env.
import { STRIPE_PAY_LINK_URL } from "@/lib/constants";

export default function PayInvoicePage() {
    const hasPayLink = Boolean(STRIPE_PAY_LINK_URL);

    return (
        <main className="bg-black text-white min-h-screen">
            <Container className="pt-64 pb-16 sm:pt-72">
                {/* Page header */}
                <header>
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                        {pay.title}
                    </h1>
                    <p className="mt-3 max-w-3xl text-sm text-white/70">{pay.intro}</p>
                </header>

                {/* Sections */}
                <div className="mt-10 space-y-6">
                    {pay.sections.map((s) => (
                        <section key={s.title} className="rounded-2xl border border-white/10 p-6">
                            <h2 className="text-lg font-semibold">{s.title}</h2>

                            {/* Some sections have body; some have bullets */}
                            {s.body ? <p className="mt-2 text-sm text-white/70">{s.body}</p> : null}

                            {s.bullets?.length ? (
                                <ul className="mt-3 space-y-2 text-sm text-white/70 list-none">
                                    {s.bullets.map((b) => (
                                        <li key={b} className="flex gap-2">
                                            <span className="text-white/40">•</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </section>
                    ))}
                </div>

                {/* Pay button */}
                <div className="mt-10 flex flex-col items-start gap-8">
                    {hasPayLink ? (
                        <Link
                            href={STRIPE_PAY_LINK_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold bg-white text-black hover:opacity-90 transition"
                        >
                            Pay Invoice
                        </Link>
                    ) : (
                        <p className="text-sm text-white/60">
                            Payment link is not configured. Request an invoice link by email.
                        </p>
                    )}

                    <div className="flex items-center gap-3 text-sm text-white/50">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Need help? <a href="mailto:hello@jyvenche.com" className="text-white hover:underline">hello@jyvenche.com</a></span>
                    </div>
                </div>
            </Container>
        </main>
    );
}
