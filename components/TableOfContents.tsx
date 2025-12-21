"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0% -80% 0%" }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setIsOpen(false);
        }
    };

    if (items.length === 0) return null;

    return (
        <>
            {/* Desktop TOC (Sticky Sidebar) */}
            <nav className="hidden xl:block sticky top-32 h-fit max-h-[calc(100vh-160px)] w-64 overflow-y-auto pr-4 scrollbar-hide">
                <div className="mb-4 flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-stone-400">
                    <span className="h-px w-4 bg-stone-300"></span>
                    <span>On This Page</span>
                </div>
                <ul className="space-y-3">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className={cn(
                                "transition-all duration-300",
                                item.level === 3 ? "ml-4" : "ml-0"
                            )}
                        >
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={cn(
                                    "text-left text-sm font-medium transition-colors hover:text-amber-700",
                                    activeId === item.id
                                        ? "text-amber-700 dark:text-amber-500"
                                        : "text-stone-500 dark:text-stone-400"
                                )}
                            >
                                {item.text}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile TOC (Floating Toggle) */}
            <div className="xl:hidden fixed bottom-6 right-6 z-40">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="absolute bottom-16 right-0 w-72 max-h-[60vh] overflow-y-auto rounded-3xl border border-stone-200 bg-white/95 p-6 shadow-2xl backdrop-blur-md dark:border-stone-800 dark:bg-stone-900/95"
                        >
                            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-stone-400">
                                Contents
                            </div>
                            <ul className="space-y-4">
                                {items.map((item) => (
                                    <li
                                        key={item.id}
                                        className={cn(
                                            item.level === 3 ? "ml-4 border-l border-stone-100 pl-4 py-1" : ""
                                        )}
                                    >
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            className={cn(
                                                "block text-left text-sm font-bold transition-colors",
                                                activeId === item.id
                                                    ? "text-amber-700"
                                                    : "text-stone-600 dark:text-stone-400"
                                            )}
                                        >
                                            {item.text}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all active:scale-95",
                        isOpen
                            ? "bg-stone-900 text-white dark:bg-stone-50 dark:text-stone-900"
                            : "bg-amber-700 text-white shadow-amber-900/20"
                    )}
                >
                    {isOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>
        </>
    );
}
