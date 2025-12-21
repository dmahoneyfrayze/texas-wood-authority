"use client";

import { useState } from "react";
import { Download, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface LeadMagnetProps {
    title?: string;
    description?: string;
    buttonText?: string;
    type?: "checklist" | "care" | "pricing";
    className?: string;
}

export function LeadMagnet({
    title,
    description,
    buttonText = "Send me the PDF",
    type = "checklist",
    className
}: LeadMagnetProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const magnetContent = {
        checklist: {
            defaultTitle: "Take the Checklist to the Showroom",
            defaultDesc: "Don't get stuck with a low-quality slab. Download our printable 12-point buying checklist to use while shopping.",
            icon: <FileText className="h-6 w-6" />,
            accent: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
        },
        care: {
            defaultTitle: "The Heirloom Care Guide",
            defaultDesc: "Learn the specific daily and seasonal care routines for Texas-climate live edge tables. Keep your wood healthy for generations.",
            icon: <ShieldCheck className="h-6 w-6" />,
            accent: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
        },
        pricing: {
            defaultTitle: "2025 Live Edge Pricing Matrix",
            defaultDesc: "Our internal data on what you should actually pay per board foot for Parota, Walnut, and Pecan in the DFW area.",
            icon: <Download className="h-6 w-6" />,
            accent: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
        }
    };

    const content = magnetContent[type];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <div className={cn(
            "my-12 p-8 rounded-[2rem] border-2 border-dashed border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 shadow-xl shadow-stone-200/50 dark:shadow-none overflow-hidden relative",
            className
        )}>
            <div className="absolute top-0 right-0 p-8 opacity-5">
                {content.icon}
            </div>

            <AnimatePresence mode="wait">
                {status !== "success" ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="relative z-10"
                    >
                        <div className={cn("inline-flex p-3 rounded-2xl mb-6", content.accent)}>
                            {content.icon}
                        </div>
                        <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] mb-3 text-stone-900 dark:text-stone-100 tracking-tight">
                            {title || content.defaultTitle}
                        </h3>
                        <p className="text-stone-500 dark:text-stone-400 mb-8 leading-relaxed max-w-lg">
                            {description || content.defaultDesc}
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Where should we send it?"
                                className="flex-1 px-5 py-3 rounded-xl bg-stone-100 dark:bg-stone-800 border-none text-sm focus:ring-2 focus:ring-amber-500/20 transition-all font-medium"
                            />
                            <button
                                disabled={status === "submitting"}
                                className="px-8 py-3 rounded-xl bg-stone-900 dark:bg-amber-700 text-white font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 disabled:opacity-50 shadow-lg shadow-stone-900/20"
                            >
                                {status === "submitting" ? "Sending..." : buttonText}
                            </button>
                        </form>
                        <p className="mt-4 text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                            Built for DFW Homeowners • No Spam Ever
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8 relative z-10"
                    >
                        <div className="inline-flex p-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 mb-6">
                            <CheckCircle2 className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-stone-900 dark:text-stone-100">Check your inbox!</h3>
                        <p className="text-stone-500 max-w-xs mx-auto">
                            The PDF is flying your way. While you wait, keep reading the guide to master your next project.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
