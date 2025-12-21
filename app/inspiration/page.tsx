import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Design Inspiration Gallery | Live Edge Guide",
    description: "Curated examples of live edge dining tables, conference tables, and desks in Texas interiors.",
};

export default function InspirationIndex() {
    const posts = getAllPosts("inspiration");

    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold font-[family-name:var(--font-outfit)] mb-4 text-stone-900 dark:text-stone-50">
                    Design Inspiration
                </h1>
                <p className="text-lg text-stone-600 dark:text-stone-400">
                    See how live edge tables transform dining rooms, offices, and commercial spaces.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/inspiration/${post.slug}`}
                        className="group block rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
                    >
                        <div className="mb-4">
                            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-200">
                                {post.frontmatter.tags?.[0] || "Inspiration"}
                            </span>
                        </div>
                        <h2 className="mb-2 text-xl font-bold font-[family-name:var(--font-outfit)] text-stone-900 group-hover:text-stone-600 dark:text-stone-50 dark:group-hover:text-stone-300">
                            {post.frontmatter.title}
                        </h2>
                        <p className="text-stone-600 dark:text-stone-400 line-clamp-3">
                            {post.frontmatter.description}
                        </p>
                        <div className="mt-4 flex items-center text-sm text-stone-500">
                            <span>View Gallery →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
