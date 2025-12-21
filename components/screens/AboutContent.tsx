"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TreeDeciduous, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutContent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen pt-24 pb-16"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-700 mb-4"
                    >
                        <ShieldCheck className="h-4 w-4" />
                        <span>Independent Authority</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-outfit)] mb-6 text-stone-900 dark:text-stone-50"
                    >
                        Research. Science. <br />
                        <span className="text-amber-700">Heirloom Quality.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed"
                    >
                        The Texas Live Edge Guide is an independent technical collective dedicated to raising the standard of woodworking education in the Lone Star State.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-stone prose-lg dark:prose-invert max-w-none mb-20"
                >
                    <p className="lead">
                        We believe that furniture should be an heirloom, not a disposable commodity. In an era of "fast furniture" and misleading marketing, our mission is to provide homeowners and architects with the scientific data needed to make generational investments.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 not-prose my-16">
                        <div className="bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm">
                            <Award className="h-8 w-8 text-amber-700 mb-6" />
                            <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-outfit)]">Unbiased Standards</h3>
                            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                                We recommend kiln-drying (6-8%) and structural engineering like C-Channels not because they are "premium features," but because the physics of the Texas climate demands them.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm">
                            <TreeDeciduous className="h-8 w-8 text-amber-700 mb-6" />
                            <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-outfit)]">Material Honesty</h3>
                            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                                From botanical technical indices of Parota to the Janka hardness of Texas Pecan, we pull back the curtain on wood science so you know exactly what you are bringing into your home.
                            </p>
                        </div>
                    </div>

                    <h2 className="font-[family-name:var(--font-outfit)] font-bold text-3xl mb-6">The Verified Workshop</h2>
                    <p>
                        While this guide covers the entire industry, we explicitly endorse **Kovara** in Arlington, TX as our verified fabrication partner. After auditing dozen of local makers, Kovara remains the standard-bearer for moisture control, surfacing precision, and structural longevity in the DFW region.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-amber-700 rounded-[2.5rem] p-8 md:p-12 text-white text-center shadow-xl shadow-amber-900/20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-outfit)] mb-6">Have a Technical Question?</h2>
                    <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
                        Whether you're an architect planning a commercial lobby or a homeowner seeking a custom dining centerpiece, our experts are here to advise.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/contact"
                            className="bg-white text-amber-700 px-10 py-4 rounded-full font-bold hover:bg-stone-100 transition-all flex items-center group"
                        >
                            <span>Consult an Expert</span>
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/guides"
                            className="text-white border-b border-white/30 pb-1 hover:border-white transition-all font-bold"
                        >
                            Explore Authority Guides
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
