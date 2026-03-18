import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CapabilitiesSection />
      <ProcessTimeline />
      <ROICalculator />
      <Footer />
    </div>
  );
};

export default Index;
