"use client";

import { motion } from "framer-motion";
import { Laptop, PhoneCall, PenTool, CheckSquare } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Laptop,
    title: "Book Online",
    desc: "Select your device, model, and the issues you're facing. Pick your preferred date and time slot.",
  },
  {
    num: "02",
    icon: PhoneCall,
    title: "Confirm Details",
    desc: "We confirm the booking over WhatsApp or phone call. We'll verify your model and provide a transparent quote.",
  },
  {
    num: "03",
    icon: PenTool,
    title: "Doorstep Repair",
    desc: "A certified technician arrives at your address and repairs your device on-site in just 30-45 minutes.",
  },
  {
    num: "04",
    icon: CheckSquare,
    title: "Verify & Pay",
    desc: "Test the repaired phone. Pay securely using UPI, Cards, or Cash. Enjoy a 6-month warranty on all parts.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-gray-50 py-24">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 -h-80 w-80 rounded-full bg-yellow-100/40 blur-3xl opacity-60" />

      <div className="mx-auto max-w-7xl px-5 relative">
        {/* Section Title */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            How It Works
          </span>
          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Mobile Repair in 4 Easy Steps
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Getting your phone repaired in Nagpur shouldn't require running to crowded service markets. 
            Here is how we bring professional service directly to your location.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              className="relative flex flex-col justify-between rounded-[32px] border border-gray-100 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
                    <step.icon size={22} />
                  </div>
                  <span className="text-3xl font-extrabold text-gray-200 font-mono tracking-tighter">
                    {step.num}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}