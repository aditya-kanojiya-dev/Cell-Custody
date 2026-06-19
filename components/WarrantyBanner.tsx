
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function WarrantyBanner() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-yellow-400 py-8">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-5 text-center"
      >
        <motion.div
          aria-hidden
          animate={reduce ? undefined : { y: [0, -4, 0] }}
          transition={reduce ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ShieldCheck />
        </motion.div>
        <h3 className="text-xl font-bold">
          Repair Warranty Included With Every Eligible Repair
        </h3>
      </motion.div>
    </section>
  );
}

