import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import SpringCard from "./motion/SpringCard";
import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";


const pricingPlans = [
  {
    title: "Website + Copy",
    deposit: "$1,100",
    monthly: "$733/month",
    months: 6,
    total: "$5,500",
    localDeposit: "$960",
    localMonthly: "$640/month",
    highlight: false,
    bullets: [
      "Custom-designed website built for your industry",
      "Sales copy written for every page",
      "Mobile-friendly, fast-loading, built for search engines to understand",
      "Delivered in 3–4 weeks",
    ],
  },
  {
    title: "Logo & Brand Identity",
    deposit: "$300",
    monthly: "$200/month",
    months: 6,
    total: "$1,500",
    localDeposit: "$250",
    localMonthly: "$167/month",
    highlight: false,
    bullets: [
      "Primary logo + alternate versions",
      "Colour palette and typography guide",
      "Brand usage guidelines",
      "Print and digital file formats",
    ],
  },
  {
    title: "The Complete Rebrand",
    deposit: "$1,300",
    monthly: "$867/month",
    months: 6,
    total: "$6,500",
    localDeposit: "$1,100",
    localMonthly: "$733/month",
    highlight: true,
    bullets: [
      "Everything in Website + Copy",
      "Everything in Logo & Brand Identity",
      "Unified brand and site launch strategy",
      "Priority delivery",
    ],
  },
];

const serviceMap: Record<string, string> = {
  "Website + Copy": "web-copy",
  "Logo & Brand Identity": "logo",
  "The Complete Rebrand": "rebrand",
};

const PricingCard = ({
  plan,
  index,
}: {
  plan: (typeof pricingPlans)[0];
  index: number;
}) => {
  const navigate = useNavigate();

  const inner = (
    <div className="relative overflow-visible rounded-xl p-6 md:p-8 flex flex-col h-full bg-card border border-border" style={{ minHeight: "100%" }}>
      {plan.highlight && (
        <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground border-none px-4 py-1 z-10">
          Most Popular
        </Badge>
      )}

      <h3 className="text-xl font-bold text-foreground mb-6">{plan.title}</h3>

      {/* Primary deposit price */}
      <p className="text-4xl md:text-5xl font-black glow-text leading-none mb-1">
        Start for <span className="block">{plan.deposit}</span>
      </p>

      {/* Secondary monthly / total */}
      <p className="text-sm text-muted-foreground mt-2">
        Then {plan.monthly} for {plan.months} months · {plan.total} total
      </p>

      {/* Local partner callout */}
      <div className="mt-4 mb-8 rounded-lg px-4 py-3 bg-primary/5 border border-primary/15">
        <p className="text-sm font-medium text-primary">
          Pembina Valley businesses:{" "}
          <span className="text-foreground">
            {plan.localDeposit} deposit · {plan.localMonthly}
          </span>
        </p>
      </div>

      {/* Bullets */}
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

      {/* CTA */}
      <div className="mt-auto pt-8">
        <button
          onClick={() =>
            navigate(
              `/discovery?service=${serviceMap[plan.title]}#discovery-section`
            )
          }
          className="btn-primary-glow btn-hover-lift w-full text-center"
        >
          Book a Free Call →
        </button>
      </div>
    </div>
  );

  if (plan.highlight) {
    return (
      <SpringCard index={index} className="h-full">
        {inner}
      </SpringCard>
    );
  }

  return (
    <SpringCard index={index} className="h-full">
      {inner}
    </SpringCard>
  );
};

const LocalPricingSection = () => {
  return (
    <section id="pricing" className="section-padding pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto">
        <BlueprintReveal className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Investment
          </p>
          <TextReveal
            as="h2"
            className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight pb-1"
            delay={0.2}
          >
            Simple, <span className="glow-text">Transparent Pricing.</span>
          </TextReveal>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Start with a deposit. Split the rest over 6 months. No interest, no
            hidden fees — just a straightforward way to get a site that pays for
            itself.
          </p>
        </BlueprintReveal>

        <div className="grid md:grid-cols-3 gap-4 items-stretch overflow-visible">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.title} plan={plan} index={i} />
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-12 max-w-3xl mx-auto leading-relaxed">
          All packages require a 20% deposit to begin. The remaining balance is
          split into 6 equal monthly payments — no interest, no surprises. Full
          upfront payment available. Local partner rates apply to businesses in
          the Pembina Valley and surrounding Southern Manitoba communities.
        </p>
      </div>
    </section>
  );
};

export default LocalPricingSection;
