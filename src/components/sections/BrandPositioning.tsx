"use client";

import React, { useRef } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function BrandPositioning() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const borderRadius = useTransform(
        scrollYProgress,
        [0, 0.2, 0.45],
        ["0px", "64px", "0px"]
    );

    return (
        <div ref={containerRef} className="relative z-20">
            <motion.section
                style={{
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                }}
                className="bg-[#030303] text-white overflow-hidden border-t border-zinc-900 shadow-2xl min-h-screen"
            >
                <div className="container mx-auto px-4 md:px-6 py-32 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                            Commerce Has Evolved <br />
                            <span className="text-zinc-500 text-4xl md:text-6xl font-normal">Beyond Traditional Systems</span>
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto">
                            Di era commerce modern, standar keberhasilan telah berubah dari sekadar operasional menjadi integrasi pertumbuhan.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto pb-20">
                        {/* Traditional Systems */}
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col items-center gap-2 mb-12">
                                <XCircle size={28} className="text-rose-500" />
                                <h3 className="text-2xl font-medium tracking-tight text-white">
                                    Traditional Systems
                                </h3>
                            </div>

                            <div className="space-y-6 w-full">
                                {[
                                    { title: "Sistem Statis", desc: "Bisnis menggunakan website yang <span class='text-rose-400'>statis, lambat</span>, dan <span class='text-rose-400'>sulit dikelola</span> secara internal." },
                                    { title: "Insting Manual", desc: "Strategi pemasaran yang masih mengandalkan <span class='text-rose-400'>insting manual</span> tanpa <span class='text-rose-400'>validasi data behavior</span>." },
                                    { title: "Operasional Lambat", desc: "Operasional bisnis <span class='text-rose-400'>memakan waktu</span> karena sebagian besar proses dilakukan secara <span class='text-rose-400'>manual</span>." },
                                    { title: "Data Terisolasi", desc: "Berbagai tools bisnis <span class='text-rose-400'>tidak saling terhubung</span>, menyebabkan data operasional <span class='text-rose-400'>terisolasi</span>." },
                                    { title: "Infrastruktur Kaku", desc: "Infrastruktur lama <span class='text-rose-400'>tidak memiliki kapabilitas</span> untuk mendukung integrasi <span class='text-rose-400'>AI modern</span>." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="space-y-1">
                                            <h4 className="text-base font-medium text-white/90">{item.title}</h4>
                                            <p className="text-sm md:text-base text-zinc-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Solutions */}
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col items-center gap-2 mb-12">
                                <CheckCircle2 size={28} className="text-blue-500" />
                                <h3 className="text-2xl font-medium tracking-tight text-white">
                                    Exantra Infrastructure
                                </h3>
                            </div>

                            <div className="space-y-6 w-full">
                                {[
                                    { title: "Growth Architecture", desc: "Arsitektur website modern dirancang khusus untuk <span class='text-blue-400 font-medium'>skalabilitas bisnis</span> dan performa tinggi." },
                                    { title: "Automation Ecosystem", desc: "Ekosistem yang <span class='text-blue-400 font-medium'>mengotomatisasi alur kerja</span> operasional secara cerdas dan efisien." },
                                    { title: "AI-Powered Analytics", desc: "Pengambilan keputusan bisnis cerdas didasarkan pada <span class='text-blue-400 font-medium'>Business Intelligence & AI</span>." },
                                    { title: "Search Visibility", desc: "Mendominasi pasar digital melalui optimasi <span class='text-blue-400 font-medium'>SEO & SEM</span> yang terintegrasi secara mendalam." },
                                    { title: "Scalable Technology", desc: "Teknologi masa depan <span class='text-blue-400 font-medium'>fleksibel</span> mengikuti perkembangan <span class='text-blue-400 font-medium'>ekosistem commerce</span> global." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="space-y-1">
                                            <h4 className="text-base font-medium text-white/90">{item.title}</h4>
                                            <p className="text-sm md:text-base text-zinc-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
