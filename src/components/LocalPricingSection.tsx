import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SpringCard from "./motion/SpringCard";
import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";

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
  return (
    <SpringCard index={index} className="self-start">
      <div
        className="relative rounded-xl p-6 md:p-8 flex flex-col h-full bg-card"
        style={{ border: "1px solid hsl(var(--border))" }}
      >
        {plan.bestValue && (
          <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground border-none px-4 py-1 z-10">
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

        <ul className="space-y-3 flex-1">
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

        <div className="mt-auto pt-8">
          <button className="btn-primary-glow btn-hover-lift w-full text-center">
            Start Your Build
          </button>
        </div>
      </div>
    </SpringCard>
  );
};

const LocalPricingSection = () => {
  return (
    <section id="pricing" className="section-padding pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto">
        <BlueprintReveal className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Pricing
          </p>
          <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground" delay={0.2}>
            Local Partner <span className="glow-text">Pricing</span>
          </TextReveal>
        </BlueprintReveal>

        <div className="grid md:grid-cols-3 gap-4 items-end">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.title} plan={plan} index={i} />
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto leading-relaxed">
          Local Partner Rates are reserved for businesses physically located in
          the Pembina Valley and Southern Manitoba. We believe in investing in
          our neighbours.
        </p>
      </div>
    </section>
  );
};

export default LocalPricingSection;
