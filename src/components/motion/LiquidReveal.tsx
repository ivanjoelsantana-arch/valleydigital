import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface LiquidRevealProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  index?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(10px)", y: 30 },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", y: 0 },
};

const LiquidReveal = ({ children, className, style, index = 0 }: LiquidRevealProps) => (
  <motion.div
    className={className}
    style={{ willChange: "transform, opacity, filter", ...style }}
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
  >
    {children}
  </motion.div>
);

export default LiquidReveal;
