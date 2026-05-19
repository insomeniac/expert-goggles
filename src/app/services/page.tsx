"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedInView from "@/components/ui/AnimatedInView";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import {
    Code,
    Search,
    Megaphone,
    MessageSquare,
    TrendingUp,
    ArrowRight,
    Check,
    Globe,
    BarChart3,
    Users,
    Zap,
    Target,
} from "lucide-react";

interface ServiceItem {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    iconColor: string;
    gradient: string;
}

const services: ServiceItem[] = [
    {
        id: "website-dev",
        icon: <Code className="w-7 h-7" />,
        title: "Website Development",
        description:
            "Membangun website commerce modern dengan conversion-focused experience. Setiap website dirancang dengan premium UI/UX, arsitektur SEO-ready, dan performa optimal.",
        features: [
            "Premium responsive design",
            "SEO-optimized architecture",
            "Conversion-focused layout",
            "Mobile-first approach",
            "High-performance delivery",
        ],
        iconColor: "text-cyan-400",
        gradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
        id: "seo",
        icon: <Search className="w-7 h-7" />,
        title: "SEO Management",
        description:
            "Meningkatkan organic visibility dan digital growth. Strategi SEO komprehensif untuk memastikan bisnis Anda ditemukan oleh target audience yang tepat.",
        features: [
            "Technical SEO audit",
            "Content optimization",
            "Keyword strategy",
            "Link building",
            "Performance monitoring",
        ],
        iconColor: "text-emerald-400",
        gradient: "from-emerald-500/10 to-green-500/10",
    },
    {
        id: "sem",
        icon: <Megaphone className="w-7 h-7" />,
        title: "SEM & Ads Management",
        description:
            "Performance advertising untuk acquisition dan conversion. Strategi iklan digital yang terukur untuk pertumbuhan bisnis yang lebih cepat.",
        features: [
            "Google Ads management",
            "Social media advertising",
            "Conversion optimization",
            "A/B testing strategy",
            "ROI tracking & reporting",
        ],
        iconColor: "text-amber-400",
        gradient: "from-amber-500/10 to-orange-500/10",
    },
    {
        id: "consultation",
        icon: <MessageSquare className="w-7 h-7" />,
        title: "Commerce Consultation",
        description:
            "Strategi digital commerce untuk membantu bisnis berkembang lebih cepat. Konsultasi mendalam tentang arsitektur, teknologi, dan growth strategy.",
        features: [
            "Business analysis",
            "Technology roadmap",
            "Growth strategy planning",
            "Market positioning",
            "Competitive analysis",
        ],
        iconColor: "text-violet-400",
        gradient: "from-violet-500/10 to-purple-500/10",
    },
    {
        id: "growth",
        icon: <TrendingUp className="w-7 h-7" />,
        title: "Growth Optimization",
        description:
            "Optimasi website, traffic, dan customer journey. Pendekatan data-driven untuk memaksimalkan setiap touchpoint dalam customer experience.",
        features: [
            "Website performance optimization",
            "Customer journey mapping",
            "Funnel optimization",
            "Analytics & insights",
            "Continuous improvement",
        ],
        iconColor: "text-rose-400",
        gradient: "from-rose-500/10 to-pink-500/10",
    },
];

const stats = [
    {
        icon: <Globe className="w-5 h-5" />,
        value: "50+",
        label: "Projects Delivered",
    },
    {
        icon: <BarChart3 className="w-5 h-5" />,
        value: "300%",
        label: "Average Growth",
    },
    {
        icon: <Users className="w-5 h-5" />,
        value: "100+",
        label: "Clients Served",
    },
    {
        icon: <Target className="w-5 h-5" />,
        value: "95%",
        label: "Client Satisfaction",
    },
];

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section className="relative pt-32 pb-20 px-6 sm:px-10 lg:px-20 xl:px-32 overflow-hidden">
                    <div className="absolute inset-0 radial-hero" />
                    <div className="absolute inset-0 grid-bg" />
                    <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-exa-emerald/6 rounded-full blur-[120px]" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <AnimatedInView from="bottom">
                            <p className="text-xs font-semibold tracking-[0.2em] text-exa-emerald uppercase mb-4">
                                Services
                            </p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
                                Growth Services for
                                <br />
                                <span className="gradient-text">Modern Business</span>
                            </h1>
                            <p className="text-lg text-exa-text-muted max-w-2xl mx-auto leading-relaxed">
                                Layanan komprehensif untuk membantu bisnis membangun, tumbuh, dan
                                berkembang di era digital.
                            </p>
                        </AnimatedInView>
                    </div>
                </section>

                {/* Stats */}
                <SectionWrapper className="!py-0 -mt-4">
                    <AnimatedInView from="bottom">
                        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="glass-card rounded-xl p-5 text-center"
                                >
                                    <div className="flex justify-center mb-2 text-exa-accent-light">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-exa-text-dim">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </AnimatedInView>
                </SectionWrapper>

                {/* Services */}
                <SectionWrapper>
                    <div className="max-w-6xl mx-auto space-y-20">
                        {services.map((service, i) => (
                            <div key={service.id} id={service.id} className="scroll-mt-24">
                                <AnimatedInView from={i % 2 === 0 ? "left" : "right"}>
                                    <div
                                        className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""
                                            }`}
                                    >
                                        {/* Text */}
                                        <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                                            <div
                                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 ${service.iconColor}`}
                                            >
                                                {service.icon}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-display)]">
                                                {service.title}
                                            </h2>
                                            <p className="text-exa-text-muted leading-relaxed mb-6">
                                                {service.description}
                                            </p>
                                            <Link
                                                href="#consultation"
                                                className="inline-flex items-center gap-2 text-sm font-medium text-exa-accent-light hover:text-white transition-colors group"
                                            >
                                                Learn more
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>

                                        {/* Features Card */}
                                        <div
                                            className={`glass-card rounded-2xl p-8 ${i % 2 === 1 ? "lg:order-1" : ""
                                                }`}
                                        >
                                            <h4 className="text-sm font-semibold text-exa-text-dim uppercase tracking-wider mb-5">
                                                What&apos;s Included
                                            </h4>
                                            <div className="space-y-3">
                                                {service.features.map((feature, j) => (
                                                    <div
                                                        key={j}
                                                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                                                    >
                                                        <div
                                                            className={`p-1 rounded-md bg-white/[0.04] ${service.iconColor}`}
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
                                </AnimatedInView>
                            </div>
                        ))}
                    </div>
                </SectionWrapper>
            </main>
            <Footer />
        </>
    );
}
