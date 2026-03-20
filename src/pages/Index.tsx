import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LocalPricingSection from "@/components/LocalPricingSection";
import PersuasionSection from "@/components/PersuasionSection";
import ROIArchitectureSection from "@/components/ROIArchitectureSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LocalPricingSection />
      <PersuasionSection />
      <ROIArchitectureSection />
      <CapabilitiesSection />
      <ProcessTimeline />
      <Footer />
    </div>
  );
};

export default Index;
