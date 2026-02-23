import AnimatedSection from "./AnimatedSection";
import thetaSleep from "@/assets/theta-sleep.jpg";
import WaveDivider from "./WaveDivider";

const ThetaStateSection = () => (
  <section id="what-is-theta" className="relative bg-soft-yellow">
    <div className="gradient-morning-haze pt-16 md:pt-24 pb-8">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl text-foreground text-center mb-4">
            What Is the Theta State?
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
            The theta brainwave state (4–8 Hz) occurs in the moments between sleep and wakefulness — a window when your subconscious is deeply open to suggestion.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={thetaSleep}
                alt="Person peacefully sleeping with theta brainwaves visualized"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              {[
                { title: "Deep Receptivity", desc: "Your critical mind relaxes, allowing positive suggestions to reach your subconscious directly." },
                { title: "Natural Window", desc: "This state happens naturally every morning — Theta Clock helps you use it intentionally." },
                { title: "Science-Backed", desc: "Research shows theta waves enhance learning, memory consolidation, and emotional processing." },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
    <WaveDivider fillColor="hsl(var(--background))" />
  </section>
);

export default ThetaStateSection;
