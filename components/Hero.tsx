"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Zap,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

import { contact } from "@/lib/data";

const hooks = [
  {
    icon: Zap,
    title: "Same-Day Repair",
    desc: "Technician arrives within hours",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Transparent repair quotes",
  },
  {
    icon: ShieldCheck,
    title: "Repair Warranty",
    desc: "Guaranteed workmanship",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.9,
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      className="relative overflow-hidden bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={container}
    >
      {/* Background */}
      <motion.div
        className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-50 blur-3xl opacity-60"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-50 blur-3xl opacity-60"
        animate={{
          y: [0, 12, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-8 md:grid-cols-4 lg:grid-cols-2 lg:items-center">

        {/* LEFT */}
        <motion.div variants={container}>

          <motion.p
            variants={reveal}
            className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yellow-700"
          >
            🚀 Nagpur's First Doorstep Mobile Repair
          </motion.p>

          <motion.h1
            variants={reveal}
            className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl"
          >
            Mobile Repairs

            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Done At Your Doorstep
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600"
          >
            Fast mobile repairs anywhere in Nagpur.
            Screen replacement, battery replacement,
            charging issues, water damage, camera
            repairs and more.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={reveal}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/book"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-xl"
            >
              Book Repair Now

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-7 py-4 font-semibold transition hover:border-black hover:shadow-md"
            >
              Call Technician
            </a>
          </motion.div>

          {/* CARDS */}
          <motion.div
            variants={container}
            className="mt-8 grid gap-4 md:grid-cols-3"
          >
            {hooks.map((hook) => (
              <motion.div
                key={hook.title}
                variants={reveal}
                whileHover={{
                  y: -8,
                }}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition"
              >
                <hook.icon
                  size={24}
                  className="mb-3 text-yellow-500"
                />

                <p className="font-semibold">
                  {hook.title}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {hook.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={slideRight}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-xl">

            <div className="flex items-center justify-between border-b border-line bg-line/20 px-6 py-4">
              <div>
                <p className="text-xs uppercase text-slate">
                  Status
                </p>

                <p className="font-bold">
                  Technician Available
                </p>
              </div>

              <span className="relative flex h-3 w-3">
                <span className="absolute inset-0 rounded-full bg-green-500" />
                <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-60" />
              </span>
            </div>

            <div className="relative h-96">
              <Image
                src="/images/technician.png"
                alt="Technician"
                fill
                sizes="100vw"
                priority
                className="object-contain p-8"
              />
            </div>

            <div className="grid grid-cols-3 divide-x">

              {[
                ["30–45m", "Avg arrival"],
                ["500+", "Repairs"],
                ["4.9★", "Rating"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  className="p-4 text-center"
                >
                  <p className="font-bold">
                    {v}
                  </p>

                  <p className="mt-1 text-[11px] uppercase text-slate">
                    {l}
                  </p>
                </div>
              ))}

            </div>

            <div className="border-t p-4 text-center">
              <p className="text-xs text-slate">
                No advance payment. We confirm
                your slot over WhatsApp.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}