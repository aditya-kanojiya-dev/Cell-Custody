"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does doorstep mobile repair work?",
    answer:
      "Simply book a repair slot online or through WhatsApp. Our technician visits your home or office, diagnoses the issue, and performs the repair on-site.",
  },
  {
    question: "Do you provide a warranty?",
    answer:
      "Yes. Most repairs include a limited warranty covering replacement parts and workmanship.",
  },
  {
    question: "How long does a repair take?",
    answer:
      "Most common repairs like screen or battery replacements are completed within 30–60 minutes.",
  },
  {
    question: "Do I need to visit a service center?",
    answer:
      "No. Our technicians come directly to your location anywhere within our service areas.",
  },
  {
    question: "What brands do you repair?",
    answer:
      "We repair Apple, Samsung, OnePlus, Xiaomi, Vivo, Oppo, Realme, Motorola, Google Pixel and many more.",
  },
  {
    question: "What if my model is not listed?",
    answer:
      "Choose 'Other' while booking and enter your model manually.",
  },
  {
    question: "Do you use genuine parts?",
    answer:
      "We provide high-quality replacement parts and explain available options before starting repairs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "UPI, Cash, Google Pay, PhonePe, Paytm and bank transfer.",
  },
  {
    question: "Can water-damaged phones be repaired?",
    answer:
      "Yes. Recovery depends on internal damage severity.",
  },
  {
    question: "How do I get a repair quote?",
    answer:
      "Submit the booking form or contact us via WhatsApp.",
  },
];

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
    },
  },
};

export default function FAQ() {
  const [open, setOpen] =
    useState<number | null>(0);

  return (
    <motion.section
      className="bg-paper py-16"
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={container}
    >
      <div className="mx-auto max-w-4xl px-5 md:px-8">

        {/* Heading */}

        <motion.div
          variants={reveal}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-slate">
            Everything you may want to know
            before booking.
          </p>
        </motion.div>

        {/* FAQ */}

        <motion.div
          variants={container}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const active =
              open === index;

            return (
              <motion.div
                key={faq.question}
                variants={reveal}
                whileHover={{
                  y: -2,
                }}
                className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpen(
                      active
                        ? null
                        : index
                    )
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-ink">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate:
                        active
                          ? 180
                          : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <ChevronDown
                      size={18}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {active && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="px-6 pb-6">
                        <p className="leading-relaxed text-slate">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
}