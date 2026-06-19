
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpLift } from "@/lib/motion";

export default function EmergencyCTA() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpLift(0)}
          className="text-5xl font-bold"
        >
          Phone Not Working?
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpLift(0.06)}
          className="mt-4"
        >
          Get immediate support via WhatsApp.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpLift(0.1)}
          className="mt-8"
        >
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black shadow-[0_10px_40px_rgba(250,204,21,0.35)] transition hover:scale-[1.02] hover:shadow-[0_18px_55px_rgba(250,204,21,0.55)]"
          >
            Book Repair Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

