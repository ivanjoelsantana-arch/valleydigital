import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LocalPricingSection from "@/components/LocalPricingSection";
import MeetTheArchitect from "@/components/MeetTheArchitect";
import ThreePillarSolution from "@/components/ThreePillarSolution";
import PersuasionSection from "@/components/PersuasionSection";
import SignalNoiseTransition from "@/components/SignalNoiseTransition";
import FeaturedProject from "@/components/FeaturedProject";
import ROIArchitectureSection from "@/components/ROIArchitectureSection";
import ArchitectureProcess from "@/components/ArchitectureProcess";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LocalPricingSection />
      <MeetTheArchitect />
      <ThreePillarSolution />
      <PersuasionSection />
      <FeaturedProject />
      <ROIArchitectureSection />
      <ArchitectureProcess />
      <LocalPricingSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
