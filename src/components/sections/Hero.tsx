"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Rocket, ShieldCheck, Zap, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section id="home" className="sticky top-0 z-0 h-[100dvh] flex items-center pt-16 overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                >
                    <source src="/8939335-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay to make text readable */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20 flex flex-col justify-center min-h-full">
                <div className="flex flex-col items-start text-left max-w-4xl">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Sparkles size={14} className="sm:w-4 sm:h-4" />
                        AI-Powered Commerce Growth Infrastructure
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight text-white mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 leading-[1.1]">
                        Build Modern Commerce <br className="hidden sm:block" />
                        with AI
                    </h1>

                    {/* Subheadline */}
                    <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-900 leading-relaxed font-normal">
                        Exa Commerce membantu bisnis membangun website commerce modern, meningkatkan visibility melalui SEO & SEM, serta mengembangkan operasional bisnis dalam satu ecosystem berbasis AI.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold transition-all w-full sm:w-auto">
                            Request Consultation
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-white/10 hover:text-white px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold transition-all w-full sm:w-auto">
                            <PlayCircle className="mr-2 w-5 h-5" />
                            Explore Platform
                        </Button>
                    </div>

                    {/* Trust Statement */}
                    <div className="mt-10 sm:mt-16 pt-6 border-t border-white/20 w-full animate-in fade-in duration-1000 delay-500">
                        <p className="text-[10px] sm:text-xs font-medium text-white/50 uppercase tracking-wider mb-6">
                            Built for growing brands & modern retailers
                        </p>
                        <div className="flex flex-wrap items-center gap-6 sm:gap-10 md:gap-12 text-white/40">
                            <div className="flex items-center gap-2 font-semibold text-sm sm:text-base lg:text-lg tracking-tight">
                                <Rocket className="w-4 h-4" /> Venture
                            </div>
                            <div className="flex items-center gap-2 font-semibold text-sm sm:text-base lg:text-lg tracking-tight">
                                <Zap className="w-4 h-4" /> Scale
                            </div>
                            <div className="flex items-center gap-2 font-semibold text-sm sm:text-base lg:text-lg tracking-tight">
                                <ShieldCheck className="w-4 h-4" /> Trusted
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
