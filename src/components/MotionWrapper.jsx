"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";

export default function MotionWrapper({ children }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Listen for resize
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
            {children}
        </MotionConfig>
    );
}
