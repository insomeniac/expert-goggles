"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
    Menu,
    X,
    ChevronDown,
    Globe,
    Cpu,
    Bot,
    BarChart3,
    Zap,
    Code,
    Search,
    Megaphone,
    MessageSquare,
    TrendingUp,
    ShoppingBag,
    Gamepad2,
    UtensilsCrossed,
    Shirt,
    Building2,
    Sparkles,
    Crown,
    Store,
    FileText,
    Rocket,
    HelpCircle,
    BookOpen,
    Headphones,
    Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

interface DropdownItem {
    label: string;
    href: string;
    icon: React.ReactNode;
    description?: string;
}

interface NavItem {
    label: string;
    href: string;
    dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
        label: "Platform",
        href: "/platform",
        dropdown: [
            {
                label: "Commerce Website",
                href: "/platform#commerce-website",
                icon: <Globe className="w-4 h-4" />,
                description: "Website modern dengan premium UI/UX",
            },
            {
                label: "Smart POS",
                href: "/platform#smart-pos",
                icon: <Cpu className="w-4 h-4" />,
                description: "Sistem POS modern terintegrasi",
            },
            {
                label: "AI Commerce",
                href: "/platform#ai-commerce",
                icon: <Bot className="w-4 h-4" />,
                description: "AI-powered automation ecosystem",
            },
            {
                label: "Analytics",
                href: "/platform#analytics",
                icon: <BarChart3 className="w-4 h-4" />,
                description: "Dashboard realtime & reporting",
            },
            {
                label: "Automation",
                href: "/platform#automation",
                icon: <Zap className="w-4 h-4" />,
                description: "Workflow & operational automation",
            },
        ],
    },
    {
        label: "Services",
        href: "/services",
        dropdown: [
            {
                label: "Website Development",
                href: "/services#website-dev",
                icon: <Code className="w-4 h-4" />,
                description: "Commerce website modern",
            },
            {
                label: "SEO Management",
                href: "/services#seo",
                icon: <Search className="w-4 h-4" />,
                description: "Organic visibility & growth",
            },
            {
                label: "SEM Management",
                href: "/services#sem",
                icon: <Megaphone className="w-4 h-4" />,
                description: "Performance advertising",
            },
            {
                label: "Commerce Consultation",
                href: "/services#consultation",
                icon: <MessageSquare className="w-4 h-4" />,
                description: "Strategi digital commerce",
            },
            {
                label: "Growth Optimization",
                href: "/services#growth",
                icon: <TrendingUp className="w-4 h-4" />,
                description: "Optimasi traffic & conversion",
            },
        ],
    },
    {
        label: "Solutions",
        href: "/solutions",
        dropdown: [
            {
                label: "Retail Commerce",
                href: "/solutions#retail",
                icon: <ShoppingBag className="w-4 h-4" />,
            },
            {
                label: "Hobby Commerce",
                href: "/solutions#hobby",
                icon: <Gamepad2 className="w-4 h-4" />,
            },
            {
                label: "F&B Business",
                href: "/solutions#fnb",
                icon: <UtensilsCrossed className="w-4 h-4" />,
            },
            {
                label: "Fashion & Lifestyle",
                href: "/solutions#fashion",
                icon: <Shirt className="w-4 h-4" />,
            },
            {
                label: "Multi-Branch Business",
                href: "/solutions#multi-branch",
                icon: <Building2 className="w-4 h-4" />,
            },
            {
                label: "Beauty & Skincare",
                href: "/solutions#beauty",
                icon: <Sparkles className="w-4 h-4" />,
            },
            {
                label: "Franchise Business",
                href: "/solutions#franchise",
                icon: <Crown className="w-4 h-4" />,
            },
            {
                label: "Premium UMKM",
                href: "/solutions#umkm",
                icon: <Store className="w-4 h-4" />,
            },
        ],
    },
    { label: "Portfolio", href: "/portfolio" },
    {
        label: "Support",
        href: "/support",
        dropdown: [
            {
                label: "Documentation",
                href: "/support#docs",
                icon: <FileText className="w-4 h-4" />,
            },
            {
                label: "Onboarding",
                href: "/support#onboarding",
                icon: <Rocket className="w-4 h-4" />,
            },
            {
                label: "Help Center",
                href: "/support#help",
                icon: <HelpCircle className="w-4 h-4" />,
            },
            {
                label: "FAQ",
                href: "/support#faq",
                icon: <BookOpen className="w-4 h-4" />,
            },
            {
                label: "Consultation",
                href: "/support#consultation",
                icon: <Headphones className="w-4 h-4" />,
            },
        ],
    },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setMobileDropdown(null);
    }, [pathname]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav
                className={`transition-all duration-300 ${scrolled
                        ? "bg-exa-dark/80 backdrop-blur-xl border-b border-white/[0.04] shadow-lg shadow-black/20"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between h-[72px]">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-exa-accent to-exa-cyan flex items-center justify-center group-hover:shadow-lg group-hover:shadow-exa-accent/20 transition-shadow">
                                <Settings className="w-4 h-4 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
                                Exa <span className="text-exa-accent-light">Commerce</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() =>
                                        item.dropdown && setOpenDropdown(item.label)
                                    }
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-1 px-3.5 py-2 text-sm rounded-lg transition-all duration-200 ${pathname === item.href
                                                ? "text-white bg-white/[0.06]"
                                                : "text-exa-text-muted hover:text-white hover:bg-white/[0.04]"
                                            }`}
                                    >
                                        {item.label}
                                        {item.dropdown && (
                                            <ChevronDown
                                                className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""
                                                    }`}
                                            />
                                        )}
                                    </Link>

                                    {/* Desktop Dropdown */}
                                    {item.dropdown && openDropdown === item.label && (
                                        <div className="absolute top-full left-0 pt-2 min-w-[280px]">
                                            <div className="bg-exa-darker/95 backdrop-blur-xl rounded-xl border border-white/[0.06] shadow-2xl shadow-black/40 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                                {item.dropdown.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        href={sub.href}
                                                        className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group/item"
                                                    >
                                                        <div className="mt-0.5 p-1.5 rounded-md bg-white/[0.04] text-exa-text-muted group-hover/item:text-exa-accent-light group-hover/item:bg-exa-accent/10 transition-colors">
                                                            {sub.icon}
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-medium text-exa-text group-hover/item:text-white transition-colors">
                                                                {sub.label}
                                                            </div>
                                                            {sub.description && (
                                                                <div className="text-xs text-exa-text-dim mt-0.5">
                                                                    {sub.description}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right CTA */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Link
                                href="/demo"
                                className="px-5 py-2 text-sm font-medium text-exa-text-muted border border-white/10 rounded-full hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200"
                            >
                                Demo
                            </Link>
                            <Link
                                href="#consultation"
                                className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-exa-accent to-exa-accent-dark rounded-full hover:shadow-lg hover:shadow-exa-accent/25 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Request Consultation
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 text-exa-text-muted hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[85%] max-w-[380px] bg-exa-darker z-50 lg:hidden transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"
                    } overflow-y-auto`}
            >
                <div className="p-6">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between mb-8">
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                            onClick={() => setMobileOpen(false)}
                        >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-exa-accent to-exa-cyan flex items-center justify-center">
                                <Settings className="w-4 h-4 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
                                Exa <span className="text-exa-accent-light">Commerce</span>
                            </span>
                        </Link>
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="p-2 text-exa-text-muted hover:text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Mobile Links */}
                    <div className="space-y-1">
                        {navItems.map((item) => (
                            <div key={item.label}>
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setMobileDropdown(
                                                    mobileDropdown === item.label ? null : item.label
                                                )
                                            }
                                            className={`w-full flex items-center justify-between px-4 py-3 text-sm rounded-lg transition-colors ${pathname === item.href
                                                    ? "text-white bg-white/[0.06]"
                                                    : "text-exa-text-muted hover:text-white hover:bg-white/[0.04]"
                                                }`}
                                        >
                                            {item.label}
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === item.label ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        {mobileDropdown === item.label && (
                                            <div className="ml-4 mt-1 space-y-0.5 border-l border-white/[0.06] pl-4">
                                                {item.dropdown.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        href={sub.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="flex items-center gap-2.5 px-3 py-2 text-sm text-exa-text-dim hover:text-white rounded-lg hover:bg-white/[0.04] transition-colors"
                                                    >
                                                        <span className="text-exa-text-muted">
                                                            {sub.icon}
                                                        </span>
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`block px-4 py-3 text-sm rounded-lg transition-colors ${pathname === item.href
                                                ? "text-white bg-white/[0.06]"
                                                : "text-exa-text-muted hover:text-white hover:bg-white/[0.04]"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile CTAs */}
                    <div className="mt-8 space-y-3 border-t border-white/[0.06] pt-8">
                        <Link
                            href="/demo"
                            onClick={() => setMobileOpen(false)}
                            className="block text-center px-5 py-3 text-sm font-medium text-exa-text-muted border border-white/10 rounded-full hover:text-white hover:border-white/20 transition-all"
                        >
                            Demo
                        </Link>
                        <Link
                            href="#consultation"
                            onClick={() => setMobileOpen(false)}
                            className="block text-center px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-exa-accent to-exa-accent-dark rounded-full hover:shadow-lg hover:shadow-exa-accent/25 transition-all"
                        >
                            Request Consultation
                        </Link>
                    </div>

                    <p className="text-xs text-exa-text-dim mt-10">
                        © {new Date().getFullYear()} Exa Commerce. All rights reserved.
                    </p>
                </div>
            </div>
        </header>
    );
}
