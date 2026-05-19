"use client";

import AnimatedInView from "@/components/ui/AnimatedInView";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
    Globe,
    Search,
    Megaphone,
    Cpu,
    Bot,
    ArrowUpRight,
} from "lucide-react";

const services = [
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Commerce Website Development",
        description:
            "Website modern dengan premium UI/UX dan SEO-ready architecture.",
        gradient: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-cyan-400",
        borderColor: "hover:border-cyan-500/20",
    },
    {
        icon: <Search className="w-6 h-6" />,
        title: "SEO & Growth Management",
        description: "Meningkatkan organic visibility dan digital growth.",
        gradient: "from-emerald-500/20 to-green-500/20",
        iconColor: "text-emerald-400",
        borderColor: "hover:border-emerald-500/20",
    },
    {
        icon: <Megaphone className="w-6 h-6" />,
        title: "SEM & Acquisition System",
        description: "Performance advertising untuk acquisition dan conversion.",
        gradient: "from-amber-500/20 to-orange-500/20",
        iconColor: "text-amber-400",
        borderColor: "hover:border-amber-500/20",
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "Smart POS Ecosystem",
        description:
            "Sistem POS modern untuk operasional yang lebih efisien.",
        gradient: "from-violet-500/20 to-purple-500/20",
        iconColor: "text-violet-400",
        borderColor: "hover:border-violet-500/20",
    },
    {
        icon: <Bot className="w-6 h-6" />,
        title: "AI Commerce System",
        description:
            "AI-powered ecosystem untuk automation dan business intelligence.",
        gradient: "from-rose-500/20 to-pink-500/20",
        iconColor: "text-rose-400",
        borderColor: "hover:border-rose-500/20",
    },
];

export default function ServicesPreview() {
    return (
        <SectionWrapper withRadial>
            <div className="max-w-6xl mx-auto">
                <AnimatedInView from="bottom">
                    <div className="text-center mb-16">
                        <p className="text-xs font-semibold tracking-[0.2em] text-exa-accent-light uppercase mb-4">
                            Ecosystem
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
                            Complete Commerce
                            <br />
                            <span className="gradient-text">Growth Ecosystem</span>
                        </h2>
                    </div>
                </AnimatedInView>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, i) => (
                        <AnimatedInView key={i} from="bottom" delay={i * 80}>
                            <div
                                className={`group relative glass-card glass-card-hover rounded-2xl p-7 transition-all duration-300 cursor-pointer h-full ${service.borderColor}`}
                            >
                                {/* Gradient bg on hover */}
                                <div
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                />

                                <div className="relative z-10">
                                    <div
                                        className={`w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center mb-5 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                        {service.title}
                                        <ArrowUpRight className="w-4 h-4 text-exa-text-dim opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                    </h3>
                                    <p className="text-sm text-exa-text-muted leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </AnimatedInView>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
