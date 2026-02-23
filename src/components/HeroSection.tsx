import { motion } from "framer-motion";
import logo from "@/assets/thetaclock-logo.png";
import WaveDivider from "./WaveDivider";

const HeroSection = () => (
  <section className="relative gradient-hero min-h-[90vh] flex flex-col">
    <nav className="container mx-auto px-6 pt-6">
      <img src={logo} alt="Theta Clock" className="h-10 md:h-12 brightness-0 invert" />
    </nav>

    <div className="flex-1 flex items-center">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground text-shadow-soft leading-tight mb-6">
            Rewire Your Mind While You Wake.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-xl leading-relaxed">
            Theta Clock delivers affirmations during your brain's most receptive state — the moment between sleep and wakefulness.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#early-access"
              whileHover={{ y: -2, boxShadow: "var(--gradient-cta-glow)" }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-brand-orange font-medium text-foreground text-lg tracking-wide hover:bg-golden-yellow transition-colors"
            >
              Get Early Access
            </motion.a>
            <motion.a
              href="#what-is-theta"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-primary-foreground/80 text-primary-foreground font-medium text-lg tracking-wide hover:bg-primary-foreground/10 transition-colors"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>

    <WaveDivider fillColor="hsl(56 76% 78%)" />
  </section>
);

export default HeroSection;
