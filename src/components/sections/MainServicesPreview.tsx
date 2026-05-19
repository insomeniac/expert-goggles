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
        description: "Website modern dengan premium UI/UX dan SEO-ready architecture.",
        icon: <Globe className="w-6 h-6" />,
        color: "bg-blue-500/10 text-blue-600",
    },
    {
        title: "SEO & Growth Management",
        description: "Meningkatkan organic visibility dan digital growth melalui strategi SEO end-to-end.",
        icon: <Search className="w-6 h-6" />,
        color: "bg-emerald-500/10 text-emerald-600",
    },
    {
        title: "SEM & Acquisition System",
        description: "Performance advertising untuk acquisition dan conversion dengan ROI terukur.",
        icon: <Megaphone className="w-6 h-6" />,
        color: "bg-orange-500/10 text-orange-600",
    },
    {
        title: "Smart POS Ecosystem",
        description: "Sistem POS modern untuk operasional yang lebih efisien dan terintegrasi offline-to-online.",
        icon: <Store className="w-6 h-6" />,
        color: "bg-purple-500/10 text-purple-600",
    },
    {
        title: "AI Commerce System",
        description: "AI-powered ecosystem untuk automation dan business intelligence yang cerdas.",
        icon: <BrainCircuit className="w-6 h-6" />,
        color: "bg-primary/10 text-primary",
    },
];

export function MainServicesPreview() {
    return (
        <section id="services" className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                            Complete Commerce <br /> Growth Ecosystem
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Kami menggabungkan teknologi dan strategi untuk membantu bisnis Anda berkembang lebih cepat di setiap lini.
                        </p>
                    </div>
                    <Button variant="ghost" className="group">
                        See all services
                        <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 relative overflow-hidden">
                            <div className={`absolute top-0 right-0 w-24 h-24 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity ${service.color.split(' ')[0]}`} />
                            <CardHeader>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${service.color}`}>
                                    {service.icon}
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                                <CardDescription className="text-base pt-2">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="link" className="px-0 text-primary group/btn">
                                    Learn more <ArrowUpRight className="ml-1 w-3 h-3 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}

                    {/* Growth Card - Special appearance */}
                    <Card className="bg-primary text-primary-foreground group hover:rotate-1 transition-transform relative overflow-hidden flex flex-col justify-center p-8 border-none">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />
                        <h3 className="text-2xl font-bold mb-4">Ready to accelerate your business?</h3>
                        <p className="opacity-90 mb-8">Dapatkan konsultasi gratis mengenai growth strategy bisnis Anda bersama tim ahli kami.</p>
                        <Button variant="secondary" className="w-full rounded-full font-bold">
                            Schedule Discussion
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    );
}
