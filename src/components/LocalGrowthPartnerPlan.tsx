import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";

const checklist = [
  "One done-for-you Google Business Profile post — written and ready to publish",
  "One site update — new photos, promotions, service changes, copy tweaks",
  "A 5-minute performance report — plain-English walkthrough of your traffic and leads every month",
  "Full site walkthrough — every link, button, form, and page tested by Ivan personally",
  "Same-day response — always Ivan, never a ticket system",
  "Annual full growth review — top-to-bottom audit of your site and digital presence",
];

const LocalGrowthPartnerPlan = () => {
  return (
    <section className="section-padding pt-24 md:pt-32">
      <div className="max-w-3xl mx-auto">
        <BlueprintReveal className="text-center mb-10">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Local Growth Partner Plan
          </p>
          <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight pb-1" delay={0.2}>
            Your Site Is Live.{" "}
            <span className="glow-text">Now Let's Keep It Working.</span>
          </TextReveal>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Most websites quietly decay after launch. Links break. Photos go stale. Google stops paying attention. The Local Growth Partner Plan makes sure that never happens to yours.
          </p>
          <p className="text-secondary-foreground text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            For <span className="text-foreground font-semibold">$197/month</span>, I handle everything that keeps your site sharp, visible, and converting — so you can stay focused on running your business.
          </p>
        </BlueprintReveal>

        <div
          className="rounded-xl p-6 md:p-10 bg-card mb-10"
          style={{ border: "1px solid hsl(var(--border))" }}
        >
          <ul className="space-y-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm md:text-base text-secondary-foreground">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-8">
            $197/month. Cancel any time. And your site never calls in sick.
          </p>
          <Link to="/discovery" className="btn-primary-glow btn-hover-lift inline-block text-center">
            Let's talk →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocalGrowthPartnerPlan;
