"use client";

import React from "react";
import {
    ShoppingBag,
    UtensilsCrossed,
    Gamepad2,
    Shirt,
    Sparkles,
    Network,
    Building2
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const solutions = [
    {
        title: "Retail Commerce",
        description: "Solusi modern untuk retail yang ingin meningkatkan operational efficiency dan customer experience.",
        icon: <ShoppingBag className="w-8 h-8" />,
        gradient: "from-blue-500 to-cyan-400"
    },
    {
        title: "F&B Business",
        description: "Digital ecosystem untuk bisnis F&B yang ingin berkembang secara modern dan scalable.",
        icon: <UtensilsCrossed className="w-8 h-8" />,
        gradient: "from-orange-500 to-red-400"
    },
    {
        title: "Hobby Commerce",
        description: "Community-driven commerce ecosystem untuk bisnis penghobi dan niche market.",
        icon: <Gamepad2 className="w-8 h-8" />,
        gradient: "from-purple-500 to-indigo-400"
    },
    {
        title: "Fashion & Lifestyle",
        description: "Digital experience premium untuk fashion dan lifestyle brand modern.",
        icon: <Shirt className="w-8 h-8" />,
        gradient: "from-pink-500 to-rose-400"
    },
    {
        title: "Beauty & Skincare",
        description: "Growth ecosystem untuk beauty brand yang ingin meningkatkan branding dan digital acquisition.",
        icon: <Sparkles className="w-8 h-8" />,
        gradient: "from-teal-500 to-emerald-400"
    },
    {
        title: "Multi-Branch Business",
        description: "Centralized infrastructure untuk bisnis dengan banyak cabang dan operasional kompleks.",
        icon: <Network className="w-8 h-8" />,
        gradient: "from-indigo-500 to-blue-400"
    },
    {
        title: "Enterprise Commerce",
        description: "Infrastructure modern untuk perusahaan yang membutuhkan scalability dan integration.",
        icon: <Building2 className="w-8 h-8" />,
        gradient: "from-slate-700 to-slate-900"
    },
];

export function Solutions() {
    return (
        <section id="solutions" className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Solutions Built for Modern <br /> Commerce Industries
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Exa Commerce membantu berbagai industri membangun website modern, meningkatkan visibility digital, dan mengembangkan operasional bisnis melalui AI-powered ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {solutions.map((solution, i) => (
                        <Card key={i} className="group hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30 overflow-hidden relative min-h-[240px]">
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

                            <CardHeader className="relative z-10 h-full flex flex-col justify-between">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} text-white flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                                    {solution.icon}
                                </div>
                                <div>
                                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{solution.title}</CardTitle>
                                    <CardDescription className="text-sm leading-relaxed">
                                        {solution.description}
                                    </CardDescription>
                                </div>
                            </CardHeader>

                            {/* Decorative line */}
                            <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${solution.gradient} transition-all duration-500 group-hover:w-full`} />
                        </Card>
                    ))}

                    {/* Custom Solutions Card */}
                    <Card className="bg-muted border-dashed border-2 flex flex-col items-center justify-center text-center p-8 min-h-[240px] group transition-all">
                        <div className="w-14 h-14 rounded-full border-2 border-primary/30 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                            <span className="text-2xl font-bold">+</span>
                        </div>
                        <h3 className="font-bold mb-2">Need a Custom Solution?</h3>
                        <p className="text-xs text-muted-foreground mb-4">Kami dapat menyesuaikan platform sesuai kebutuhan spesifik industri Anda.</p>
                        <button className="text-xs font-bold text-primary hover:underline transition-all">Contact Expert</button>
                    </Card>
                </div>
            </div>
        </section>
    );
}
