import { Link } from "react-router-dom";
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
        {" · "}
        <Link to="/privacy" className="hover:text-primary-foreground/60 underline">
          Privacy Policy
        </Link>
      </p>
    </footer>
  </main>
);

export default Index;
