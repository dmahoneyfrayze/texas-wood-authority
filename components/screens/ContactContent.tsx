"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Send, Award, BookOpen } from "lucide-react";
import { useState } from "react";

export function ContactContent() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        setTimeout(() => setFormState("success"), 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen pt-24 pb-16"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Hero Section */}
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-700"
                    >
                        <span className="h-px w-8 bg-amber-700"></span>
                        <span>Direct Access</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-outfit)] mb-6 text-stone-900 dark:text-stone-50 leading-tight"
                    >
                        Expert Consultation & <br />
                        <span className="text-amber-700">Community Insights</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed"
                    >
                        Whether you're planning a legacy commission or wish to contribute technical expertise to the Texas Wood Authority, our team is ready to connect.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 p-8 md:p-12 shadow-sm"
                        >
                            {formState === "success" ? (
                                <div className="py-20 text-center">
                                    <div className="mx-auto w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-6">
                                        <Send className="h-8 w-8 text-amber-700" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4">Message Received</h2>
                                    <p className="text-stone-600 dark:text-stone-400 max-w-sm mx-auto">
                                        Thank you for reaching out. An expert from our team will review your inquiry and respond within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setFormState("idle")}
                                        className="mt-8 text-amber-700 font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full bg-stone-50 dark:bg-stone-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-amber-700 outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full bg-stone-50 dark:bg-stone-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-amber-700 outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Inquiry Type</label>
                                        <select className="w-full bg-stone-50 dark:bg-stone-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-amber-700 outline-none transition-all appearance-none">
                                            <option>General Inquiry</option>
                                            <option>Custom Commission Quote</option>
                                            <option>Expert Insight Submission</option>
                                            <option>Press & Media</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Your Message</label>
                                        <textarea
                                            required
                                            rows={6}
                                            className="w-full bg-stone-50 dark:bg-stone-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-amber-700 outline-none transition-all"
                                            placeholder="Tell us about your project or technical insight..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={formState === "submitting"}
                                        className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-amber-900/20 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center space-x-2"
                                    >
                                        {formState === "submitting" ? (
                                            <span>Processing...</span>
                                        ) : (
                                            <>
                                                <span>Send Transmission</span>
                                                <Send className="h-4 w-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 dark:text-stone-100 mb-6 flex items-center">
                                <Award className="h-4 w-4 mr-2 text-amber-700" />
                                Direct Channels
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-5 w-5 text-amber-700" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-stone-900 dark:text-stone-100">Email Analysis</p>
                                        <p className="text-stone-500">consult@texasliveedgeguide.com</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-5 w-5 text-amber-700" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-stone-900 dark:text-stone-100">Regional HQ</p>
                                        <p className="text-stone-500">Fort Worth / Dallas, TX<br />Design District Availability by Appt.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="p-8 rounded-3xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-800/50"
                        >
                            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 dark:text-stone-100 mb-4 flex items-center">
                                <BookOpen className="h-4 w-4 mr-2 text-amber-700" />
                                Contribute to the Authority
                            </h3>
                            <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
                                Are you a wood scientist, master fabricator, or professional designer? We welcome peer-reviewed submissions and technical case studies to help maintain the highest standards of wood education.
                            </p>
                            <div className="flex items-center space-x-2 text-xs font-bold text-amber-700">
                                <span>See Submission Guidelines</span>
                                <span>→</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 dark:text-stone-100 mb-6 flex items-center">
                                <MessageSquare className="h-4 w-4 mr-2 text-amber-700" />
                                Technical Support
                            </h3>
                            <p className="text-sm text-stone-500 leading-relaxed mb-4">
                                For urgent maintenance questions regarding existing commissions, please include your project serial number in the subject line.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
