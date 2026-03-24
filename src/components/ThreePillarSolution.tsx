import { Palette, PenTool, Hexagon } from "lucide-react";
import BlueprintReveal from "./motion/BlueprintReveal";
import ParticleAssembly from "./motion/ParticleAssembly";
import TextReveal from "./motion/TextReveal";

const pillars = [
  {
    icon: Palette,
    label: "World-Class Design",
    title: "A site your customers actually enjoy using",
    desc: "First impressions happen in under three seconds. We build websites that feel as polished and professional as the work you do — clean, fast, and built to guide a visitor straight to the 'call now' button. No clutter. No confusion. Just a clear path to booking you.",
  },
  {
    icon: PenTool,
    label: "Words That Sell",
    title: "Copy that turns visitors into callers",
    desc: "A beautiful site with the wrong words is just a pretty brochure. We write the words on your site — headlines, service descriptions, calls to action — around one goal: making your ideal client feel like you're speaking directly to them. Because you are.",
  },
  {
    icon: Hexagon,
    label: "Logo & Brand Identity",
    title: "A look that commands trust at a glance",
    desc: "Your logo is the handshake before the handshake. We design marks that communicate credibility and professionalism — the kind that makes a homeowner in Winkler choose you over the three other quotes they got. Delivered ready for print, social, vehicle wraps, everything.",
  },
];

const ThreePillarSolution = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <BlueprintReveal className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            What we do differently
          </p>
          <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground" delay={0.2}>
            We don't just build you a website. We build you a{" "}
            <span className="glow-text">business tool.</span>
          </TextReveal>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Every project at Valley Digital Co. is built around three things that
            actually move the needle for local service businesses.
          </p>
        </BlueprintReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <ParticleAssembly
              key={pillar.title}
              index={i}
              className="glass-card p-8 md:p-10 text-center group hover:border-primary/40 hover:shadow-[var(--shadow-glow-sm)] transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-primary text-xs font-semibold tracking-wider uppercase mb-2">
                {pillar.label}
              </p>
              <h3 className="text-xl font-bold text-foreground mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </ParticleAssembly>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillarSolution;
