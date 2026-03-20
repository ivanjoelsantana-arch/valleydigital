import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
  "Lead-Capture Integration"]

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
  "Print & Digital Master Files"]

},
{
  title: "The Complete Rebrand",
  standardRate: "$6,500",
  localRate: "$5,500",
  bestValue: true,
  bullets: [
  "Everything in Web, Copy, and Logo",
  "Total Brand Alignment",
  "Priority Local Support"]

}];


const LocalPricingSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 pt-4 pb-20 md:pb-28 py-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            Local Partner <span className="glow-text">Pricing</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {pricingPlans.map((plan) =>
          <div
            key={plan.title}
            className={`glass-card-hover p-6 md:p-8 flex flex-col relative ${plan.bestValue ? "glow-border-strong" : ""}`}>
            
              {plan.bestValue &&
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground border-none shadow-[var(--shadow-glow-sm)] px-4 py-1">
                  Best Value
                </Badge>
            }

              <h3 className="text-xl font-bold text-foreground mb-6">
                {plan.title}
              </h3>

              <div className="mb-2">
                <span className="text-sm text-muted-foreground">Standard Rate</span>
                <p className="text-2xl font-bold text-muted-foreground line-through">
                  {plan.standardRate}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-sm text-muted-foreground">Local Partner Rate</span>
                <p className="text-3xl font-extrabold glow-text">
                  {plan.localRate}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.bullets.map((bullet) =>
              <li key={bullet} className="flex items-start gap-3 text-sm text-secondary-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {bullet}
                  </li>
              )}
              </ul>

              <button className="btn-primary-glow w-full text-center">
                Apply for Local Rate
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto leading-relaxed">
          Local Partner Rates are reserved for businesses physically located in the Pembina Valley and Southern Manitoba. We believe in investing in our neighbors.
        </p>
      </div>
    </section>);

};

export default LocalPricingSection;