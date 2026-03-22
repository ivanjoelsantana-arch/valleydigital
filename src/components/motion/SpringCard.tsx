import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SpringCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  index?: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      delay: i * 0.15,
    },
  }),
};

/** Card that fades + slides up with spring physics, triggered by viewport */
const SpringCard = ({ children, className, style, index = 0 }: SpringCardProps) => {
  return (
    <motion.div
      className={className}
      style={style}
      layout
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
      {children}
    </motion.div>
  );
};

export default SpringCard;
