import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LocalPricingSection from "@/components/LocalPricingSection";
import PersuasionSection from "@/components/PersuasionSection";
import ROIArchitectureSection from "@/components/ROIArchitectureSection";
import MeetTheArchitect from "@/components/MeetTheArchitect";
import ArchitectureProcess from "@/components/ArchitectureProcess";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LocalPricingSection />
      <PersuasionSection />
      <ROIArchitectureSection />
      <ArchitectureProcess />
      <CapabilitiesSection />
      <ProcessTimeline />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
