"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedInView from "@/components/ui/AnimatedInView";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
    Globe,
    Search,
    Cpu,
    Bot,
    ArrowUpRight,
    Star,
    Sparkles,
    Zap,
    TrendingUp,
    Eye,
} from "lucide-react";

interface PortfolioCategory {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    items: PortfolioItem[];
    gradient: string;
    iconColor: string;
}

interface PortfolioItem {
    title: string;
    tag: string;
    metrics: string;
}

const portfolioCategories: PortfolioCategory[] = [
    {
        icon: <Globe className="w-7 h-7" />,
        title: "Commerce Website",
        subtitle: "Premium Web Experience",
        description:
            "Website modern dengan premium UI/UX dan conversion-focused experience.",
        gradient: "from-cyan-500 to-blue-600",
        iconColor: "text-cyan-400",
        items: [
            {
                title: "Fashion E-Commerce Platform",
                tag: "E-Commerce",
                metrics: "+180% conversion rate",
            },
            {
                title: "Premium Skincare Brand",
                tag: "Beauty",
                metrics: "+250% online sales",
            },
            {
                title: "Multi-Brand Retail Hub",
                tag: "Retail",
                metrics: "+320% traffic growth",
            },
        ],
    },
    {
        icon: <Search className="w-7 h-7" />,
        title: "SEO & Growth",
        subtitle: "Visibility & Performance",
        description:
            "Project dengan fokus search visibility dan digital growth.",
        gradient: "from-emerald-500 to-green-600",
        iconColor: "text-emerald-400",
        items: [
            {
                title: "National Retail Brand SEO",
                tag: "SEO",
                metrics: "Top 3 ranking in 4 months",
            },
            {
                title: "F&B Chain Digital Growth",
                tag: "Growth",
                metrics: "+400% organic traffic",
            },
            {
                title: "Lifestyle Brand Visibility",
                tag: "SEM",
                metrics: "3.2x ROAS improvement",
            },
        ],
    },
    {
        icon: <Cpu className="w-7 h-7" />,
        title: "Smart POS Ecosystem",
        subtitle: "Operational Excellence",
        description:
            "Operational ecosystem dan modern POS experience.",
        gradient: "from-violet-500 to-purple-600",
        iconColor: "text-violet-400",
        items: [
            {
                title: "Multi-Branch Retail POS",
                tag: "POS",
                metrics: "12 branches synced",
            },
            {
                title: "F&B Chain Management",
                tag: "Operations",
                metrics: "-40% operational cost",
            },
            {
                title: "Franchise POS System",
                tag: "Franchise",
                metrics: "50+ outlets managed",
            },
        ],
    },
    {
        icon: <Bot className="w-7 h-7" />,
        title: "AI Commerce Experience",
        subtitle: "Intelligence & Automation",
        description:
            "AI-powered dashboard, analytics, dan automation ecosystem.",
        gradient: "from-rose-500 to-pink-600",
        iconColor: "text-rose-400",
        items: [
            {
                title: "Predictive Inventory System",
                tag: "AI",
                metrics: "-35% overstock reduction",
            },
            {
                title: "Customer Intelligence Dashboard",
                tag: "Analytics",
                metrics: "+60% repeat purchase",
            },
            {
                title: "Automated Marketing Engine",
                tag: "Automation",
                metrics: "5x campaign efficiency",
            },
        ],
    },
];

const showcaseValues = [
    {
        icon: <Star className="w-5 h-5" />,
        label: "Premium Experience",
    },
    {
        icon: <Zap className="w-5 h-5" />,
        label: "Scalability",
    },
    {
        icon: <Eye className="w-5 h-5" />,
        label: "Branding Perception",
    },
    {
        icon: <TrendingUp className="w-5 h-5" />,
        label: "Operational Efficiency",
    },
    {
        icon: <Sparkles className="w-5 h-5" />,
        label: "Digital Growth",
    },
];

export default function PortfolioPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section className="relative pt-32 pb-20 px-6 sm:px-10 lg:px-20 xl:px-32 overflow-hidden">
                    <div className="absolute inset-0 radial-hero" />
                    <div className="absolute inset-0 grid-bg" />
                    <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-exa-rose/6 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-exa-accent/5 rounded-full blur-[100px]" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <AnimatedInView from="bottom">
                            <p className="text-xs font-semibold tracking-[0.2em] text-exa-rose uppercase mb-4">
                                Portfolio
                            </p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
                                Crafting Premium
                                <br />
                                <span className="gradient-text-warm">Commerce Experiences</span>
                            </h1>
                            <p className="text-lg text-exa-text-muted max-w-2xl mx-auto leading-relaxed">
                                Setiap project dirancang dengan fokus pada premium experience,
                                scalability, branding perception, dan digital growth.
                            </p>
                        </AnimatedInView>
                    </div>
                </section>

                {/* Showcase Values */}
                <SectionWrapper className="!py-0 -mt-6">
                    <AnimatedInView from="bottom">
                        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
                            {showcaseValues.map((val, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 px-4 py-2 glass-card rounded-full"
                                >
                                    <span className="text-exa-accent-light">{val.icon}</span>
                                    <span className="text-sm text-exa-text-muted">
                                        {val.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </AnimatedInView>
                </SectionWrapper>

                {/* Portfolio Categories */}
                <SectionWrapper>
                    <div className="max-w-6xl mx-auto space-y-16">
                        {portfolioCategories.map((category, i) => (
                            <AnimatedInView key={i} from="bottom" delay={i * 80}>
                                <div className="glass-card rounded-2xl overflow-hidden">
                                    {/* Category Header */}
                                    <div
                                        className={`bg-gradient-to-r ${category.gradient} p-[1px] rounded-t-2xl`}
                                    >
                                        <div className="bg-exa-darker rounded-t-[calc(1rem-1px)] px-8 py-6">
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center ${category.iconColor} shrink-0`}
                                                >
                                                    {category.icon}
                                                </div>
                                                <div>
                                                    <h2 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                                                        {category.title}
                                                    </h2>
                                                    <p className="text-sm text-exa-text-dim">
                                                        {category.subtitle}
                                                    </p>
                                                    <p className="text-sm text-exa-text-muted mt-1">
                                                        {category.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Items */}
                                    <div className="p-4 grid sm:grid-cols-3 gap-4">
                                        {category.items.map((item, j) => (
                                            <div
                                                key={j}
                                                className="group relative bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] hover:border-white/[0.08] rounded-xl p-5 transition-all duration-300 cursor-pointer"
                                            >
                                                <div className="flex items-start justify-between mb-3">
                                                    <span
                                                        className={`text-xs font-medium px-2.5 py-1 rounded-full bg-white/[0.04] ${category.iconColor}`}
                                                    >
                                                        {item.tag}
                                                    </span>
                                                    <ArrowUpRight className="w-4 h-4 text-exa-text-dim opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                                <h3 className="text-sm font-semibold text-white mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-xs text-exa-emerald font-medium">
                                                    {item.metrics}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedInView>
                        ))}
                    </div>
                </SectionWrapper>
            </main>
            <Footer />
        </>
    );
}
