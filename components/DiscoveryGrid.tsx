"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface Post {
    slug: string;
    frontmatter: {
        title: string;
        description: string;
        tags?: string[];
        date?: string;
    };
}

interface DiscoveryGridProps {
    title: string;
    description: string;
    posts: Post[];
    category: "guides" | "process" | "care" | "resources";
    featuredCard?: React.ReactNode;
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function DiscoveryGrid({ title, description, posts, category }: Omit<DiscoveryGridProps, "featuredCard">) {
    const [activeTag, setActiveTag] = useState<string>("All");
    const [sortBy, setSortBy] = useState<"newest" | "alphabetical">("newest");

    const config = {
        guides: {
            accent: "amber",
            linkText: "Read Guide",
            hoverGradient: "from-amber-500/5",
        },
        process: {
            accent: "orange",
            linkText: "Explore Process",
            hoverGradient: "from-orange-500/5",
        },
        care: {
            accent: "amber",
            linkText: "Read Care Guide",
            hoverGradient: "from-amber-500/5",
        },
        resources: {
            accent: "blue",
            linkText: "View Resource",
            hoverGradient: "from-blue-500/5",
        },
    };

    const { accent, linkText, hoverGradient } = config[category];

    // Get unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>(["All"]);
        posts.forEach(post => {
            post.frontmatter.tags?.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, [posts]);

    // Filter and Sort posts
    const filteredPosts = useMemo(() => {
        let result = posts.filter(post =>
            activeTag === "All" || post.frontmatter.tags?.includes(activeTag)
        );

        if (sortBy === "alphabetical") {
            result.sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
        } else {
            result.sort((a, b) => {
                const dateA = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0;
                const dateB = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0;
                return dateB - dateA;
            });
        }

        return result;
    }, [posts, activeTag, sortBy]);

    // Dynamic classes based on accent
    const tagClasses = {
        amber: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
        orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
        blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    }[accent];

    const activeFilterClasses = {
        amber: "bg-amber-700 text-white shadow-amber-900/20",
        orange: "bg-orange-700 text-white shadow-orange-900/20",
        blue: "bg-blue-700 text-white shadow-blue-900/20",
    }[accent];

    const titleHoverClasses = {
        amber: "group-hover:text-amber-700 dark:group-hover:text-amber-500",
        orange: "group-hover:text-orange-700 dark:group-hover:text-orange-500",
        blue: "group-hover:text-blue-700 dark:group-hover:text-blue-400",
    }[accent];

    const linkClasses = {
        amber: "text-amber-700 dark:text-amber-500",
        orange: "text-orange-700 dark:text-orange-500",
        blue: "text-blue-700 dark:text-blue-400",
    }[accent];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl"
        >
            <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-outfit)] mb-6 text-stone-900 dark:text-stone-50"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-stone-600 dark:text-stone-400"
                >
                    {description}
                </motion.p>
            </div>

            {/* Filters & Sorting UI */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-stone-100/50 dark:bg-stone-800/30 p-6 rounded-3xl border border-stone-200 dark:border-stone-800">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95",
                                activeTag === tag
                                    ? activeFilterClasses
                                    : "bg-white dark:bg-stone-900 text-stone-500 border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 shadow-sm"
                            )}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4 border-l border-stone-200 dark:border-stone-800 pl-6 h-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Sort:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="bg-transparent text-xs font-bold text-stone-600 dark:text-stone-300 focus:outline-none cursor-pointer"
                    >
                        <option value="newest">Latest First</option>
                        <option value="alphabetical">A-Z</option>
                    </select>
                </div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
                {category === "resources" && activeTag === "All" && (
                    <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
                        <Link
                            href="/resources/sizing-tool"
                            className="group block relative h-full rounded-2xl border-2 border-amber-500/20 bg-amber-500/5 p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 dark:border-amber-500/20 dark:bg-amber-500/5 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                                        Interactive Tool
                                    </span>
                                </div>
                                <h2 className="mb-4 text-2xl font-bold font-[family-name:var(--font-outfit)] text-stone-900 group-hover:text-amber-700 dark:text-stone-50 dark:group-hover:text-amber-500 transition-colors">
                                    Table Sizing Calculator
                                </h2>
                                <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                                    Calculate the perfect slab length and width based on your guest count and room dimensions.
                                </p>
                                <div className="mt-8 flex items-center text-sm font-bold text-amber-700 dark:text-amber-500">
                                    <span>Launch Calculator</span>
                                    <motion.span
                                        className="ml-2"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        →
                                    </motion.span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {filteredPosts.map((post) => (
                    <motion.div key={post.slug} variants={itemVariants} layout>
                        <Link
                            href={`/${category}/${post.slug}`}
                            className="group block relative h-full rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 dark:border-stone-800 dark:bg-stone-900 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${hoverGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                            <div className="relative z-10">
                                <div className="mb-6 flex items-center justify-between">
                                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase ${tagClasses}`}>
                                        {post.frontmatter.tags?.[0] || category.charAt(0).toUpperCase() + category.slice(1)}
                                    </span>
                                    {post.frontmatter.date && (
                                        <span className="text-xs text-stone-400">{post.frontmatter.date}</span>
                                    )}
                                </div>
                                <h2 className={`mb-4 text-2xl font-bold font-[family-name:var(--font-outfit)] text-stone-900 dark:text-stone-50 transition-colors ${titleHoverClasses}`}>
                                    {post.frontmatter.title}
                                </h2>
                                <p className="text-stone-600 dark:text-stone-400 line-clamp-3 leading-relaxed">
                                    {post.frontmatter.description}
                                </p>
                                <div className={`mt-8 flex items-center text-sm font-bold ${linkClasses}`}>
                                    <span>{linkText}</span>
                                    <motion.span
                                        className="ml-2"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        →
                                    </motion.span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {filteredPosts.length === 0 && (
                <div className="text-center py-24">
                    <p className="text-stone-500">No articles found in this category.</p>
                </div>
            )}
        </motion.div>
    );
}
