import { Metadata } from "next";
import { SizingTool } from "@/components/SizingTool";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Live Edge Table Sizing Calculator | Texas Live Edge Guide",
    description: "Calculate the perfect dimensions for your custom live edge table based on guest count and room size. Interactive DFW buying tool.",
};

export default function SizingToolPage() {
    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl">
            <div className="mb-12 text-center">
                <Link href="/resources" className="text-sm font-medium text-stone-500 hover:text-stone-900 mb-6 inline-block transition-colors">
                    ← Back to Resources
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-outfit)] mb-6 text-stone-900 dark:text-stone-50 leading-tight">
                    Table Sizing Calculator
                </h1>
                <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
                    Choosing the right slab isn't just about the grain—it's about the fit. Use our tool to find the dimensions that work for your home.
                </p>
            </div>

            <SizingTool />

            <div className="mt-20 prose prose-stone lg:prose-lg dark:prose-invert mx-auto">
                <h2>How Sizing Works</h2>
                <p>
                    A common mistake when buying a live edge slab is forgetting about the "Chair Clearance."
                    For a comfortable dining experience, you need at least **36 inches (3 feet)** of clearance around the perimeter of the table
                    to allow guests to pull out chairs and move behind them.
                </p>

                <h3>Seating Capacity Rules of Thumb</h3>
                <ul>
                    <li><strong>6 ft Table:</strong> Comfortable for 6 people (2 on each side, 1 on each end).</li>
                    <li><strong>8 ft Table:</strong> Comfortable for 8 people (3 on each side, 1 on each end).</li>
                    <li><strong>10 ft Table:</strong> Grand seating for 10 people (4 on each side, 1 on each end).</li>
                </ul>

                <h3>Width Considerations</h3>
                <p>
                    While traditional tables are 36-40 inches wide, live edge slabs vary. A **40-44 inch width** is the "gold standard"
                    for family dining as it allows for center serving dishes while maintainting intimate conversation space.
                </p>

                <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-2xl border border-amber-200 dark:border-amber-800/30 mt-12">
                    <h4 className="m-0 text-amber-900 dark:text-amber-400 font-bold">Pro Tip: The "Cool Touch" Test</h4>
                    <p className="text-amber-800 dark:text-amber-500 text-sm mb-0">
                        In the Dallas heat, wood can feel deceptive. When visiting a showroom like Kovara in Arlington,
                        ask for a moisture reading. A correctly sized table won't matter if it splits because it wasn't kiln-dried to 6-8% MC.
                    </p>
                </div>
            </div>
        </div>
    );
}
