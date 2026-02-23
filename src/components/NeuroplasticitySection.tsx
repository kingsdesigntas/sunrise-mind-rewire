import { Brain, Sunrise, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import WaveDivider from "./WaveDivider";

const steps = [
{
  icon: Sunrise,
  title: "Wake Gently",
  desc: "Theta Clock wakes you softly, keeping you in the theta window.",
  colorClass: "bg-brand-pink text-primary-foreground"
},
{
  icon: Brain,
  title: "Absorb Affirmations",
  desc: "Personalised affirmations play while your subconscious is most open.",
  colorClass: "bg-brand-orange text-foreground"
},
{
  icon: Zap,
  title: "Rewire Pathways",
  desc: "Repeated exposure builds new neural patterns through neuroplasticity.",
  colorClass: "bg-mid-blue text-primary-foreground"
}];


const NeuroplasticitySection = () =>
<section className="relative bg-background pt-16 md:pt-24 pb-4 py-0">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-3xl md:text-5xl text-foreground text-center mb-4">
          The Science of Change
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
          Your brain's ability to reorganise itself — neuroplasticity — is strongest during the theta state. Here's how Theta Clock harnesses it.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) =>
      <AnimatedSection key={i} delay={i * 0.15}>
            <div className="text-center">
              <div className={`w-20 h-20 rounded-full ${step.colorClass} flex items-center justify-center mx-auto mb-6 shadow-md`}>
                <step.icon className="w-9 h-9" />
              </div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Step {i + 1}
              </span>
              <h3 className="text-xl text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          </AnimatedSection>
      )}
      </div>
    </div>
    <WaveDivider fillColor="hsl(213 53% 52%)" className="mt-12" />
  </section>;


export default NeuroplasticitySection;