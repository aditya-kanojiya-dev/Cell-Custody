"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const KEY = "cc-banner-seen";

export default function PopupBanner() {
  const [show, setShow] = useState(false);

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
      if (e.key === "Escape") setShow(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Promo banner"
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
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Link href="/book" aria-label="Book your repair at Cell Custody">
              <Image
                src="/images/banner.jpeg"
                alt="Book your repair at Cell Custody"
                width={1600}
                height={900}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </Link>

            <button
              onClick={() => setShow(false)}
              aria-label="Close banner"
              className="absolute -right-3 -top-3 rounded-full bg-white p-2 text-black shadow-lg transition hover:bg-black hover:text-white"
            >
              <X size={18} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
