import { Metadata } from "next";
import { PrivacyContent } from "@/components/screens/PrivacyContent";

export const metadata: Metadata = {
    title: "Privacy Policy | Live Edge Guide",
    description: "Our commitment to protecting your data and intellectual property.",
};

export default function PrivacyPage() {
    return <PrivacyContent />;
}
