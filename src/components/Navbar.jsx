"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Features", href: "#features" },
        { name: "Use Cases", href: "#use-cases" },
        { name: "Pricing", href: "#pricing" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "py-5 bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/10 group-hover:border-brand-green/50 transition-colors">
                            <Image
                                src="/webitya-logo.jpg"
                                alt="Webitya Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            Webitya<span className="text-brand-green">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="https://wa.me/916207732383"
                            target="_blank"
                            className="text-white hover:text-brand-green transition-colors"
                        >
                            <WhatsAppIcon />
                        </Link>
                        <Link
                            href="#book-demo"
                            className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-brand-green hover:text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
                        >
                            Book Free Demo
                            <ArrowForwardIcon fontSize="small" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <MenuIcon fontSize="large" />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <CloseIcon fontSize="large" />
                        </button>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-light text-white hover:text-brand-green transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="flex flex-col gap-4 mt-8 w-full px-10">
                            <Link
                                href="#book-demo"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-4 text-center bg-white text-black font-bold rounded-full text-lg"
                            >
                                Book Free Demo
                            </Link>
                            <Link
                                href="https://wa.me/916207732383"
                                target="_blank"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-4 text-center border border-white/20 text-white font-medium rounded-full text-lg flex items-center justify-center gap-2 hover:bg-white/5"
                            >
                                <WhatsAppIcon /> Chat on WhatsApp
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
