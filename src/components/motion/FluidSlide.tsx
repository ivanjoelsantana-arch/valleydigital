import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface FluidSlideProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  index?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const FluidSlide = ({ children, className, style, index = 0 }: FluidSlideProps) => (
  <motion.div
    className={className}
    style={{ willChange: "transform, opacity", ...style }}
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0], delay: index * 0.05 }}
  >
    {children}
  </motion.div>
);

export default FluidSlide;
