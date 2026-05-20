"use client";

import React from "react";
import {
    Headphones,
    FileText,
    MessagesSquare,
    Settings2,
    Users2,
    ArrowUpRight,
    HeartHandshake
} from "lucide-react";

const supportNodes = [
    {
        title: "Technical Support",
        description: "Pendampingan teknis untuk memastikan sistem berjalan secara optimal 24/7.",
        icon: <Headphones className="w-5 h-5" />,
    },
    {
        title: "Documentation",
        description: "Panduan penggunaan platform dan ecosystem Exa Commerce yang komprehensif.",
        icon: <FileText className="w-5 h-5" />,
    },
    {
        title: "Growth Consultation",
        description: "Diskusi rutin mengenai kebutuhan bisnis dan strategi growth ecosystem ke depan.",
        icon: <MessagesSquare className="w-5 h-5" />,
    },
    {
        title: "Onboarding Assistance",
        description: "Pendampingan implementasi dan setup platform hingga siap operasional.",
        icon: <Users2 className="w-5 h-5" />,
    },
    {
        title: "System Optimization",
        description: "Optimasi performa website, SEO, dan operational ecosystem secara periodik.",
        icon: <Settings2 className="w-5 h-5" />,
    },
];

export function Support() {
    return (
        <section id="support" className="relative z-20 py-32 bg-[#030303] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Support Ecosystem
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                        Pendampingan berkelanjutan untuk memastikan infrastruktur digital Anda bertumbuh tanpa hambatan teknis.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    {supportNodes.map((item, i) => (
                        <div key={i} className="group bg-zinc-950 border border-zinc-900 rounded-3xl p-8 transition-all duration-500 hover:border-zinc-700">
                            <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-6 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-all">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}

                    {/* Quick Access Node */}
                    <div className="bg-white text-black rounded-3xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-zinc-200 transition-all">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold leading-tight">Need help right now?</h3>
                            <p className="text-sm font-medium opacity-70">Tim ahli kami siap membantu menjawab pertanyaan teknis maupun strategis Anda secara langsung.</p>
                        </div>
                        <button className="flex items-center gap-2 text-sm font-bold pt-6 border-t border-black/10">
                            Contact Support <ArrowUpRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Partnership Detailed View */}
                <div className="bg-zinc-950 rounded-[2.5rem] p-10 md:p-16 border border-zinc-900 overflow-hidden relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-900 shadow-2xl">
                                <img
                                    src="/images/services/consult.png"
                                    alt="Commitment"
                                    className="w-full h-full object-cover opacity-80"
                                />
                            </div>
                            {/* Compact Commitment Badge */}
                            <div className="absolute -bottom-6 -right-6 p-6 bg-zinc-950/90 backdrop-blur-xl rounded-3xl border border-zinc-800 shadow-2xl hidden md:block">
                                <div className="flex items-center gap-5">
                                    <HeartHandshake size={32} className="text-blue-500 shrink-0" />
                                    <div className="flex flex-col -space-y-1">
                                        <div className="text-3xl font-medium tracking-tighter text-white">100%</div>
                                        <div className="text-[10px] uppercase font-medium text-zinc-500 tracking-wider">
                                            Commitment
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-4xl font-medium tracking-tight">
                                    Long-Term Partnership for Sustainable Growth
                                </h2>
                                <p className="text-base text-zinc-500 leading-relaxed">
                                    Kami percaya pertumbuhan bisnis membutuhkan lebih dari sekadar software. Exantra hadir sebagai partner teknologi untuk memastikan website, SEO, dan infrastruktur Anda tetap relevan di pasar yang dinamis.
                                </p>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-zinc-900">
                                {[
                                    "Continuous Innovation Architecture",
                                    "Proactive Monitoring & Optimization",
                                    "Strategic Growth Technology Consulting"
                                ].map((t, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                                        <span className="text-sm text-zinc-400">{t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
