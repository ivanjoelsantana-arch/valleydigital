import { motion } from "framer-motion";
import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";

const steps = [
  {
    phase: "01",
    title: "We listen first",
    desc: "It starts with a free 15-minute call — no pitch, no pressure. Ivan gets to know your business, your best clients, and what's been frustrating you about your current online presence. From there, we put together a plan built around your specific goals, not a cookie-cutter template.",
  },
  {
    phase: "02",
    title: "We build it together",
    desc: "You'll see your site take shape before it ever goes live. The design, the words, the layout — all built around your customers and your community. You give real feedback, we make real changes. You'll never be left wondering what's happening or waiting weeks for a response.",
  },
  {
    phase: "03",
    title: "You get permanent results",
    desc: "When your site launches, it goes to work. Consistent bookings. A professional presence that holds up on a phone screen at 11pm when someone needs your service. And a partner right here in Southern Manitoba who's still available when you need updates, additions, or just have a question. No support ticket. Ivan's number.",
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <BlueprintReveal className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            The process
          </p>
          <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground" delay={0.2}>
            Three steps to a site that actually{" "}
            <span className="glow-text">works for you.</span>
          </TextReveal>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            No surprises. No ghosting. No tech headaches. Here's exactly what
            working with Valley Digital Co. looks like.
          </p>
        </BlueprintReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                className="flex gap-6 md:gap-8 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
              >
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0 text-sm md:text-base font-bold bg-primary text-primary-foreground glow-border-strong">
                  {step.phase}
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
