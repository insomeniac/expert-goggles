"use client";

import { motion } from "framer-motion";
import { ArrowUpRight as ArrowIcon } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="relative z-20 py-32 overflow-hidden bg-[#030303] text-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
                        Ready to Build Modern <br /> Commerce Infrastructure?
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
                        Bergabunglah dengan brand-brand yang telah mengtransformasi operasional dan mempercepat pertumbuhan mereka bersama infrastruktur Exantra.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-12 py-5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-sm flex items-center gap-2 group">
                            Request Consultation
                            <ArrowIcon size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                        <button className="px-12 py-5 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-full hover:bg-zinc-800 transition-all text-sm">
                            Schedule Discussion
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
