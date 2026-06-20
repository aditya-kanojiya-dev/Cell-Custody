"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  once?: boolean;
  amount?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 60,
  x = 0,
  scale = 1,
  once = true,
  amount = 0.2,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        x,
        scale: scale - 0.03,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale,
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}