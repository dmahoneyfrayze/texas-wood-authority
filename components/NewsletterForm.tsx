"use client";

import { motion } from "framer-motion";

export function NewsletterForm() {
    return (
        <div className="bg-white dark:bg-stone-800/50 p-6 rounded-3xl border border-stone-200 dark:border-stone-700 shadow-sm">
            <h3 className="mb-4 text-sm font-bold text-stone-900 dark:text-stone-100 italic">
                Join the Experts
            </h3>
            <p className="mb-6 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                Join 1,200+ DFW homeowners receiving our monthly research digest and insider material alerts.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-[family-name:var(--font-inter)]"
                />
                <button className="w-full bg-amber-700 hover:bg-amber-600 text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-widest transition-all shadow-lg shadow-amber-900/10 active:scale-95 font-[family-name:var(--font-outfit)]">
                    Join the Guide
                </button>
            </form>
            <p className="mt-4 text-[10px] text-stone-400 text-center font-[family-name:var(--font-inter)]">
                No spam. Just wood research. Unsubscribe anytime.
            </p>
        </div>
    );
}
