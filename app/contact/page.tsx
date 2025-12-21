import { Metadata } from "next";
import { ContactContent } from "@/components/screens/ContactContent";

export const metadata: Metadata = {
    title: "Expert Consultation | Live Edge Guide",
    description: "Connect with our technical team for custom commissions or wood science inquiries.",
};

export default function ContactPage() {
    return <ContactContent />;
}
