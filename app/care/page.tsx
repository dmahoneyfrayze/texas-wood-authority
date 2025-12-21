import { getAllPosts } from "@/lib/mdx";
import DiscoveryGrid from "@/components/DiscoveryGrid";

export const metadata = {
    title: "Care & Maintenance | Texas Live Edge Guide",
    description: "Keep your live edge table looking pristine for generations with our expert care tips.",
};

export default function CareIndex() {
    const posts = getAllPosts("care");

    return (
        <DiscoveryGrid
            title="Care & Maintenance"
            description="Keep your live edge table looking pristine for generations with our expert care tips."
            posts={posts}
            category="care"
        />
    );
}
