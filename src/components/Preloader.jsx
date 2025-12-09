"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Automate", "Engage", "Grow", "Webitya."];

export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (index == words.length - 1) return;

        setTimeout(() => {
            setIndex(index + 1);
        }, 200); // Speed of word switching
    }, [index]);

    useEffect(() => {
        // Simulate loading time or wait for words to finish
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Total splash screen time
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                >
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20, transition: { duration: 0.1 } }}
                        className="text-4xl md:text-6xl font-black text-white"
                    >
                        <span className="text-brand-green mr-2">•</span>
                        {words[index]}
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
