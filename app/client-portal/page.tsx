"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ClientPortalPage() {
    const [accessCode, setAccessCode] = useState("");
    const [error, setError] = useState(false);

    const handleAccess = (e: React.FormEvent) => {
        e.preventDefault();
        // Option B: Placeholder for access code redirection
        // In a real implementation, this would look up the code in a DB and redirect to the Notion URL.
        if (accessCode.toUpperCase() === "DEMO2026") {
            window.location.href = "https://notion.so"; // Placeholder
        } else {
            setError(true);
            setTimeout(() => setError(false), 3000);
        }
    };

    return (
        <main className="bg-black text-white min-h-screen flex items-center">
            <Container className="pt-64 pb-20 sm:pt-72 flex justify-center">
                <div className="max-w-md w-full animate-fade-in text-center">
                    <div className="inline-block p-3 rounded-2xl bg-accent/10 border border-accent/20 mb-8">
                        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>

                    <h1 className="text-4xl font-serif text-white mb-4">Client Portal</h1>
                    <p className="text-lg text-white/60 mb-10 leading-relaxed">
                        Secure access to your project roadmap, deliverables, and communication hub.
                    </p>

                    <form onSubmit={handleAccess} className="glass-card text-left">
                        <label className="input-label">Project Access Code</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter code"
                                value={accessCode}
                                onChange={(e) => setAccessCode(e.target.value)}
                                className={`input-field pr-12 ${error ? "border-red-500/50 ring-1 ring-red-500/20" : ""}`}
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 bottom-2 px-3 rounded-lg bg-accent text-background hover:bg-accent-hover transition-colors"
                            >
                                <ArrowRightIcon className="w-5 h-5 font-bold" />
                            </button>
                        </div>
                        {error && (
                            <p className="mt-3 text-xs text-red-400 flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-red-400" />
                                Invalid or expired access code.
                            </p>
                        )}
                        <p className="mt-6 text-xs text-white/40 leading-relaxed">
                            Access is provided upon project commencement.
                            If you’ve lost your code, please <a href="mailto:hello@jyvenche.com" className="text-accent hover:underline">contact the studio</a>.
                        </p>
                    </form>

                    <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-2 gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* Option A: Informational section */}
                        <div className="text-left">
                            <h3 className="text-xs uppercase tracking-widest text-white/60 mb-2">Features</h3>
                            <ul className="text-xs text-white/40 space-y-2 list-none">
                                <li className="flex gap-2 items-center"><span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />Live Project Roadmap</li>
                                <li className="flex gap-2 items-center"><span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />Deliverable Approvals</li>
                            </ul>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xs uppercase tracking-widest text-white/60 mb-2">Management</h3>
                            <ul className="text-xs text-white/40 space-y-2 list-none">
                                <li className="flex gap-2 items-center"><span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />Unified Invoice Archive</li>
                                <li className="flex gap-2 items-center"><span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />Asset Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
