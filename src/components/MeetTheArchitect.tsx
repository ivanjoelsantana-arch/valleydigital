import ivanHeadshot from "@/assets/ivan-headshot.png";
import logo from "@/assets/logo.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./motion/TextReveal";

const MeetTheArchitect = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px" });

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        backgroundColor: "hsl(220 20% 8%)",
        borderTop: "1px solid hsl(215 25% 22% / 0.6)",
        borderBottom: "1px solid hsl(215 25% 22% / 0.6)",
      }}
    >
      {/* Watermark logo */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          width: "80%",
          opacity: 0.03,
          zIndex: 0,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(0deg)",
        }}
      />
      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
        <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-center">
          {/* Left: Headshot */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : {}
            }
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0"
              style={{
                border: "1px solid hsl(210 100% 56%)",
                boxShadow:
                  "0 0 24px -4px hsl(210 100% 56% / 0.45), 0 0 8px -2px hsl(210 100% 56% / 0.25)",
              }}
            >
              <img
                src={ivanHeadshot}
                alt="Ivan — Founder of Valley Digital Co."
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <span className="inline-block glow-text text-xs font-bold tracking-widest uppercase">
              Founder
            </span>
            <TextReveal as="h2" className="text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-tight" delay={0.3}>
              Hey — I'm Ivan.
            </TextReveal>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-[1.85] max-w-2xl">
              <p>
                I built Valley Digital Co. because I kept seeing the same thing:
                talented, hard-working local business owners in the Pembina Valley
                being let down by websites that didn't reflect the quality of their
                work. Or worse, paying someone who disappeared after the job.
              </p>
              <p>
                I'm a Web Solutions Specialist based right here in Altona, MB. I've
                spent years learning what actually makes a website bring in business
                — not just what makes it look good. I combine the technical side of
                building fast, polished websites with an understanding of how people
                actually make buying decisions online.
              </p>
              <p>
                I've sat across from business owners who paid good money for a website that looked great and brought in nothing. That's not a website problem — that's a strategy problem. And it's exactly what I built Valley Digital Co. to fix.
              </p>
              <p>
                But more than anything, I care about this community. Every business
                I help grow here is an investment in Southern Manitoba. That matters
                to me.
              </p>
              <p>
                When you work with Valley Digital Co., you're not a ticket in a
                queue. You're a neighbor. And I treat your business like it's mine.
              </p>
            </div>
            <p className="text-muted-foreground/60 text-sm italic">
              Based in Altona, MB. Serving Winkler, Morden, and all of Southern Manitoba.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheArchitect;
