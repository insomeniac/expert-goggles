"use client";

import React from "react";
import {
    Globe,
    Search,
    Target,
    Lightbulb,
    TrendingUp,
    ArrowRight
} from "lucide-react";

const mainServices = [
    {
        title: "Website Development",
        description: "Membangun website commerce modern dengan conversion-focused experience yang premium dan scalable.",
        icon: <Globe className="w-8 h-8 text-primary" />,
        features: ["Responsive Design", "Performance Optimized", "Payment Integration"]
    },
    {
        title: "SEO Management",
        description: "Meningkatkan organic visibility dan digital growth melalui strategi SEO yang berbasis data dan hasil nyata.",
        icon: <Search className="w-8 h-8 text-primary" />,
        features: ["Keyword Research", "On-page Optimization", "Backlink Strategy"]
    },
    {
        title: "SEM & Ads Management",
        description: "Performance advertising untuk acquisition dan conversion dengan pengelolaan budget yang efisien.",
        icon: <Target className="w-8 h-8 text-primary" />,
        features: ["Google Ads", "Meta Ads", "Retargeting Campaigns"]
    },
    {
        title: "Commerce Consultation",
        description: "Strategi digital commerce untuk membantu bisnis berkembang lebih cepat dan beradaptasi dengan pasar.",
        icon: <Lightbulb className="w-8 h-8 text-primary" />,
        features: ["Market Analysis", "Operational Audit", "Growth Roadmap"]
    },
    {
        title: "Growth Optimization",
        description: "Optimasi website, traffic, dan customer journey untuk memaksimalkan ROI dan customer lifetime value.",
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        features: ["A/B Testing", "Funnel Optimization", "Data Analytics"]
    }
];

export function Services() {
    return (
        <section id="services-detailed" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Growth Services for Modern Business
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Layanan komprehensif yang dirancang untuk mendukung setiap tahap perjalanan bisnis digital Anda.
                    </p>
                </div>

                <div className="space-y-12">
                    {mainServices.map((service, i) => (
                        <div key={i} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1 space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl font-bold">{service.title}</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {service.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm font-medium">
                                            <ArrowRight size={14} className="text-primary" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 w-full aspect-video rounded-3xl bg-muted overflow-hidden border border-border shadow-lg">
                                <img
                                    src={`/api/placeholder/800/600?text=${service.title}`}
                                    alt={service.title}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
