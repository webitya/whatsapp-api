"use client";

import { motion } from "framer-motion";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const steps = [
    {
        icon: <EventAvailableIcon fontSize="large" />,
        step: "01",
        title: "Book a Demo",
        description: "Schedule a free consultation call with our experts to understand your requirements.",
    },
    {
        icon: <SettingsSuggestIcon fontSize="large" />,
        step: "02",
        title: "Quick Onboarding",
        description: "We set up your WhatsApp Business API account, verify your number, and configure automation flows.",
    },
    {
        icon: <RocketLaunchIcon fontSize="large" />,
        step: "03",
        title: "Go Live & Grow",
        description: "Launch your campaigns, start converting leads, and watch your business grow automatically.",
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-gray-400">Three simple steps to automate your business.</p>
                </div>

                <div className="relative grid md:grid-cols-3 gap-12">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative text-center"
                        >
                            <div className="relative w-24 h-24 mx-auto bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 z-10 shadow-xl group hover:border-brand-green/50 transition-colors duration-300">
                                <span className="text-brand-green group-hover:scale-110 transition-transform duration-300">{step.icon}</span>
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-green text-black text-sm flex items-center justify-center font-bold">
                                    {step.step}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-400 max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
