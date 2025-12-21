import { Article, WebSite, WithContext, Corporation, FAQPage, Organization, BreadcrumbList } from "schema-dts";
import { Post } from "./mdx";

const BASE_URL = "https://liveedgeguide.com"; // Placeholder domain

export const KOVARA_ORG: Organization = {
    "@type": "Organization",
    name: "Kovara",
    url: "https://shopkovara.com",
    logo: "https://shopkovara.com/cdn/shop/files/Kovara_Logo_Black.png",
    areaServed: {
        "@type": "State",
        name: "Texas",
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Arlington",
        addressRegion: "TX",
        addressCountry: "US",
    },
};

export const SITE_SCHEMA: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Live Edge Guide",
    url: BASE_URL,
    publisher: {
        "@type": "Organization",
        name: "Live Edge Guide",
        areaServed: {
            "@type": "State",
            name: "Texas"
        }
    },
};

export function generateArticleSchema(post: Post): WithContext<Article> {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.frontmatter.title,
        description: post.frontmatter.description,
        image: post.frontmatter.image ? [`${BASE_URL}${post.frontmatter.image}`] : undefined,
        datePublished: post.frontmatter.date,
        dateModified: post.frontmatter.updatedAt || post.frontmatter.date,
        author: {
            "@type": "Person",
            name: post.frontmatter.author || "Editorial Team",
        },
        publisher: {
            "@type": "Organization",
            name: "Live Edge Guide",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/${post.category}/${post.slug}`,
        },
    };
}

export function generateFAQSchema(post: Post): WithContext<FAQPage> | null {
    if (!post.frontmatter.faq || post.frontmatter.faq.length === 0) {
        return null;
    }

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.frontmatter.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };
}

export function generateBreadcrumbSchema(post: Post): WithContext<BreadcrumbList> {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: BASE_URL,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: post.category.charAt(0).toUpperCase() + post.category.slice(1),
                item: `${BASE_URL}/${post.category}`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: post.frontmatter.title,
                item: `${BASE_URL}/${post.category}/${post.slug}`,
            }
        ],
    }
}
