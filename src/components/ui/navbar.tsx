"use client"

import * as React from "react"
import Link from "next/link"
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
} from "lucide-react"
import { cn } from "@/lib/utils"

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
                href: "/platform/commerce-website",
                description: "Launch a fast, conversion-ready storefront.",
                icon: Globe,
            },
            {
                label: "Smart POS",
                href: "/platform/smart-pos",
                description: "Unified online and in-store transactions.",
                icon: ShoppingBag,
            },
            {
                label: "AI Commerce",
                href: "/platform/ai-commerce",
                description: "Personalize at scale with built-in AI.",
                icon: Sparkles,
            },
            {
                label: "Analytics Dashboard",
                href: "/platform/analytics",
                description: "Real-time insights across every channel.",
                icon: BarChart3,
            },
            {
                label: "Automation",
                href: "/platform/automation",
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
                href: "/services/website-development",
                description: "Custom builds engineered for performance.",
                icon: Code2,
            },
            {
                label: "SEO Management",
                href: "/services/seo",
                description: "Rank higher with technical SEO expertise.",
                icon: Search,
            },
            {
                label: "SEM Management",
                href: "/services/sem",
                description: "Profitable paid acquisition campaigns.",
                icon: Megaphone,
            },
            {
                label: "Commerce Consultation",
                href: "/services/consultation",
                description: "Strategic guidance from commerce experts.",
                icon: MessageSquare,
            },
            {
                label: "Growth Optimization",
                href: "/services/growth",
                description: "Scale revenue with data-driven CRO.",
                icon: TrendingUp,
            },
        ],
    },
    {
        label: "Solutions",
        type: "megamenu",
        items: [
            { label: "Retail Commerce", href: "/solutions/retail", description: "Modern retail experiences", icon: Store },
            { label: "Hobby Commerce", href: "/solutions/hobby", description: "Niche communities & enthusiasts", icon: Palette },
            { label: "F&B Business", href: "/solutions/fnb", description: "Food, beverage, and delivery", icon: Coffee },
            { label: "Fashion & Lifestyle", href: "/solutions/fashion", description: "Apparel and lifestyle brands", icon: Shirt },
            { label: "Multi-Branch Business", href: "/solutions/multi-branch", description: "Operations across locations", icon: Building2 },
            { label: "Beauty & Skincare", href: "/solutions/beauty", description: "Beauty, wellness, and skincare", icon: Flower2 },
            { label: "Franchise Business", href: "/solutions/franchise", description: "Scale a franchise network", icon: Network },
        ],
    },
    { label: "Pricing", href: "/pricing", type: "link" },
    { label: "Resources", href: "/resources", type: "link" },
]

export function Navbar() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
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

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b transition-all duration-300",
                scrolled
                    ? "border-border/80 bg-background/80 backdrop-blur-md"
                    : "border-transparent bg-background",
            )}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2" aria-label="Exa Commerce home">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
                        <span className="font-mono text-sm font-bold">E</span>
                    </div>
                    <span className="text-base font-semibold tracking-tight text-foreground">
                        Exa<span className="text-muted-foreground"> Commerce</span>
                    </span>
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
                                    className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
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
                                        "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                        isOpen ? "text-foreground" : "text-foreground/80 hover:text-foreground",
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

                {/* Right CTAs */}
                <div className="hidden items-center gap-2 lg:flex">
                    <Link
                        href="/login"
                        className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                        Log in
                    </Link>
                    <Link
                        href="/start"
                        className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
                    >
                        Start free trial
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((v) => !v)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
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
                                <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                                    <Link
                                        href="/login"
                                        onClick={() => setMobileOpen(false)}
                                        className="rounded-md px-3 py-3 text-center text-sm font-medium text-foreground/80"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href="/start"
                                        onClick={() => setMobileOpen(false)}
                                        className="rounded-full bg-foreground px-4 py-3 text-center text-sm font-medium text-background"
                                    >
                                        Start free trial
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
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
                    <span className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.description}</span>
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
                className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-foreground"
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
