import { ExternalLink } from "lucide-react";
import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import screenshot from "@/assets/featured-project-afte.png";

const FeaturedProject = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section className="px-6 md:px-12 lg:px-20 pt-10 md:pt-12 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <BlueprintReveal className="glass-card glow-border p-6 md:p-10 lg:p-14">
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
                  alt="A Furry Tail Ending — Featured project by Valley Digital Co."
                  className="w-full h-auto block transition-[filter] duration-500 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <div>
                <p className="text-primary text-xs font-semibold tracking-wider uppercase mb-2">
                  Real results
                </p>
                <TextReveal as="h3" className="text-2xl md:text-3xl font-black tracking-tight text-foreground leading-tight" delay={0.4}>
                  See it in action:
                  <br />
                  <span className="glow-text">A Furry Tail Ending</span>
                </TextReveal>
                <p className="text-muted-foreground text-sm font-medium mt-1">
                  How we helped a local groomer go from invisible to fully booked.
                </p>
              </div>

              <p className="text-secondary-foreground text-sm leading-relaxed">
                We partnered with Jessie to completely rebuild her online presence
                from the ground up. Rather than just making her old site look
                better, we simplified her entire message — cutting the noise and
                focusing her site on attracting her highest-value clients. The
                result: a fast, professional website with built-in online booking
                that works while she's in the middle of a groom.
              </p>

              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                Performance Score: 99+ | Custom Online Booking
              </div>

              <div>
                <a
                  href="https://afurrytailending.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/40 rounded-lg px-5 py-2.5 btn-hover-lift"
                >
                  View the live site →
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </BlueprintReveal>
      </div>
    </section>
  );
};

export default FeaturedProject;
