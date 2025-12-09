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
                        <span className="text-xl font-bold text-white tracking-tight group-hover:text-brand-green transition-colors hidden sm:block flex items-end">
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

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-[#0b141a] z-50 lg:hidden overflow-y-auto"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile Navigation Menu"
                    >
                        <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-6 relative">
                            {/* Close button */}
                            <button
                                className="absolute top-6 right-6 text-white/50 hover:text-white p-2 rounded-full bg-white/5 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close Menu"
                            >
                                <CloseIcon fontSize="large" />
                            </button>

                            {['Features', 'Use Cases', 'Pricing', 'FAQ'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => {
                                        scrollToSection(item.toLowerCase().replace(' ', '-'));
                                        setIsOpen(false);
                                    }}
                                    className="text-3xl font-bold text-white hover:text-brand-green transition-colors cursor-pointer"
                                >
                                    {item}
                                </button>
                            ))}
                            <div className="h-px w-20 bg-white/10 my-4" />
                            <button
                                onClick={() => {
                                    scrollToSection('book-demo');
                                    setIsOpen(false);
                                }}
                                className="w-full max-w-xs py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg cursor-pointer"
                            >
                                Book Demo
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
