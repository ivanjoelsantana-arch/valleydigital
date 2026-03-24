import { motion } from "framer-motion";
import { UserCheck, MessageCircle, Wrench } from "lucide-react";
import FluidDrift from "./motion/FluidDrift";

const promises = [
  {
    icon: UserCheck,
    text: "One point of contact — always Ivan. No handoffs to junior staff, no overseas support tickets, no mystery. You always know who's responsible for your project.",
  },
  {
    icon: MessageCircle,
    text: "You'll never be left in the dark. We communicate in plain language throughout the entire build. You always know what's happening, what's next, and when to expect it.",
  },
  {
    icon: Wrench,
    text: "We're here after launch. Your site going live is the beginning of the relationship, not the end. We're available for updates, questions, and changes — because a good site grows as your business grows.",
  },
];

const AntiGhostingTrust = () => {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <FluidDrift className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Our promise
          </p>
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Tired of paying for a website and{" "}
            <span className="glow-text">never hearing from the developer again?</span>
          </h2>
        </FluidDrift>

        <FluidDrift>
          <div
            className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed mb-12"
            style={{ lineHeight: 1.85 }}
          >
            <p>
              Here's a pattern that happens all the time in small towns: a business
              owner pays good money for a website, gets handed a link, and then —
              silence. Six months later, the phone still isn't ringing, something's
              broken, and the developer hasn't responded in weeks.
            </p>
            <p>
              That's not a website problem. That's a "wrong partner" problem.
            </p>
            <p>
              Valley Digital Co. is different for one simple reason: we live here too.
              Our reputation in this community is on the line with every project we
              take on. We don't take your money and disappear — because Altona is a
              small town and we'd run into you at the hardware store.
            </p>
          </div>
        </FluidDrift>

        <div className="space-y-6">
          {promises.map((promise, i) => (
            <motion.div
              key={i}
              className="flex gap-4 md:gap-6 items-start glass-card p-6 md:p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-1">
                <promise.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {promise.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AntiGhostingTrust;
