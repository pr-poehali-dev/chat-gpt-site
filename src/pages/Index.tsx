import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechSpecs from "@/components/TechSpecs";
import FeaturesSection from "@/components/FeaturesSection";
import ChatDemo from "@/components/ChatDemo";
import StatsSection from "@/components/StatsSection";
import APISection from "@/components/APISection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TechSpecs />
      <FeaturesSection />
      <ChatDemo />
      <StatsSection />
      <APISection />
      <ContactSection />
    </div>
  );
};

export default Index;
