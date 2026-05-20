"use client";

import {
    Globe,
    Search,
    Megaphone,
    Store,
    BrainCircuit,
    ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SpotlightCard from "@/components/ui/SpotlightCard";

const services = [
    {
        title: "Commerce Website Development",
        description: "Website modern dengan premium UI/UX, mobile-first architecture, dan SEO-ready structure untuk conversion maksimal.",
        icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
        title: "SEO & Growth Management",
        description: "Meningkatkan organic visibility dan digital growth melalui strategi SEO end-to-end yang komprehensif.",
        icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
        title: "SEM & Acquisition System",
        description: "Performance advertising untuk acquisition dan conversion dengan ROI terukur dan optimasi berkelanjutan.",
        icon: <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
        title: "Smart POS Ecosystem",
        description: "Sistem POS modern untuk operasional yang lebih efisien, terintegrasi, dan siap mendukung multi-branch business.",
        icon: <Store className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
        title: "AI Commerce System",
        description: "AI-powered ecosystem untuk automation dan business intelligence guna mendukung pengambilan keputusan yang lebih cerdas.",
        icon: <BrainCircuit className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
];

export function MainServicesPreview() {
    return (
        <section id="services" className="relative z-20 py-24 bg-black text-white overflow-hidden">
            {/* Subtle Silver Glow top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-medium tracking-wider uppercase">
                            Comprehensive Solution
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
                            Complete Commerce <br className="hidden sm:block" /> Growth Ecosystem
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
                            Kami menggabungkan teknologi modern, AI infrastructure, dan growth strategy untuk membantu bisnis Anda berkembang lebih cepat di setiap lini digital.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {services.map((service, i) => (
                        <SpotlightCard
                            key={i}
                            className="group p-8 text-left h-full border border-zinc-900 bg-zinc-950 transition-all duration-500 cursor-default"
                            spotlightColor="rgba(59, 130, 246, 0.12)"
                        >
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="mb-8">
                                    <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all duration-500">
                                        {service.icon}
                                    </div>
                                </div>

                                <div className="space-y-4 flex-1">
                                    <h3 className="text-xl font-medium text-white tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-zinc-500 group-hover:text-zinc-400 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-8 pt-8 border-t border-zinc-900 flex items-center justify-between group-hover:border-zinc-800 transition-colors">
                                    <span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-400">
                                        Learn more
                                    </span>
                                    <ArrowUpRight size={16} className="text-zinc-700 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}

                    {/* Growth Card - Metallic Dark Version */}
                    <div className="group p-8 bg-black border border-zinc-800 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
                        {/* Subtle Mesh Background Overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f615,transparent_70%)]" />

                        <div className="relative z-10">
                            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-4 leading-tight">
                                Ready to accelerate your business growth?
                            </h3>
                            <p className="text-sm text-zinc-500 leading-relaxed max-w-[280px]">
                                Build modern commerce infrastructure with our expert team today.
                            </p>
                        </div>

                        <div className="relative z-10 mt-8">
                            <Button className="w-full h-12 rounded-none bg-white text-black hover:bg-zinc-200 transition-all font-bold text-xs">
                                Schedule Discussion
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
