import Container from "@/components/layout/Container";

export default function PrivacyPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Container className="pt-64 pb-20 sm:pt-72">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>

                <div className="prose prose-invert prose-lg max-w-none text-foreground-secondary">
                    <p>Last updated: January 2026</p>

                    <h2 className="text-white mt-12 mb-6 text-xl font-semibold">1. Introduction</h2>
                    <p>
                        Jyvenche ("we", "our", or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
                    </p>

                    <h2 className="text-white mt-12 mb-6 text-xl font-semibold">2. Information We Collect</h2>
                    <p>
                        We may collect personal information such as your name, email address, company name, and project details when you submit inquiries through our contact forms. We also use analytics tools to collect non-personal usage data to improve our user experience.
                    </p>

                    <h2 className="text-white mt-12 mb-6 text-xl font-semibold">3. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Respond to your inquiries and provide requested services.</li>
                        <li>Send administrative information, such as updates, security alerts, and support messages.</li>
                        <li>Improve and optimize our website and services.</li>
                    </ul>

                    <h2 className="text-white mt-12 mb-6 text-xl font-semibold">4. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                    </p>

                    <h2 className="text-white mt-12 mb-6 text-xl font-semibold">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at hello@jyvenche.com.
                    </p>
                </div>
            </Container>
        </main>
    );
}
