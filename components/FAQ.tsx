"use client";

import { useState } from "react";
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
      "Choose 'Other' while booking and enter your model manually. We repair most smartphone models available in India.",
  },
  {
    question: "Do you use genuine parts?",
    answer:
      "We provide high-quality replacement parts and explain available options before starting any repair.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "UPI, Cash, Google Pay, PhonePe, Paytm and bank transfer are accepted.",
  },
  {
    question: "Can water-damaged phones be repaired?",
    answer:
      "Yes. We provide diagnosis and recovery services for water-damaged devices, though success depends on the extent of damage.",
  },
  {
    question: "How do I get a repair quote?",
    answer:
      "Submit the booking form or contact us via WhatsApp. We'll provide an estimated quote based on your device and issue.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <h2 className="padding mb-10  text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-ink">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-slate">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}