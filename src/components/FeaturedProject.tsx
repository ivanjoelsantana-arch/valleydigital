import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import screenshot from "@/assets/featured-project-afte.png";

const FeaturedProject = () => {
  const container = useScrollReveal();
  const copy = useScrollReveal();

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div
          ref={container.ref}
          className={`glass-card glow-border p-6 md:p-10 lg:p-14 ${
            container.isVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-center">
            {/* Left: Screenshot */}
            <div className="relative group">
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  border: "1px solid hsl(210 100% 56% / 0.5)",
                  boxShadow:
                    "0 4px 24px -4px hsl(210 100% 56% / 0.2), 0 8px 32px -8px hsl(0 0% 0% / 0.4)",
                }}
              >
                <img
                  src={screenshot}
                  alt="A Furry Tail Ending — Featured project by Valley Digital Architecture"
                  className="w-full h-auto block transition-[filter] duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div
              ref={copy.ref}
              className={`space-y-5 ${
                copy.isVisible ? "scroll-visible-right" : "scroll-hidden-right"
              }`}
            >
              <div>
                <p className="text-primary text-xs font-semibold tracking-wider uppercase mb-2">
                  Case Study
                </p>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground leading-tight">
                  Featured Infrastructure:
                  <br />
                  <span className="glow-text">A Furry Tail Ending</span>
                </h3>
                <p className="text-muted-foreground text-sm font-medium mt-1">
                  Modernizing Local Service Architecture
                </p>
              </div>

              <p className="text-secondary-foreground text-sm leading-relaxed">
                We transformed a local grooming brand into a digital-first
                service provider. By architecting a custom booking-focused UI
                and masterful narrative, we reduced client friction and elevated
                the brand's regional authority.
              </p>

              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                Performance Score: 99+ | Custom Booking Logic
              </div>

              <div>
                <a
                  href="https://afurrytailending.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/40 rounded-lg px-5 py-2.5 transition-all duration-300 hover:bg-primary/10 hover:border-primary/60 hover:shadow-[var(--shadow-glow-sm)]"
                >
                  View Live Architecture
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
