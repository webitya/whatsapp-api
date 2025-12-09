"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const questions = [
    {
        question: "What is the Official WhatsApp Business API?",
        answer: "It is an enterprise-grade solution by Meta allowing businesses to communicate with customers at scale using automation, chatbots, and broadcasts, unlike the standard WhatsApp app."
    },
    {
        question: "How do I get the Green Tick verification?",
        answer: "We assist you in submitting the application to Meta. While approval depends on Meta's criteria (brand awareness, domain authority), our team ensures your profile is optimized for the highest chance of success."
    },
    {
        question: "Can I use multiple numbers?",
        answer: "Yes, you can manage multiple numbers under a single WhatsApp Business API account, perfect for different departments or regions."
    },
    {
        question: "Is there a setup fee?",
        answer: "No, our standard onboarding is free. You only pay for the conversation charges directly billed by Meta tailored to your volume."
    },
    {
        question: "Do you provide technical support?",
        answer: "Absolutely! We offer 24/7 technical support to ensure your automation flows run smoothly and your business never stops."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="py-24 bg-black">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-400">Everything you need to know about the product and billing.</p>
                </div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/30"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-white">{item.question}</span>
                                <span className={`text-brand-green transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>
                                    {activeIndex === index ? <RemoveIcon /> : <AddIcon />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
