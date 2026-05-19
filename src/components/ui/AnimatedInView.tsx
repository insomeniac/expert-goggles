"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

type Direction = "bottom" | "top" | "left" | "right" | "none";

type AnimatedInViewProps = {
    children: ReactNode;
    threshold?: number;
    from?: Direction;
    duration?: number;
    delay?: number;
    once?: boolean;
    className?: string;
};

const AnimatedInView = ({
    children,
    threshold = 0.1,
    from = "bottom",
    duration = 700,
    delay = 0,
    once = true,
    className = "",
}: AnimatedInViewProps) => {
    const ref = useRef<HTMLDivElement>(null);
    // Start as true on server (SSR) so content is never invisible on initial load.
    // On client, we'll let IntersectionObserver take over after mount.
    const [isInView, setIsInView] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Reset to hidden so the entrance animation can play
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
            // Only animate if not already fully visible on load
            if (!alreadyVisible) {
                setIsInView(false);
            }
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (once && isInView) return;
                setIsInView(entry.isIntersecting);
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [mounted, threshold, once, isInView]);

    const translateMap: Record<Direction, string> = {
        bottom: "translateY(30px)",
        top: "translateY(-30px)",
        left: "translateX(-30px)",
        right: "translateX(30px)",
        none: "none",
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "none" : translateMap[from],
                transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    );
};

export default AnimatedInView;
