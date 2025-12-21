import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
    const posts = getAllPosts("resources");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug("resources", slug);

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

export default async function ResourcePage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug("resources", slug);

    if (!post) {
        notFound();
    }

    const { frontmatter, content } = post;
    const jsonLd = generateArticleSchema(post);
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
                                { label: "Resources", href: "/resources" },
                                { label: frontmatter.title, href: `/resources/${post.slug}` },
                            ]}
                        />
                        <JsonLd schema={jsonLd} />
                        <JsonLd schema={breadcrumbSchema} />

                        {/* Hero Image */}
                        {post.frontmatter.image && (
                            <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
                                <Image
                                    src={post.frontmatter.image}
                                    alt={post.frontmatter.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}

                        <div className="mb-8 border-b border-stone-200 pb-8 dark:border-stone-800">
                            <Link href="/resources" className="text-sm font-medium text-stone-500 hover:text-stone-900 mb-6 inline-block transition-colors">
                                ← Back to Resources
                            </Link>
                            <span className="block mb-4 text-sm font-semibold tracking-wider text-amber-700 uppercase">
                                Knowledge Hub
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-outfit)] mb-6 text-stone-900 dark:text-stone-50 leading-tight">
                                {frontmatter.title}
                            </h1>
                        </div>

                        <div className="prose prose-stone prose-lg dark:prose-invert max-w-none prose-headings:font-[family-name:var(--font-outfit)] prose-a:text-amber-700 hover:prose-a:text-amber-800">
                            <MDXRemote source={content} components={mdxComponents} />
                        </div>
                    </article>
                </div>
            </div>
            <BackToTop />
        </motion.div>
    );
}
