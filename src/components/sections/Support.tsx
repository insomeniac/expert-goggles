"use client";

import React from "react";
import {
    Headphones,
    FileText,
    MessagesSquare,
    Settings2,
    Users2,
    HeartHandshake,
    CheckCircle2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Support() {
    return (
        <section id="support" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Dedicated Support Ecosystem
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Kami menyediakan support ecosystem untuk membantu bisnis mengelola, mengembangkan, dan mengoptimalkan commerce infrastructure secara berkelanjutan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {[
                        {
                            title: "Technical Support",
                            description: "Pendampingan teknis untuk memastikan sistem berjalan secara optimal 24/7.",
                            icon: <Headphones className="w-6 h-6" />,
                        },
                        {
                            title: "Documentation",
                            description: "Panduan penggunaan platform dan ecosystem Exa Commerce yang komprehensif.",
                            icon: <FileText className="w-6 h-6" />,
                        },
                        {
                            title: "Consultation",
                            description: "Diskusi rutin mengenai kebutuhan bisnis dan strategi growth ecosystem ke depan.",
                            icon: <MessagesSquare className="w-6 h-6" />,
                        },
                        {
                            title: "Onboarding Assistance",
                            description: "Pendampingan implementasi dan setup platform hingga siap operasional.",
                            icon: <Users2 className="w-6 h-6" />,
                        },
                        {
                            title: "System Optimization",
                            description: "Optimasi performa website, SEO, dan operational ecosystem secara periodik.",
                            icon: <Settings2 className="w-6 h-6" />,
                        },
                    ].map((item, i) => (
                        <Card key={i} className="bg-background border-none shadow-xl shadow-black/5 hover:-translate-y-1 transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}

                    <Card className="bg-primary text-primary-foreground p-8 flex flex-col justify-center border-none">
                        <h3 className="text-xl font-bold mb-4">Need help right now?</h3>
                        <p className="opacity-90 mb-6 text-sm">Tim support kami siap membantu menjawab pertanyaan teknis maupun strategis Anda.</p>
                        <button className="px-6 py-2 bg-white text-primary font-bold rounded-full text-sm">
                            Contact Support
                        </button>
                    </Card>
                </div>

                <div className="bg-background rounded-[40px] p-10 md:p-20 border border-border overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/api/placeholder/600/600"
                                    alt="Commitment"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 p-8 bg-primary rounded-3xl text-primary-foreground shadow-2xl hidden md:block">
                                <HeartHandshake size={60} className="mb-4" />
                                <div className="text-3xl font-bold">100%</div>
                                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Commitment</div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                                Long-Term Partnership for Business Growth
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Kami percaya pertumbuhan bisnis membutuhkan lebih dari sekadar software. Exa Commerce hadir sebagai partner teknologi jangka panjang untuk membantu bisnis berkembang melalui website modern, SEO growth, AI ecosystem, dan commerce infrastructure yang scalable.
                            </p>

                            <div className="space-y-4">
                                {["Continuous Innovation", "Strategic Growth Consulting", "Proactive System Monitoring"].map((t, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-primary w-5 h-5" />
                                        <span className="font-semibold">{t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
