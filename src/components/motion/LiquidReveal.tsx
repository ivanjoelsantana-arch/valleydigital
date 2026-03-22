import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface LiquidRevealProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  index?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, x: -20, clipPath: "inset(0 100% 0 0)" },
  visible: { opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" },
};

const LiquidReveal = ({ children, className, style, index = 0 }: LiquidRevealProps) => (
  <motion.div
    className={className}
    style={{ willChange: "clip-path, transform, opacity", ...style }}
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
  >
    {children}
  </motion.div>
);

export default LiquidReveal;
