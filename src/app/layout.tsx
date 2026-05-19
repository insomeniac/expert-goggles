import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Exa Commerce — AI-Powered Commerce Growth Infrastructure",
  description:
    "Exa Commerce membantu bisnis membangun website commerce modern, meningkatkan visibility melalui SEO & SEM, serta mengembangkan operasional bisnis dalam satu ecosystem berbasis AI.",
  keywords: [
    "commerce",
    "AI",
    "website",
    "SEO",
    "SEM",
    "POS",
    "ecommerce",
    "growth",
    "digital",
  ],
  openGraph: {
    title: "Exa Commerce — AI-Powered Commerce Growth Infrastructure",
    description:
      "Build Modern Commerce with AI. Satu ecosystem untuk website, commerce, SEO, AI, analytics, dan operational growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`h-full antialiased ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-full flex flex-col bg-exa-dark text-exa-text font-sans">
        {children}
      </body>
    </html>
  );
}
