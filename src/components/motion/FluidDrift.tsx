import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface FluidDriftProps {
  children: ReactNode;
  className?: string;
  /** Enable subtle parallax on this container (background moves at 95% scroll speed) */
  parallax?: boolean;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const FluidDrift = ({ children, className, parallax = false }: FluidDriftProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: content shifts by ±15px relative to natural position (5% lag)
  const parallaxY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  if (parallax) {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ willChange: "transform, opacity", y: parallaxY }}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ willChange: "transform, opacity" }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default FluidDrift;
