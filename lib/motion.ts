import { type Variants } from "framer-motion";

export const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

export const staggerChildren: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const cardHover = {
  whileHover: { y: -4, transition: { duration: 0.2 } },
};

export const fadeUpLift = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 22, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

export const slideInLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  },
});

export const slideInRight = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  },
});

export const popIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, delay, ease: "easeOut" },
  },
});


