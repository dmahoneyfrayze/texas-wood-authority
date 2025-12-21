import { Metadata } from "next";
import { HomeContent } from "@/components/screens/HomeContent";

export const metadata: Metadata = {
    title: "Live Edge Guide - The Authority on Custom Tables",
    description: "The independent research guide to sourcing, designing, and maintaining kiln-dried live edge furniture in the Dallas-Fort Worth area.",
    openGraph: {
        title: "Live Edge Guide - The Authority on Custom Tables",
        description: "The independent research guide to sourcing, designing, and maintaining kiln-dried live edge furniture in the Dallas-Fort Worth area.",
        url: "https://liveedgeguide.com/",
        type: "website",
        images: ["https://liveedgeguide.com/og/og_home_default.png"],
    },
};

export default function Home() {
    return <HomeContent />;
}
