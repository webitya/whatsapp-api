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
    description: "Schedule a 15-min free consultation. We'll understand your needs.",
  },
  {
    icon: <SettingsSuggestIcon fontSize="large" />,
    step: "02",
    title: "Instant Setup",
    description: "Our team configures your API & Green Tick application same-day.",
  },
  {
    icon: <RocketLaunchIcon fontSize="large" />,
    step: "03",
    title: "Scale & Grow",
    description: "Launch campaigns, setup chatbots, and watch your revenue soar.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-4"
          >
            Go Live in <span className="text-gradient-brand">Minutes</span>, Not Days.
          </motion.h2>
          <p className="text-gray-400 text-lg">We handle the technical heavy lifting.</p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12">
            {/* Connecting Line (Desktop) - Animated */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-zinc-800">
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="w-full h-full bg-brand-green origin-left"
                />
            </div>

            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 }}
                    className="relative text-center group"
                >
                    <div className="relative w-24 h-24 mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl rotate-45 flex items-center justify-center text-white mb-10 z-10 transition-all duration-500 group-hover:border-brand-green group-hover:scale-110 shadow-lg shadow-black/50">
                       <div className="-rotate-45 text-brand-green">
                           {step.icon}
                       </div>
                       <div className="absolute -top-3 -right-3 w-8 h-8 -rotate-45 rounded-full bg-zinc-800 border border-zinc-700 text-white text-xs flex items-center justify-center font-bold z-20 group-hover:bg-brand-green group-hover:text-black group-hover:border-brand-green transition-colors">
                           {step.step}
                       </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-green transition-colors">{step.title}</h3>
                    <p className="text-gray-400 max-w-xs mx-auto leading-relaxed">
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
