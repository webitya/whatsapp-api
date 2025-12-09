"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ChatIcon from "@mui/icons-material/Chat";
import CampaignIcon from "@mui/icons-material/Campaign";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const features = [
    { icon: <ChatIcon />, title: "Smart Auto-Replies", desc: "Instantly respond to common queries." },
    { icon: <CampaignIcon />, title: "Bulk Broadcasting", desc: "Reach thousands in one click." },
    { icon: <SupportAgentIcon />, title: "Multi-Agent Support", desc: "Team inbox for efficient support." },
    { icon: <AutoAwesomeIcon />, title: "Green Tick", desc: "Build official brand trust." },
    { icon: <AnalyticsIcon />, title: "Analytics", desc: "Track every message & conversion." },
    { icon: <VerifiedUserIcon />, title: "Data Security", desc: "Enterprise-grade encryption." },
];

function TiltCard({ feature, index }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    const rotateX = useTransform(mouseY, [-50, 50], [5, -5]);
    const rotateY = useTransform(mouseX, [-50, 50], [-5, 5]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{ perspective: 1000 }}
            className="h-full"
        >
            <motion.div
                style={{ rotateX, rotateY }}
                onMouseMove={onMouseMove}
                onMouseLeave={() => { x.set(0); y.set(0); }}
                className="h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-brand-green/30 hover:bg-zinc-800/50 transition-colors duration-300 group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-brand-green group-hover:text-black transition-colors duration-300 shadow-lg">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {feature.desc}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

const Features = () => {
    return (
        <section id="features" className="py-32 relative bg-black overflow-hidden">
            {/* Ambient Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] bg-brand-green/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Powerful Features. <br />
                        <span className="text-gradient-brand">Zero Complexity.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500"
                    >
                        Everything you need to automate your business on WhatsApp.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1600px] mx-auto">
                    {features.map((feature, index) => (
                        <TiltCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
