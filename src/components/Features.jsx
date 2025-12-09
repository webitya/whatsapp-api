"use client";

import { motion } from "framer-motion";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ChatIcon from "@mui/icons-material/Chat";
import CampaignIcon from "@mui/icons-material/Campaign";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const features = [
    {
        icon: <ChatIcon fontSize="large" />,
        title: "Smart Auto-Replies",
        description: "Instantly respond to common customer queries 24/7 with intelligent automated flows.",
    },
    {
        icon: <CampaignIcon fontSize="large" />,
        title: "Bulk Broadcasting",
        description: "Send personalized promotional offers and updates to thousands of customers in one click.",
    },
    {
        icon: <SupportAgentIcon fontSize="large" />,
        title: "Multi-Agent Support",
        description: "Enable your entire team to manage customer chats from a single shared dashboard.",
    },
    {
        icon: <AutoAwesomeIcon fontSize="large" />,
        title: "Green Tick Verification",
        description: "Build trust with the official Green Tick badge on your WhatsApp Business profile.",
    },
    {
        icon: <AnalyticsIcon fontSize="large" />,
        title: "Detailed Analytics",
        description: "Track message delivery, read rates, and customer engagement with real-time reports.",
    },
    {
        icon: <VerifiedUserIcon fontSize="large" />,
        title: "Secure & Compliant",
        description: "Enterprise-grade security adhering to Meta's strict policies and data protection standards.",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 relative bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Why Choose <span className="text-gradient-brand">Webitya?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Everything you need to scale your business on WhatsApp, packaged in a powerful, easy-to-use platform.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-green/30 hover:bg-white/[0.07] transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
