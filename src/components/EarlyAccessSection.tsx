import { useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const EarlyAccessSection = () => {
  useEffect(() => {
    // Re-initialize MailerLite form after component mounts
    if (typeof window !== "undefined" && (window as any).ml) {
      (window as any).ml("refresh");
    }
  }, []);

  return (
    <section id="pricing" className="relative bg-deep-blue py-20 md:py-28">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl text-primary-foreground mb-4 text-center">
            Early Bird Pricing
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-12 text-lg text-center">Get lifetime access — completely free during our beta launch.
This offer will close after the first 100 users for a testing phase.
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

        {/* MailerLite Embedded Form */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-md mx-auto text-center">
            <p className="text-primary-foreground/80 mb-6 text-base">
              Enter your email to receive your free download link.
            </p>
            <div className="ml-embedded" data-form="8G6fR2"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-10 text-center text-primary-foreground/50 text-sm">We will email you to complete our feedback survey. 

          </p>
        </AnimatedSection>
      </div>
    </section>);

};

export default EarlyAccessSection;