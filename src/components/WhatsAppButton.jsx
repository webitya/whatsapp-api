"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919798146740"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 z-[9999]"
        >
            <div className="relative group">
                {/* Glowing Effect layers */}
                <div className="absolute inset-0 bg-[#25D366] rounded-full blur-[20px] opacity-40 group-hover:opacity-70 transition-opacity duration-300 animate-pulse" />
                <div className="absolute inset-0 bg-[#25D366] rounded-full blur-[10px] opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Button */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl border border-white/20"
                >
                    <WhatsAppIcon className="text-white text-3xl" />
                </motion.div>

                {/* Optional Tooltip/Badge */}
                <div className="absolute -top-2 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0b141a] animate-bounce" />
            </div>
        </a>
    );
};

export default WhatsAppButton;
