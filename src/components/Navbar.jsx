"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MagneticButton from "./MagneticButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-[#0b141a]/80 backdrop-blur-xl border-b border-white/5 py-3"
                    : "py-6 bg-transparent"}`}
                aria-label="Global Navigation"
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-brand-green/50 transition-colors">
                            <Image
                                src="/webitya-logo.jpg"
                                alt="Webitya Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight group-hover:text-brand-green transition-colors flex items-end">
                            Webitya<span className="text-brand-green text-3xl leading-none">.</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
                        {['Features', 'Use Cases', 'Pricing', 'FAQ'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group cursor-pointer"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full" />
                            </button>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <MagneticButton
                            onClick={() => scrollToSection('book-demo')}
                            className="px-6 py-2.5 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white hover:text-black transition-all"
                            aria-label="Book a Usage Demo"
                        >
                            Book Demo
                        </MagneticButton>
                        <Link href="https://wa.me/916207732383" target="_blank">
                            <MagneticButton
                                className="px-6 py-2.5 bg-brand-green text-black rounded-full font-bold hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all flex items-center gap-2 cursor-pointer relative"
                                aria-label="Chat with us on WhatsApp"
                            >
                                <WhatsAppIcon style={{ fontSize: 20 }} /> WhatsApp API
                            </MagneticButton>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2 cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Mobile Menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </motion.nav>

            {/* Premium Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 lg:hidden"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile Navigation Menu"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#0b141a] border-l border-white/10 shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-green/10 blur-[100px] rounded-full pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

                            {/* Header */}
                            <div className="p-6 flex items-center justify-between border-b border-white/5 relative z-10">
                                <span className="text-xl font-bold text-white flex items-end">
                                    Webitya<span className="text-brand-green text-3xl leading-none">.</span>
                                </span>
                                <button
                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close Menu"
                                >
                                    <CloseIcon />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6 relative z-10">
                                {['Features', 'Use Cases', 'Pricing', 'FAQ'].map((item, i) => (
                                    <motion.button
                                        key={item}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.1) }}
                                        onClick={() => {
                                            scrollToSection(item.toLowerCase().replace(' ', '-'));
                                            setIsOpen(false);
                                        }}
                                        className="text-left text-3xl font-bold text-white/50 hover:text-white hover:translate-x-2 transition-all duration-300"
                                    >
                                        {item}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Footer / CTA */}
                            <div className="p-6 border-t border-white/5 bg-black/20 relative z-10">
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    onClick={() => {
                                        scrollToSection('book-demo');
                                        setIsOpen(false);
                                    }}
                                    className="w-full py-4 bg-brand-green text-black rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all mb-4"
                                >
                                    Book Free Demo
                                </motion.button>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-center text-white/30 text-xs"
                                >
                                    &copy; {new Date().getFullYear()} Webitya.
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
