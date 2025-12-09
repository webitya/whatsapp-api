"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BookDemo = () => {
    return (
        <section id="book-demo" className="py-24 relative bg-zinc-950 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-green/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-green/20 text-brand-green text-sm font-bold mb-4">
                            Limited Spots Available
                        </span>
                        <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
                        <p className="text-gray-400">
                            Book a free demo with our experts or chat with us on WhatsApp to get started immediately.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Form Option (Mockup) */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold mb-4">Request a Call Back</h3>
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-brand-green focus:outline-none text-white transition-colors"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-brand-green focus:outline-none text-white transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-brand-green focus:outline-none text-white transition-colors"
                                />
                                <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-brand-green hover:text-white transition-all duration-300 mt-2">
                                    Submit Request
                                </button>
                            </div>
                        </div>

                        {/* Direct Contact Option */}
                        <div className="flex flex-col justify-center items-center text-center space-y-6 md:border-l md:border-white/10 md:pl-8">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Instant Response</h3>
                                <p className="text-sm text-gray-400">Connect with us directly on WhatsApp</p>
                            </div>

                            <a
                                href="https://wa.me/916207732383"
                                target="_blank"
                                className="w-full py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                            >
                                <WhatsAppIcon /> Chat Now
                            </a>

                            <div className="w-full flex items-center gap-4">
                                <div className="h-px bg-white/10 flex-1" />
                                <span className="text-sm text-gray-500">OR</span>
                                <div className="h-px bg-white/10 flex-1" />
                            </div>

                            <a href="mailto:wa.webitya@gmail.com" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                                Email Us <ArrowForwardIcon fontSize="small" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDemo;
