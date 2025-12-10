"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2500); // Wait for Preloader (1.2s + 0.8s exit + buffer)
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href="https://wa.me/919798146740"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="fixed bottom-6 right-6 z-[9999]"
                >
                    <div className="relative group">
                        {/* Enhanced Pulse/Ripple Layers */}
                        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-[20px] opacity-20 group-hover:opacity-60 transition-opacity duration-500 animate-[ping_2s_infinite]" />
                        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-[10px] opacity-40 group-hover:opacity-80 transition-opacity duration-300" />

                        {/* Main Button */}
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                            whileTap={{ scale: 0.9 }}
                            className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] border border-white/20 overflow-hidden"
                        >
                            {/* Glossy sheen */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

                            <WhatsAppIcon className="text-white text-3xl drop-shadow-md z-10" />
                        </motion.div>

                        {/* Status Badge - Now Green */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0b141a] shadow-sm flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        </div>
                    </div>
                </motion.a>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;
