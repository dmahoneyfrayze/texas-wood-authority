import { getAllPosts } from "@/lib/mdx";
import DiscoveryGrid from "@/components/DiscoveryGrid";
import Link from "next/link";
import { Ruler, FileText, BookOpen, Calculator, Download, ShieldCheck } from "lucide-react";

export const metadata = {
    title: "Authority Toolbox | Texas Live Edge Guide",
    description: "Downloadable guides, checklists, and calculators for your custom furniture journey.",
};

export default function ResourcesIndex() {
    const posts = getAllPosts("resources");

    const featuredTools = [
        {
            title: "Table Sizing Calculator",
            desc: "The professional's choice for calculating overhangs, wood thickness, and seating capacity based on room dimensions.",
            icon: <Calculator className="h-8 w-8" />,
            href: "/resources/sizing-tool",
            accent: "blue"
        },
        {
            title: "12-Point Buying Checklist",
            desc: "A field-ready PDF audit to take with you to any DFW showroom. Verify moisture content, surfacing, and stability on the spot.",
            icon: <FileText className="h-8 w-8" />,
            href: "/resources/slab-buying-checklist",
            accent: "amber"
        },
        {
            title: "Technical Glossary",
            desc: "From 'Interlocking Grain' to 'Vacuum Kiln'—master the scientific language used by master fabricators.",
            icon: <BookOpen className="h-8 w-8" />,
            href: "/resources/glossary",
            accent: "emerald"
        }
    ];

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
            {/* Featured Tools Dashboard */}
            <div className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="mb-12 max-w-2xl">
                        <span className="text-amber-700 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">The Authority Dashboard</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-outfit)] text-stone-900 dark:text-stone-50 mb-6">Practical Tools for Professional Projects.</h1>
                        <p className="text-stone-500 text-lg leading-relaxed">
                            Beyond reading, we provide the actual utilities used by designers and architects to ensure heirloom success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredTools.map((tool) => (
                            <Link
                                key={tool.title}
                                href={tool.href}
                                className="group p-8 rounded-[2.5rem] bg-stone-50 dark:bg-stone-800 border border-stone-100 dark:border-stone-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                <div className={`mb-8 inline-flex p-4 rounded-2xl bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-sm group-hover:scale-110 transition-transform`}>
                                    {tool.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-outfit)] group-hover:text-amber-700 transition-colors">{tool.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                                    {tool.desc}
                                </p>
                                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 flex items-center">
                                    Open Tool <Download className="ml-2 h-4 w-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Supplemental Grid */}
            <div className="py-12">
                <DiscoveryGrid
                    title="All Research Files"
                    description="Our extended library of technical documentation and resource guides."
                    posts={posts}
                    category="resources"
                />
            </div>

            {/* Expert Support CTA */}
            <div className="container mx-auto px-4 pb-24 max-w-7xl">
                <div className="p-12 rounded-[3rem] bg-stone-900 text-white relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-noise opacity-20" />
                    <div className="relative z-10">
                        <ShieldCheck className="h-12 w-12 text-amber-500 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-outfit)] mb-4">Request a Specific Utility?</h2>
                        <p className="text-stone-400 max-w-xl mx-auto mb-10 text-lg">
                            If there is a technical checklist, pricing matrix, or design template we haven't built yet, reach out to our research team.
                        </p>
                        <Link href="/contact" className="bg-amber-700 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-bold transition-all inline-block uppercase tracking-widest text-sm">
                            Contact Research Team
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
