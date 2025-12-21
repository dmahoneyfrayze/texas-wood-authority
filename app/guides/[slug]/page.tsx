import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { ConversionBridge } from "@/components/ConversionBridge";
import { LeadMagnet } from "@/components/LeadMagnet";
import { TableOfContents } from "@/components/TableOfContents";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { slugify } from "@/lib/utils";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts("guides");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug("guides", slug);

    if (!post) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: `${post.frontmatter.title} | Live Edge Guide`,
        description: post.frontmatter.description,
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            type: "article",
            publishedTime: post.frontmatter.date,
            authors: [post.frontmatter.author || "Editorial Team"],
            images: post.frontmatter.image ? [post.frontmatter.image] : [],
        },
    };
}

import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import * as motion from "framer-motion/client";

export default async function GuidePage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug("guides", slug);

    if (!post) {
        notFound();
    }

    const jsonLd = generateArticleSchema(post);
    const faqSchema = generateFAQSchema(post);
    const breadcrumbSchema = generateBreadcrumbSchema(post);

    // Extract headings for TOC
    const headings = post.content.split("\n")
        .filter(line => line.startsWith("## ") || line.startsWith("### "))
        .map(line => {
            const level = line.startsWith("### ") ? 3 : 2;
            const text = line.replace(/^###?\s+/, "");
            return {
                id: slugify(text),
                text,
                level
            };
        });

    const mdxComponents = {
        ConversionBridge,
        LeadMagnet,
        h2: (props: any) => (
            <h2 id={slugify(props.children?.toString() || "")} {...props} />
        ),
        h3: (props: any) => (
            <h3 id={slugify(props.children?.toString() || "")} {...props} />
        ),
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
        >
            <ScrollProgress />
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col xl:flex-row gap-12">
                    {/* Sidebar TOC */}
                    <div className="xl:w-64 flex-shrink-0">
                        <TableOfContents items={headings} />
                    </div>

                    {/* Main Content */}
                    <article className="max-w-3xl">
                        <Breadcrumbs
                            items={[
                                { label: "Guides", href: "/guides" },
                                { label: post.frontmatter.title, href: `/guides/${post.slug}` },
                            ]}
                        />
                        <JsonLd schema={jsonLd} />
                        {faqSchema && <JsonLd schema={faqSchema} />}
                        <JsonLd schema={breadcrumbSchema} />

                        <div className="mb-8 border-b border-stone-200 pb-8 dark:border-stone-800">
                            <Link href="/guides" className="text-sm font-medium text-stone-500 hover:text-stone-900 mb-6 inline-block transition-colors">
                                ← Back to Guides
                            </Link>
                            <span className="block mb-4 text-sm font-semibold tracking-wider text-amber-700 uppercase">
                                {post.frontmatter.tags?.[0] || "Guide"}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-outfit)] mb-6 text-stone-900 dark:text-stone-50 leading-tight">
                                {post.frontmatter.title}
                            </h1>
                            <div className="flex items-center text-sm text-stone-500 space-x-4">
                                <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                                <span className="h-1 w-1 rounded-full bg-stone-300"></span>
                                <span>By {post.frontmatter.author || "Editorial Team"}</span>
                            </div>
                        </div>

                        <div className="prose prose-stone prose-lg dark:prose-invert max-w-none prose-headings:font-[family-name:var(--font-outfit)] prose-a:text-amber-700 hover:prose-a:text-amber-800">
                            <MDXRemote source={post.content} components={mdxComponents} />
                        </div>

                        {post.frontmatter.faq && post.frontmatter.faq.length > 0 && (
                            <section className="mt-16 pt-8 border-t border-stone-200 dark:border-stone-800">
                                <h2 className="text-2xl font-bold font-[family-name:var(--font-outfit)] mb-8 text-stone-900 dark:text-stone-50">
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-6">
                                    {post.frontmatter.faq.map((item, index) => (
                                        <div key={index} className="bg-stone-50 dark:bg-stone-900 p-6 rounded-lg">
                                            <h3 className="font-bold text-lg mb-2 text-stone-900 dark:text-stone-100">{item.question}</h3>
                                            <p className="text-stone-600 dark:text-stone-400">{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </article>
                </div>
            </div>
            <BackToTop />
        </motion.div>
    );
}
