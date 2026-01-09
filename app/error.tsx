
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="bg-black text-white min-h-screen flex items-center justify-center">
            <Container>
                <div className="flex flex-col items-center text-center max-w-lg mx-auto py-20">
                    <h2 className="text-4xl font-bold tracking-tight mb-6">Something went wrong!</h2>
                    <p className="text-lg text-white/60 mb-8">
                        An unexpected error has occurred. We apologize for the inconvenience.
                    </p>
                    <div className="flex gap-4">
                        <button
                            onClick={reset}
                            className="bg-white text-black px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors"
                        >
                            Try again
                        </button>
                        <Link
                            href="/"
                            className="border border-white/20 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
                        >
                            Return Home
                        </Link>
                    </div>
                </div>
            </Container>
        </main>
    );
}
