import { Metadata } from "next";
import { HomeContent } from "@/components/screens/HomeContent";

export const metadata: Metadata = {
    title: "Live Edge Guide - The Authority on Custom Tables",
    description: "The independent research guide to sourcing, designing, and maintaining kiln-dried live edge furniture in the Dallas-Fort Worth area.",
};

export default function Home() {
    return <HomeContent />;
}
