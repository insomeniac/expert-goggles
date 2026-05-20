"use client";

import React from "react";
import { Brain, Cpu, Zap, Activity, Users, Lightbulb } from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import BorderGlow from "@/components/ui/BorderGlow";

export function AISection() {
    return (
        <section id="ai-infrastructure" className="relative z-20 py-24 bg-black text-white overflow-hidden">
            {/* Minimalist Silver Lighting */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-30" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-30" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="space-y-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-medium tracking-wider uppercase">
                            Built-in Intelligence
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-white">
                            AI as the New <br />
                            <span className="text-zinc-500">Core Infrastructure</span>
                        </h2>

                        <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed font-light">
                            AI bukan sekadar tambahan, melainkan jantung dari ekosistem commerce modern. Kami mengintegrasikan kecerdasan buatan ke setiap lapisan infrastruktur Anda.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 pt-6">
                            {[
                                { label: "Predictive Analytics", desc: "Memahami tren pasar sebelum terjadi secara realtime." },
                                { label: "Automated Growth", desc: "Optimasi kampanye dan SEO secara otonom." },
                                { label: "Smart Inventory", desc: "Manajemen stok cerdas berbasis behavior data." },
                                { label: "Customer Intelligence", desc: "Personalisasi pengalaman belanja skala masif." }
                            ].map((item, i) => (
                                <BorderGlow
                                    key={i}
                                    borderRadius={12}
                                    glowRadius={30}
                                    glowIntensity={0.8}
                                    colors={['#FFFFFF', '#94A3B8', '#18181B']}
                                    className="h-full"
                                >
                                    <div className="group p-5 h-full transition-all duration-500">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-white transition-colors" />
                                            <span className="font-medium text-zinc-200 group-hover:text-white transition-colors text-sm sm:text-base">{item.label}</span>
                                        </div>
                                        <p className="text-[11px] text-zinc-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </BorderGlow>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[400px] sm:h-[450px] lg:h-[600px] flex items-center justify-center">
                        <CardSwap
                            width="100%"
                            height="100%"
                            cardDistance={40}
                            verticalDistance={50}
                            delay={5000}
                            pauseOnHover={false}
                        >
                            {/* Card 1: Neural Architecture */}
                            <Card className="p-6 sm:p-8 group text-left">
                                <div className="h-full flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                                            <Cpu className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">STATUS</div>
                                            <div className="text-sm font-mono text-blue-400">OPTIMIZED</div>
                                        </div>
                                    </div>

                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="relative w-36 h-36">
                                            <div className="absolute inset-0 border border-zinc-800 rounded-full animate-[spin_10s_linear_infinite]" />
                                            <div className="absolute inset-4 border border-zinc-800/50 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_15px_#fff]" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-zinc-900">
                                        <h3 className="text-xl font-medium mb-1">Neural Core</h3>
                                        <p className="text-[11px] text-zinc-500 leading-tight">Unified backbone of commerce automation infrastructure.</p>
                                    </div>
                                </div>
                            </Card>

                            {/* Card 2: Growth Metrics */}
                            <Card className="p-6 sm:p-8 text-left">
                                <div className="h-full flex flex-col">
                                    <div className="flex justify-between items-center mb-8">
                                        <h3 className="text-xl font-medium">Growth Analytics</h3>
                                        <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono">LIVE</div>
                                    </div>

                                    <div className="flex-1 space-y-6">
                                        {[
                                            { label: "Efficiency", val: "98.4%", progress: "w-[98%]" },
                                            { label: "Accuracy", val: "94.2%", progress: "w-[94%]" },
                                            { label: "Automation", val: "87.9%", progress: "w-[87%]" }
                                        ].map((stat, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex justify-between text-[10px]">
                                                    <span className="text-zinc-500 uppercase tracking-wider">{stat.label}</span>
                                                    <span className="text-white font-mono">{stat.val}</span>
                                                </div>
                                                <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                                                    <div className={`h-full bg-white/20 ${stat.progress}`} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-zinc-900">
                                        <div>
                                            <div className="text-[8px] text-zinc-500 uppercase tracking-wider font-mono">LATENCY</div>
                                            <div className="text-lg font-mono text-white">0.02ms</div>
                                        </div>
                                        <div>
                                            <div className="text-[8px] text-zinc-500 uppercase tracking-wider font-mono">UPTIME</div>
                                            <div className="text-lg font-mono text-white">99.9%</div>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Card 3: Autonomous Logic */}
                            <Card className="p-6 sm:p-8 bg-zinc-950 text-left">
                                <div className="h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center">
                                            <Brain className="w-5 h-5 text-zinc-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium leading-none">Autonomous</h3>
                                            <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase">Self-Healing</span>
                                        </div>
                                    </div>

                                    <div className="flex-1 border-l-2 border-zinc-900 ml-4 pl-6 space-y-6">
                                        {[
                                            { step: "Acquisition", status: "DONE" },
                                            { step: "Recognition", status: "ACTIVE" },
                                            { step: "Execution", status: "WAIT" }
                                        ].map((step, i) => (
                                            <div key={i} className="relative">
                                                <div className="absolute -left-[33px] top-0 w-4 h-4 rounded-full bg-black border-2 border-zinc-700" />
                                                <div className="text-sm font-medium text-white">{step.step}</div>
                                                <div className="text-[10px] font-mono text-zinc-600 uppercase">{step.status}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-zinc-900">
                                        <div className="flex items-center gap-2 text-[10px] text-blue-400 font-mono">
                                            <span className="animate-pulse">●</span>
                                            SCANNING ECOSYSTEM...
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </CardSwap>
                    </div>
                </div>
            </div>
        </section>
    );
}
