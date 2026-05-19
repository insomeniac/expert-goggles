"use client";

import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import AnimatedInView from "@/components/ui/AnimatedInView";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 radial-hero" />
                <div className="absolute inset-0 grid-bg" />
                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-exa-accent/8 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-exa-cyan/6 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-exa-violet/5 rounded-full blur-[140px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Eyebrow */}
                <AnimatedInView from="bottom" delay={0}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-exa-accent/10 border border-exa-accent/20 mb-8">
                        <Sparkles className="w-3.5 h-3.5 text-exa-accent-light" />
                        <span className="text-xs font-semibold tracking-widest text-exa-accent-light uppercase">
                            AI-Powered Commerce Growth Infrastructure
                        </span>
                    </div>
                </AnimatedInView>

                {/* Headline */}
                <AnimatedInView from="bottom" delay={100}>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6 font-[family-name:var(--font-display)]">
                        Build Modern
                        <br />
                        Commerce{" "}
                        <span className="gradient-text">with AI</span>
                    </h1>
                </AnimatedInView>

                {/* Subheadline */}
                <AnimatedInView from="bottom" delay={200}>
                    <p className="text-base sm:text-lg text-exa-text-muted max-w-2xl mx-auto leading-relaxed mb-4">
                        Exa Commerce membantu bisnis membangun website commerce modern,
                        meningkatkan visibility melalui SEO & SEM, serta mengembangkan
                        operasional bisnis dalam satu ecosystem berbasis AI.
                    </p>
                    <p className="text-sm text-exa-text-dim max-w-xl mx-auto leading-relaxed mb-10">
                        Kami menggabungkan technology, commerce, automation, dan growth
                        strategy untuk membantu bisnis berkembang lebih cepat di era digital.
                    </p>
                </AnimatedInView>

                {/* CTAs */}
                <AnimatedInView from="bottom" delay={300}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link
                            href="#consultation"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-exa-accent to-exa-accent-dark rounded-full hover:shadow-xl hover:shadow-exa-accent/25 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Request Consultation
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/platform"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-exa-text border border-white/10 rounded-full hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
                        >
                            <Play className="w-4 h-4" />
                            Explore Platform
                        </Link>
                    </div>
                </AnimatedInView>

                {/* Trust Statement */}
                <AnimatedInView from="bottom" delay={400}>
                    <p className="text-xs text-exa-text-dim tracking-wide">
                        Built for growing brands, modern retailers, and businesses ready to
                        scale.
                    </p>
                </AnimatedInView>

                {/* Decorative bottom gradient line */}
                <AnimatedInView from="bottom" delay={500}>
                    <div className="mt-16 mx-auto max-w-md h-px bg-gradient-to-r from-transparent via-exa-accent/40 to-transparent" />
                </AnimatedInView>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-exa-dark to-transparent" />
        </section>
    );
}
