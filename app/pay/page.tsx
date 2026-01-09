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
                                <ul className="mt-3 space-y-2 text-sm text-white/70">
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
                <div className="mt-10">
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
                </div>
            </Container>
        </main>
    );
}
