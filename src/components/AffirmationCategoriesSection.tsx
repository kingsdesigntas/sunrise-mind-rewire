import { Heart, Shield, TrendingUp, Smile, Star, Leaf } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import WaveDivider from "./WaveDivider";

const categories = [
{ icon: Heart, title: "Self-Love", sample: "\"I am worthy of love and belonging.\"" },
{ icon: Shield, title: "Confidence", sample: "\"I trust myself to handle whatever comes.\"" },
{ icon: TrendingUp, title: "Abundance", sample: "\"Opportunities flow to me effortlessly.\"" },
{ icon: Smile, title: "Calm & Peace", sample: "\"I release what I cannot control.\"" },
{ icon: Star, title: "Purpose", sample: "\"I am aligned with my highest path.\"" },
{ icon: Leaf, title: "Health", sample: "\"My body heals and renews each day.\"" }];


const AffirmationCategoriesSection = () =>
<section className="relative bg-background pt-16 md:pt-24 pb-4 py-0">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-3xl md:text-5xl text-foreground text-center mb-4">
          Affirmation Categories
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14 text-lg">
          Choose themes that resonate with your journey, or create your own.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {categories.map((cat, i) =>
      <AnimatedSection key={i} delay={i * 0.08}>
            <div className="bg-soft-pink/30 rounded-2xl p-6 hover:shadow-md transition-shadow duration-250">
              <cat.icon className="w-8 h-8 text-brand-pink mb-4" />
              <h3 className="text-lg text-foreground font-semibold mb-2">{cat.title}</h3>
              <p className="text-muted-foreground text-sm italic">{cat.sample}</p>
            </div>
          </AnimatedSection>
      )}
      </div>
    </div>
    <WaveDivider fillColor="hsl(213 66% 34%)" className="mt-8" />
  </section>;


export default AffirmationCategoriesSection;