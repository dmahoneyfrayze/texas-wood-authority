"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <div className="w-full flex flex-col">
            {/* Quick Access Top Bar */}
            <div className="w-full bg-stone-900 text-white py-2 px-4 shadow-inner hidden md:block">
                <div className="container mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
                    <div className="flex items-center space-x-6">
                        <span className="text-stone-500">Authority Tools:</span>
                        <Link href="/guides/live-edge-table-pricing-guide-2025" className="hover:text-amber-500 transition-colors">Pricing Guide</Link>
                        <Link href="/resources/slab-buying-checklist" className="hover:text-amber-500 transition-colors">Buying Checklist</Link>
                        <Link href="/resources/glossary" className="hover:text-amber-500 transition-colors">Glossary</Link>
                        <Link href="/guides/top-5-live-edge-table-makers-dallas" className="hover:text-amber-500 transition-colors">DFW Shop Audit</Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Link href="/contact" className="text-amber-500 hover:text-white transition-colors">Expert Submission</Link>
                        <span className="text-stone-700">|</span>
                        <span>Arlington • Dallas • Fort Worth</span>
                    </div>
                </div>
            </div>

            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    "sticky top-0 z-50 w-full transition-all duration-300",
                    isScrolled
                        ? "bg-white/80 dark:bg-stone-950/80 backdrop-blur-lg border-b border-stone-200 dark:border-stone-800 py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <span className="text-xl md:text-2xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
                            LIVEEDGE<span className="text-stone-500 font-normal group-hover:text-amber-700 transition-colors">GUIDE</span>
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
                        <Link href="/guides/the-ultimate-live-edge-wood-guide" className="transition-colors hover:text-amber-700">
                            Start Here
                        </Link>
                        <Link href="/process/how-live-edge-tables-are-made" className="transition-colors hover:text-amber-700">
                            The Process
                        </Link>
                        <Link href="/guides/parota-wood-pros-cons-use-cases" className="transition-colors hover:text-amber-700">
                            Wood Types
                        </Link>
                        <Link href="/guides/how-to-choose-the-right-live-edge-table" className="transition-colors hover:text-amber-700">
                            Designing
                        </Link>
                    </nav>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/resources/sizing-tool"
                            className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-amber-700 hidden lg:block transition-colors"
                        >
                            Sizing Tool
                        </Link>

                    </div>
                </div>
            </motion.header>
        </div>
    );
}
