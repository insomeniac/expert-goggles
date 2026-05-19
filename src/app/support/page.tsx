"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedInView from "@/components/ui/AnimatedInView";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
    Headphones,
    FileText,
    MessageSquare,
    Rocket,
    Settings,
    Handshake,
    ArrowRight,
    Clock,
    Shield,
    HeartHandshake,
    ChevronDown,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface SupportService {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    iconColor: string;
    gradient: string;
}

const supportServices: SupportService[] = [
    {
        id: "help",
        icon: <Headphones className="w-7 h-7" />,
        title: "Technical Support",
        description:
            "Pendampingan teknis untuk memastikan sistem berjalan secara optimal.",
        iconColor: "text-cyan-400",
        gradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
        id: "docs",
        icon: <FileText className="w-7 h-7" />,
        title: "Documentation",
        description:
            "Panduan penggunaan platform dan ecosystem Exa Commerce.",
        iconColor: "text-emerald-400",
        gradient: "from-emerald-500/10 to-green-500/10",
    },
    {
        id: "consultation",
        icon: <MessageSquare className="w-7 h-7" />,
        title: "Consultation",
        description:
            "Diskusi kebutuhan bisnis dan strategi growth ecosystem.",
        iconColor: "text-violet-400",
        gradient: "from-violet-500/10 to-purple-500/10",
    },
    {
        id: "onboarding",
        icon: <Rocket className="w-7 h-7" />,
        title: "Onboarding Assistance",
        description:
            "Pendampingan implementasi dan setup platform.",
        iconColor: "text-amber-400",
        gradient: "from-amber-500/10 to-orange-500/10",
    },
    {
        id: "optimization",
        icon: <Settings className="w-7 h-7" />,
        title: "System Optimization",
        description:
            "Optimasi performa website, SEO, dan operational ecosystem.",
        iconColor: "text-rose-400",
        gradient: "from-rose-500/10 to-pink-500/10",
    },
];

const faqs = [
    {
        q: "Berapa lama waktu yang dibutuhkan untuk setup platform?",
        a: "Tergantung kompleksitas project, mulai dari 2-4 minggu untuk basic setup hingga 2-3 bulan untuk enterprise solution. Tim kami akan memberikan timeline yang detail setelah konsultasi awal.",
    },
    {
        q: "Apakah ada biaya maintenance bulanan?",
        a: "Ya, kami menyediakan paket maintenance yang mencakup technical support, security updates, performance monitoring, dan optimasi berkala. Detail biaya akan disesuaikan dengan kebutuhan bisnis Anda.",
    },
    {
        q: "Apakah bisa diintegrasikan dengan sistem yang sudah ada?",
        a: "Tentu. Platform Exa Commerce dirancang dengan arsitektur yang flexible dan mendukung integrasi dengan berbagai sistem melalui API. Tim kami akan membantu proses integrasi.",
    },
    {
        q: "Bagaimana proses konsultasi awal?",
        a: "Anda bisa request consultation melalui website. Tim kami akan menghubungi dalam 24 jam untuk menjadwalkan sesi konsultasi gratis. Kami akan memahami kebutuhan bisnis dan memberikan rekomendasi solusi yang tepat.",
    },
    {
        q: "Apakah tersedia training untuk tim internal?",
        a: "Ya, setiap implementasi dilengkapi dengan training session untuk tim Anda. Kami juga menyediakan documentation lengkap dan video tutorial untuk referensi.",
    },
    {
        q: "Bagaimana jaminan keamanan data?",
        a: "Kami menerapkan standar keamanan tinggi termasuk enkripsi data, secure hosting, regular security audit, dan backup otomatis. Keamanan data bisnis Anda adalah prioritas utama kami.",
    },
];

const commitments = [
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Response Time < 24 Jam",
        description: "Setiap inquiry akan direspon dalam waktu kurang dari 24 jam.",
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Dedicated Support Team",
        description: "Tim support berdedikasi untuk setiap client.",
    },
    {
        icon: <HeartHandshake className="w-6 h-6" />,
        title: "Long-Term Partnership",
        description:
            "Kami hadir sebagai partner teknologi jangka panjang untuk bisnis Anda.",
    },
];

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="glass-card rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
            >
                <span className="text-sm font-medium text-white">{q}</span>
                <ChevronDown
                    className={`w-4 h-4 text-exa-text-dim shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48" : "max-h-0"
                    }`}
            >
                <div className="px-5 pb-5 text-sm text-exa-text-muted leading-relaxed">
                    {a}
                </div>
            </div>
        </div>
    );
}

export default function SupportPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section className="relative pt-32 pb-20 px-6 sm:px-10 lg:px-20 xl:px-32 overflow-hidden">
                    <div className="absolute inset-0 radial-hero" />
                    <div className="absolute inset-0 grid-bg" />
                    <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-exa-cyan/6 rounded-full blur-[120px]" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <AnimatedInView from="bottom">
                            <p className="text-xs font-semibold tracking-[0.2em] text-exa-cyan uppercase mb-4">
                                Support
                            </p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
                                Dedicated Support
                                <br />
                                <span className="gradient-text">Ecosystem</span>
                            </h1>
                            <p className="text-lg text-exa-text-muted max-w-2xl mx-auto leading-relaxed">
                                Kami menyediakan support ecosystem untuk membantu bisnis
                                mengelola, mengembangkan, dan mengoptimalkan commerce
                                infrastructure secara berkelanjutan.
                            </p>
                        </AnimatedInView>
                    </div>
                </section>

                {/* Support Services */}
                <SectionWrapper>
                    <div className="max-w-6xl mx-auto">
                        <AnimatedInView from="bottom">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-display)]">
                                    Support Services
                                </h2>
                            </div>
                        </AnimatedInView>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {supportServices.map((service, i) => (
                                <AnimatedInView key={service.id} from="bottom" delay={i * 80}>
                                    <div
                                        id={service.id}
                                        className="group glass-card glass-card-hover rounded-2xl p-7 transition-all duration-300 h-full scroll-mt-24"
                                    >
                                        <div
                                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                        />
                                        <div className="relative z-10">
                                            <div
                                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                {service.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm text-exa-text-muted leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </AnimatedInView>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>

                {/* Commitment */}
                <SectionWrapper withRadial>
                    <div className="max-w-6xl mx-auto">
                        <AnimatedInView from="bottom">
                            <div className="text-center mb-12">
                                <p className="text-xs font-semibold tracking-[0.2em] text-exa-accent-light uppercase mb-4">
                                    Our Commitment
                                </p>
                                <h2 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-display)]">
                                    Long-Term Partnership for
                                    <br />
                                    <span className="gradient-text">Business Growth</span>
                                </h2>
                                <p className="text-exa-text-muted max-w-xl mx-auto mt-4 leading-relaxed">
                                    Kami percaya pertumbuhan bisnis membutuhkan lebih dari sekadar
                                    software. Exa Commerce hadir sebagai partner teknologi jangka
                                    panjang.
                                </p>
                            </div>
                        </AnimatedInView>

                        <div className="grid md:grid-cols-3 gap-5">
                            {commitments.map((item, i) => (
                                <AnimatedInView key={i} from="bottom" delay={i * 100}>
                                    <div className="glass-card rounded-2xl p-7 text-center h-full">
                                        <div className="w-12 h-12 rounded-xl bg-exa-accent/10 flex items-center justify-center mx-auto mb-4 text-exa-accent-light">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-base font-semibold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-exa-text-muted">
                                            {item.description}
                                        </p>
                                    </div>
                                </AnimatedInView>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>

                {/* FAQ */}
                <SectionWrapper id="faq">
                    <div className="max-w-3xl mx-auto">
                        <AnimatedInView from="bottom">
                            <div className="text-center mb-12">
                                <p className="text-xs font-semibold tracking-[0.2em] text-exa-accent-light uppercase mb-4">
                                    FAQ
                                </p>
                                <h2 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-display)]">
                                    Frequently Asked Questions
                                </h2>
                            </div>
                        </AnimatedInView>

                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <AnimatedInView key={i} from="bottom" delay={i * 60}>
                                    <FAQItem q={faq.q} a={faq.a} />
                                </AnimatedInView>
                            ))}
                        </div>

                        <AnimatedInView from="bottom" delay={400}>
                            <div className="text-center mt-12">
                                <p className="text-sm text-exa-text-muted mb-4">
                                    Masih ada pertanyaan?
                                </p>
                                <Link
                                    href="#consultation"
                                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-exa-accent to-exa-accent-dark rounded-full hover:shadow-lg hover:shadow-exa-accent/25 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <Handshake className="w-4 h-4" />
                                    Contact Support
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </AnimatedInView>
                    </div>
                </SectionWrapper>
            </main>
            <Footer />
        </>
    );
}
