"use client";

import React from "react";
import { ExternalLink, Layers, Search, Cpu, MonitorPlay } from "lucide-react";

const portfolioItems = [
    {
        category: "Commerce Website",
        title: "Luxury Fashion Hub",
        description: "Website modern dengan premium UI/UX dan conversion-focused experience.",
        image: "/api/placeholder/800/600",
        tags: ["Next.js", "Shadcn UI", "Premium Design"],
        metrics: "45% Increase in Conversion",
        icon: <Layers size={18} />
    },
    {
        category: "SEO & Growth",
        title: "EcoRetail Global Visibility",
        description: "Project dengan fokus search visibility dan digital growth yang masif.",
        image: "/api/placeholder/800/600",
        tags: ["SEO", "Growth Strategy", "Analytics"],
        metrics: "+300% Organic Traffic",
        icon: <Search size={18} />
    },
    {
        category: "Smart POS Ecosystem",
        title: "BistroChain Operational Hub",
        description: "Operational ecosystem dan modern POS experience untuk 50+ cabang.",
        image: "/api/placeholder/800/600",
        tags: ["POS", "Inventory", "Multi-branch"],
        metrics: "30% Operational Efficiency",
        icon: <MonitorPlay size={18} />
    },
    {
        category: "AI Commerce Experience",
        title: "Predictive Intelligence Dashboard",
        description: "AI-powered dashboard, analytics, dan automation ecosystem.",
        image: "/api/placeholder/800/600",
        tags: ["AI", "Automation", "Big Data"],
        metrics: "Real-time Insights",
        icon: <Cpu size={18} />
    }
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-black text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Crafting Digital Excellence
                    </h2>
                    <p className="text-xl text-gray-400">
                        Kami tidak sekadar membangun aplikasi; kami menciptakan infrastruktur pertumbuhan yang mempersepsikan nilai brand Anda secara premium.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                    {portfolioItems.map((item, i) => (
                        <div key={i} className="group relative">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-all duration-500">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <div className="flex gap-2 mb-4">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-widest">{tag}</span>
                                        ))}
                                    </div>
                                    <button className="w-fit flex items-center gap-2 text-primary font-bold hover:underline">
                                        View Case Study <ExternalLink size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-between items-start">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                                        {item.icon}
                                        {item.category}
                                    </div>
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                    <p className="text-gray-400 max-w-sm line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pl-4 border-l border-white/10 text-right">
                                    <div className="text-primary text-2xl font-bold">{item.metrics.split(' ')[0]}</div>
                                    <div className="text-xs text-gray-500 uppercase font-medium">{item.metrics.split(' ').slice(1).join(' ')}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 pt-20 border-t border-white/10 grid lg:grid-cols-4 gap-8">
                    {[
                        { title: "Premium Experience", text: "Fokus pada detail estetika dan kenyamanan user." },
                        { title: "Scalability", text: "Siap berkembang seiring pertumbuhan bisnis Anda." },
                        { title: "Branding Perception", text: "Meningkatkan kepercayaan melalui desain profesional." },
                        { title: "Operational Efficiency", text: "Menghemat waktu melalui sistem yang terintegrasi." }
                    ].map((feature, i) => (
                        <div key={i} className="space-y-4">
                            <h4 className="font-bold text-lg text-primary">{feature.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
