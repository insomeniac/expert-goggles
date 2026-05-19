"use client";

import AnimatedInView from "@/components/ui/AnimatedInView";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { AlertTriangle, ArrowRight } from "lucide-react";

const problems = [
    "Website yang outdated",
    "Marketing tanpa data",
    "Operasional manual",
    "Tools yang tidak terintegrasi",
    "Tanpa AI infrastructure",
];

const solutions = [
    "Growth infrastructure",
    "Automation ecosystem",
    "AI-powered analytics",
    "Search visibility",
    "Scalable technology",
];

export default function BrandPositioning() {
    return (
        <SectionWrapper withGrid>
            <div className="max-w-6xl mx-auto">
                <AnimatedInView from="bottom">
                    <div className="text-center mb-16">
                        <p className="text-xs font-semibold tracking-[0.2em] text-exa-accent-light uppercase mb-4">
                            The Problem
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
                            Commerce Has Evolved Beyond
                            <br />
                            <span className="gradient-text">Traditional Systems</span>
                        </h2>
                    </div>
                </AnimatedInView>

                <AnimatedInView from="bottom" delay={100}>
                    <p className="text-center text-exa-text-muted max-w-2xl mx-auto mb-16 text-base leading-relaxed">
                        Sebagian besar bisnis masih menggunakan sistem yang terpisah.
                        Di era commerce modern, bisnis membutuhkan lebih dari sekadar website
                        atau aplikasi kasir.
                    </p>
                </AnimatedInView>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Problems */}
                    <AnimatedInView from="left" delay={150}>
                        <div className="glass-card rounded-2xl p-8 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-red-500/10">
                                    <AlertTriangle className="w-5 h-5 text-red-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">
                                    Traditional Approach
                                </h3>
                            </div>
                            <div className="space-y-3">
                                {problems.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/5 border border-red-500/10"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                        <span className="text-sm text-exa-text-muted">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedInView>

                    {/* Solutions */}
                    <AnimatedInView from="right" delay={200}>
                        <div className="glass-card rounded-2xl p-8 h-full border-exa-accent/10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-exa-accent/10">
                                    <ArrowRight className="w-5 h-5 text-exa-accent-light" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">
                                    What Business Needs
                                </h3>
                            </div>
                            <div className="space-y-3">
                                {solutions.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-exa-accent/5 border border-exa-accent/10"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-exa-accent-light shrink-0" />
                                        <span className="text-sm text-exa-text-muted">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedInView>
                </div>
            </div>
        </SectionWrapper>
    );
}
