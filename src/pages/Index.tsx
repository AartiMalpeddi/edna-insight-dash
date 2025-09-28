import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsGrid from "@/components/StatsGrid";
import UploadSection from "@/components/UploadSection";
import AnalysisSection from "@/components/AnalysisSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsGrid />
      <UploadSection />
      <AnalysisSection />
    </div>
  );
};

export default Index;
