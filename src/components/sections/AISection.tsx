"use client";

import React from "react";
import { Brain, Cpu, Zap, Activity, Users, Lightbulb } from "lucide-react";

export function AISection() {
    return (
        <section className="py-24 bg-black text-white overflow-hidden relative">
            {/* Glow Effects */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -z-0" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] -z-0" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-primary text-sm font-medium">
                            <Zap size={14} className="fill-current" />
                            The Future of Commerce
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            AI Will Become the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Foundation</span> of Modern Commerce
                        </h2>

                        <p className="text-xl text-gray-400 max-w-xl">
                            AI bukan lagi sekadar fitur tambahan. AI akan menjadi fondasi utama bagaimana bisnis berkembang di era digital yang semakin kompetitif.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            {[
                                { label: "Understand Customers", icon: <Users className="w-5 h-5 text-primary" /> },
                                { label: "Data-Driven Decisions", icon: <Lightbulb className="w-5 h-5 text-primary" /> },
                                { label: "Efficient Operations", icon: <Activity className="w-5 h-5 text-primary" /> },
                                { label: "Growth Strategy", icon: <Zap className="w-5 h-5 text-primary" /> },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="shrink-0 p-2 rounded-lg bg-primary/20">{item.icon}</div>
                                    <span className="font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* AI Visualization Placeholder - Ideally a 3D model or Lottie animation */}
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 flex items-center justify-center relative group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_70%)]" />

                            <div className="relative w-48 h-48 flex items-center justify-center">
                                <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
                                <div className="absolute inset-2 border border-blue-400/20 rounded-full animate-[spin_7s_linear_infinite_reverse]" />
                                <div className="absolute inset-6 border-2 border-primary/40 rounded-full animate-[spin_15s_linear_infinite]" />
                                <Brain className="w-24 h-24 text-primary animate-pulse" />
                            </div>

                            {/* Stats badges */}
                            <div className="absolute top-10 right-10 p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 animate-bounce delay-100">
                                <div className="text-xs text-gray-400">Efficiency</div>
                                <div className="text-xl font-bold">+85%</div>
                            </div>
                            <div className="absolute bottom-12 left-10 p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 animate-bounce delay-300">
                                <div className="text-xs text-gray-400">Decisions</div>
                                <div className="text-xl font-bold">Real-time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
