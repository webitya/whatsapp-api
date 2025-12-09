"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const BookDemo = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // null, 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="book-demo" className="py-32 relative bg-black overflow-hidden perspective-1000">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden="true"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-[#0b141a]/80 backdrop-blur-3xl rounded-[3rem] border border-white/5 p-8 lg:p-12 shadow-2xl">

                    {/* Left: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            Start Now
                        </motion.div>
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                            Ready to <span className="text-gradient-brand">Automate?</span>
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Book a free 15-minute demo with our automation experts. No commitment required.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-green">
                                    <WhatsAppIcon />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase font-bold">Chat with us</div>
                                    <div className="font-bold">6207732383</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                                    <EmailIcon />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase font-bold">Email us</div>
                                    <div className="font-bold">wa.webitya@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="relative">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-green/50 transition-colors"
                                    aria-label="Your Name"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Work Email"
                                    required
                                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-green/50 transition-colors"
                                    aria-label="Work Email Address"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-green/50 transition-colors"
                                    aria-label="Phone Number"
                                />
                            </div>

                            <MagneticButton className="w-full h-14 bg-brand-green text-black font-bold text-lg rounded-xl shadow-lg hover:shadow-brand-green/20 transition-all flex items-center justify-center gap-2" aria-label="Submit Demo Request" aria-busy={loading}>
                                {loading ? (
                                    <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                                ) : (
                                    <>Book Free Demo <ArrowForwardIcon aria-hidden="true" /></>
                                )}
                            </MagneticButton>

                            {status === 'success' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-3 rounded-lg bg-green-500/20 text-brand-green text-center text-sm font-bold border border-green-500/30" role="alert">
                                    Request Sent! Check your email. 🚀
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-3 rounded-lg bg-red-500/20 text-red-500 text-center text-sm font-bold border border-red-500/30" role="alert">
                                    Something went wrong. Try again.
                                </motion.div>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookDemo;
