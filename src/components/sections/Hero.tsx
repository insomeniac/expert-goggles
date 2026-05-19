"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Rocket, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Sparkles size={16} />
                        AI-Powered Commerce Growth Infrastructure
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        Build Modern Commerce <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">with AI</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-900">
                        Exa Commerce membantu bisnis membangun website commerce modern, meningkatkan visibility melalui SEO & SEM, serta mengembangkan operasional bisnis dalam satu ecosystem berbasis AI.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <Button size="lg" className="rounded-full px-8 h-12 text-base font-semibold shadow-xl shadow-primary/20 group">
                            Request Consultation
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-semibold">
                            Explore Platform
                        </Button>
                    </div>

                    {/* Trust Statement */}
                    <div className="mt-16 pt-8 border-t border-border w-full max-w-3xl animate-in fade-in duration-1000 delay-500">
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                            Built for growing brands, modern retailers, and businesses ready to scale.
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                            {/* Replace with real logos or use Lucide icons as placeholders for now */}
                            <div className="flex items-center gap-2 font-bold text-xl"><Rocket className="w-6 h-6" /> VENTURE</div>
                            <div className="flex items-center gap-2 font-bold text-xl"><Zap className="w-6 h-6" /> SCALE</div>
                            <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck className="w-6 h-6" /> TRUSTED</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
