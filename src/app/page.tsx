import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/home/HeroSection";
import BrandPositioning from "@/components/sections/home/BrandPositioning";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import AISection from "@/components/sections/home/AISection";
import FinalCTA from "@/components/sections/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandPositioning />
        <ServicesPreview />
        <AISection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
