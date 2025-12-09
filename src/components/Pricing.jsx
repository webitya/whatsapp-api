"use client";

import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useState } from "react";
import MagneticButton from "./MagneticButton";

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="py-24 sm:py-32 relative overflow-hidden bg-zinc-950">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16 sm:mb-20">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Simple Pricing. <span className="text-gray-500">No Surprises.</span></h2>
                    <p className="text-gray-400 text-base sm:text-lg mb-10">Pay only for what you use. Zero hidden fees.</p>

                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className={`text-sm font-medium transition-colors ${!isYearly ? "text-white" : "text-gray-500"}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-full h-8 bg-zinc-800 rounded-full p-1 relative transition-colors hover:bg-zinc-700 focus:outline-none cursor-pointer"
                            aria-label="Toggle Monthly or Yearly Billing"
                            aria-pressed={isYearly}
                        >
                            <motion.div
                                animate={{ x: isYearly ? 24 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="w-6 h-6 bg-brand-green rounded-full shadow-md"
                            />
                        </button>
                        <span className={`text-sm font-medium transition-colors ${isYearly ? "text-white" : "text-gray-500"}`}>
                            Yearly <span className="text-brand-green text-xs font-bold ml-1">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {/* Standard Plan */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full p-8 sm:p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 hover:border-brand-green/50 transition-all duration-300 relative group overflow-hidden flex flex-col"
                    >
                        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10 flex-1 flex flex-col">
                            <h3 className="text-xl font-medium text-gray-400 mb-4">Standard Plan</h3>
                            <div className="flex items-end gap-1 mb-6">
                                <span className="text-5xl sm:text-6xl font-black text-white">₹0</span>
                                <span className="text-gray-400 mb-2 font-medium">/ platform cost</span>
                            </div>
                            <p className="text-sm text-gray-400 mb-10 leading-relaxed">
                                Perfect for businesses just getting started. Direct integration with Meta's official billing.
                            </p>

                            <div className="space-y-5 mb-10">
                                {[
                                    "Official WhatsApp API Access",
                                    "Green Tick Verification Assistance",
                                    "1000 Free Service Conversations",
                                    "Unlimited Team Members",
                                    "Broadcast & Automation Suite"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green shrink-0">
                                            <CheckIcon style={{ fontSize: 12 }} />
                                        </span>
                                        <span className="text-gray-300 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <Link href="#book-demo" className="block">
                                    <MagneticButton className="w-full py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-brand-green hover:text-white transition-all duration-300 shadow-lg" aria-label="Get Started with Standard Plan">
                                        Get Started Now
                                    </MagneticButton>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Enterprise Custom */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full p-8 sm:p-10 rounded-[2.5rem] bg-zinc-950 border border-zinc-800 relative overflow-hidden flex flex-col"
                    >
                        <div className="absolute top-0 right-0 p-4 bg-white/5 rounded-bl-3xl text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                            High Volume
                        </div>

                        <div className="flex-1 flex flex-col">
                            <h3 className="text-xl font-medium text-gray-400 mb-4">Enterprise</h3>
                            <div className="flex items-end gap-1 mb-6">
                                <span className="text-4xl sm:text-5xl font-bold text-white">Custom</span>
                            </div>
                            <p className="text-sm text-gray-400 mb-10 leading-relaxed">
                                Tailored solutions for large organizations. Volume discounts and dedicated support.
                            </p>

                            <div className="space-y-5 mb-10">
                                {[
                                    "Custom API Integration",
                                    "Dedicated Account Manager",
                                    "Priority Support (24/7 SLA)",
                                    "Custom Reporting & Analytics",
                                    "On-Premise Deployment Option"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                                            <CheckIcon style={{ fontSize: 12 }} />
                                        </span>
                                        <span className="text-gray-300 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <Link href="#book-demo" className="block">
                                    <MagneticButton className="w-full py-4 rounded-xl border border-white/10 text-white font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300" aria-label="Contact Sales for Enterprise Plan">
                                        Contact Sales <ArrowForwardIcon fontSize="small" aria-hidden="true" />
                                    </MagneticButton>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
