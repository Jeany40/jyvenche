import Container from "@/components/layout/Container";

export default function TermsPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Container className="pt-64 pb-20 sm:pt-72">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>

                <div className="prose prose-invert prose-lg max-w-none text-foreground-secondary">
                    <p>Last updated: January 2026</p>

                    <h2 className="text-white mt-12 mb-6 text-xl font-semibold">1. Agreement to Terms</h2>
                    <p>
                        By accessing or using the website operated by Jyvenche, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
                    </p>

                    <h2 className="text-white mt-12 mb-6 text-xl font-semibold">2. Intellectual Property</h2>
                    <p>
                        The content, features, and functionality of this website, including but not limited to design, code, text, graphics, and logos, are the exclusive property of Jyvenche and are protected by copyright, trademark, and other intellectual property laws.
                    </p>

                    <h2 className="text-white mt-12 mb-6 text-xl font-semibold">3. User Conduct</h2>
                    <p>
                        You agree not to use the website for any unlawful purpose or in any way that could damage, disable, overburden, or impair the site. You must not attempt to gain unauthorized access to any part of the website or its related systems.
                    </p>

                    <h2 className="text-white mt-12 mb-6 text-xl font-semibold">4. Limitation of Liability</h2>
                    <p>
                        In no event shall Jyvenche be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or services.
                    </p>

                    <h2 className="text-white mt-12 mb-6 text-xl font-semibold">5. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify or replace these Terms at any time. Your continued use of the website after any such changes constitutes your acceptance of the new Terms.
                    </p>
                </div>
            </Container>
        </main>
    );
}
