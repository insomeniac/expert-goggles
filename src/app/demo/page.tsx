"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedInView from "@/components/ui/AnimatedInView";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import {
    Play,
    Globe,
    Cpu,
    Bot,
    BarChart3,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Monitor,
} from "lucide-react";

const demoModules = [
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Commerce Website",
        description: "Explore premium website experience dengan modern UI/UX.",
        iconColor: "text-cyan-400",
        gradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "Smart POS System",
        description: "Lihat bagaimana POS modern mengelola operasional bisnis.",
        iconColor: "text-violet-400",
        gradient: "from-violet-500/10 to-purple-500/10",
    },
    {
        icon: <Bot className="w-6 h-6" />,
        title: "AI Commerce Engine",
        description: "Rasakan kekuatan AI dalam commerce automation.",
        iconColor: "text-rose-400",
        gradient: "from-rose-500/10 to-pink-500/10",
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Analytics Dashboard",
        description: "Pantau performa bisnis dengan realtime analytics.",
        iconColor: "text-emerald-400",
        gradient: "from-emerald-500/10 to-green-500/10",
    },
];

const benefits = [
    "Akses penuh ke semua fitur platform",
    "Guided tour oleh product specialist",
    "Simulasi use-case sesuai industri Anda",
    "Q&A session dengan tim ahli",
    "Tanpa komitmen, tanpa biaya",
];

export default function DemoPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section className="relative pt-32 pb-20 px-6 sm:px-10 lg:px-20 xl:px-32 overflow-hidden">
                    <div className="absolute inset-0 radial-hero" />
                    <div className="absolute inset-0 grid-bg" />
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-exa-accent/8 rounded-full blur-[120px] animate-pulse-glow" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <AnimatedInView from="bottom">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-exa-accent/10 border border-exa-accent/20 mb-8">
                                <Play className="w-3.5 h-3.5 text-exa-accent-light" />
                                <span className="text-xs font-semibold tracking-widest text-exa-accent-light uppercase">
                                    Experience the Platform
                                </span>
                            </div>
                        </AnimatedInView>

                        <AnimatedInView from="bottom" delay={100}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
                                See Exa Commerce
                                <br />
                                <span className="gradient-text">In Action</span>
                            </h1>
                            <p className="text-lg text-exa-text-muted max-w-2xl mx-auto leading-relaxed mb-10">
                                Jadwalkan demo personal dan lihat bagaimana Exa Commerce dapat
                                mentransformasi operasional dan pertumbuhan bisnis Anda.
                            </p>
                        </AnimatedInView>

                        <AnimatedInView from="bottom" delay={200}>
                            <Link
                                href="#consultation"
                                className="group inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-exa-accent to-exa-accent-dark rounded-full hover:shadow-xl hover:shadow-exa-accent/25 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <Monitor className="w-5 h-5" />
                                Schedule Free Demo
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </AnimatedInView>
                    </div>
                </section>

                {/* Demo Modules */}
                <SectionWrapper>
                    <div className="max-w-6xl mx-auto">
                        <AnimatedInView from="bottom">
                            <div className="text-center mb-12">
                                <p className="text-xs font-semibold tracking-[0.2em] text-exa-accent-light uppercase mb-4">
                                    What You&apos;ll See
                                </p>
                                <h2 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-display)]">
                                    Explore the Complete Ecosystem
                                </h2>
                            </div>
                        </AnimatedInView>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {demoModules.map((module, i) => (
                                <AnimatedInView key={i} from="bottom" delay={i * 80}>
                                    <div className="group glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300 h-full cursor-pointer">
                                        <div
                                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                        />
                                        <div className="relative z-10">
                                            <div
                                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-4 ${module.iconColor} group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                {module.icon}
                                            </div>
                                            <h3 className="text-base font-semibold text-white mb-2">
                                                {module.title}
                                            </h3>
                                            <p className="text-sm text-exa-text-muted leading-relaxed">
                                                {module.description}
                                            </p>
                                        </div>
                                    </div>
                                </AnimatedInView>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>

                {/* Benefits */}
                <SectionWrapper withRadial>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <AnimatedInView from="left">
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.2em] text-exa-cyan uppercase mb-4">
                                        Demo Benefits
                                    </p>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-display)]">
                                        What You Get from
                                        <br />
                                        <span className="gradient-text">Your Demo Session</span>
                                    </h2>
                                    <p className="text-exa-text-muted leading-relaxed">
                                        Demo session dirancang untuk memberikan pemahaman menyeluruh
                                        tentang bagaimana platform dan services Exa Commerce dapat
                                        membantu pertumbuhan bisnis Anda.
                                    </p>
                                </div>
                            </AnimatedInView>

                            <AnimatedInView from="right" delay={150}>
                                <div className="space-y-3">
                                    {benefits.map((benefit, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 px-5 py-4 glass-card rounded-xl"
                                        >
                                            <CheckCircle className="w-5 h-5 text-exa-emerald shrink-0" />
                                            <span className="text-sm text-exa-text">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedInView>
                        </div>
                    </div>
                </SectionWrapper>

                {/* Brand Positioning */}
                <SectionWrapper>
                    <div className="max-w-3xl mx-auto text-center">
                        <AnimatedInView from="bottom">
                            <div className="glass-card rounded-2xl p-10 md:p-14">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-exa-accent/10 border border-exa-accent/20 mb-6">
                                    <Sparkles className="w-3 h-3 text-exa-accent-light" />
                                    <span className="text-[10px] font-semibold tracking-widest text-exa-accent-light uppercase">
                                        Brand Positioning
                                    </span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-[family-name:var(--font-display)]">
                                    Exa Commerce
                                </h2>
                                <p className="text-lg gradient-text font-semibold mb-8">
                                    AI-Powered Commerce Growth Infrastructure
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto text-left">
                                    <div>
                                        <p className="text-xs text-exa-text-dim uppercase tracking-wider mb-2">
                                            Bukan
                                        </p>
                                        <ul className="space-y-1.5">
                                            {[
                                                "Jasa website",
                                                "Software kasir",
                                                "Digital agency",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="text-sm text-exa-text-dim line-through decoration-red-400/40"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs text-exa-accent-light uppercase tracking-wider mb-2">
                                            Tetapi
                                        </p>
                                        <ul className="space-y-1.5">
                                            {[
                                                "Partner pertumbuhan bisnis",
                                                "Modern tech infrastructure",
                                                "AI-powered ecosystem",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="text-sm text-exa-text font-medium"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <Link
                                        href="#consultation"
                                        className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-exa-accent to-exa-accent-dark rounded-full hover:shadow-xl hover:shadow-exa-accent/25 hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        Start Your Journey
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </AnimatedInView>
                    </div>
                </SectionWrapper>
            </main>
            <Footer />
        </>
    );
}
