"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedInView from "@/components/ui/AnimatedInView";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import {
    ShoppingBag,
    Gamepad2,
    UtensilsCrossed,
    Shirt,
    Building2,
    Sparkles,
    Crown,
    Store,
    ArrowRight,
    Check,
} from "lucide-react";

interface IndustrySolution {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    iconColor: string;
    gradient: string;
    bgGradient: string;
}

const industries: IndustrySolution[] = [
    {
        id: "retail",
        icon: <ShoppingBag className="w-7 h-7" />,
        title: "Retail Commerce",
        description:
            "Solusi modern untuk retail yang ingin meningkatkan operational efficiency dan customer experience.",
        features: [
            "Multi-channel selling",
            "Inventory sync",
            "Customer loyalty",
            "Analytics dashboard",
        ],
        iconColor: "text-cyan-400",
        gradient: "from-cyan-500/10 to-blue-500/10",
        bgGradient: "from-cyan-500/5",
    },
    {
        id: "hobby",
        icon: <Gamepad2 className="w-7 h-7" />,
        title: "Hobby Commerce",
        description:
            "Community-driven commerce ecosystem untuk bisnis penghobi dan niche market.",
        features: [
            "Community features",
            "Niche marketplace",
            "Content-driven sales",
            "Collector management",
        ],
        iconColor: "text-violet-400",
        gradient: "from-violet-500/10 to-purple-500/10",
        bgGradient: "from-violet-500/5",
    },
    {
        id: "fnb",
        icon: <UtensilsCrossed className="w-7 h-7" />,
        title: "F&B Business",
        description:
            "Digital ecosystem untuk bisnis F&B yang ingin berkembang secara modern dan scalable.",
        features: [
            "Online ordering",
            "Kitchen management",
            "Delivery integration",
            "Menu management",
        ],
        iconColor: "text-amber-400",
        gradient: "from-amber-500/10 to-orange-500/10",
        bgGradient: "from-amber-500/5",
    },
    {
        id: "fashion",
        icon: <Shirt className="w-7 h-7" />,
        title: "Fashion & Lifestyle",
        description:
            "Digital experience premium untuk fashion dan lifestyle brand modern.",
        features: [
            "Lookbook showcase",
            "Size recommendation",
            "Brand storytelling",
            "Style curation",
        ],
        iconColor: "text-rose-400",
        gradient: "from-rose-500/10 to-pink-500/10",
        bgGradient: "from-rose-500/5",
    },
    {
        id: "beauty",
        icon: <Sparkles className="w-7 h-7" />,
        title: "Beauty & Skincare",
        description:
            "Growth ecosystem untuk beauty brand yang ingin meningkatkan branding dan digital acquisition.",
        features: [
            "Product education",
            "Subscription model",
            "Ingredient transparency",
            "Routine builder",
        ],
        iconColor: "text-pink-400",
        gradient: "from-pink-500/10 to-fuchsia-500/10",
        bgGradient: "from-pink-500/5",
    },
    {
        id: "multi-branch",
        icon: <Building2 className="w-7 h-7" />,
        title: "Multi-Branch Business",
        description:
            "Centralized infrastructure untuk bisnis dengan banyak cabang dan operasional kompleks.",
        features: [
            "Centralized management",
            "Branch analytics",
            "Staff management",
            "Unified inventory",
        ],
        iconColor: "text-emerald-400",
        gradient: "from-emerald-500/10 to-green-500/10",
        bgGradient: "from-emerald-500/5",
    },
    {
        id: "franchise",
        icon: <Crown className="w-7 h-7" />,
        title: "Franchise Business",
        description:
            "Scalable infrastructure untuk model franchise dengan kontrol dan standardisasi.",
        features: [
            "Franchise portal",
            "Standard operating",
            "Revenue sharing",
            "Quality control",
        ],
        iconColor: "text-yellow-400",
        gradient: "from-yellow-500/10 to-amber-500/10",
        bgGradient: "from-yellow-500/5",
    },
    {
        id: "umkm",
        icon: <Store className="w-7 h-7" />,
        title: "Premium UMKM",
        description:
            "Infrastructure modern untuk UMKM yang siap naik kelas dan scale up bisnis.",
        features: [
            "Affordable pricing",
            "Easy setup",
            "Growth toolkit",
            "Business mentoring",
        ],
        iconColor: "text-blue-400",
        gradient: "from-blue-500/10 to-indigo-500/10",
        bgGradient: "from-blue-500/5",
    },
];

export default function SolutionsPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section className="relative pt-32 pb-20 px-6 sm:px-10 lg:px-20 xl:px-32 overflow-hidden">
                    <div className="absolute inset-0 radial-hero" />
                    <div className="absolute inset-0 grid-bg" />
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-exa-violet/6 rounded-full blur-[120px]" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <AnimatedInView from="bottom">
                            <p className="text-xs font-semibold tracking-[0.2em] text-exa-violet uppercase mb-4">
                                Solutions
                            </p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
                                Solutions Built for
                                <br />
                                <span className="gradient-text">Modern Commerce Industries</span>
                            </h1>
                            <p className="text-lg text-exa-text-muted max-w-2xl mx-auto leading-relaxed">
                                Exa Commerce membantu berbagai industri membangun website commerce
                                modern, meningkatkan visibility digital, dan mengembangkan
                                operasional bisnis melalui AI-powered ecosystem.
                            </p>
                        </AnimatedInView>
                    </div>
                </section>

                {/* Industry Grid */}
                <SectionWrapper>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            {industries.map((industry, i) => (
                                <AnimatedInView key={industry.id} from="bottom" delay={i * 60}>
                                    <div
                                        id={industry.id}
                                        className="group glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300 cursor-pointer h-full scroll-mt-24 flex flex-col"
                                    >
                                        {/* Gradient overlay on hover */}
                                        <div
                                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                        />

                                        <div className="relative z-10 flex flex-col flex-1">
                                            <div
                                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-4 ${industry.iconColor} group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                {industry.icon}
                                            </div>

                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                {industry.title}
                                            </h3>
                                            <p className="text-sm text-exa-text-muted leading-relaxed mb-5 flex-1">
                                                {industry.description}
                                            </p>

                                            <div className="space-y-2 mb-5">
                                                {industry.features.map((feat, j) => (
                                                    <div key={j} className="flex items-center gap-2">
                                                        <Check
                                                            className={`w-3.5 h-3.5 ${industry.iconColor} shrink-0`}
                                                        />
                                                        <span className="text-xs text-exa-text-dim">
                                                            {feat}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            <Link
                                                href="#consultation"
                                                className={`inline-flex items-center gap-1.5 text-xs font-medium ${industry.iconColor} group-hover:text-white transition-colors mt-auto`}
                                            >
                                                Learn more
                                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </AnimatedInView>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>
            </main>
            <Footer />
        </>
    );
}
