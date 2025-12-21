import { getAllPosts } from "@/lib/mdx";
import DiscoveryGrid from "@/components/DiscoveryGrid";

export const metadata = {
    title: "Wood & Furniture Guides | Texas Live Edge Guide",
    description: "Expert advice on choosing, maintaining, and understanding live edge furniture.",
};

export default function GuidesIndex() {
    const posts = getAllPosts("guides");

    return (
        <DiscoveryGrid
            title="Wood & Furniture Guides"
            description="Expert advice on choosing, maintaining, and understanding live edge furniture."
            posts={posts}
            category="guides"
        />
    );
}
