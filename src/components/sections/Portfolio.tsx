"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const portfolioItems = [
    {
        category: "Commerce Website",
        title: "Aurelia Luxury Fashion",
        image: "/images/portfolio/fashion.png",
    },
    {
        category: "SEO & Growth",
        title: "Global Visibility Index",
        image: "/images/services/seo.png",
    },
    {
        category: "Smart POS Hub",
        title: "BistroChain Control",
        image: "/images/platform/pos.png",
    },
    {
        category: "AI Intelligence",
        title: "Predictive Analytics",
        image: "/images/platform/ai.png",
    }
];

export function Portfolio() {
    return (
        <section id="portfolio" className="relative z-20 py-20 bg-[#030303] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Crafting Digital Excellence
                    </h2>
                    <p className="text-xl text-zinc-500 leading-relaxed font-light">
                        Kami tidak sekadar membangun aplikasi; kami menciptakan infrastruktur pertumbuhan yang mempersepsikan nilai brand Anda secara premium.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {portfolioItems.map((item, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            key={i}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-zinc-900 bg-zinc-950 mb-6">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-zinc-400 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-zinc-900 flex items-center justify-center text-zinc-600 group-hover:text-white group-hover:border-white transition-all">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-xs text-zinc-600 max-w-sm text-center md:text-left font-light">
                        Membangun standar baru dalam ekosistem perdagangan digital melalui teknologi yang presisi.
                    </p>
                    <button className="px-10 py-4 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-full hover:bg-white hover:text-black transition-all text-sm">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
}
