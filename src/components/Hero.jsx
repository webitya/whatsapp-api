"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MagneticButton from "./MagneticButton";
import { TextReveal } from "./TextReveal";
import { useRef, useState, useEffect } from "react";
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';

const SidebarItem = ({ name, time, msg, active, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        className={`p-3 rounded-xl flex items-center gap-3 cursor-pointer transition-all hover:bg-[#202c33] ${active ? 'bg-[#2a3942]' : 'bg-transparent'}`}
    >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex-shrink-0" />
        <div className="flex-1 min-w-0">
            <div className="flex justify-between items-baseline">
                <h4 className="text-white text-sm font-medium truncate">{name}</h4>
                <span className="text-xs text-gray-500">{time}</span>
            </div>
            <p className="text-gray-400 text-xs truncate">{msg}</p>
        </div>
    </motion.div>
);

const LiveGraph = () => {
    return (
        <div className="h-16 flex items-end justify-between gap-1 px-2 pb-2">
            {[40, 70, 45, 90, 60, 80, 50, 95, 30].map((h, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 10 }}
                    animate={{ height: `${h}%` }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.1,
                        ease: "easeInOut"
                    }}
                    className="w-1.5 bg-brand-green/30 rounded-t-sm"
                />
            ))}
        </div>
    )
}

const DashboardSimulation = () => {
    const [messages, setMessages] = useState([
        { id: 1, type: 'in', text: "Hi! I'm interested in the Business API plan. 🚀", time: '10:42 AM' },
    ]);
    const [isTyping, setIsTyping] = useState(true);
    const [showConfetti, setShowConfetti] = useState(false);
    const [headerStatus, setHeaderStatus] = useState("Online");
    const [activeChat, setActiveChat] = useState("Webitya Automation");

    useEffect(() => {
        const scenario = async () => {
            // Step 1: Bot Typing
            setHeaderStatus("typing...");
            await new Promise(r => setTimeout(r, 1500));
            setIsTyping(false);
            setHeaderStatus("Online");
            setMessages(prev => [...prev, { id: 2, type: 'out', text: "Hello! 👋 Welcome to Webitya. I can definitely help with that.", time: '10:42 AM', read: true }]);

            // Step 2: Bot sends options
            setHeaderStatus("typing...");
            await new Promise(r => setTimeout(r, 800));
            setIsTyping(false);
            setHeaderStatus("Online");
            setMessages(prev => [...prev, { id: 3, type: 'out', text: "Would you like to see our pricing or features?", time: '10:42 AM', options: ["Pricing 💵", "Features ⭐"], read: true }]);

            // Step 3: User 'clicks' option
            await new Promise(r => setTimeout(r, 2000));
            setMessages(prev => [...prev, { id: 4, type: 'in', text: "Pricing 💵", time: '10:43 AM' }]);

            // Step 4: Bot sends pricing card
            setIsTyping(true);
            setHeaderStatus("typing...");
            await new Promise(r => setTimeout(r, 1500));
            setIsTyping(false);
            setHeaderStatus("Online");
            setMessages(prev => [...prev, { id: 5, type: 'out', text: "Here is our standard plan details:", time: '10:43 AM', card: true, read: true }]);
            // Toast removed as requested
        };
        scenario();
    }, []);

    return (
        <div className="relative w-full h-full">
            {/* Wrapper allows floating elements to exceed bounds of the inner container */}

            {/* Main Content Container (Clipped) */}
            <div className="w-full h-full bg-[#0b141a]/95 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 overflow-hidden flex shadow-2xl relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent opacity-20 pointer-events-none" />

                {/* Sidebar */}
                <div className="w-1/3 border-r border-white/5 bg-[#111b21] flex flex-col hidden md:flex">
                    <div className="p-4 bg-[#202c33] flex justify-between items-center border-b border-white/5">
                        <div className="w-8 h-8 rounded-full bg-gray-500/20" />
                        <div className="flex gap-4 text-gray-400">
                            <div className="w-5 h-5 rounded-full border-2 border-dashed border-gray-500" />
                            <div className="w-5 h-5 rounded-md border-2 border-gray-500" />
                        </div>
                    </div>

                    {/* Live Stats Widget */}
                    <div className="p-4 border-b border-white/5">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-gray-400 uppercase">Live Traffic</span>
                            <span className="text-xs text-brand-green font-bold">+124%</span>
                        </div>
                        <div className="bg-[#202c33] rounded-lg overflow-hidden border border-white/5">
                            <LiveGraph />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-2 space-y-1">
                        <div onClick={() => setActiveChat("Webitya Automation")}>
                            <SidebarItem name="Webitya Auto..." time="Now" msg={isTyping ? "typing..." : "Here is our standard..."} active={activeChat === "Webitya Automation"} delay={0.1} />
                        </div>
                        <div onClick={() => setActiveChat("Rahul Kumar")}>
                            <SidebarItem name="Rahul Kumar" time="10:40 AM" msg="Thanks for the demo!" active={activeChat === "Rahul Kumar"} delay={0.2} />
                        </div>
                        <div onClick={() => setActiveChat("Priya Singh")}>
                            <SidebarItem name="Priya Singh" time="10:25 AM" msg="Is the API active?" active={activeChat === "Priya Singh"} delay={0.3} />
                        </div>
                        <div onClick={() => setActiveChat("Tech Support")}>
                            <SidebarItem name="Tech Support" time="Yesterday" msg="Server status: Online" active={activeChat === "Tech Support"} delay={0.4} />
                        </div>
                        <div onClick={() => setActiveChat("New Leads")}>
                            <SidebarItem name="New Leads" time="Yesterday" msg="5 new inquiries" active={activeChat === "New Leads"} delay={0.5} />
                        </div>
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col relative">
                    {/* Header */}
                    <div className="bg-[#202c33] p-4 flex items-center justify-between border-b border-white/5 z-20">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-green to-teal-400 p-[2px] relative cursor-pointer hover:scale-105 transition-transform">
                                    <div className="w-full h-full rounded-full bg-[#202c33] flex items-center justify-center">
                                        <span className="text-brand-green font-bold">W</span>
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-brand-green border-2 border-[#202c33] rounded-full"></span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white font-medium text-sm hover:underline cursor-pointer">Webitya Automation</h3>
                                <motion.p
                                    key={headerStatus}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className={`text-xs font-medium ${headerStatus === 'typing...' ? 'text-brand-green animate-pulse' : 'text-gray-400'}`}
                                >
                                    {headerStatus === 'typing...' ? headerStatus : 'Business Account'}
                                </motion.p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-gray-400">
                            <SearchIcon fontSize="small" className="cursor-pointer hover:text-white" />
                            <MoreVertIcon fontSize="small" className="cursor-pointer hover:text-white" />
                        </div>
                    </div>

                    {/* Chat Background & Messages */}
                    <div className="flex-1 bg-[#0b141a] relative p-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        <div className="absolute inset-0 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] opacity-[0.03] pointer-events-none" />

                        <AnimatePresence mode="popLayout">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8, y: 20, rotateX: -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                    className={`flex ${msg.type === 'out' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[85%] rounded-2xl p-3 text-sm relative shadow-md group ${msg.type === 'out'
                                        ? 'bg-[#202c33] text-white rounded-tl-none origin-top-left'
                                        : 'bg-[#005c4b] text-white rounded-tr-none origin-top-right'
                                        }`}>
                                        {msg.card && (
                                            <div className="mb-2 p-3 bg-black/20 rounded-xl border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors">
                                                {showConfetti && <div className="absolute inset-0 bg-brand-green/5 animate-pulse" />}
                                                <div className="h-32 bg-gradient-to-br from-brand-green/20 to-teal-500/20 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                                                    <motion.span
                                                        initial={{ scale: 0, rotate: -180 }}
                                                        animate={{ scale: 1, rotate: 0 }}
                                                        transition={{ type: "spring", delay: 0.2 }}
                                                        className="text-5xl filter drop-shadow-2xl"
                                                    >
                                                        💎
                                                    </motion.span>
                                                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-brand-green text-black text-[10px] font-bold rounded-full">RECOMMENDED</div>

                                                    {/* Shimmer effect */}
                                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                                </div>
                                                <div className="font-bold text-white mb-1 text-base">Standard Plan</div>
                                                <div className="text-xs text-gray-300 mb-3 leading-relaxed">Unlimited broadcasts, Multi-Agent/Team Inbox, and Green Tick verification support.</div>
                                                <motion.button
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="w-full py-2.5 bg-[#2a3942] rounded-lg text-center text-brand-green text-xs font-bold cursor-pointer hover:bg-[#32414b] transition-colors flex items-center justify-center gap-2"
                                                >
                                                    Get Started <ArrowForwardIcon style={{ fontSize: 12 }} />
                                                </motion.button>
                                            </div>
                                        )}

                                        <p className="leading-relaxed relative z-10">{msg.text}</p>

                                        {msg.options && (
                                            <div className="mt-3 flex gap-2 flex-wrap">
                                                {msg.options.map((opt, i) => (
                                                    <motion.button
                                                        key={i}
                                                        whileHover={{ scale: 1.05, backgroundColor: "#374248" }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="px-4 py-2 bg-[#2a3942] text-brand-green text-xs font-bold rounded-xl transition-colors shadow-sm border border-brand-green/10"
                                                    >
                                                        {opt}
                                                    </motion.button>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex justify-end gap-1 mt-1 items-center">
                                            <span className={`text-[10px] ${msg.type === 'out' ? 'text-gray-400' : 'text-white/60'}`}>
                                                {msg.time}
                                            </span>
                                            {msg.type === 'out' && (
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="text-blue-400 text-[10px] font-bold"
                                                >
                                                    ✓✓
                                                </motion.span>
                                            )}
                                            {msg.type === 'in' && <span className="text-blue-300 text-[10px]">✓✓</span>}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {isTyping && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="flex justify-start"
                            >
                                <div className="bg-[#202c33] px-4 py-3 rounded-2xl rounded-tl-none flex gap-1 items-center border border-white/5 shadow-md">
                                    <span className="w-1.5 h-1.5 bg-brand-green/80 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                                    <span className="w-1.5 h-1.5 bg-brand-green/80 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                    <span className="w-1.5 h-1.5 bg-brand-green/80 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="bg-[#202c33] p-3 flex gap-4 items-center border-t border-white/5 z-20">
                        <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors text-gray-400">
                            <span className="text-xl">+</span>
                        </div>
                        <div className="flex-1 bg-[#2a3942] rounded-xl h-10 px-4 flex items-center text-gray-400 text-sm border border-white/5 hover:border-white/10 transition-colors cursor-text">
                            Type a message...
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: -10 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-black shadow-lg shadow-brand-green/20 cursor-pointer"
                        >
                            <SendIcon fontSize="small" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Floating Live Stats (Now positioned outside the overflow-hidden container) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    default: { duration: 0.5 }
                }}
                className="absolute top-24 -right-12 lg:-right-6 bg-[#202c33]/90 backdrop-blur-xl border border-brand-green/30 p-4 rounded-2xl shadow-2xl z-40 flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer ring-1 ring-brand-green/20 group"
            >
                {/* Pulse effect behind */}
                <div className="absolute inset-0 bg-brand-green/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all -z-10" />

                <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-black font-black text-lg shadow-lg shadow-brand-green/20">
                        98%
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5 border border-brand-green">
                        <CheckCircleIcon className="text-brand-green" style={{ fontSize: 14 }} />
                    </div>
                </div>
                <div>
                    <div className="text-[10px] text-brand-green font-bold uppercase tracking-widest mb-0.5">Performance</div>
                    <div className="text-white font-bold text-sm whitespace-nowrap">High Open Rate</div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, y: [0, 15, 0] }}
                transition={{
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    default: { duration: 0.5, delay: 0.2 }
                }}
                className="absolute bottom-40 -left-12 lg:-left-6 bg-[#202c33]/90 backdrop-blur-xl border border-blue-500/30 p-4 rounded-2xl shadow-2xl z-40 flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer ring-1 ring-blue-500/20 group"
            >
                {/* Blue Pulse effect behind */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all -z-10" />

                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                    <BarChartIcon />
                </div>
                <div>
                    <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-0.5">Analytics</div>
                    <div className="text-white font-bold text-sm whitespace-nowrap">Real-time Data</div>
                </div>
            </motion.div>

            {/* Dynamic Notification Toast Removed */}
        </div>
    );
};

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} id="home" className="relative w-full min-h-screen flex items-center pt-40 pb-12 lg:py-0 overflow-hidden perspective-1000">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="hero-glow bg-brand-green/10 blur-[150px]"
                />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full mix-blend-screen" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full max-w-[1600px] mx-auto">

                    {/* Left Content */}
                    <div className="relative z-20 pt-10 lg:pt-0 text-center lg:text-left">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green mb-1 sm:mb-2 backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                            </span>
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Official WhatsApp API Partner</span>
                        </motion.div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] tracking-tight mb-6 sm:mb-8">
                            <span className="block">Automate</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-400 to-brand-green bg-300% animate-shine">
                                <TextReveal text="Business Growth" delay={0.2} />
                            </span>
                            <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-400 font-bold mt-2 sm:mt-4">
                                on WhatsApp
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Reach <span className="text-white font-bold">2 Billion+</span> users directly. Automate sales, support, and marketing with the world's most powerful WhatsApp API platform.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link href="#book-demo">
                                <MagneticButton className="px-8 py-4 sm:px-10 sm:py-5 bg-brand-green text-black font-extrabold text-base sm:text-lg rounded-full shadow-[0_0_50px_rgba(37,211,102,0.4)] flex items-center gap-2 sm:gap-3 relative overflow-hidden group" aria-label="Start Free Demo">
                                    <span className="relative z-10 flex items-center gap-2">Start Free Demo <ArrowForwardIcon aria-hidden="true" /></span>
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                </MagneticButton>
                            </Link>

                            <Link href="#how-it-works">
                                <MagneticButton className="px-8 py-4 sm:px-10 sm:py-5 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/10 transition-all" aria-label="See How It Works">
                                    See How It Works
                                </MagneticButton>
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-500 justify-center lg:justify-start mt-10 sm:mt-12">
                            {["Instant Setup", "Green Tick Verified", "Meta Compliant"].map((text, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + (i * 0.1) }}
                                    className="flex items-center gap-2"
                                >
                                    <CheckCircleIcon className="text-brand-green" fontSize="small" aria-hidden="true" />
                                    <span>{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual - Ultimate Dashboard Simulation 2.0 */}
                    <motion.div
                        initial={{ opacity: 0, rotateY: 30, x: 100 }}
                        animate={{ opacity: 1, rotateY: 0, x: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="relative hidden lg:block perspective-1000 h-[450px] lg:h-[550px] w-full lg:mt-12"
                        aria-hidden="true"
                    >
                        <DashboardSimulation />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
