import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { ConversionBridge } from "@/components/ConversionBridge";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts("inspiration");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug("inspiration", slug);

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

export default async function InspirationPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug("inspiration", slug);

    if (!post) {
        notFound();
    }

    const jsonLd = generateArticleSchema(post);
    const faqSchema = generateFAQSchema(post);
    const breadcrumbSchema = generateBreadcrumbSchema(post);

    return (
        <article className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-3xl">
            <JsonLd schema={jsonLd} />
            {faqSchema && <JsonLd schema={faqSchema} />}
            <JsonLd schema={breadcrumbSchema} />

            <div className="mb-8 border-b border-stone-200 pb-8 dark:border-stone-800">
                <Link href="/inspiration" className="text-sm font-medium text-stone-500 hover:text-stone-900 mb-6 inline-block transition-colors">
                    ← Back to Inspiration
                </Link>
                <span className="block mb-4 text-sm font-semibold tracking-wider text-purple-700 uppercase">
                    {post.frontmatter.tags?.[0] || "Inspiration"}
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

            <div className="prose prose-stone prose-lg dark:prose-invert max-w-none prose-headings:font-[family-name:var(--font-outfit)] prose-a:text-purple-700 hover:prose-a:text-purple-800">
                <MDXRemote source={post.content} components={{ ConversionBridge }} />
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
    );
}
