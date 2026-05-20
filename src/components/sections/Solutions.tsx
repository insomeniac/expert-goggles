"use client";

import React from "react";
import {
    ShoppingBag,
    UtensilsCrossed,
    Gamepad2,
    Shirt,
    Sparkles,
    Network,
    Building2,
    Plus
} from "lucide-react";

const solutions = [
    {
        title: "Retail Commerce",
        description: "Solusi modern untuk retail yang ingin meningkatkan operational efficiency dan customer experience.",
        icon: <ShoppingBag className="w-6 h-6" />,
        gradient: "from-blue-500/20 to-cyan-400/20",
        accent: "text-blue-400"
    },
    {
        title: "F&B Business",
        description: "Digital ecosystem untuk bisnis F&B yang ingin berkembang secara modern dan scalable.",
        icon: <UtensilsCrossed className="w-6 h-6" />,
        gradient: "from-orange-500/20 to-red-400/20",
        accent: "text-orange-400"
    },
    {
        title: "Hobby Commerce",
        description: "Community-driven commerce ecosystem untuk bisnis penghobi dan niche market.",
        icon: <Gamepad2 className="w-6 h-6" />,
        gradient: "from-purple-500/20 to-indigo-400/20",
        accent: "text-purple-400"
    },
    {
        title: "Fashion & Lifestyle",
        description: "Digital experience premium untuk fashion dan lifestyle brand modern.",
        icon: <Shirt className="w-6 h-6" />,
        gradient: "from-pink-500/20 to-rose-400/20",
        accent: "text-pink-400"
    },
    {
        title: "Beauty & Skincare",
        description: "Growth ecosystem untuk beauty brand yang ingin meningkatkan branding dan digital acquisition.",
        icon: <Sparkles className="w-6 h-6" />,
        gradient: "from-teal-500/20 to-emerald-400/20",
        accent: "text-teal-400"
    },
    {
        title: "Multi-Branch Business",
        description: "Centralized infrastructure untuk bisnis dengan banyak cabang dan operasional kompleks.",
        icon: <Network className="w-6 h-6" />,
        gradient: "from-indigo-500/20 to-blue-400/20",
        accent: "text-indigo-400"
    },
    {
        title: "Enterprise Commerce",
        description: "Infrastructure modern untuk perusahaan yang membutuhkan scalability dan integration.",
        icon: <Building2 className="w-6 h-6" />,
        gradient: "from-zinc-500/20 to-zinc-700/20",
        accent: "text-zinc-400"
    },
];

export function Solutions() {
    return (
        <section id="solutions" className="relative z-20 py-32 bg-[#030303] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-6xl font-medium tracking-tight text-white mb-6">
                        Industry-Tailored <br /> Solutions
                    </h2>
                    <p className="text-base md:text-lg text-zinc-500 leading-relaxed">
                        Exa Commerce mengintegrasikan AI-powered ecosystem untuk membantu setiap industri membangun skalabilitas yang eksponensial.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {solutions.map((solution, i) => (
                        <div key={i} className="group relative bg-zinc-950 border border-zinc-900 rounded-3xl p-8 transition-all duration-500 hover:border-zinc-700 hover:-translate-y-1 overflow-hidden h-full flex flex-col justify-between min-h-[260px]">
                            {/* Ambient Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />

                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 ${solution.accent} flex items-center justify-center mb-8 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-zinc-700`}>
                                    {solution.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-medium text-white group-hover:text-white transition-colors">{solution.title}</h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">
                                        {solution.description}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative line */}
                            <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${solution.gradient.replace('/20', '')} transition-all duration-700 group-hover:w-full`} />
                        </div>
                    ))}

                    {/* Custom Solutions Card */}
                    <div className="bg-transparent border-2 border-dashed border-zinc-900 rounded-3xl flex flex-col items-center justify-center text-center p-8 min-h-[260px] group hover:border-zinc-700 transition-all cursor-pointer overflow-hidden relative">
                        <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-12 h-12 rounded-full border border-zinc-800 text-zinc-500 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all transform group-hover:rotate-90">
                            <Plus size={20} />
                        </div>
                        <h3 className="text-lg font-medium text-zinc-400 mb-3 group-hover:text-white">Custom Needs?</h3>
                        <p className="text-xs text-zinc-600 leading-relaxed max-w-[180px]">Adaptasi infrastruktur sesuai spesifikasi unik bisnis Anda.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
