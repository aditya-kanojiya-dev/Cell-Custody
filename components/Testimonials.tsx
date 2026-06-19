"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const reviews = [
  { name: "Gaurav Shankargade", text: "Super convenient service! Technician came to my home in Nagpur and fixed my phone battery in under an hour." },
  { name: "Sanika Thool", text: "Broken screen repaired at home in no time. Very professional and smooth service." },
  { name: "Disha Pangul", text: "On-time technician, screen repaired in front of me. Phone feels brand new again." },
  { name: "Tushar Mathure", text: "Affordable and fast service. Everything handled at doorstep with full care." },
  { name: "Sagar Kalsait", text: "Charging port fixed at home itself. Saved me a trip to the service center." },
  { name: "Ankita Wankhede", text: "Screen replacement done at my office. Professional service and great quality parts." },
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase();
}

export default function ReviewWall() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animation: number;

    const step = () => {
      if (!paused) {
        el.scrollLeft += 0.6;

        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animation = requestAnimationFrame(step);
    };

    animation = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation);
  }, [paused]);

  return (
    <section className="relative bg-gray-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Header */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Trusted by Customers Across Nagpur
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-600">
          Real doorstep repair experiences with verified customer feedback
        </p>

        <div className="mt-5 text-xs sm:text-sm text-gray-500">
          ⭐ 4.9 Average Rating · 500+ Happy Repairs
        </div>
      </div>

      {/* Fade edges (hidden on small screens for better UX) */}
      <div className="pointer-events-none hidden sm:block absolute left-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-r from-gray-50 to-transparent" />
      <div className="pointer-events-none hidden sm:block absolute right-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-l from-gray-50 to-transparent" />

      {/* Carousel */}
      <div
        ref={containerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="mx-auto mt-10 sm:mt-14 flex max-w-6xl gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 pb-6 scroll-smooth scrollbar-hide"
      >
        {[...reviews, ...reviews].map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: (i % reviews.length) * 0.05,
              ease: "easeOut",
            }}
            className="
              relative flex-shrink-0
              w-[260px] sm:w-[320px] lg:w-[360px]
              rounded-2xl sm:rounded-3xl
              border border-gray-100
              bg-white/80 p-5 sm:p-7
              shadow-sm backdrop-blur-md
              transition-all duration-300
              hover:-translate-y-1 sm:hover:-translate-y-2
              hover:shadow-xl
              snap-start
            "
          >
            {/* Glow effect */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 hover:opacity-100 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 blur-xl" />

            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 text-xs sm:text-sm font-bold text-yellow-700 shadow-sm">
                  {getInitials(review.name)}
                </div>

                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    {review.name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    Verified Doorstep Customer
                  </p>
                </div>
              </div>

              {/* Review text */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                “{review.text}”
              </p>

              {/* Rating */}
              <div className="mt-4 sm:mt-5 flex items-center gap-2 text-yellow-400 text-sm sm:text-base">
                <span>★★★★★</span>
                <span className="text-[10px] sm:text-xs text-gray-400">5.0</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
