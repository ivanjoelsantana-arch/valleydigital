import { Palette, PenTool, Hexagon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    icon: Palette,
    title: "World-Class Web Design",
    focus: "Precision & Speed",
    desc: "Every pixel is engineered for performance. We craft interfaces that load instantly, guide the eye strategically, and create an experience that feels as premium as your service.",
  },
  {
    icon: PenTool,
    title: "Masterful Sales Copy",
    focus: "Psychology & Narrative",
    desc: "Words are the invisible architecture of conversion. We use psychology-driven storytelling to position your customer as the hero and your brand as the essential guide.",
  },
  {
    icon: Hexagon,
    title: "Stunning Logo Design",
    focus: "Authority & Visual Identity",
    desc: "Your logo is your brand's handshake. We design marks that communicate authority, professionalism, and trust at a single glance—across every medium.",
  },
];

const PillarCard = ({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`glass-card p-8 md:p-10 text-center group hover:border-primary/40 hover:shadow-[var(--shadow-glow-sm)] transition-all duration-300 ${
        isVisible ? "scroll-visible" : "scroll-hidden"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
        <pillar.icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-1">{pillar.title}</h3>
      <p className="text-primary text-xs font-semibold tracking-wider uppercase mb-4">
        {pillar.focus}
      </p>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {pillar.desc}
      </p>
    </div>
  );
};

const ThreePillarSolution = () => {
  const header = useScrollReveal();

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div
          ref={header.ref}
          className={`text-center mb-16 ${
            header.isVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            The 3-Pillar <span className="glow-text">Solution</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            A stunning website without a masterful narrative is a building
            without a foundation. We engineer all three.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillarSolution;
