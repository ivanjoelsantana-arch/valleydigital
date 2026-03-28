import { motion } from "framer-motion";
import FluidDrift from "./motion/FluidDrift";

const cinematic = [0.22, 1, 0.36, 1] as const;

const PrettyWebsiteTrap = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background with parallax */}
      <FluidDrift parallax className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(210 100% 56% / 0.04), transparent 70%), " +
              "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 20% 9%) 50%, hsl(var(--background)) 100%)",
          }}
        />
      </FluidDrift>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="w-[500px] md:w-[700px] lg:w-[900px] opacity-[0.03] select-none"
          style={{ filter: "grayscale(1) brightness(2)" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-20">
          {/* "SOUND FAMILIAR?" — fade in from above, slowly */}
          <motion.p
            className="text-primary text-sm font-medium tracking-wider uppercase mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: cinematic }}
          >
            Sound familiar?
          </motion.p>

          {/* Headline part 1 — slide from left */}
          <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, ease: cinematic, delay: 0.3 }}
            >
              You've already tried "good enough."{" "}
            </motion.span>
            {/* Headline part 2 — arrives a beat later */}
            <motion.span
              className="inline-block glow-text"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, ease: cinematic, delay: 0.65 }}
            >
              It didn't work.
            </motion.span>
          </h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          <div
            className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed"
            style={{ lineHeight: 1.85 }}
          >
            {/* Paragraph 1 — fade from bottom */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: cinematic, delay: 0 }}
            >
              Most local businesses start the same way. You spend a weekend fighting
              with a website builder, drag a few boxes around, upload some photos, and
              tell yourself it's "good enough for now."
            </motion.p>

            {/* Bold line — fade in + glow pulse */}
            <motion.p
              className="font-semibold text-foreground"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: cinematic, delay: 0.15 }}
              style={{ willChange: "opacity, transform" }}
            >
              <motion.span
                initial={{ textShadow: "0 0 0px transparent" }}
                whileInView={{
                  textShadow: [
                    "0 0 0px transparent",
                    "0 0 18px hsl(210 100% 56% / 0.7)",
                    "0 0 0px transparent",
                  ],
                }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.6 }}
              >
                But good enough is costing you real money.
              </motion.span>
            </motion.p>

            {/* Paragraph 2 — fade from bottom, staggered */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: cinematic, delay: 0.3 }}
            >
              Here's the truth: a website that sits there looking fine but doesn't
              bring in calls isn't an asset — it's a liability. It's a first impression
              that's working against you, quietly losing business to competitors who
              look more established.
            </motion.p>

            {/* Paragraph 3 — fade from bottom, staggered */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: cinematic, delay: 0.45 }}
            >
              And the harder truth? Buying a pretty website from someone who disappears
              after launch doesn't fix this either. You end up with a shiny new problem
              instead of an old one.
            </motion.p>
          </div>

          {/* Pull quote — slide in from right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: cinematic }}
            className="relative py-8 px-6 md:px-10 border-l-2 border-primary bg-primary/5 rounded-r-lg"
          >
            <p className="text-lg md:text-xl font-bold text-foreground italic leading-relaxed">
              "Your website is either working for you right now — or it isn't.
              There's no middle ground."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrettyWebsiteTrap;
