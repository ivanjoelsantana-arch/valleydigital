import { ArrowRight } from "lucide-react";
import { bentoItems } from "@/components/HeroSection";

const BentoGrid = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          {bentoItems.map((item) => (
            <div
              key={item.title}
              className={`glass-card-hover p-6 md:p-8 flex flex-col justify-between group ${item.className} ${item.accent ? "glow-border" : ""}`}
            >
              <div>
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
