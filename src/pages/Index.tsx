import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PrettyWebsiteTrap from "@/components/PrettyWebsiteTrap";
import ThreePillarSolution from "@/components/ThreePillarSolution";
import HowItWorks from "@/components/HowItWorks";
import SocialProofBar from "@/components/SocialProofBar";
import FeaturedProject from "@/components/FeaturedProject";
import AntiGhostingTrust from "@/components/AntiGhostingTrust";
import MeetTheArchitect from "@/components/MeetTheArchitect";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import ROIArchitectureSection from "@/components/ROIArchitectureSection";
import LocalPricingSection from "@/components/LocalPricingSection";
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
      <SocialProofBar />
      <FeaturedProject />
      <AntiGhostingTrust />
      <MeetTheArchitect />
      <WhoThisIsFor />
      <ROIArchitectureSection />
      <LocalPricingSection />
      <ArchitectureAuditCTA />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
