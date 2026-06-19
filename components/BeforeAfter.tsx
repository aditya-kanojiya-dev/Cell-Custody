"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const galleries = [
  {
    title: "Screen Replacement",
    device: "iPhone 14 Pro Max",
    time: "45 Mins · On-Site",
    img: "/images/screen-replacement.jpeg",
    description: "Shattered display restored with original OLED panel",
  },
  {
    title: "Battery Swap",
    device: "OnePlus 11 5G",
    time: "30 Mins · On-Site",
    img: "/images/battery-swap.jpeg",
    description: "Replaced with genuine high-capacity battery",
  },
  {
    title: "Camera Glass Fix",
    device: "Galaxy S24 Ultra",
    time: "35 Mins · On-Site",
    img: "/images/camera-glass-fix.jpeg",
    description: "Precision replacement of damaged camera lens glass",
  },
];

export default function OurWork() {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-5">

        {/* Title */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Portfolio
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Our Work
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Real doorstep mobile repair work completed across Nagpur with precision, speed, and genuine parts.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {galleries.map((item, index) => (
            <motion.div
              key={item.title}
              className="group overflow-hidden rounded-[32px] border border-gray-100 bg-gray-50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-200">
                <img
                  src={item.img}
                  alt={`${item.device} ${item.title}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/images/Logo.jpg";
                  }}
                />

                {/* Subtle overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <p className="text-xs opacity-90 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="mt-5 px-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-yellow-600">
                    {item.time}
                  </span>
                  <Sparkles size={14} className="text-yellow-400" />
                </div>

                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  {item.device}
                </h3>

                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}