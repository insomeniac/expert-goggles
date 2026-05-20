"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export function BrandPositioning() {
    return (
        <section className="min-h-[100dvh] flex items-center py-12 lg:py-0 bg-black text-white overflow-hidden relative">
            {/* Subtle Gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,1)_0%,rgba(0,0,0,1)_100%)] opacity-50" />

            <div className="container mx-auto px-4 md:px-6 py-8 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-10 space-y-3">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
                        Commerce Has Evolved Beyond Traditional Systems
                    </h2>
                    <p className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
                        Di era commerce modern, standar keberhasilan telah berubah dari sekadar operasional menjadi integrasi pertumbuhan.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-10 lg:gap-20 max-w-6xl mx-auto">

                    {/* Traditional Systems - The Problem */}
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center gap-2 mb-8">
                            <XCircle size={28} className="text-red-500" />
                            <h3 className="text-xl font-semibold tracking-tight text-white">
                                Traditional Systems
                            </h3>
                        </div>

                        <div className="space-y-5 w-full">
                            {[
                                { title: "Outdated Website", desc: "Bisnis menggunakan website yang <span class='font-bold text-red-600'>statis, lambat</span>, dan <span class='font-bold text-red-600'>sulit dikelola</span> secara internal." },
                                { title: "Marketing Without Data", desc: "Strategi pemasaran yang masih mengandalkan <span class='font-bold text-red-600'>insting manual</span> tanpa <span class='font-bold text-red-600'>validasi data behavior</span>." },
                                { title: "Manual Operations", desc: "Operasional bisnis <span class='font-bold text-red-600'>memakan waktu</span> karena sebagian besar proses dilakukan secara <span class='font-bold text-red-600'>manual</span>." },
                                { title: "Fragmentation", desc: "Berbagai tools bisnis <span class='font-bold text-red-600'>tidak saling terhubung</span>, menyebabkan data operasional <span class='font-bold text-red-600'>terisolasi</span>." },
                                { title: "Legacy Tech", desc: "Infrastruktur lama <span class='font-bold text-red-600'>tidak memiliki kapabilitas</span> untuk mendukung integrasi <span class='font-bold text-red-600'>AI modern</span>." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-2 shrink-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                                    </div>
                                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Exa Commerce - The Solution */}
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center gap-2 mb-8">
                            <CheckCircle2 size={28} className="text-blue-500" />
                            <h3 className="text-xl font-semibold tracking-tight text-white text-center">
                                Exa Commerce Infrastructure
                            </h3>
                        </div>

                        <div className="space-y-5 w-full">
                            {[
                                { title: "Growth Infrastructure", desc: "Arsitektur website modern dirancang khusus untuk <span class='font-bold text-blue-600'>skalabilitas bisnis</span> dan performa tinggi." },
                                { title: "Automation Ecosystem", desc: "Ekosistem yang <span class='font-bold text-blue-600'>mengotomatisasi alur kerja</span> operasional secara cerdas dan efisien." },
                                { title: "AI-Powered Analytics", desc: "Pengambilan keputusan bisnis cerdas didasarkan pada <span class='font-bold text-blue-600'>Business Intelligence & AI</span>." },
                                { title: "Search Visibility", desc: "Mendominasi pasar digital melalui optimasi <span class='font-bold text-blue-600'>SEO & SEM</span> yang terintegrasi secara mendalam." },
                                { title: "Scalable Technology", desc: "Teknologi masa depan <span class='font-bold text-blue-600'>fleksibel</span> mengikuti perkembangan <span class='font-bold text-blue-600'>ekosistem commerce</span> global." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-2 shrink-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                                    </div>
                                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
