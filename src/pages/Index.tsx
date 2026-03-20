import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LocalPricingSection from "@/components/LocalPricingSection";
import PersuasionSection from "@/components/PersuasionSection";
import ROIArchitectureSection from "@/components/ROIArchitectureSection";
import BentoGrid from "@/components/BentoGrid";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LocalPricingSection />
      <PersuasionSection />
      <ROIArchitectureSection />
      <BentoGrid />
      <CapabilitiesSection />
      <ProcessTimeline />
      <ROICalculator />
      <Footer />
    </div>
  );
};

export default Index;
