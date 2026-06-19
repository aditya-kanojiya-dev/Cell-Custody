"use client";

import { IndianRupee, House, BadgeCheck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpLift, staggerChildren } from "@/lib/motion";

const points = [
  {
    icon: IndianRupee,
    title: "Lowest prices, no markup",
    description:
      "Same genuine parts you'd get at a shop — without the shop's rent built into your bill.",
  },
  {
    icon: House,
    title: "We come to you",
    description:
      "Home, office, or hostel. No travel, no waiting in line, no handing your phone to a stranger.",
  },
  {
    icon: BadgeCheck,
    title: "Certified technicians",
    description:
      "Every technician is trained and verified before they're sent to your address.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed repair",
    description:
      "Every job is backed by a warranty period. If it breaks again, we make it right.",
  },
];


export default function WhyUs() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpLift(0)}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400"
        >
          Why Cell Custody
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpLift(0.06)}
          className="mt-2 max-w-lg font-display text-3xl font-bold tracking-tight text-ink md:text-4xl"
        >
          Repair, without the repair-shop hassle
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerChildren}
          className="mt-10 grid gap-8 sm:grid-cols-2 md:gap-10"
        >
          {points.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUpLift(0)}
              className="flex gap-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-ink">
                <p.icon size={18} className="text-yellow-400" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

