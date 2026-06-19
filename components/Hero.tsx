"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

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

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Glow (animated) */}
      <motion.div
        className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-50 blur-3xl opacity-60"
        aria-hidden
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 0.6, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ y: -6 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-50 blur-3xl opacity-60"
        aria-hidden
        initial={{ opacity: 0, scale: 0.98, y: -10 }}
        animate={{ opacity: 0.6, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }}
        whileHover={{ y: 6 }}
      />

      {/* Subtle drifting highlight */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[-120px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-yellow-100/50 blur-3xl opacity-40"
        aria-hidden
        initial={{ opacity: 0.15, x: -22 }}
        animate={{ opacity: 0.35, x: 22 }}
        transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-8 md:grid-cols-4 lg:grid-cols-2 lg:items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-2 text-xs font-bold uppercase tracking-wider text-yellow-700">
            🚀 Nagpur's First Doorstep Mobile Repair
          </p>

          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp(0)}
            className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl"
          >
            Mobile Repairs
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Done At Your Doorstep
            </span>
          </motion.h1>


          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
            Fast mobile repairs anywhere in Nagpur. Screen replacement,
            battery replacement, charging issues, water damage, camera
            repairs and more — all at your home or office.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-xl"
            >
              Book Repair Now

              <ArrowRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-7 py-4 font-semibold text-gray-900 transition-all duration-300 hover:border-black hover:shadow-md"
            >
              Call Technician
            </a>
          </div>

          {/* Trust Cards */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {hooks.map((hook) => (
              <div
                key={hook.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <hook.icon
                  size={24}
                  className="mb-3 text-yellow-500"
                />

                <p className="font-semibold text-gray-900">
                  {hook.title}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {hook.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">

          {/* Dashboard */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            {/* Header */}
            <div className="border-b border-gray-100 bg-gradient-to-r from-yellow-50 to-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Live Repair Tracking
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    iPhone 15 Pro Max
                  </h3>
                </div>

                <div className="relative">
                  <span className="flex h-4 w-4 rounded-full bg-green-500" />

                  <span className="absolute inset-0 animate-ping rounded-full bg-green-500" />
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6 p-8">
              <StatusRow
                title="Repair Booked"
                time="10:02 AM"
                complete
              />

              <StatusRow
                title="Technician Assigned"
                time="10:07 AM"
                complete
              />

              <StatusRow
                title="On The Way"
                time="ETA 28 mins"
                active
              />

              <StatusRow
                title="Repair In Progress"
                time="Pending"
              />

              <StatusRow
                title="Quality Check"
                time="Pending"
              />
            </div>

            {/* Footer Stats */}
            <div className="grid grid-cols-3 border-t border-gray-100 bg-gray-50">
              <div className="p-5 text-center">
                <p className="text-2xl font-bold text-gray-900">
                  500+
                </p>

                <p className="text-xs text-gray-500">
                  Repairs
                </p>
              </div>

              <div className="border-x border-gray-200 p-5 text-center">
                <p className="text-2xl font-bold text-gray-900">
                  30m
                </p>

                <p className="text-xs text-gray-500">
                  Avg ETA
                </p>
              </div>

              <div className="p-5 text-center">
                <p className="text-2xl font-bold text-gray-900">
                  4.9★
                </p>

                <p className="text-xs text-gray-500">
                  Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function StatusRow({
  title,
  time,
  complete,
  active,
}: {
  title: string;
  time: string;
  complete?: boolean;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`h-4 w-4 rounded-full ${
          complete
            ? "bg-green-500"
            : active
            ? "bg-yellow-400 animate-pulse"
            : "bg-gray-300"
        }`}
      />

      <div className="flex-1">
        <p className="font-medium text-gray-900">
          {title}
        </p>
      </div>

      <span className="text-sm text-gray-500">
        {time}
      </span>
    </div>
  );
}