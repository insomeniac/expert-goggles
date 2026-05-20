"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Globe, Store, BrainCircuit, LayoutDashboard } from "lucide-react";

const modules = [
    {
        id: "website",
        title: "Commerce Website",
        icon: <Globe className="w-4 h-4" />,
        description: "Website modern dengan premium UI/UX, mobile-first architecture, dan SEO-ready structure.",
        features: ["Premium UI/UX", "SEO-ready architecture", "Mobile-first experience", "Fast performance", "Conversion-focused layout"],
        image: "/images/platform/website.png"
    },
    {
        id: "pos",
        title: "Smart POS",
        icon: <Store className="w-4 h-4" />,
        description: "Sistem POS modern untuk operasional yang lebih efisien dan terintegrasi.",
        features: ["Real-time synchronization", "Multi-branch management", "Inventory management", "Customer management", "Sales analytics"],
        image: "/images/platform/pos.png"
    },
    {
        id: "ai",
        title: "AI Commerce",
        icon: <BrainCircuit className="w-4 h-4" />,
        description: "AI-powered ecosystem untuk automation, analytics, dan business intelligence.",
        features: ["Predictive analytics", "AI automation", "AI recommendation", "Customer intelligence", "Business insights"],
        image: "/images/platform/ai.png"
    },
    {
        id: "analytics",
        title: "Analytics Dashboard",
        icon: <LayoutDashboard className="w-4 h-4" />,
        description: "Dashboard realtime untuk monitoring performa bisnis dan growth analytics.",
        features: ["Realtime reporting", "Traffic analytics", "Sales performance", "Conversion tracking", "Operational insights"],
        image: "/images/platform/analytics.png"
    }
];

const StickyCard = ({
    title,
    description,
    features,
    image,
    progress,
    range,
    targetScale,
    i
}: any) => {
    const container = useRef<HTMLDivElement>(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="sticky top-[15vh] flex items-center justify-center mb-10"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 40}px)`,
                }}
                className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center bg-zinc-950 rounded-3xl p-8 md:p-10 border border-zinc-900 relative overflow-hidden w-full shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
            >
                <div className="space-y-8 relative z-10 text-left">
                    <div className="space-y-3">
                        <h3 className="text-2xl md:text-3xl font-medium text-white">{title}</h3>
                        <p className="text-base text-zinc-500 leading-relaxed max-w-md">
                            {description}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 text-zinc-500">
                        {features.map((f: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                                <span className="text-sm">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900 h-[280px] md:h-[320px]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
            </motion.div>
        </div>
    );
};

export function Platform() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <section id="platform" ref={container} className="relative z-20 bg-[#030303] pb-24">
            <div className="container mx-auto px-4 md:px-6 pt-24 mb-[20vh]">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Unified Growth Platform
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-500 max-w-xl mx-auto leading-relaxed font-light">
                        Satu ekosistem terpadu untuk mengelola website, commerce, operasional, dan kecerdasan buatan secara simultan.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                {modules.map((module, i) => {
                    const targetScale = 1 - ((modules.length - i - 1) * 0.05);
                    return (
                        <StickyCard
                            key={module.id}
                            i={i}
                            {...module}
                            progress={scrollYProgress}
                            range={[i * 0.2, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>

            {/* Scroll Buffer Spacer */}
            <div className="h-[20vh] w-full" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-950 border border-zinc-900 overflow-hidden relative group text-center lg:text-left">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f608,transparent_70%)]" />

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                        <div className="max-w-xl">
                            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">Membangun fondasi digital yang scalable</h3>
                            <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-light">
                                Platform Exantra dirancang untuk membantu bisnis meningkatkan branding, efisiensi operasional, customer experience, dan visibility secara simultan.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <button className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-sm">
                                View Details
                            </button>
                            <button className="px-10 py-4 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-full hover:bg-zinc-800 transition-all text-sm">
                                Download Roadmap
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
