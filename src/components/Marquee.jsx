"use client";

import { motion } from "framer-motion";

const Marquee = () => {
    const items = ["WhatsApp API", "Green Tick", "Broadcasts", "Automation", "Chatbots", "24/7 Support", "Analytics", "CRM Integration", "No-Code"];

    return (
        <div className="py-10 bg-brand-green overflow-hidden relative rotate-1 scale-105 border-y-4 border-black">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: "-50%" }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <div key={i} className="mx-8 flex items-center gap-4">
                        <span className="text-4xl font-black text-black uppercase tracking-tighter">{item}</span>
                        <div className="w-4 h-4 bg-black rounded-full" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
