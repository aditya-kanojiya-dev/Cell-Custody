"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TemperedGlassForm from "@/components/TemperedGlassForm";

const KEY = "cc-banner-seen";

export default function PopupBanner() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState<"banner" | "form">("banner");

  useEffect(() => {
    const today = new Date().toDateString();
    if (localStorage.getItem(KEY) === today) return;
    const t = setTimeout(() => {
      localStorage.setItem(KEY, today);
      setShow(true);
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (step === "form") setStep("banner");
        else setShow(false);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [show, step]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Tempered glass promo"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShow(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={
              step === "form"
                ? "relative w-full max-w-lg"
                : "relative w-full max-w-3xl"
            }
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              {step === "banner" ? (
                <motion.button
                  key="banner"
                  type="button"
                  onClick={() => setStep("form")}
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
                    className="h-auto w-full rounded-2xl object-cover"
                  />
                </motion.button>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-6 md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep("banner")}
                      aria-label="Back to banner"
                      className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-black"
                    >
                      <ArrowLeft size={14} />
                      Back
                    </button>
                    <button
                      onClick={() => setShow(false)}
                      aria-label="Close banner"
                      className="rounded-full bg-gray-100 p-2 text-black transition hover:bg-black hover:text-white"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <h2 className="mt-4 font-display text-xl font-bold text-ink">
                    Book Tempered Glass
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Installed at your door. We&apos;ll confirm your slot over
                    WhatsApp.
                  </p>

                  <div className="mt-5">
                    <TemperedGlassForm />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {step === "banner" && (
              <button
                onClick={() => setShow(false)}
                aria-label="Close banner"
                className="absolute -right-3 -top-3 rounded-full bg-white p-2 text-black shadow-lg transition hover:bg-black hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
