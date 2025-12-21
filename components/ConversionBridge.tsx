import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ConversionBridgeProps {
    title?: string;
    description?: string;
    ctaText: string;
    ctaLink: string;
}

export function ConversionBridge({
    title = "Ready to start your project?",
    description = "Kovara specializes in custom kiln-dried live edge tables.",
    ctaText,
    ctaLink,
}: ConversionBridgeProps) {
    return (
        <div className="my-12 rounded-2xl bg-stone-100 p-8 text-center dark:bg-stone-900">
            <h3 className="mb-4 text-2xl font-bold font-[family-name:var(--font-outfit)] text-stone-900 dark:text-stone-50">
                {title}
            </h3>
            <p className="mb-6 text-lg text-stone-600 dark:text-stone-300">
                {description}
            </p>
            <Link
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-stone-800 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-200"
            >
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </div>
    );
}
