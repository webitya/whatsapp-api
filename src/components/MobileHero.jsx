"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SendIcon from '@mui/icons-material/Send';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// --- Polished Components ---

const StarField = () => {
    const stars = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
    }));

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    initial={{ opacity: 0.2, scale: 0.5 }}
                    animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.5, 1, 0.5] }}
                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
                    className="absolute bg-white rounded-full"
                    style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
                />
            ))}
        </div>
    );
};

const LiquidText = ({ text, className }) => {
    return (
        <h1 className={`${className} bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500`}>
            {text}
        </h1>
    );
};

const GrowthChart = () => (
    <div className="relative w-full h-12 overflow-hidden">
        <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible preserve-3d">
            <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#25D366" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#25D366" stopOpacity="0" />
                </linearGradient>
            </defs>
            <motion.path
                d="M0,20 L0,15 Q10,18 20,12 T40,10 T60,5 T80,8 T100,1 L100,20 Z"
                fill="url(#chartGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.path
                d="M0,15 Q10,18 20,12 T40,10 T60,5 T80,8 T100,1"
                fill="none"
                stroke="#25D366"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
        </svg>
        {/* Animated Data Points */}
        <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-[5%] right-0 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#25D366]"
        />
    </div>
);

const TypingIndicator = () => (
    <div className="flex gap-1 p-1">
        {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
        ))}
    </div>
);

const MobileHero = () => {
    const { scrollY } = useScroll();
    const visualY = useTransform(scrollY, [0, 300], [0, 100]);

    return (
        <section className="relative w-full min-h-[90dvh] flex flex-col items-center pt-[100px] px-3 overflow-hidden bg-[#050a0d]">
            {/* 1. Universe Background */}
            <StarField />
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] mix-blend-overlay"></div>

                {/* Richer Gradients */}
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.15, 1] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[25%] -left-[10%] w-[500px] h-[500px] bg-emerald-900/30 blur-[100px] rounded-full mix-blend-screen"
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[15%] -right-[20%] w-[450px] h-[450px] bg-blue-900/20 blur-[100px] rounded-full mix-blend-screen"
                />
            </div>

            {/* 2. Top Content */}
            <div className="relative z-20 w-full flex flex-col items-center space-y-6">

                {/* Official Partner Badge with Shimmer */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative overflow-hidden flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl group"
                >
                    <div className="absolute inset-0 -translate-x-[200%] group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-[ping_2s_infinite]" />
                    <span className="text-[10px] font-bold tracking-widest text-gray-200 uppercase">Official Partner</span>
                </motion.div>

                {/* Typography with Liquid Effect */}
                <div className="text-center w-full relative">
                    <LiquidText className="text-[3.5rem] leading-[0.9] font-black tracking-tighter" text="Automate Growth" />
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl font-bold text-gray-400 mt-3 mb-2"
                    >
                        on <span className="text-white">WhatsApp</span>
                    </motion.p>
                </div>

                {/* Buttons Grid */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                    <Link href="#book-demo" className="w-full">
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-brand-green text-[#0b141a] font-bold text-sm rounded-xl flex flex-col items-center justify-center gap-1 shadow-[0_0_20px_rgba(37,211,102,0.3)] relative overflow-hidden group border border-transparent"
                        >
                            <div className="flex items-center gap-1.5 z-10">
                                <span className="text-[15px]">Start Demo</span>
                                <ArrowForwardIcon className="text-base" />
                            </div>

                            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.button>
                    </Link>

                    <Link href="#how-it-works" className="w-full">
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-[#1f2932]/80 backdrop-blur-sm border border-white/10 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-1 hover:bg-[#2a3942] transition-colors"
                        >
                            <div className="flex items-center gap-1.5">
                                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"><PlayArrowIcon style={{ fontSize: 12 }} /></span>
                                <span className="text-[15px]">Features</span>
                            </div>
                        </motion.button>
                    </Link>
                </div>

                {/* Simplified Trust Ticker */}
                <div className="flex justify-center gap-5 opacity-60 pb-4">
                    <span className="flex items-center gap-1.5 text-[10px] text-gray-300 font-medium tracking-wide"><CheckCircleIcon className="text-brand-green text-[12px]" /> Meta Verified</span>
                    <span className="flex items-center gap-1.5 text-[10px] text-gray-300 font-medium tracking-wide"><CheckCircleIcon className="text-brand-green text-[12px]" /> Instant Setup</span>
                </div>
            </div>

            {/* 3. Bottom Visual: High-Fidelity Dashboard */}
            <motion.div
                style={{ y: visualY }}
                className="relative w-full max-w-[380px] mt-auto -mb-16 perspective-1000 z-10"
            >
                <motion.div
                    initial={{ rotateX: 20, y: 100, opacity: 0 }}
                    animate={{ rotateX: 10, y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.4 }}
                    className="relative w-full bg-[#111b21] border-t border-x border-white/10 rounded-t-[2.5rem] p-6 shadow-[0_-20px_60px_rgba(0,0,0,0.5)] h-[320px] overflow-hidden backdrop-blur-xl"
                >
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="flex flex-col gap-5">
                        {/* Live Header */}
                        <div className="flex justify-between items-center px-1">
                            <div className="flex items-center gap-2.5">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider">Live Activity</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-brand-green/10 px-2 py-1 rounded-lg border border-brand-green/20">
                                <AutoAwesomeIcon className="text-brand-green text-[12px]" />
                                <span className="text-brand-green font-mono text-[10px] font-bold">+28% Today</span>
                            </div>
                        </div>

                        {/* Animated Growth Graph */}
                        <GrowthChart />

                        {/* Recent Messages */}
                        <div className="space-y-3 relative mt-1">
                            {/* Incoming */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="bg-[#202c33] p-3 rounded-2xl rounded-tl-none border border-white/5 w-[85%] shadow-lg"
                            >
                                <div className="flex items-center gap-2 mb-1.5">
                                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] text-purple-400 font-bold">JD</div>
                                    <span className="text-[10px] text-gray-400">John Doe</span>
                                </div>
                                <p className="text-xs text-white/90">"I'd like to book a demo for my team."</p>
                            </motion.div>

                            {/* Outgoing (Bot) */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.5 }}
                                className="bg-[#005c4b] p-3 rounded-2xl rounded-tr-none border border-white/5 w-[85%] ml-auto shadow-lg"
                            >
                                <div className="flex items-center gap-2 mb-1.5 justify-end">
                                    <span className="text-[10px] text-white/60">AI Assistant</span>
                                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"><AutoAwesomeIcon style={{ fontSize: 10 }} className="text-white" /></div>
                                </div>
                                <TypingIndicator />
                            </motion.div>
                        </div>
                    </div>

                    {/* Gradient Fade */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050a0d] via-[#050a0d]/80 to-transparent z-20 pointer-events-none" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default MobileHero;
