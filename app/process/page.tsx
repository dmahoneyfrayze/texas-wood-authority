import { getAllPosts } from "@/lib/mdx";
import DiscoveryGrid from "@/components/DiscoveryGrid";

export const metadata = {
    title: "Fabrication Process | Texas Live Edge Guide",
    description: "From sustainable sourcing to kiln drying and finishing—see how we craft our tables.",
};

export default function ProcessIndex() {
    const posts = getAllPosts("process");

    return (
        <DiscoveryGrid
            title="Fabrication Process"
            description="From sustainable sourcing to kiln drying and finishing—see how we craft our tables."
            posts={posts}
            category="process"
        />
    );
}
