"use client";

import React from "react";
import { Globe, Store, BrainCircuit, LayoutDashboard, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const modules = [
    {
        id: "website",
        title: "Commerce Website",
        icon: <Globe className="w-5 h-5" />,
        description: "Website modern dengan premium UI/UX, mobile-first architecture, dan SEO-ready structure.",
        features: ["Premium UI/UX", "SEO-ready architecture", "Mobile-first experience", "Fast performance", "Conversion-focused layout"],
        image: "/api/placeholder/600/400"
    },
    {
        id: "pos",
        title: "Smart POS",
        icon: <Store className="w-5 h-5" />,
        description: "Sistem POS modern untuk operasional yang lebih efisien dan terintegrasi.",
        features: ["Real-time synchronization", "Multi-branch management", "Inventory management", "Customer management", "Sales analytics"],
        image: "/api/placeholder/600/400"
    },
    {
        id: "ai",
        title: "AI Commerce",
        icon: <BrainCircuit className="w-5 h-5" />,
        description: "AI-powered ecosystem untuk automation, analytics, dan business intelligence.",
        features: ["Predictive analytics", "AI automation", "AI recommendation", "Customer intelligence", "Business insights"],
        image: "/api/placeholder/600/400"
    },
    {
        id: "analytics",
        title: "Analytics Dashboard",
        icon: <LayoutDashboard className="w-5 h-5" />,
        description: "Dashboard realtime untuk monitoring performa bisnis dan growth analytics.",
        features: ["Realtime reporting", "Traffic analytics", "Sales performance", "Conversion tracking", "Operational insights"],
        image: "/api/placeholder/600/400"
    }
];

export function Platform() {
    return (
        <section id="platform" className="py-24 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Unified Commerce Growth Platform
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Satu ecosystem modern untuk website, commerce, SEO, AI, analytics, dan operational growth.
                    </p>
                </div>

                <Tabs defaultValue="website" className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto p-1 bg-background border border-border rounded-xl mb-12">
                        {modules.map((m) => (
                            <TabsTrigger
                                key={m.id}
                                value={m.id}
                                className="py-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex flex-col md:flex-row items-center gap-2"
                            >
                                {m.icon}
                                <span className="font-semibold">{m.title}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {modules.map((m) => (
                        <TabsContent key={m.id} value={m.id} className="mt-0">
                            <div className="grid lg:grid-cols-2 gap-12 items-center bg-background rounded-3xl p-8 md:p-12 border border-border shadow-2xl shadow-primary/5">
                                <div className="space-y-8">
                                    <h3 className="text-3xl font-bold">{m.title}</h3>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        {m.description}
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {m.features.map((f, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                    <CheckCircle2 size={14} />
                                                </div>
                                                <span className="font-medium">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden rounded-2xl border border-border/50">
                                    <img
                                        src={m.image}
                                        alt={m.title}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

                <div className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Membangun fondasi digital yang scalable</h3>
                            <p className="text-lg opacity-90">
                                Platform Exa Commerce dirancang untuk membantu bisnis meningkatkan branding, efisiensi operasional, customer experience, dan visibility secara simultan.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <button className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-opacity-90 transition-all shadow-lg">
                                View Details
                            </button>
                            <button className="px-8 py-3 bg-primary-foreground/10 border border-white/20 font-bold rounded-full hover:bg-white/10 transition-all">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
