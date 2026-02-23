import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const EarlyAccessSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="early-access" className="relative bg-deep-blue py-20 md:py-28">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl text-primary-foreground mb-4 text-center">
            Early Beta Pricing
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-12 text-lg text-center">
            Get lifetime early access — completely free during our beta launch.
          </p>
        </AnimatedSection>

        {/* Pricing Cards */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto mb-14">
            {/* Regular Price Card */}
            <div className="flex-1 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 text-center opacity-60">
              <p className="text-primary-foreground/60 text-sm font-medium uppercase tracking-wider mb-4">Regular Price</p>
              <div className="relative inline-block mb-4">
                <span className="text-5xl font-extrabold text-primary-foreground/40">$8.99</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[3px] bg-brand-pink/80 rotate-[-12deg]" />
                </div>
              </div>
              <p className="text-primary-foreground/40 text-sm">per month</p>
            </div>

            {/* Beta Free Card */}
            <div className="flex-1 rounded-2xl border-2 border-golden-yellow/60 bg-primary-foreground/10 p-8 text-center relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-golden-yellow text-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Beta
              </div>
              <p className="text-golden-yellow text-sm font-medium uppercase tracking-wider mb-4">Early Access</p>
              <span className="text-5xl font-extrabold text-primary-foreground">FREE</span>
              <p className="text-primary-foreground/60 text-sm mt-4">No credit card required</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Email Capture */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-md mx-auto text-center">
            <p className="text-primary-foreground/80 mb-6 text-base">
              Enter your email to receive your free download link.
            </p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-primary-foreground/10 rounded-2xl p-8 border border-primary-foreground/20"
              >
                <p className="text-primary-foreground text-xl font-semibold mb-2">You're in! 🌅</p>
                <p className="text-primary-foreground/70">Check your inbox for your free download link.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-golden-yellow/50 text-base"
                />
                <motion.button
                  type="submit"
                  whileHover={{ y: -2, boxShadow: "0 8px 24px hsl(47 100% 50% / 0.3)" }}
                  transition={{ duration: 0.25 }}
                  className="px-8 py-4 rounded-full bg-golden-yellow text-foreground font-medium text-lg tracking-wide hover:brightness-110 transition-all"
                >
                  Get Free Access
                </motion.button>
              </form>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 flex items-center justify-center gap-2 text-primary-foreground/50 text-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Coming soon to Android
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
