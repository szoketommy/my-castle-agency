import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SquadsOverview from "@/components/sections/SquadsOverview";
import RevOpsDifference from "@/components/sections/RevOpsDifference";
import SquadModelSection from "@/components/sections/SquadModelSection";
import ResultsSection from "@/components/sections/ResultsSection";
import WhoWeServe from "@/components/sections/WhoWeServe";
import EcosystemSection from "@/components/sections/EcosystemSection";
import ModularEngagement from "@/components/sections/ModularEngagement";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Navbar />
      <HeroSection />
      <SquadsOverview />
      <RevOpsDifference />
      <SquadModelSection />
      <ResultsSection />
      <WhoWeServe />
      <EcosystemSection />
      <ModularEngagement />
      <ContactSection />
      <Footer />
    </div>
  );
}
