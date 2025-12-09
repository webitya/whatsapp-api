"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="hero-glow bg-brand-green/20 blur-[120px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                        <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
                            Official WhatsApp Business Partner
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                        Automate Your <br />
                        <span className="text-gradient-brand">Business Growth</span> <br />
                        on WhatsApp
                    </h1>

                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        The ultimate WhatsApp API solution for Indian SMEs. Generate leads, automate support, and drive sales 24/7 without lifting a finger.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
                        <Link
                            href="#book-demo"
                            className="px-8 py-4 bg-brand-green text-black font-bold text-lg rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(37,211,102,0.3)] flex items-center gap-2"
                        >
                            Start Free Demo
                            <ArrowForwardIcon />
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium text-lg rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            See How It Works
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-500 justify-center lg:justify-start">
                        <div className="flex items-center gap-2">
                            <CheckCircleIcon className="text-brand-green" fontSize="small" />
                            <span>Instant Setup</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircleIcon className="text-brand-green" fontSize="small" />
                            <span>Green Tick Verification</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircleIcon className="text-brand-green" fontSize="small" />
                            <span>Broadcast Marketing</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Abstract UI Representation */}
                    <div className="relative w-full h-[600px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden p-6 shadow-2xl">
                        {/* Mock UI Elements */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>

                        {/* Chat/Dashboard Simulation */}
                        <div className="mt-10 grid grid-cols-3 gap-6 h-full">
                            {/* Sidebar */}
                            <div className="col-span-1 rounded-2xl bg-white/5 p-4 flex flex-col gap-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="h-12 w-full rounded-xl bg-white/5 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                                ))}
                            </div>

                            {/* Main Chat Area */}
                            <div className="col-span-2 rounded-2xl bg-white/5 p-4 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="w-3/4 p-3 rounded-2xl rounded-tl-none bg-white/10 text-xs text-gray-400">
                                        Hello! I need to book a demo for your WhatsApp API service.
                                    </div>
                                    <div className="w-3/4 ml-auto p-3 rounded-2xl rounded-tr-none bg-brand-green/20 text-xs text-brand-green border border-brand-green/20">
                                        Hi there! 👋 I'd be happy to help you with that. Please select a time slot below.
                                    </div>
                                    <div className="w-1/2 ml-auto p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-xs text-gray-400 mb-2">Available Slots</div>
                                        <div className="h-8 w-full bg-brand-green rounded-lg flex items-center justify-center text-black font-bold text-xs">Today, 4:00 PM</div>
                                    </div>
                                </div>

                                <div className="h-12 w-full rounded-xl bg-white/5 border border-white/10 flex items-center px-4 text-gray-600 text-sm">
                                    Type a message...
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/4 -left-10 bg-[#0a0a0a] border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                <CheckCircleIcon />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Conversion Rate</p>
                                <p className="text-lg font-bold text-white">+45%</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-1/4 -right-5 bg-[#0a0a0a] border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                                <ArrowForwardIcon />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Auto-Replies</p>
                                <p className="text-lg font-bold text-white">Instant</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
