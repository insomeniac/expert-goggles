import Link from "next/link";
import {
    Settings,
    Mail,
    MapPin,
    Phone,
    Video,
    MessageCircle,
    Briefcase,
    Camera,
} from "lucide-react";

const footerLinks = {
    platform: [
        { label: "Commerce Website", href: "/platform#commerce-website" },
        { label: "Smart POS", href: "/platform#smart-pos" },
        { label: "AI Commerce", href: "/platform#ai-commerce" },
        { label: "Analytics", href: "/platform#analytics" },
        { label: "Automation", href: "/platform#automation" },
    ],
    services: [
        { label: "Website Development", href: "/services#website-dev" },
        { label: "SEO Management", href: "/services#seo" },
        { label: "SEM Management", href: "/services#sem" },
        { label: "Commerce Consultation", href: "/services#consultation" },
        { label: "Growth Optimization", href: "/services#growth" },
    ],
    solutions: [
        { label: "Retail Commerce", href: "/solutions#retail" },
        { label: "F&B Business", href: "/solutions#fnb" },
        { label: "Fashion & Lifestyle", href: "/solutions#fashion" },
        { label: "Beauty & Skincare", href: "/solutions#beauty" },
        { label: "Multi-Branch Business", href: "/solutions#multi-branch" },
    ],
    support: [
        { label: "Documentation", href: "/support#docs" },
        { label: "Help Center", href: "/support#help" },
        { label: "FAQ", href: "/support#faq" },
        { label: "Onboarding", href: "/support#onboarding" },
        { label: "Consultation", href: "/support#consultation" },
    ],
};

const socialLinks = [
    { icon: <Camera className="w-4 h-4" />, href: "#", label: "Instagram" },
    { icon: <Briefcase className="w-4 h-4" />, href: "#", label: "LinkedIn" },
    { icon: <Video className="w-4 h-4" />, href: "#", label: "YouTube" },
    { icon: <MessageCircle className="w-4 h-4" />, href: "#", label: "Twitter" },
];

export default function Footer() {
    return (
        <footer className="relative bg-exa-darker border-t border-white/[0.04]">
            {/* CTA Banner */}
            <div className="relative px-6 sm:px-10 lg:px-20 xl:px-32 py-16">
                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-exa-accent/10 via-exa-cyan/5 to-exa-violet/10 rounded-3xl blur-3xl" />
                    <div className="relative glass-card rounded-2xl px-8 py-12 md:px-16 md:py-16">
                        <p className="text-xs font-semibold tracking-[0.2em] text-exa-accent-light uppercase mb-4">
                            Start Your Growth Journey
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-display)]">
                            Ready to Build Modern Commerce?
                        </h2>
                        <p className="text-exa-text-muted max-w-xl mx-auto mb-8">
                            Konsultasikan kebutuhan bisnis Anda dan temukan bagaimana Exa
                            Commerce dapat membantu bisnis berkembang lebih cepat.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#consultation"
                                className="px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-exa-accent to-exa-accent-dark rounded-full hover:shadow-lg hover:shadow-exa-accent/25 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Request Consultation
                            </Link>
                            <Link
                                href="/demo"
                                className="px-8 py-3 text-sm font-semibold text-exa-text-muted border border-white/10 rounded-full hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200"
                            >
                                Schedule Discussion
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="px-6 sm:px-10 lg:px-20 xl:px-32 py-16 border-t border-white/[0.04]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-5">
                        <Link href="/" className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-exa-accent to-exa-cyan flex items-center justify-center">
                                <Settings className="w-4 h-4 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
                                Exa <span className="text-exa-accent-light">Commerce</span>
                            </span>
                        </Link>
                        <p className="text-sm text-exa-text-muted leading-relaxed max-w-xs">
                            AI-Powered Commerce Growth Infrastructure. Partner pertumbuhan
                            bisnis modern berbasis technology dan AI.
                        </p>
                        <div className="space-y-2.5 text-sm text-exa-text-dim">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-0.5 text-exa-accent-light shrink-0" />
                                <span>Jakarta, Indonesia</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-exa-accent-light shrink-0" />
                                <span>hello@exacommerce.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-exa-accent-light shrink-0" />
                                <span>+62 812-3456-7890</span>
                            </div>
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">Platform</h3>
                        <ul className="space-y-2.5">
                            {footerLinks.platform.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-exa-text-dim hover:text-exa-text-muted transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
                        <ul className="space-y-2.5">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-exa-text-dim hover:text-exa-text-muted transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">
                            Solutions
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-exa-text-dim hover:text-exa-text-muted transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
                        <ul className="space-y-2.5">
                            {footerLinks.support.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-exa-text-dim hover:text-exa-text-muted transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="px-6 sm:px-10 lg:px-20 xl:px-32 py-6 border-t border-white/[0.04]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-exa-text-dim">
                        © {new Date().getFullYear()} Exa Commerce. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/legal/terms"
                            className="text-xs text-exa-text-dim hover:text-exa-text-muted transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/legal/privacy"
                            className="text-xs text-exa-text-dim hover:text-exa-text-muted transition-colors"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="p-2 rounded-lg text-exa-text-dim hover:text-white hover:bg-white/[0.04] transition-all"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
