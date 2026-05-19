"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedInView from "@/components/ui/AnimatedInView";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
    Globe,
    Cpu,
    Bot,
    BarChart3,
    Smartphone,
    Zap,
    Search,
    LayoutDashboard,
    Users,
    Package,
    TrendingUp,
    LineChart,
    Brain,
    Sparkles,
    ShieldCheck,
    Check,
} from "lucide-react";

interface PlatformModule {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    gradient: string;
    iconColor: string;
    featureIcons: React.ReactNode[];
}

const platformModules: PlatformModule[] = [
    {
        id: "commerce-website",
        icon: <Globe className="w-8 h-8" />,
        title: "Commerce Website",
        description:
            "Website modern dengan premium UI/UX, mobile-first architecture, dan SEO-ready structure.",
        features: [
            "Premium UI/UX",
            "SEO-ready architecture",
            "Mobile-first experience",
            "Fast performance",
            "Conversion-focused layout",
        ],
        gradient: "from-cyan-500/10 to-blue-500/10",
        iconColor: "text-cyan-400",
        featureIcons: [
            <LayoutDashboard key="1" className="w-4 h-4" />,
            <Search key="2" className="w-4 h-4" />,
            <Smartphone key="3" className="w-4 h-4" />,
            <Zap key="4" className="w-4 h-4" />,
            <TrendingUp key="5" className="w-4 h-4" />,
        ],
    },
    {
        id: "smart-pos",
        icon: <Cpu className="w-8 h-8" />,
        title: "Smart POS",
        description:
            "Sistem POS modern untuk operasional yang lebih efisien dan terintegrasi.",
        features: [
            "Real-time synchronization",
            "Multi-branch management",
            "Inventory management",
            "Customer management",
            "Sales analytics",
        ],
        gradient: "from-violet-500/10 to-purple-500/10",
        iconColor: "text-violet-400",
        featureIcons: [
            <Zap key="1" className="w-4 h-4" />,
            <Package key="2" className="w-4 h-4" />,
            <Package key="3" className="w-4 h-4" />,
            <Users key="4" className="w-4 h-4" />,
            <LineChart key="5" className="w-4 h-4" />,
        ],
    },
    {
        id: "ai-commerce",
        icon: <Bot className="w-8 h-8" />,
        title: "AI Commerce",
        description:
            "AI-powered ecosystem untuk automation, analytics, dan business intelligence.",
        features: [
            "Predictive analytics",
            "AI automation",
            "AI recommendation",
            "Customer intelligence",
            "Business insights",
        ],
        gradient: "from-rose-500/10 to-pink-500/10",
        iconColor: "text-rose-400",
        featureIcons: [
            <Brain key="1" className="w-4 h-4" />,
            <Sparkles key="2" className="w-4 h-4" />,
            <Sparkles key="3" className="w-4 h-4" />,
            <Users key="4" className="w-4 h-4" />,
            <TrendingUp key="5" className="w-4 h-4" />,
        ],
    },
    {
        id: "analytics",
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Analytics Dashboard",
        description:
            "Dashboard realtime untuk monitoring performa bisnis dan growth analytics.",
        features: [
            "Realtime reporting",
            "Traffic analytics",
            "Sales performance",
            "Conversion tracking",
            "Operational insights",
        ],
        gradient: "from-emerald-500/10 to-green-500/10",
        iconColor: "text-emerald-400",
        featureIcons: [
            <LineChart key="1" className="w-4 h-4" />,
            <TrendingUp key="2" className="w-4 h-4" />,
            <BarChart3 key="3" className="w-4 h-4" />,
            <ShieldCheck key="4" className="w-4 h-4" />,
            <Brain key="5" className="w-4 h-4" />,
        ],
    },
];

export default function PlatformPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section className="relative pt-32 pb-20 px-6 sm:px-10 lg:px-20 xl:px-32 overflow-hidden">
                    <div className="absolute inset-0 radial-hero" />
                    <div className="absolute inset-0 grid-bg" />
                    <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-exa-accent/6 rounded-full blur-[120px]" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <AnimatedInView from="bottom">
                            <p className="text-xs font-semibold tracking-[0.2em] text-exa-accent-light uppercase mb-4">
                                Platform
                            </p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
                                Unified Commerce
                                <br />
                                <span className="gradient-text">Growth Platform</span>
                            </h1>
                            <p className="text-lg text-exa-text-muted max-w-2xl mx-auto leading-relaxed">
                                Satu ecosystem modern untuk website, commerce, SEO, AI,
                                analytics, dan operational growth.
                            </p>
                        </AnimatedInView>
                    </div>
                </section>

                {/* Platform Overview */}
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <AnimatedInView from="bottom">
                            <p className="text-exa-text-muted leading-relaxed mb-6">
                                Exa Commerce membangun platform modern untuk membantu bisnis
                                memiliki fondasi digital yang scalable, intelligent, dan
                                growth-oriented.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {[
                                    "Branding",
                                    "Operational Efficiency",
                                    "Customer Experience",
                                    "Search Visibility",
                                    "Conversion & Growth",
                                ].map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-1.5 text-xs font-medium text-exa-accent-light bg-exa-accent/10 border border-exa-accent/20 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </AnimatedInView>
                    </div>

                    {/* Platform Modules */}
                    <div className="max-w-6xl mx-auto space-y-8">
                        {platformModules.map((module, i) => (
                            <AnimatedInView key={module.id} from="bottom" delay={i * 100}>
                                <div
                                    id={module.id}
                                    className={`glass-card rounded-2xl p-8 md:p-10 scroll-mt-24`}
                                >
                                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                                        {/* Info */}
                                        <div className="flex-1">
                                            <div
                                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-6 ${module.iconColor}`}
                                            >
                                                {module.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-display)]">
                                                {module.title}
                                            </h3>
                                            <p className="text-exa-text-muted leading-relaxed">
                                                {module.description}
                                            </p>
                                        </div>

                                        {/* Features */}
                                        <div className="flex-1 w-full">
                                            <div className="space-y-3">
                                                {module.features.map((feature, j) => (
                                                    <div
                                                        key={j}
                                                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors"
                                                    >
                                                        <div
                                                            className={`p-1 rounded-md bg-white/[0.04] ${module.iconColor}`}
                                                        >
                                                            <Check className="w-3.5 h-3.5" />
                                                        </div>
                                                        <span className="text-sm text-exa-text">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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
