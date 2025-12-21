import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface Frontmatter {
    title: string;
    description: string;
    date: string;
    updatedAt?: string;
    author?: string;
    tags?: string[];
    image?: string;
    category?: string;
    faq?: { question: string; answer: string }[];
}

export interface Post {
    slug: string;
    category: string;
    frontmatter: Frontmatter;
    content: string;
}

export function getPostBySlug(category: string, slug: string): Post | null {
    try {
        const filePath = path.join(CONTENT_DIR, category, `${slug}.mdx`);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContent);

        return {
            slug,
            category,
            frontmatter: data as Frontmatter,
            content,
        };
    } catch (error) {
        return null;
    }
}

export function getAllPosts(category?: string): Post[] {
    const posts: Post[] = [];
    const categories = category ? [category] : fs.readdirSync(CONTENT_DIR).filter(file => !file.startsWith("."));

    for (const cat of categories) {
        const catPath = path.join(CONTENT_DIR, cat);
        if (fs.existsSync(catPath) && fs.lstatSync(catPath).isDirectory()) {
            const files = fs.readdirSync(catPath);
            for (const file of files) {
                if (file.endsWith(".mdx")) {
                    const slug = file.replace(/\.mdx$/, "");
                    const post = getPostBySlug(cat, slug);
                    if (post) {
                        posts.push(post);
                    }
                }
            }
        }
    }

    // Sort posts by date descending
    return posts.sort((a, b) => {
        return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });
}
