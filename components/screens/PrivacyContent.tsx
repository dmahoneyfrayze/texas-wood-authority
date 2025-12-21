"use client";

import { motion } from "framer-motion";

export function PrivacyContent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen pt-32 pb-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold font-[family-name:var(--font-outfit)] mb-4 text-stone-900 dark:text-stone-50">
                        Privacy Policy
                    </h1>
                    <p className="text-stone-500 text-sm italic">Last Updated: December 17, 2025</p>
                </div>

                <div className="prose prose-stone prose-lg dark:prose-invert max-w-none prose-headings:font-[family-name:var(--font-outfit)]">
                    <p>
                        At the Texas Wood Authority (Kovara), we prioritize the protection of your intellectual property and personal data. This policy outlines how we handle information gathered through our authority guides, interactive tools, and consultation requests.
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect information transparently and only when necessary for providing expert services:
                    </p>
                    <ul>
                        <li><strong>Identifiable Information:</strong> Name and email address when you sign up for technical alerts or submit a consultation request.</li>
                        <li><strong>Project Specifications:</strong> Dimensions, wood species preferences, and environmental data provided during sizing calculations or commission inquiries.</li>
                        <li><strong>Technical Insights:</strong> Any expertise or case studies submitted for community review.</li>
                    </ul>

                    <h2>2. Usage of Data</h2>
                    <p>
                        Your data is used strictly for technical performance and advisory purposes:
                    </p>
                    <ul>
                        <li>To refine our interactive sizing algorithms based on real-world space planning data.</li>
                        <li>To provide accurate maintenance schedules for your specific wood species and climate.</li>
                        <li>To verify the credentials of expert community contributors.</li>
                    </ul>

                    <h2>3. Data Protection</h2>
                    <p>
                        We implement industry-standard security protocols to protect against unauthorized access. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, so long as those parties agree to keep this information confidential.
                    </p>

                    <h2>4. Cookies & Analytics</h2>
                    <p>
                        We use minimal cookies to enhance your experience with our interactive tools (e.g., saving your calculator progress). We also use anonymous analytics to understand which technical guides are most valuable to our community.
                    </p>

                    <h2>5. Your Rights</h2>
                    <p>
                        You may request a copy of the data we hold regarding your project inquiries or request the deletion of your record from our expert registry at any time by contacting <strong>privacy@texasliveedgeguide.com</strong>.
                    </p>

                    <h2>6. Consent</h2>
                    <p>
                        By using our authority guides and tools, you consent to this privacy policy.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
