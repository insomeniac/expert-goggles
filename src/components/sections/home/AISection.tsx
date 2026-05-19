"use client";

import AnimatedInView from "@/components/ui/AnimatedInView";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
    Brain,
    Users,
    Lightbulb,
    Settings,
    TrendingUp,
    Sparkles,
} from "lucide-react";

const capabilities = [
    {
        icon: <Users className="w-5 h-5" />,
        label: "Memahami customer",
        desc: "Menganalisis perilaku belanja secara real-time."
    },
    {
        icon: <Lightbulb className="w-5 h-5" />,
        label: "Mengambil keputusan",
        desc: "Rekomendasi strategis berbasis data commerce."
    },
    {
        icon: <Settings className="w-5 h-5" />,
        label: "Mengelola operasional",
        desc: "Automasi workflow inventory & fulfillment."
    },
    {
        icon: <TrendingUp className="w-5 h-5" />,
        label: "Meningkatkan efficiency",
        desc: "Optimasi biaya operasional melalui AI."
    },
];

export default function AISection() {
    return (
        <SectionWrapper className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-exa-accent/5 via-exa-cyan/3 to-exa-violet/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    {/* Left - Text */}
                    <div className="lg:col-span-12 text-center mb-16">
                        <AnimatedInView from="bottom">
                            <p className="text-xs font-semibold tracking-[0.2em] text-exa-cyan uppercase mb-4">
                                AI Infrastructure
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-[family-name:var(--font-display)]">
                                AI Will Become the
                                <br />
                                Foundation of <span className="gradient-text">Modern Commerce</span>
                            </h2>
                            <p className="text-exa-text-muted leading-relaxed max-w-2xl mx-auto">
                                AI bukan lagi sekadar fitur tambahan. AI akan menjadi fondasi
                                utama bagaimana bisnis beroperasi dalam satu ecosystem yang terintegrasi.
                            </p>
                        </AnimatedInView>
                    </div>

                    {/* Middle - Visual Icon */}
                    <div className="lg:col-span-5 flex justify-center">
                        <AnimatedInView from="left" delay={100} className="w-full">
                            <div className="relative aspect-square max-w-[300px] mx-auto group">
                                {/* Decorative rings */}
                                <div className="absolute inset-0 bg-exa-accent/20 rounded-full blur-3xl animate-pulse-glow" />
                                <div className="absolute inset-0 border border-white/5 rounded-full" />
                                <div className="absolute inset-4 border border-exa-cyan/10 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />

                                <div className="relative h-full w-full rounded-3xl bg-gradient-to-br from-exa-accent to-exa-cyan flex items-center justify-center shadow-2xl shadow-exa-accent/20">
                                    <Brain className="w-20 h-20 text-white animate-float" />
                                    <Sparkles className="absolute top-6 right-6 w-6 h-6 text-white/40" />
                                </div>
                            </div>
                        </AnimatedInView>
                    </div>

                    {/* Right - Capabilities Grid */}
                    <div className="lg:col-span-7">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {capabilities.map((cap, i) => (
                                <AnimatedInView key={i} from="right" delay={150 + (i * 50)}>
                                    <div className="glass-card glass-card-hover rounded-xl p-6 transition-all duration-300">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="p-2.5 rounded-lg bg-exa-accent/10 text-exa-accent-light shrink-0">
                                                {cap.icon}
                                            </div>
                                            <span className="text-sm font-semibold text-white">
                                                {cap.label}
                                            </span>
                                        </div>
                                        <p className="text-xs text-exa-text-dim leading-relaxed">
                                            {cap.desc}
                                        </p>
                                    </div>
                                </AnimatedInView>
                            ))}

                            {/* Final full width CTA-like item */}
                            <AnimatedInView from="right" delay={400} className="sm:col-span-2">
                                <div className="glass-card bg-gradient-to-r from-exa-accent/5 to-transparent rounded-xl p-6 border-exa-accent/20">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2.5 rounded-lg bg-exa-accent text-white shadow-lg shadow-exa-accent/20">
                                            <Sparkles className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white">Ready for the AI Era</h4>
                                            <p className="text-xs text-exa-text-dim">Membangun ecosystem commerce masa depan sekarang.</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedInView>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
