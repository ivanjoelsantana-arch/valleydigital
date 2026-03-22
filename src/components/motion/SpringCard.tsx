import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SpringCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  index?: number;
}

/** Card that springs in from the bottom-right with stagger */
const SpringCard = ({ children, className, style, index = 0 }: SpringCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 30 }
      }
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.15,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SpringCard;
