"use client";

import React from "react";
import {
    Globe,
    Search,
    Target,
    Lightbulb,
    TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";

const detailedServices = [
    {
        title: "Website Development",
        description: "Membangun website commerce modern dengan conversion-focused experience yang premium dan scalable. Kami menggabungkan estetika tinggi dengan performa teknis yang ekstrem.",
        icon: <Globe className="w-5 h-5" />,
        features: ["Responsive Architecture", "Next-Gen Stack", "Premium UI/UX"],
        image: "/images/services/webdev.png"
    },
    {
        title: "SEO Management",
        description: "Meningkatkan organic visibility dan digital growth melalui strategi SEO yang berbasis data untuk memastikan brand Anda mendominasi pencarian global.",
        icon: <Search className="w-5 h-5" />,
        features: ["Semantic Search", "Technical SEO Audit", "Content Strategy"],
        image: "/images/services/seo.png"
    },
    {
        title: "SEM & Ads Management",
        description: "Performance advertising untuk acquisition dan conversion dengan pengelolaan budget yang presisi untuk hasil ROI yang tak tertandingi.",
        icon: <Target className="w-5 h-5" />,
        features: ["Precision Targeting", "ROI Tracking", "Conversion Ads"],
        image: "/images/services/ads.png"
    },
    {
        title: "Commerce Consultation",
        description: "Strategi digital commerce untuk membantu bisnis berkembang lebih cepat dengan roadmap pertumbuhan yang berkelanjutan dan terukur.",
        icon: <Lightbulb className="w-5 h-5" />,
        features: ["Market Intelligence", "Growth Strategy", "Business Insights"],
        image: "/images/services/consult.png"
    },
    {
        title: "Growth Optimization",
        description: "Optimasi berkelanjutan pada customer journey untuk memaksimalkan ROI dan peningkatan konversi yang eksponensial di setiap titik sentuh.",
        icon: <TrendingUp className="w-5 h-5" />,
        features: ["Funnel Engineering", "CRO Optimization", "A/B Testing"],
        image: "/images/services/growth.png"
    }
];

export function Services() {
    return (
        <section id="services-detailed" className="relative z-30 py-20 bg-[#030303] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mb-24">
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 leading-[1.1]">
                        Deep Growth Services <br />
                        <span className="text-zinc-500">for Modern Commerce</span>
                    </h2>
                    <p className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-xl font-light">
                        Layanan strategis yang mengintegrasikan infrastruktur teknologi terdepan dengan Roadmap pertumbuhan bisnis yang tajam.
                    </p>
                </div>

                <div className="space-y-20">
                    {detailedServices.map((service, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            key={i}
                            className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1 space-y-6">
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-blue-500 bg-zinc-950">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-white/90">{service.title}</h3>
                                    <p className="text-base text-zinc-500 leading-relaxed max-w-sm md:max-w-md">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    {service.features.map((f, j) => (
                                        <div key={j} className="flex items-center gap-2 text-zinc-600 group">
                                            <div className="w-1 h-1 rounded-full bg-blue-500/30 group-hover:bg-blue-500 transition-colors" />
                                            <span className="text-xs font-medium">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 w-full lg:max-w-xl">
                                <div className="relative aspect-video rounded-[2rem] bg-zinc-950 overflow-hidden border border-zinc-900 shadow-2xl transition-all duration-700">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover opacity-90 transition-all duration-1000 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
