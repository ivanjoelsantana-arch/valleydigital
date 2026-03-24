import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PrettyWebsiteTrap from "@/components/PrettyWebsiteTrap";
import ThreePillarSolution from "@/components/ThreePillarSolution";
import HowItWorks from "@/components/HowItWorks";
import AntiGhostingTrust from "@/components/AntiGhostingTrust";
import FeaturedProject from "@/components/FeaturedProject";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import MeetTheArchitect from "@/components/MeetTheArchitect";
import LocalPricingSection from "@/components/LocalPricingSection";
import PersuasionSection from "@/components/PersuasionSection";
import SignalNoiseTransition from "@/components/SignalNoiseTransition";
import ROIArchitectureSection from "@/components/ROIArchitectureSection";
import ArchitectureAuditCTA from "@/components/ArchitectureAuditCTA";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PrettyWebsiteTrap />
      <ThreePillarSolution />
      <HowItWorks />
      <AntiGhostingTrust />
      <FeaturedProject />
      <WhoThisIsFor />
      <MeetTheArchitect />
      <LocalPricingSection />
      <ArchitectureAuditCTA />
      <PersuasionSection />
      <SignalNoiseTransition />
      <ROIArchitectureSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
