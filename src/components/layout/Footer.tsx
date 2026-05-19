"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Globe, MessageSquare, Share2, Link2 } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                    Ready to Build Modern <br /> Commerce Infrastructure?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    Bergabunglah dengan ratusan bisnis yang telah mengtransformasi operasional dan mempercepat pertumbuhan mereka bersama Exa Commerce.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-2xl shadow-primary/20 group">
                        Request Consultation
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-bold">
                        Schedule Discussion
                    </Button>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg">E</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight">EXA COMMERCE</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            AI-Powered Commerce Growth Infrastructure. Kami membangun masa depan commerce dengan teknologi cerdas dan operasional yang efisien.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Globe, MessageSquare, Share2, Link2].map((Icon, i) => (
                                <Link key={i} href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                    <Icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="#platform" className="hover:text-primary transition-colors">Commerce Website</Link></li>
                            <li><Link href="#platform" className="hover:text-primary transition-colors">Smart POS</Link></li>
                            <li><Link href="#platform" className="hover:text-primary transition-colors">AI Commerce</Link></li>
                            <li><Link href="#platform" className="hover:text-primary transition-colors">Analytics</Link></li>
                            <li><Link href="#platform" className="hover:text-primary transition-colors">Automation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="#services" className="hover:text-primary transition-colors">Website Development</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">SEO Management</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">SEM Management</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Commerce Consultation</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Growth Optimization</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-bold">Contact Us</h4>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="shrink-0 text-primary" />
                                <span>Jakarta, Indonesia <br /> Tech Hub Level 5</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0 text-primary" />
                                <span>+62 812 3456 7890</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="shrink-0 text-primary" />
                                <span>hello@exacommerce.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© 2026 Exa Commerce. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary">Terms of Service</Link>
                        <Link href="#" className="hover:text-primary">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
