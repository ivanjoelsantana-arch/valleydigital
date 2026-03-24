import { motion } from "framer-motion";

const stats = [
  { figure: "Altona, MB", label: "Locally based — not an overseas agency or a faceless platform" },
  { figure: "99+", label: "average site performance score across every build" },
  { figure: "Q2 2026", label: "limited spots remaining for new engagements" },
];

const SocialProofBar = () => {
  return (
    <section className="py-12 md:py-16 border-y border-border/40 bg-card/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.figure}</p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground/60 text-xs mt-8">
          Serving Altona, Winkler, Morden, and all of Southern Manitoba.
        </p>
      </div>
    </section>
  );
};

export default SocialProofBar;
