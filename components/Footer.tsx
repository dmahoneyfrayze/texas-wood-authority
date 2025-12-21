import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-stone-100 py-16 dark:border-stone-800 dark:bg-stone-900 bg-noise">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand & Mission */}
                    <div className="flex flex-col space-y-6">
                        <span className="text-xl md:text-2xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
                            LIVEEDGE<span className="text-stone-500 font-normal">GUIDE</span>
                        </span>
                        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-medium">
                            The independent authority on sustainable live edge woodworking, design, and care in the Lone Star State. Built for owners who value heirloom quality.
                        </p>
                        <div className="flex flex-col space-y-2 text-xs text-stone-500">
                            <p className="font-bold uppercase tracking-widest text-stone-700 dark:text-stone-300">Certified Workshop</p>
                            <p>Kovara — Arlington, TX</p>
                            <a href="mailto:hello@liveedgeguide.com" className="hover:text-amber-700 transition-colors">hello@liveedgeguide.com</a>
                        </div>
                    </div>

                    {/* Technical Roadmap */}
                    <div>
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-stone-900 dark:text-stone-100">
                            Technical Roadmap
                        </h3>
                        <ul className="space-y-4 text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                            <li><Link href="/guides/the-ultimate-live-edge-wood-guide" className="hover:text-amber-700 transition-colors">The Ultimate Guide</Link></li>
                            <li><Link href="/process/how-live-edge-tables-are-made" className="hover:text-amber-700 transition-colors">Fabrication Process</Link></li>
                            <li><Link href="/guides/parota-wood-pros-cons-use-cases" className="hover:text-amber-700 transition-colors">Parota Deep-Dive</Link></li>
                            <li><Link href="/guides/live-edge-vs-epoxy-tables" className="hover:text-amber-700 transition-colors">Epoxy vs. Natural</Link></li>
                            <li><Link href="/guides/the-waterfall-edge-mastering-grain-flow" className="hover:text-amber-700 transition-colors">Waterfall Joinery</Link></li>
                            <li><Link href="/guides/beyond-tables-creative-uses-for-live-edge" className="hover:text-amber-700 transition-colors">Beyond Tables</Link></li>
                            <li><Link href="/guides/finding-your-shape-slab-profiles-and-space-planning" className="hover:text-amber-700 transition-colors">Slab Profiles</Link></li>
                        </ul>
                    </div>

                    {/* DFW Local Intel */}
                    <div>
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-stone-900 dark:text-stone-100">
                            DFW Local Intel
                        </h3>
                        <ul className="space-y-4 text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                            <li><Link href="/guides/top-5-live-edge-table-makers-dallas" className="hover:text-amber-700 transition-colors">Top 5 Makers Audit</Link></li>
                            <li><Link href="/guides/where-to-buy-live-edge-slabs-dallas-fort-worth" className="hover:text-amber-700 transition-colors">Slab Sourcing Guide</Link></li>
                            <li><Link href="/guides/texas-pecan-deep-dive" className="hover:text-amber-700 transition-colors">Texas Pecan Analysis</Link></li>
                            <li><Link href="/guides/live-edge-table-pricing-guide-2025" className="hover:text-amber-700 transition-colors">2025 Pricing Matrix</Link></li>
                            <li><Link href="/resources/sizing-tool" className="hover:text-amber-700 transition-colors">Sizing Calculator</Link></li>
                        </ul>
                    </div>

                    {/* Lead Capture */}
                    <NewsletterForm />
                </div>

                <div className="mt-16 border-t border-stone-200 pt-8 dark:border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] font-bold">
                        &copy; {new Date().getFullYear()} Live Edge Guide. Built for Authority.
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] text-stone-400 uppercase tracking-[0.2em] font-bold">
                        <Link href="/about-kovara" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Expertise</Link>
                        <Link href="/contact" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Inquiries</Link>
                        <Link href="/privacy" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Privacy</Link>
                        <Link href="/resources/glossary" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Terms</Link>
                        <Link href="https://shopkovara.com" className="hover:text-amber-700 transition-colors">Shop Slabs</Link>
                        <Link href="https://urbisconcepts.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors">Live Edge Canada</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
