import { motion } from "framer-motion";
import logo from "@/assets/thetaclock-logo.png";
import appScreenshot from "@/assets/app-screenshot.png";
import WaveDivider from "./WaveDivider";

const HeroSection = () =>
<>
    {/* White top banner */}
    <header className="bg-card w-full">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <img src={logo} alt="Theta Clock" className="h-10 md:h-12" />
        <a
        href="#early-access"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-card font-medium text-sm tracking-wide hover:opacity-90 transition-opacity">

          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          <span className="hidden sm:inline">Download for Android</span>
          <span className="sm:hidden">Android</span>
        </a>
      </div>
    </header>

    <section className="relative gradient-hero min-h-[80vh] flex flex-col">
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Text content */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl lg:flex-1">

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
                className="inline-flex items-center px-8 py-4 rounded-full bg-brand-orange font-medium text-foreground text-lg tracking-wide hover:bg-golden-yellow transition-colors">

                  Get Early Access
                </motion.a>
                <motion.a
                href="#what-is-theta"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25 }}
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-primary-foreground/80 text-primary-foreground font-medium text-lg tracking-wide hover:bg-primary-foreground/10 transition-colors">

                  Learn More
                </motion.a>
              </div>
            </motion.div>

            {/* Right: App screenshot with download button */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex flex-col items-center lg:flex-shrink-0">

              <div className="relative w-[260px] md:w-[300px]">
                <img
                src={appScreenshot}
                alt="Theta Clock App"
                className="w-full rounded-[2rem] shadow-2xl" />

              </div>
              <motion.a
              href="#early-access"
              whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(255,164,0,0.4)" }}
              transition={{ duration: 0.25 }}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-orange font-medium text-foreground text-base tracking-wide hover:bg-golden-yellow transition-colors bg-stone-50">

                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Download for Android
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      <WaveDivider fillColor="hsl(56 76% 78%)" />
    </section>
  </>;


export default HeroSection;