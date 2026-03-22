import { Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import SpringCard from "./motion/SpringCard";
import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";

const pricingPlans = [
  {
    title: "Web + Copy Overhaul",
    standardRate: "$5,500",
    localRate: "$4,800",
    monthlyRate: "$800/mo",
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
    monthlyRate: "$208/mo",
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
    monthlyRate: "$916/mo",
    bestValue: true,
    bullets: [
      "Everything in Web, Copy, and Logo",
      "Total Brand Alignment",
      "Priority Local Support",
    ],
  },
];

const PricingToggle = ({
  isMonthly,
  onToggle,
}: {
  isMonthly: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="flex justify-center mb-12">
      <div
        className="relative inline-flex items-center rounded-full p-1 cursor-pointer"
        style={{ backgroundColor: "hsl(215 18% 13%)" }}
        onClick={onToggle}
      >
        <motion.div
          className="absolute top-1 bottom-1 rounded-full"
          style={{ backgroundColor: "hsl(215 20% 24%)", width: "calc(50% - 4px)" }}
          animate={{ x: isMonthly ? "calc(100% + 4px)" : 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <span
          className={`relative z-10 px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
            !isMonthly ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Full Investment
        </span>
        <span
          className={`relative z-10 px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
            isMonthly ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          6-Month Plan
        </span>
      </div>
    </div>
  );
};

const PricingCard = ({
  plan,
  index,
  isMonthly,
}: {
  plan: (typeof pricingPlans)[0];
  index: number;
  isMonthly: boolean;
}) => {
  return (
    <SpringCard index={index} className="h-full">
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

        <div className="mb-8 min-h-[5rem]">
          <span className="text-sm text-muted-foreground">
            {isMonthly ? "Monthly Rate" : "Local Partner Rate"}
          </span>
          <AnimatePresence mode="wait">
            <motion.p
              key={isMonthly ? "monthly" : "full"}
              className="text-3xl font-extrabold glow-text"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {isMonthly ? plan.monthlyRate : plan.localRate}
            </motion.p>
          </AnimatePresence>
          {isMonthly && (
            <motion.p
              className="text-xs text-muted-foreground mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              0% interest for local partners
            </motion.p>
          )}
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
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section id="pricing" className="section-padding pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto">
        <BlueprintReveal className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Pricing
          </p>
          <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight pb-1" delay={0.2}>
            Local Partner <span className="glow-text">Pricing</span>
          </TextReveal>
        </BlueprintReveal>

        <PricingToggle isMonthly={isMonthly} onToggle={() => setIsMonthly(!isMonthly)} />

        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.title} plan={plan} index={i} isMonthly={isMonthly} />
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
