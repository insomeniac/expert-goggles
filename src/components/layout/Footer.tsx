import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-[#030303] border-t border-zinc-900 pt-24 pb-12 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-32 h-10">
                                <Image
                                    src="/exantara-logo.png"
                                    alt="ExantaraLogo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-light">
                            AI-Powered Commerce Infrastructure. Membangun masa depan perdagangan digital melalui teknologi cerdas dan desain yang presisi.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                {
                                    name: "X",
                                    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                },
                                {
                                    name: "Instagram",
                                    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                                },
                                {
                                    name: "LinkedIn",
                                    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                },
                                {
                                    name: "YouTube",
                                    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 10.84 10.84 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 10.84 10.84 0 0 1-15 0 2 2 0 0 1-2-2z"></path><path d="m10 15 5-3-5-3z"></path></svg>
                                }
                            ].map((social, i) => (
                                <Link key={i} href="#" aria-label={social.name} className="w-10 h-10 rounded-full border border-zinc-900 flex items-center justify-center text-zinc-600 hover:text-white hover:border-zinc-700 transition-all">
                                    {social.svg}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-medium text-white">Platform</h4>
                        <ul className="space-y-4 text-sm text-zinc-500 font-light">
                            <li><Link href="#platform" className="hover:text-white transition-colors">Commerce Website</Link></li>
                            <li><Link href="#platform" className="hover:text-white transition-colors">Smart POS System</Link></li>
                            <li><Link href="#platform" className="hover:text-white transition-colors">AI Business Engine</Link></li>
                            <li><Link href="#platform" className="hover:text-white transition-colors">Enterprise Analytics</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-medium text-white">Services</h4>
                        <ul className="space-y-4 text-sm text-zinc-500 font-light">
                            <li><Link href="#services" className="hover:text-white transition-colors">Digital Strategy</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">SEO & Growth</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Conversion Logic</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">System Support</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-medium text-white">Connect</h4>
                        <div className="space-y-4 text-sm text-zinc-500 font-light">
                            <div className="flex items-start gap-4">
                                <MapPin size={18} className="shrink-0 text-zinc-700" />
                                <span className="leading-relaxed">Jakarta, Indonesia <br /> Platinum Hub Level 12</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone size={18} className="shrink-0 text-zinc-700" />
                                <span>+62 21 8291 000</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail size={18} className="shrink-0 text-zinc-700" />
                                <span>growth@exantara.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-zinc-600">
                    <p>© 2026 Exantara. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
