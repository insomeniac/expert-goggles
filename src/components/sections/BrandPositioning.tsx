"use client";

import React from "react";
import { CheckCircle2, XCircle, TrendingUp, Cpu, BarChart3, Search, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function BrandPositioning() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Commerce Has Evolved Beyond Traditional Systems
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Di era commerce modern, bisnis membutuhkan lebih dari sekadar website atau aplikasi kasir. Standar keberhasilan telah berubah.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Traditional Systems */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold flex items-center gap-2 text-destructive">
                            <XCircle className="w-5 h-5" />
                            The Old Way
                        </h3>
                        <p className="text-muted-foreground italic">
                            Sebagian besar bisnis masih menggunakan sistem yang terpisah:
                        </p>
                        <div className="grid gap-4">
                            {[
                                "Website yang outdated & slow",
                                "Marketing tanpa data valid",
                                "Operasional manual yang lambat",
                                "Tools yang tidak saling terintegrasi",
                                "Tanpa AI infrastructure"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/50 text-muted-foreground line-through opacity-70">
                                    <div className="w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0">
                                        <XCircle size={14} />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Modern Systems (Exa Commerce) */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold flex items-center gap-2 text-primary">
                            <CheckCircle2 className="w-5 h-5" />
                            The Modern Way (Exa Commerce)
                        </h3>
                        <p className="text-muted-foreground">
                            Satu ekosistem terpadu yang dirancang untuk pertumbuhan:
                        </p>
                        <div className="grid gap-4">
                            {[
                                { text: "Growth Infrastructure", icon: <TrendingUp className="w-4 h-4" /> },
                                { text: "Automation Ecosystem", icon: <Cpu className="w-4 h-4" /> },
                                { text: "AI-Powered Analytics", icon: <BarChart3 className="w-4 h-4" /> },
                                { text: "Search Visibility", icon: <Search className="w-4 h-4" /> },
                                { text: "Scalable Technology", icon: <Share2 className="w-4 h-4" /> }
                            ].map((item, i) => (
                                <Card key={i} className="border-primary/20 bg-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:translate-x-1 overflow-hidden group">
                                    <CardContent className="p-4 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <span className="font-semibold text-foreground">{item.text}</span>
                                        <CheckCircle2 className="ml-auto w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
