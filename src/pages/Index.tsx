import HeroSection from "@/components/HeroSection";
import ThetaStateSection from "@/components/ThetaStateSection";
import NeuroplasticitySection from "@/components/NeuroplasticitySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AffirmationCategoriesSection from "@/components/AffirmationCategoriesSection";
import EarlyAccessSection from "@/components/EarlyAccessSection";

const Index = () => (
  <main className="overflow-hidden">
    <HeroSection />
    <ThetaStateSection />
    <NeuroplasticitySection />
    <HowItWorksSection />
    <AffirmationCategoriesSection />
    <EarlyAccessSection />
    <footer className="bg-deep-blue py-6 text-center">
      <p className="text-primary-foreground/40 text-sm">
        © 2026 Theta Clock. All rights reserved.
      </p>
    </footer>
  </main>
);

export default Index;
