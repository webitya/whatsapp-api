"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
    useEffect(() => {
        // Only initialize smooth scroll on desktop (width > 1024px)
        // This ensures mobile uses 100% native scroll for zero lag
        if (typeof window !== 'undefined' && window.innerWidth < 1024) {
            return;
        }

        const lenis = new Lenis({
            duration: 2.5, // "Feather touch" extreme smoothness
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 0.8,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
