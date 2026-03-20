import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pricingPlans = [
  {
    title: "Web + Copy Overhaul",
    standardRate: "$5,500",
    localRate: "$4,800",
    bestValue: false,
    bullets: [
      "Complete UI/UX Redesign",
      "High-Conversion Sales Copywriting",
      "SEO-Ready Structure",
      "Lead-Capture Integration",
    ],
  },
  {
    title: "Professional Logo",
    standardRate: "$1,500",
    localRate: "$1,250",
    bestValue: false,
    bullets: [
      "Strategic Discovery Session",
      "3 Unique Visual Concepts",
      "Full Brand Identity Kit",
      "Print & Digital Master Files",
    ],
  },
  {
    title: "The Complete Rebrand",
    standardRate: "$6,500",
    localRate: "$5,500",
    bestValue: true,
    bullets: [
      "Everything in Web, Copy, and Logo",
      "Total Brand Alignment",
      "Priority Local Support",
    ],
  },
];

const PricingCard = ({
  plan,
  index,
}: {
  plan: (typeof pricingPlans)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`glass-card-hover p-6 md:p-8 flex flex-col relative ${
        plan.bestValue ? "glow-border-strong" : ""
      } ${isVisible ? "scroll-visible" : "scroll-hidden"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {plan.bestValue && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground border-none shadow-[var(--shadow-glow-sm)] px-4 py-1">
          Best Value
        </Badge>
      )}

      <h3 className="text-xl font-bold text-foreground mb-6">{plan.title}</h3>

      <div className="mb-2">
        <span className="text-sm text-muted-foreground">Standard Rate</span>
        <p className="text-2xl font-bold text-muted-foreground line-through">
          {plan.standardRate}
        </p>
      </div>

      <div className="mb-8">
        <span className="text-sm text-muted-foreground">Local Partner Rate</span>
        <p className="text-3xl font-extrabold glow-text">{plan.localRate}</p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-3 text-sm text-secondary-foreground"
          >
            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            {bullet}
          </li>
        ))}
      </ul>

      <button className="btn-primary-glow w-full text-center">
        Secure Your Q2 Engagement
      </button>
    </div>
  );
};

const LocalPricingSection = () => {
  const header = useScrollReveal();

  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div
          ref={header.ref}
          className={`text-center mb-16 ${
            header.isVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            Local Partner <span className="glow-text">Pricing</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.title} plan={plan} index={i} />
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto leading-relaxed">
          Local Partner Rates are reserved for businesses physically located in
          the Pembina Valley and Southern Manitoba. We believe in investing in
          our neighbors.
        </p>
      </div>
    </section>
  );
};

export default LocalPricingSection;
