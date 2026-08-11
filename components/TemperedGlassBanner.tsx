"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TemperedGlassForm from "@/components/TemperedGlassForm";

export default function TemperedGlassBanner() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.button
            key="banner"
            type="button"
            onClick={() => setShowForm(true)}
            aria-label="Book tempered glass at Cell Custody"
            className="block w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src="/images/banner.jpeg"
              alt="Book your repair at Cell Custody"
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl object-cover shadow-lg"
            />
          </motion.button>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-line bg-paper p-6 md:p-8"
          >
            <button
              type="button"
              onClick={() => setShowForm(false)}
              aria-label="Back to banner"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-black"
            >
              <ArrowLeft size={14} />
              Back
            </button>

            <h2 className="mt-3 font-display text-2xl font-bold text-ink">
              Book Tempered Glass
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Installed at your door. We&apos;ll confirm your slot over
              WhatsApp.
            </p>

            <div className="mt-6">
              <TemperedGlassForm />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
