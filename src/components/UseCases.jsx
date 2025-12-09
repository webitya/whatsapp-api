"use client";

import { motion } from "framer-motion";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SchoolIcon from "@mui/icons-material/School";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const useCases = [
    {
        category: "E-Commerce",
        icon: <ShoppingBagIcon />,
        title: "Recover Abandoned Carts",
        description: "Send automated reminders to customers who left items in their cart and boost recovery by 45%.",
        image: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
    },
    {
        category: "Education",
        icon: <SchoolIcon />,
        title: "Student Updates",
        description: "Send class schedules, fee reminders, and exam results directly to effective parent communication.",
        image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
        category: "Real Estate",
        icon: <HomeWorkIcon />,
        title: "Property Listings",
        description: "Share property brochures, virtual tours, and schedule site visits instantly on WhatsApp.",
        image: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
    },
    {
        category: "Hospitality",
        icon: <RestaurantIcon />,
        title: "Booking & Reservations",
        description: "Confirm table bookings, send menu links, and manage delivery orders seamlessly.",
        image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    },
];

const UseCases = () => {
    return (
        <section id="use-cases" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 blur-[150px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Header */}
                    <div className="lg:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-bold mb-6"
                        >
                            Tailored for <br />
                            <span className="text-gradient-brand">Every Industry</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg mb-8"
                        >
                            Whether you run a local store or a growing enterprise, Webitya adapts to your specific needs.
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors"
                        >
                            Explore All Industries
                        </motion.button>
                    </div>

                    {/* Right Grid */}
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-3xl border border-white/10 ${useCase.image} hover:border-white/30 transition-all duration-300 relative overflow-hidden group`}
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="p-2 rounded-full bg-white/10 text-white">
                                        {useCase.icon}
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="text-xs font-bold tracking-wider text-white/60 mb-2 uppercase">{useCase.category}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                                    <p className="text-sm text-gray-300">{useCase.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseCases;
