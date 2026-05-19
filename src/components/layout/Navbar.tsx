"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
    ChevronDown,
    Menu,
    X,
    Globe,
    ShoppingBag,
    Sparkles,
    BarChart3,
    Workflow,
    Code2,
    Search,
    Megaphone,
    MessageSquare,
    TrendingUp,
    Store,
    Palette,
    Coffee,
    Shirt,
    Building2,
    Flower2,
    Network,
    Monitor,
    Layout,
    HeartHandshake,
    HelpCircle,
    Zap,
    BookOpen
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type SubItem = {
    label: string
    href: string
    description?: string
    icon?: React.ComponentType<{ className?: string }>
}

type NavItem =
    | { label: string; href: string; type: "link" }
    | { label: string; type: "dropdown"; items: SubItem[] }
    | { label: string; type: "megamenu"; items: SubItem[] }

const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/", type: "link" },
    {
        label: "Platform",
        type: "dropdown",
        items: [
            {
                label: "Commerce Website",
                href: "#platform",
                description: "Launch a fast, conversion-ready storefront.",
                icon: Globe,
            },
            {
                label: "Smart POS",
                href: "#platform",
                description: "Unified online and in-store transactions.",
                icon: ShoppingBag,
            },
            {
                label: "AI Commerce",
                href: "#platform",
                description: "Personalize at scale with built-in AI.",
                icon: Sparkles,
            },
            {
                label: "Analytics Dashboard",
                href: "#platform",
                description: "Real-time insights across every channel.",
                icon: BarChart3,
            },
            {
                label: "Automation",
                href: "#platform",
                description: "Automate operations end to end.",
                icon: Workflow,
            },
        ],
    },
    {
        label: "Services",
        type: "dropdown",
        items: [
            {
                label: "Website Development",
                href: "#services",
                description: "Custom builds engineered for performance.",
                icon: Code2,
            },
            {
                label: "SEO Management",
                href: "#services",
                description: "Rank higher with technical SEO expertise.",
                icon: Search,
            },
            {
                label: "SEM Management",
                href: "#services",
                description: "Profitable paid acquisition campaigns.",
                icon: Megaphone,
            },
            {
                label: "Commerce Consultation",
                href: "#services",
                description: "Strategic guidance from commerce experts.",
                icon: MessageSquare,
            },
            {
                label: "Growth Optimization",
                href: "#services",
                description: "Scale revenue with data-driven CRO.",
                icon: TrendingUp,
            },
        ],
    },
    {
        label: "Solutions",
        type: "megamenu",
        items: [
            { label: "Retail Commerce", href: "#solutions", description: "Modern retail experiences", icon: Store },
            { label: "Hobby Commerce", href: "#solutions", description: "Niche communities & enthusiasts", icon: Palette },
            { label: "F&B Business", href: "#solutions", description: "Food, beverage, and delivery", icon: Coffee },
            { label: "Fashion & Lifestyle", href: "#solutions", description: "Apparel and lifestyle brands", icon: Shirt },
            { label: "Multi-Branch Business", href: "#solutions", description: "Operations across locations", icon: Building2 },
            { label: "Beauty & Skincare", href: "#solutions", description: "Beauty, wellness, and skincare", icon: Flower2 },
            { label: "Franchise Business", href: "#solutions", description: "Scale a franchise network", icon: Network },
            { label: "Premium UMKM", href: "#solutions", description: "Scale your local brand growth", icon: Zap },
        ],
    },
    {
        label: "Portfolio",
        type: "dropdown",
        items: [
            { label: "Showcase Website", href: "#portfolio", description: "Visual excellence in commerce.", icon: Monitor },
            { label: "UI/UX Design", href: "#portfolio", description: "User-centric shopping experiences.", icon: Layout },
            { label: "Dashboard System", href: "#portfolio", description: "Powerful backend management.", icon: BarChart3 },
            { label: "Branding", href: "#portfolio", description: "Unique brand identities.", icon: Sparkles },
            { label: "Case Studies", href: "#portfolio", description: "Real results from real clients.", icon: BookOpen },
        ],
    },
    {
        label: "Support",
        type: "dropdown",
        items: [
            { label: "Documentation", href: "#support", description: "Guides for every feature.", icon: BookOpen },
            { label: "Onboarding", href: "#support", description: "Get started quickly.", icon: HeartHandshake },
            { label: "Help Center", href: "#support", description: "24/7 self-service support.", icon: HelpCircle },
            { label: "FAQ", href: "#support", description: "Answers to common questions.", icon: MessageSquare },
        ],
    },
    { label: "Pricing", href: "#pricing", type: "link" },
]

export function Navbar() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    React.useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : ""
        return () => {
            document.body.style.overflow = ""
        }
    }, [mobileOpen])

    const handleEnter = (index: number) => {
        if (closeTimer.current) clearTimeout(closeTimer.current)
        setOpenIndex(index)
    }

    const handleLeave = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current)
        closeTimer.current = setTimeout(() => setOpenIndex(null), 120)
    }

    const isSolid = scrolled || mobileOpen

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full py-3",
                isSolid
                    ? "border-b border-border bg-background shadow-sm"
                    : "border-transparent bg-transparent transition-colors duration-300",
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <div className="flex items-center gap-6 lg:gap-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2" aria-label="Exantara home">
                        <div className="relative w-32 h-8">
                            <Image
                                src="/exantara-logo.png"
                                alt="Exantara"
                                fill
                                className={cn("object-contain object-left", isSolid ? "brightness-0" : "")}
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav
                        className="hidden lg:flex lg:items-center lg:gap-1"
                        onMouseLeave={handleLeave}
                        aria-label="Primary"
                    >
                        {NAV_ITEMS.map((item, index) => {
                            if (item.type === "link") {
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onMouseEnter={() => handleEnter(-1)}
                                        className={cn(
                                            "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                                            !isSolid ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-foreground"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            }

                            const isOpen = openIndex === index
                            return (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => handleEnter(index)}
                                >
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-haspopup="menu"
                                        className={cn(
                                            "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none",
                                            !isSolid
                                                ? (isOpen ? "text-white" : "text-white/80 hover:text-white")
                                                : (isOpen ? "text-foreground" : "text-foreground/80 hover:text-foreground")
                                        )}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            className={cn(
                                                "h-3.5 w-3.5 transition-transform duration-200",
                                                isOpen && "rotate-180",
                                            )}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 6 }}
                                                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                                className={cn(
                                                    "absolute left-1/2 top-full -translate-x-1/2 pt-3",
                                                    item.type === "megamenu" ? "w-[820px]" : "w-[420px]",
                                                )}
                                                role="menu"
                                            >
                                                <div className="overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-xl shadow-black/5">
                                                    {item.type === "megamenu" ? (
                                                        <div className="grid grid-cols-2 gap-1 p-3">
                                                            {item.items.map((sub) => (
                                                                <DropdownLink key={sub.label} item={sub} />
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col p-2">
                                                            {item.items.map((sub) => (
                                                                <DropdownLink key={sub.label} item={sub} />
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </nav>
                </div>

                {/* Right CTAs */}
                <div className="hidden items-center gap-6 lg:flex">
                    <Link
                        href="#demo"
                        className={cn(
                            "text-sm font-medium transition-all hover:underline underline-offset-4",
                            !isSolid ? "text-white" : "text-foreground"
                        )}
                    >
                        Demo
                    </Link>
                    <Button
                        className={cn(
                            "inline-flex items-center rounded-full px-6 h-10 text-sm font-bold shadow-none transition-all",
                            !isSolid ? "bg-white text-black hover:bg-white/90" : "bg-foreground text-background hover:bg-foreground/90"
                        )}
                    >
                        Request Consultation
                    </Button>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((v) => !v)}
                    className={cn(
                        "inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden focus:outline-none",
                        !isSolid ? "text-white" : "text-foreground"
                    )}
                >
                    {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden"
                    >
                        <div className="border-t border-border bg-background">
                            <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
                                <ul className="flex flex-col gap-1">
                                    {NAV_ITEMS.map((item) => (
                                        <li key={item.label}>
                                            {item.type === "link" ? (
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground"
                                                >
                                                    {item.label}
                                                </Link>
                                            ) : (
                                                <MobileAccordion item={item} onNavigate={() => setMobileOpen(false)} />
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 flex flex-col gap-4 border-t border-border pt-4">
                                    <Link
                                        href="#demo"
                                        onClick={() => setMobileOpen(false)}
                                        className="rounded-full border border-border px-3 py-3 w-full text-center text-sm font-bold text-foreground hover:bg-accent transition-colors"
                                    >
                                        Demo
                                    </Link>
                                    <Button
                                        className="rounded-full bg-foreground px-4 h-12 text-center text-sm font-bold text-background transition-all hover:bg-foreground/90 shadow-none"
                                    >
                                        Request Consultation
                                    </Button>
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    )
}

function DropdownLink({ item }: { item: SubItem }) {
    const Icon = item.icon
    return (
        <Link
            href={item.href}
            role="menuitem"
            className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-accent"
        >
            {Icon && (
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Icon className="h-4 w-4" />
                </span>
            )}
            <span className="flex flex-col">
                <span className="text-sm font-medium leading-none text-foreground">{item.label}</span>
                {item.description && (
                    <span className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.description}</span>
                )}
            </span>
        </Link>
    )
}

function MobileAccordion({
    item,
    onNavigate,
}: {
    item: Extract<NavItem, { type: "dropdown" | "megamenu" }>
    onNavigate: () => void
}) {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="border-b border-border/60 last:border-b-0">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-foreground focus:outline-none"
            >
                {item.label}
                <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <ul className="flex flex-col gap-0.5 pb-2 pl-3">
                            {item.items.map((sub) => (
                                <li key={sub.label}>
                                    <Link
                                        href={sub.href}
                                        onClick={onNavigate}
                                        className="block rounded-md px-3 py-2.5 text-sm text-foreground/80 hover:bg-accent hover:text-foreground"
                                    >
                                        {sub.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
