"use client";

import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-zinc-950">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-gray-400">Pay only for what you use. No hidden fees.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                    {/* Standard Plan */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full max-w-md p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-brand-green/30 transition-all duration-300 relative group"
                    >
                        <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">Standard Access</h3>
                            <div className="flex items-end gap-1 mb-6">
                                <span className="text-4xl font-bold">₹0</span>
                                <span className="text-gray-400 mb-1">/ platform cost</span>
                            </div>
                            <p className="text-sm text-gray-400 mb-8">
                                Direct integration with Meta APIs. You only pay for conversations directly to Meta.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    "Official WhatsApp API Access",
                                    "Green Tick Verification Support",
                                    "1000 Free Service Conversations/mo",
                                    "Unlimited Team Members",
                                    "Broadcast & Automation Features"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="p-0.5 rounded-full bg-brand-green/20 text-brand-green">
                                            <CheckIcon fontSize="small" style={{ fontSize: 16 }} />
                                        </span>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="#book-demo"
                                className="w-full py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-brand-green hover:text-white transition-all duration-300"
                            >
                                Get Started Now
                            </Link>
                        </div>
                    </motion.div>

                    {/* Enterprise Custom */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full max-w-md p-8 rounded-3xl bg-zinc-900 border border-zinc-800 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-3 bg-white/10 rounded-bl-2xl text-xs font-bold uppercase tracking-wider text-white">
                            High Volume
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                        <p className="text-gray-400 mb-8">
                            Tailored solutions for large organizations with high message volumes and custom integration needs.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Custom API Integration",
                                "Dedicated Account Manager",
                                "Priority Support 24/7",
                                "Custom Reporting & Analytics"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="p-0.5 rounded-full bg-white/10 text-white">
                                        <CheckIcon fontSize="small" style={{ fontSize: 16 }} />
                                    </span>
                                    <span className="text-gray-300 text-sm">{feature}</span>
                                </div>
                            ))}
                        </ul>

                        <Link
                            href="#book-demo"
                            className="w-full py-4 rounded-xl border border-white/20 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
                        >
                            Contact Sales <ArrowForwardIcon fontSize="small" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
