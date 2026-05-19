import { Navbar } from "@/components/layout/Navbar";
import { Footer, FinalCTA } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandPositioning } from "@/components/sections/BrandPositioning";
import { MainServicesPreview } from "@/components/sections/MainServicesPreview";
import { AISection } from "@/components/sections/AISection";
import { Platform } from "@/components/sections/Platform";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Portfolio } from "@/components/sections/Portfolio";
import { Support } from "@/components/sections/Support";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      <main>
        <Hero />
        <BrandPositioning />
        <MainServicesPreview />
        <AISection />
        <Platform />
        <Services />
        <Solutions />
        <Portfolio />
        <Support />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
