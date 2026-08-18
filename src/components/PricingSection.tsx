import { useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "Monthly",
    price: "$5",
    period: "per month",
    note: "Cancel anytime",
    featured: false,
  },
  {
    name: "Yearly",
    price: "$50",
    period: "per year",
    note: "Save over 15%",
    featured: false,
  },
  {
    name: "Lifetime",
    price: "$40",
    period: "one-time",
    note: "Available for the first 6 months only",
    featured: true,
  },
];

const PricingSection = () => {
  useEffect(() => {
    const w = window as any;
    w.ml =
      w.ml ||
      function () {
        (w.ml.q = w.ml.q || []).push(arguments);
      };
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.mailerlite.com/js/universal.js";
    document.head.appendChild(script);
    w.ml("account", "2182870");
    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="pricing" className="relative bg-deep-blue py-20 md:py-28">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl text-primary-foreground mb-4 text-center">Simple Pricing</h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-12 text-lg text-center">
            Start with a 14-day free trial — no credit card required. Choose the plan that fits you afterwards.
          </p>
        </AnimatedSection>

        {/* Pricing Cards */}
        <AnimatedSection delay={0.1}>
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto mb-14">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 text-center relative overflow-hidden ${
                  plan.featured
                    ? "border-2 border-golden-yellow/60 bg-primary-foreground/10"
                    : "border border-primary-foreground/15 bg-primary-foreground/5"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-3 right-3 bg-golden-yellow text-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Best value
                  </div>
                )}
                <p
                  className={`text-sm font-medium uppercase tracking-wider mb-4 ${
                    plan.featured ? "text-golden-yellow" : "text-primary-foreground/60"
                  }`}
                >
                  {plan.name}
                </p>
                <span className="text-5xl font-extrabold text-primary-foreground">{plan.price}</span>
                <p className="text-primary-foreground/60 text-sm mt-3">{plan.period}</p>
                <p
                  className={`text-xs mt-2 ${
                    plan.featured
                      ? "text-golden-yellow font-semibold"
                      : "text-primary-foreground/50"
                  }`}
                >
                  {plan.note}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* MailerLite Email Capture */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-md mx-auto text-center">
            <p className="text-primary-foreground/80 mb-6 text-base">
              Enter your email to receive your download link and start your 14-day free trial.
            </p>
            <div className="ml-embedded" data-form="8G6fR2"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
