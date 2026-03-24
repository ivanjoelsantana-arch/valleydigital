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
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, x: 60, y: 80 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: 60, y: 80 }
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
