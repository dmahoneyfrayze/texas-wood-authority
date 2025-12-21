import { Metadata } from "next";
import { AboutContent } from "@/components/screens/AboutContent";

export const metadata: Metadata = {
    title: "About the Authority | Live Edge Guide",
    description: "Independent research and standards for the custom furniture industry in Texas.",
};

export default function AboutPage() {
    return <AboutContent />;
}
