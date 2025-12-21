"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className={cn("flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-stone-400 mb-8", className)}
        >
            <Link
                href="/"
                className="flex items-center hover:text-amber-700 transition-colors"
                title="Home"
            >
                <Home className="h-3 w-3" />
            </Link>

            {items.map((item, index) => (
                <div key={item.href} className="flex items-center space-x-2">
                    <ChevronRight className="h-3 w-3 text-stone-300" />
                    <Link
                        href={item.href}
                        className={cn(
                            "transition-colors hover:text-amber-700",
                            index === items.length - 1
                                ? "text-stone-900 pointer-events-none dark:text-stone-50"
                                : ""
                        )}
                        aria-current={index === items.length - 1 ? "page" : undefined}
                    >
                        {item.label}
                    </Link>
                </div>
            ))}
        </nav>
    );
}
