import { useRef } from "react";
import { Smartphone, Search, Sparkles, PhoneCall } from "lucide-react";
import { motion, useInView } from "framer-motion";
import TextReveal from "./motion/TextReveal";

const trustItems = [
  { icon: Smartphone, text: "Loads fast on every phone" },
  { icon: Search, text: "Shows up when locals search Google" },
  { icon: Sparkles, text: "Looks professional from day one" },
  { icon: PhoneCall, text: "Captures leads while you're on the job" },
];

const TrustBar = () => {
  return (
    <div className="w-full md:w-[95%] lg:max-w-3xl mx-auto">
      <div className="glass-card glow-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 py-5 md:px-6 md:py-4">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-left">
              <item.icon className="w-5 h-5 text-primary shrink-0" />
              <p className="text-foreground text-xs md:text-sm font-medium leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="flex flex-col justify-center section-padding pt-32 py-[100px]">
      <div ref={ref} className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 space-y-6">
          <motion.div
            className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Serving the Pembina Valley — Altona, Winkler, Morden &amp; beyond
          </motion.div>

          <TextReveal as="h1" className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]" delay={0.15}>
            More calls. More bookings.
            <br />
            <span className="glow-text">A reputation that finally{" "}<br className="hidden md:inline" />matches your work.</span>
          </TextReveal>

          <TextReveal as="p" className="text-muted-foreground text-xl md:text-2xl max-w-[800px] mx-auto opacity-90 leading-[1.6]" delay={0.3}>
            Valley Digital Co. builds websites for local businesses in Southern Manitoba — designed to bring in customers, not just look good. Your phone should ring more after we're done. That's the only metric that matters.
          </TextReveal>

          <motion.p
            className="text-muted-foreground/80 text-base md:text-lg max-w-[700px] mx-auto leading-[1.7]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            We're based right here in the Pembina Valley. When you work with us, you're not dealing with a faceless agency or a developer who goes quiet after launch. You're working with Ivan — your neighbor — and we're here for the long run.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            <Link to="/discovery" className="btn-primary-glow text-sm md:text-base px-8 py-4 font-semibold">
              See what your business could look like →
            </Link>
            <Link to="/discovery" className="text-primary text-sm hover:underline transition-colors">
              Book a free 15-minute chat with Ivan
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          >
            <TrustBar />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
