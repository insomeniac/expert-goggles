"use client";

import Link from "next/link";
import AnimatedInView from "@/components/ui/AnimatedInView";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="relative px-6 sm:px-10 lg:px-20 xl:px-32 py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-exa-dark via-exa-dark to-exa-darker" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-exa-accent/8 rounded-full blur-[120px]" />
                <div className="absolute inset-0 grid-bg" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <AnimatedInView from="bottom">
                    <p className="text-xs font-semibold tracking-[0.2em] text-exa-accent-light uppercase mb-4">
                        Get Started
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
                        Ready to Build Modern
                        <br />
                        <span className="gradient-text">Commerce Infrastructure?</span>
                    </h2>
                    <p className="text-exa-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
                        Mulai transformasi digital bisnis Anda sekarang. Tim kami siap
                        membantu Anda merancang strategi pertumbuhan yang tepat.
                    </p>
                </AnimatedInView>

                <AnimatedInView from="bottom" delay={150}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#consultation"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-exa-accent to-exa-accent-dark rounded-full hover:shadow-xl hover:shadow-exa-accent/25 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <MessageSquare className="w-4 h-4" />
                            Request Consultation
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/demo"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-exa-text border border-white/10 rounded-full hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
                        >
                            Schedule Discussion
                        </Link>
                    </div>
                </AnimatedInView>
            </div>
        </section>
    );
}
