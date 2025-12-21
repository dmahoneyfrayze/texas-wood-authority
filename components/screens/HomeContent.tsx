"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Hammer, TreeDeciduous, Ruler, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        }
    }
};

const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

export function HomeContent() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 lg:px-24 bg-stone-950 text-white overflow-hidden bg-noise">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/50 to-stone-950 z-10" />
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-[url('/images/hero-banner---welcome.webp')] bg-cover bg-center"
                />

                <div className="relative z-20 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-flex items-center py-1 px-4 rounded-full bg-amber-900/30 text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-amber-900/50">
                            <ShieldCheck className="h-3 w-3 mr-2" />
                            Research-Based Authority
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] as any }}
                        className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-outfit)] mb-8 tracking-tight leading-[0.9] text-balance"
                    >
                        Build Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-[length:200%_auto] animate-gradient">Heirloom</span> Legacy.
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-2xl text-stone-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        The independent research guide to sourcing, designing, and maintaining <span className="text-stone-100">kiln-dried live edge furniture</span> in the Dallas-Fort Worth area.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <Link
                            href="/guides/the-ultimate-live-edge-wood-guide"
                            className="group relative inline-flex items-center justify-center rounded-full bg-amber-700 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-amber-600 hover:scale-105 shadow-2xl shadow-amber-900/40"
                        >
                            Start the Ultimate Guide
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/resources/sizing-tool"
                            className="inline-flex items-center justify-center rounded-full bg-stone-900/50 backdrop-blur-md px-10 py-5 text-lg font-bold text-stone-300 border border-stone-800 transition-all hover:bg-stone-800 hover:text-white"
                        >
                            Sizing Calculator
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                >
                    <div className="w-6 h-10 rounded-full border-2 border-stone-700 flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 rounded-full bg-amber-700"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Pillar Grid */}
            <section className="py-32 px-6 md:px-12 bg-stone-50 dark:bg-stone-950 relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="text-center mb-20"
                    >
                        <motion.span variants={itemVariants} className="text-amber-700 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Foundational Knowledge</motion.span>
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-outfit)] mb-6 text-stone-900 dark:text-stone-50 tracking-tight text-balance">
                            Master the Craft in Four Steps.
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-xl text-stone-500 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
                            Start with the material and end with your own custom masterpiece. Our research is your roadmap.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 gap-8 lg:gap-10"
                    >
                        {/* Pillar 1: Understanding Wood */}
                        <motion.div variants={itemVariants}>
                            <Link href="/guides/parota-wood-pros-cons-use-cases" className="group relative block bg-white dark:bg-stone-900 rounded-3xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all border border-stone-100 dark:border-stone-800 overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 dark:bg-amber-900/10 rounded-bl-[100px] transition-all group-hover:scale-110 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/20" />
                                <div className="relative z-10">
                                    <div className="mb-8 inline-flex p-4 bg-amber-100/50 dark:bg-amber-900/30 rounded-2xl text-amber-700 dark:text-amber-400">
                                        <TreeDeciduous className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 font-[family-name:var(--font-outfit)] group-hover:text-amber-700 transition-colors">The Material</h3>
                                    <p className="text-stone-500 dark:text-stone-400 mb-8 text-lg leading-relaxed">
                                        Why Parota is the ultimate sustainable exotic. Understanding hardness, moisture, and grain structure.
                                    </p>
                                    <span className="inline-flex items-center text-sm font-bold text-amber-700 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                        View Species Guide <ArrowRight className="ml-2 h-5 w-5" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Pillar 2: The Process */}
                        <motion.div variants={itemVariants}>
                            <Link href="/process/how-live-edge-tables-are-made" className="group relative block bg-white dark:bg-stone-900 rounded-3xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all border border-stone-100 dark:border-stone-800 overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 dark:bg-orange-900/10 rounded-bl-[100px] transition-all group-hover:scale-110 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/20" />
                                <div className="relative z-10">
                                    <div className="mb-8 inline-flex p-4 bg-orange-100/50 dark:bg-orange-900/30 rounded-2xl text-orange-700 dark:text-orange-400">
                                        <Hammer className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 font-[family-name:var(--font-outfit)] group-hover:text-orange-700 transition-colors">The Fabrication</h3>
                                    <p className="text-stone-500 dark:text-stone-400 mb-8 text-lg leading-relaxed">
                                        From raw log to vacuum kiln. Why the "drying and flattening" stage is where your table's life truly begins.
                                    </p>
                                    <span className="inline-flex items-center text-sm font-bold text-orange-700 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                        Explore the Process <ArrowRight className="ml-2 h-5 w-5" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Pillar 3: Design & Sizing */}
                        <motion.div variants={itemVariants}>
                            <Link href="/guides/how-to-choose-the-right-live-edge-table" className="group relative block bg-white dark:bg-stone-900 rounded-3xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all border border-stone-100 dark:border-stone-800 overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/10 rounded-bl-[100px] transition-all group-hover:scale-110 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20" />
                                <div className="relative z-10">
                                    <div className="mb-8 inline-flex p-4 bg-blue-100/50 dark:bg-blue-900/30 rounded-2xl text-blue-700 dark:text-blue-400">
                                        <Ruler className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 font-[family-name:var(--font-outfit)] group-hover:text-blue-700 transition-colors">Design & Selection</h3>
                                    <p className="text-stone-500 dark:text-stone-400 mb-8 text-lg leading-relaxed">
                                        Calculating overhangs, choosing base styles, and finding the perfect slab shape for your floor plan.
                                    </p>
                                    <span className="inline-flex items-center text-sm font-bold text-blue-700 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                        Get Design Advice <ArrowRight className="ml-2 h-5 w-5" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Pillar 4: Comparison */}
                        <motion.div variants={itemVariants}>
                            <Link href="/guides/live-edge-vs-epoxy-tables" className="group relative block bg-white dark:bg-stone-900 rounded-3xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all border border-stone-100 dark:border-stone-800 overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 dark:bg-emerald-900/10 rounded-bl-[100px] transition-all group-hover:scale-110 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/20" />
                                <div className="relative z-10">
                                    <div className="mb-8 inline-flex p-4 bg-emerald-100/50 dark:bg-emerald-900/30 rounded-2xl text-emerald-700 dark:text-emerald-400">
                                        <BookOpen className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 font-[family-name:var(--font-outfit)] group-hover:text-emerald-700 transition-colors">Expert Comparison</h3>
                                    <p className="text-stone-500 dark:text-stone-400 mb-8 text-lg leading-relaxed">
                                        Natural Live Edge vs. Epoxy River Tables. Comparing total cost of ownership and heirloom potential.
                                    </p>
                                    <span className="inline-flex items-center text-sm font-bold text-emerald-700 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                        Compare Styles <ArrowRight className="ml-2 h-5 w-5" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Authority Toolbox Section */}
            <section className="py-24 bg-white dark:bg-stone-900 border-b border-stone-100 dark:border-stone-800">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <Link href="/guides/live-edge-table-pricing-guide-2025" className="group p-10 rounded-[2.5rem] bg-stone-50 dark:bg-stone-800/50 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-all border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-xl">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-4 block">Interactive Tool</span>
                            <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-outfit)] group-hover:text-amber-700 transition-colors">2025 Pricing Matrix</h3>
                            <p className="text-stone-500">Live board-foot pricing analysis for North Texas hardwoods.</p>
                        </Link>
                        <Link href="/resources/slab-buying-checklist" className="group p-10 rounded-[2.5rem] bg-stone-50 dark:bg-stone-800/50 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-all border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-xl">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-4 block">Field Resource</span>
                            <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-outfit)] group-hover:text-amber-700 transition-colors">Buying Checklist</h3>
                            <p className="text-stone-500">The essential 12-point audit to take with you to any DFW showroom.</p>
                        </Link>
                        <Link href="/resources/glossary" className="group p-10 rounded-[2.5rem] bg-stone-50 dark:bg-stone-800/50 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-all border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-xl">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-4 block">Terminology</span>
                            <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-outfit)] group-hover:text-amber-700 transition-colors">Technical Glossary</h3>
                            <p className="text-stone-500">Master the scientific language used by master fabricators.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Local Authority Section */}
            <section className="py-32 px-6 bg-stone-50 dark:bg-stone-950">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-amber-700 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Regional Intelligence</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-outfit)] text-stone-900 dark:text-stone-50 tracking-tight leading-tight">Dallas-Fort Worth Local Intel.</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Link href="/guides/top-5-live-edge-table-makers-dallas" className="relative group overflow-hidden rounded-[2rem] h-[28rem] shadow-xl">
                            <div className="absolute inset-0 bg-[url('/images/blog---workshop-scene.webp')] bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                                <h3 className="text-white text-2xl font-bold font-[family-name:var(--font-outfit)] mb-3">Top 5 DFW Makers Audit</h3>
                                <p className="text-stone-400 text-sm leading-relaxed mb-6">Our independent technical review of local custom workshops.</p>
                                <span className="text-amber-500 font-bold text-xs uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform">Read Audit <ArrowRight className="ml-2 h-4 w-4" /></span>
                            </div>
                        </Link>
                        <Link href="/guides/where-to-buy-live-edge-slabs-dallas-fort-worth" className="relative group overflow-hidden rounded-[2rem] h-[28rem] shadow-xl">
                            <div className="absolute inset-0 bg-[url('/images/blog---raw-lumber-yard.webp')] bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                                <h3 className="text-white text-2xl font-bold font-[family-name:var(--font-outfit)] mb-3">Shop the Slabs</h3>
                                <p className="text-stone-400 text-sm leading-relaxed mb-6">The authority guide to sourcing raw materials in North Texas.</p>
                                <span className="text-amber-500 font-bold text-xs uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform">View Sources <ArrowRight className="ml-2 h-4 w-4" /></span>
                            </div>
                        </Link>
                        <Link href="/guides/texas-pecan-deep-dive" className="relative group overflow-hidden rounded-[2rem] h-[28rem] shadow-xl">
                            <div className="absolute inset-0 bg-[url('/images/blog-header---wood-grain-texture.webp')] bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                                <h3 className="text-white text-2xl font-bold font-[family-name:var(--font-outfit)] mb-3">Texas Pecan Analysis</h3>
                                <p className="text-stone-400 text-sm leading-relaxed mb-6">Why our native state tree remains our #1 recommendation.</p>
                                <span className="text-amber-500 font-bold text-xs uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform">Read Deep Dive <ArrowRight className="ml-2 h-4 w-4" /></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Authority Resources Section */}
            <section className="py-32 px-6 md:px-12 bg-white dark:bg-stone-900 border-y border-stone-100 dark:border-stone-800 overflow-hidden bg-noise">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-outfit)] mb-8 text-stone-900 dark:text-stone-50 leading-tight tracking-tight">
                                Authority Built on <span className="italic">Transparency.</span>
                            </h2>
                            <p className="text-xl text-stone-500 dark:text-stone-400 mb-10 leading-relaxed max-w-xl">
                                We believe the custom furniture industry is plagued by misinformation.
                                Our goal is to provide the data you need to be a confident owner.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Link href="/guides/global-wood-sourcing-and-ethics" className="flex items-center p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/50 hover:bg-white dark:hover:bg-amber-900/10 transition-all group border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-xl hover:-translate-y-1">
                                    <div className="mr-5 p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-700"><TreeDeciduous className="h-6 w-6" /></div>
                                    <div>
                                        <div className="font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 transition-colors">Global Sourcing</div>
                                        <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">Ethics & Origins</div>
                                    </div>
                                </Link>
                                <Link href="/resources/glossary" className="flex items-center p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/50 hover:bg-white dark:hover:bg-orange-900/10 transition-all group border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-xl hover:-translate-y-1">
                                    <div className="mr-5 p-3 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-700"><BookOpen className="h-6 w-6" /></div>
                                    <div>
                                        <div className="font-bold text-stone-900 dark:text-stone-100 group-hover:text-orange-700 transition-colors">Terminology</div>
                                        <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">The Glossary</div>
                                    </div>
                                </Link>
                                <Link href="/resources/sizing-tool" className="flex items-center p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/50 hover:bg-white dark:hover:bg-blue-900/10 transition-all group border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-xl hover:-translate-y-1">
                                    <div className="mr-5 p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-700"><Ruler className="h-6 w-6" /></div>
                                    <div>
                                        <div className="font-bold text-stone-900 dark:text-stone-100 group-hover:text-blue-700 transition-colors">Sizing Calculator</div>
                                        <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">Interactive Tool</div>
                                    </div>
                                </Link>
                                <Link href="/about-kovara" className="flex items-center p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/50 hover:bg-white dark:hover:bg-emerald-900/10 transition-all group border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-xl hover:-translate-y-1">
                                    <div className="mr-5 p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700"><ShieldCheck className="h-6 w-6" /></div>
                                    <div>
                                        <div className="font-bold text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 transition-colors">Our Standards</div>
                                        <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">Editorial Policy</div>
                                    </div>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="aspect-[4/5] md:aspect-square bg-stone-200 dark:bg-stone-800 rounded-[40px] overflow-hidden shadow-2xl relative group">
                                <div className="absolute inset-0 bg-[url('/images/craftsmanship-process.webp')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent z-10" />
                                <div className="absolute bottom-0 left-0 p-12 z-20">
                                    <div className="inline-flex items-center text-amber-500 font-bold tracking-[0.4em] text-xs uppercase mb-4">
                                        <Zap className="h-4 w-4 mr-2" />
                                        Heirloom Standards
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)]">From Seed to Slab.</h3>
                                    <p className="text-stone-400 mb-10 max-w-sm text-lg">
                                        We document the entire journey of our wood. No hidden costs, no unknown origins.
                                    </p>
                                    <Link href="/guides/global-wood-sourcing-and-ethics" className="inline-flex items-center font-bold text-white border-b-2 border-amber-700 pb-2 hover:border-white transition-all">
                                        Learn About Sourcing <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ / Long Tail Section */}
            <section className="py-32 px-6 md:px-12 bg-white dark:bg-stone-950">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-outfit)] mb-6 text-stone-900 dark:text-stone-50 tracking-tight">
                            The Authority Answered.
                        </h2>
                        <p className="text-xl text-stone-500 max-w-2xl mx-auto">Quick insights for common regional questions.</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="space-y-4"
                    >
                        {[
                            { title: "Is Parota wood good for dining tables?", desc: "Durability analysis and scratch resistance.", href: "/guides/is-parota-wood-good-for-dining-tables" },
                            { title: "Does live edge furniture warp?", desc: "Understanding wood movement and kiln drying.", href: "/care/does-live-edge-furniture-warp" },
                            { title: "How thick should a live edge slab be?", desc: "2 inches vs 3 inches - what you need to know.", href: "/guides/how-thick-should-a-live-edge-slab-be" }
                        ].map((faq, i) => (
                            <motion.div key={i} variants={itemVariants}>
                                <Link
                                    href={faq.href}
                                    className="block p-8 rounded-2xl bg-stone-50 dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all group border border-stone-100 dark:border-stone-800"
                                >
                                    <h3 className="font-bold text-xl text-stone-900 dark:text-stone-100 group-hover:text-amber-700 transition-colors">{faq.title}</h3>
                                    <p className="text-stone-500 text-sm mt-2">{faq.desc}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 text-center"
                    >
                        <Link href="/guides" className="text-sm font-bold text-stone-500 hover:text-amber-700 uppercase tracking-widest transition-all">
                            View All Authority Guides →
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
