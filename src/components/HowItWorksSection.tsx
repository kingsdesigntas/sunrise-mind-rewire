import { Clock, Moon, Sparkles, Volume2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import WaveDivider from "./WaveDivider";

const steps = [
{ icon: Moon, title: "Set Your Alarm", desc: "Choose your wake time like any alarm clock." },
{ icon: Volume2, title: "Pick Affirmations", desc: "Select from categories or create your own." },
{ icon: Clock, title: "Wake in Theta", desc: "Theta Clock gently wakes you, keeping your brain receptive." },
{ icon: Sparkles, title: "Transform Daily", desc: "Consistent use rewires your subconscious over time." }];


const HowItWorksSection = () =>
<section className="relative gradient-blue">
    <div className="pt-16 md:pt-24 pb-8">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl text-primary-foreground text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto mb-14 text-lg">
            Four simple steps to start rewiring your mind each morning.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) =>
        <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 h-full">
                <step.icon className="w-8 h-8 text-golden-yellow mb-4" />
                <h3 className="text-lg text-primary-foreground font-semibold mb-2">{step.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
        )}
        </div>
      </div>
    </div>
    <WaveDivider fillColor="hsl(var(--background))" />
  </section>;


export default HowItWorksSection;