import { useRef, useState } from "react";
import { Layers, Cpu, ShieldCheck, Zap, Database, GitBranch } from "lucide-react";

const capabilities = [
  { icon: Layers, title: "System Design", desc: "Scalable architectures that handle millions of requests." },
  { icon: Cpu, title: "Performance Engineering", desc: "Sub-second load times. Zero compromise on speed." },
  { icon: ShieldCheck, title: "Security-First", desc: "SOC2-ready infrastructure from day one." },
  { icon: Zap, title: "Rapid Prototyping", desc: "From concept to clickable MVP in weeks, not months." },
  { icon: Database, title: "Data Architecture", desc: "Schema design and pipelines that scale with your data." },
  { icon: GitBranch, title: "CI/CD & DevOps", desc: "Automated deployments with zero-downtime releases." },
];

const TiltCard = ({ item }: { item: typeof capabilities[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(600px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale3d(1.03, 1.03, 1.03)`);
  };

  const handleMouseLeave = () => setTransform("");

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card-hover p-6 cursor-default preserve-3d"
      style={{ transform, transition: transform ? "transform 0.1s ease-out" : "transform 0.4s ease-out" }}
    >
      <item.icon className="w-8 h-8 text-primary mb-4" />
      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
    </div>
  );
};

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Full-Stack <span className="glow-text">Engineering</span> Muscle
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((item) => (
            <TiltCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
