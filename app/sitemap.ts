import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

export const dynamic = "force-static";

const baseUrl = "https://liveedgeguide.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const guides = getAllPosts("guides");
    const process = getAllPosts("process");
    const care = getAllPosts("care");
    const inspiration = getAllPosts("inspiration");
    const resources = getAllPosts("resources");

    const staticRoutes = [
        "",
        "/about-kovara",
        "/contact",
        "/privacy",
        "/guides",
        "/process",
        "/care",
        "/inspiration",
        "/resources",
    ].map((route) => ({
        url: `${baseUrl}${route}/`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    const dynamicRoutes = [
        ...guides.map((post) => ({
            url: `${baseUrl}/guides/${post.slug}/`,
            lastModified: new Date(post.frontmatter.date),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
        ...process.map((post) => ({
            url: `${baseUrl}/process/${post.slug}/`,
            lastModified: new Date(post.frontmatter.date),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
        ...care.map((post) => ({
            url: `${baseUrl}/care/${post.slug}/`,
            lastModified: new Date(post.frontmatter.date),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
        ...inspiration.map((post) => ({
            url: `${baseUrl}/inspiration/${post.slug}/`,
            lastModified: new Date(post.frontmatter.date),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        })),
        ...resources.map((post) => ({
            url: `${baseUrl}/resources/${post.slug}/`,
            lastModified: new Date(post.frontmatter.date),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        })),
    ];

    return [...staticRoutes, ...dynamicRoutes];
}
