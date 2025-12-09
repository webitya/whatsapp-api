"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MagneticButton from "./MagneticButton";
import { useRef } from "react";

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} id="home" className="relative min-h-[110vh] flex items-center pt-20 overflow-hidden perspective-1000">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                {/* Animated Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>

                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="hero-glow bg-brand-green/10 blur-[150px]"
                />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full mix-blend-screen" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    style={{ y, opacity }}
                    className="text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-lg shadow-brand-green/5 hover:border-brand-green/30 transition-all cursor-default"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
                        </span>
                        <span className="text-xs font-bold text-gray-200 tracking-widest uppercase">
                            Official WhatsApp Partner
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tight"
                    >
                        Automate <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Business</span> <br />
                        <span className="text-gradient-brand">on WhatsApp</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
                    >
                        The ultimate API solution for ambitious Indian SMEs.
                        <span className="text-white font-medium"> 3x Leads. 24/7 Support. Zero Manual Work.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mb-16"
                    >
                        <Link href="#book-demo">
                            <MagneticButton className="px-10 py-5 bg-brand-green text-black font-extrabold text-lg rounded-full shadow-[0_0_50px_rgba(37,211,102,0.4)] flex items-center gap-3 relative overflow-hidden group">
                                <span className="relative z-10 flex items-center gap-2">Start Free Demo <ArrowForwardIcon /></span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                            </MagneticButton>
                        </Link>

                        <Link href="#how-it-works">
                            <MagneticButton className="px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all">
                                See How It Works
                            </MagneticButton>
                        </Link>
                    </motion.div>

                    <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-gray-500 justify-center lg:justify-start">
                        {["Instant Setup", "Green Tick Verified", "Meta Compliant"].map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 + (i * 0.1) }}
                                className="flex items-center gap-2"
                            >
                                <CheckCircleIcon className="text-brand-green" fontSize="small" />
                                <span>{text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Visual - 3D Mockup */}
                <motion.div
                    initial={{ opacity: 0, rotateY: 30, x: 100 }}
                    animate={{ opacity: 1, rotateY: 0, x: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="relative hidden lg:block perspective-1000"
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full h-[700px] rounded-[2.5rem] border border-white/10 bg-[#050505]/80 backdrop-blur-2xl overflow-hidden p-8 shadow-2xl ring-1 ring-white/5"
                    >
                        {/* Glossy Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none" />

                        {/* Mock UI Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="h-2 w-20 bg-zinc-800 rounded-full" />
                        </div>

                        <div className="grid grid-cols-12 gap-6 h-full">
                            {/* Sidebar */}
                            <div className="col-span-4 space-y-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
                                            <div className="space-y-2 flex-1">
                                                <div className="h-2 w-12 bg-zinc-700 rounded-full group-hover:bg-zinc-600" />
                                                <div className="h-2 w-20 bg-zinc-800 rounded-full group-hover:bg-zinc-700" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Chat Area */}
                            <div className="col-span-8 bg-black/20 rounded-2xl p-6 border border-white/5 relative flex flex-col">
                                <div className="space-y-6 flex-1">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-700 shrink-0" />
                                        <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none text-xs text-gray-300 max-w-[80%]">
                                            Searching for "Nike Shoes"...
                                        </div>
                                    </div>
                                    <div className="flex gap-3 flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-brand-green shrink-0" />
                                        <div className="bg-brand-green/10 border border-brand-green/20 p-4 rounded-2xl rounded-tr-none text-xs text-brand-green max-w-[80%]">
                                            Here are the top-rated Nike Shoes currently in stock! 👟
                                            <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
                                                {[1, 2, 3].map(k => (
                                                    <div key={k} className="min-w-[80px] h-[80px] bg-black/40 rounded-lg border border-white/10" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-white/5 flex gap-3 items-center">
                                    <div className="w-6 h-6 rounded-full bg-white/10" />
                                    <div className="h-8 flex-1 bg-white/5 rounded-lg" />
                                    <div className="w-8 h-8 rounded-full bg-brand-green/50" />
                                </div>
                            </div>
                        </div>

                        {/* Animated Elements */}
                        <div className="absolute top-1/2 left-10 w-full h-full pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                                className="absolute top-0 right-20 bg-zinc-900 border border-brand-green/30 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
                            >
                                <div className="text-brand-green font-bold text-2xl">98%</div>
                                <div className="text-xs text-gray-400 font-medium">Open Rate <br />Achieved</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
