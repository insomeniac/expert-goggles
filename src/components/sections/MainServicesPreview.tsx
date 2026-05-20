"use client";

import React from "react";
import {
    Globe,
    Search,
    Megaphone,
    Store,
    BrainCircuit,
    ArrowUpRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
        <section id="services" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Subtle Silver Glow top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-semibold uppercase tracking-widest">
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
                        <div
                            key={i}
                            className="group p-8 border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/60 transition-all duration-500 relative overflow-hidden cursor-default"
                        >
                            {/* Hover Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center mb-10 text-zinc-400 group-hover:text-white group-hover:border-zinc-500 transition-all duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-zinc-100 group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-zinc-500 group-hover:text-zinc-400 leading-relaxed min-h-[80px]">
                                    {service.description}
                                </p>
                                <div className="mt-8 pt-8 border-t border-zinc-900 flex items-center gap-2 text-xs font-bold text-zinc-600 group-hover:text-blue-500 transition-colors">
                                    Exploration Service <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Growth Card - Special appearance */}
                    <div className="group p-8 bg-zinc-100 text-black flex flex-col justify-between relative overflow-hidden min-h-[300px]">
                        <div className="relative z-10">
                            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 leading-tight">
                                Ready to accelerate your business growth?
                            </h3>
                            <p className="text-sm sm:text-base text-zinc-600 mb-8">
                                Bangun infrastruktur commerce modern bersama tim ahli kami sekarang.
                            </p>
                        </div>
                        <Button className="w-full h-12 sm:h-14 rounded-full bg-black text-white hover:bg-zinc-800 transition-all mt-auto font-bold uppercase tracking-wider text-xs">
                            Schedule Discussion
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
