"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const stats = [
  { value: 500, suffix: "+", label: "Repairs Completed", duration: 1500 },

  { value: 30, suffix: " Min", label: "Response Time", duration: 1200 },
  { value: 4.9, suffix: "★", label: "Customer Rating", duration: 1500 },
  { value: 100, suffix: "%", label: "Genuine Parts", duration: 1500 },
];

function useCountUp(end: number, duration: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(parseFloat((progress * end).toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  duration,
}: {
  value: number;
  suffix: string;
  label: string;
  duration: number;
}) {
  const count = useCountUp(value, duration);

  return (
    <motion.div
      variants={fadeUp(0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
    >
      <h3 className="text-3xl font-bold text-yellow-500">

        {count}
        {suffix}
      </h3>
      <p className="mt-2 text-sm text-gray-500">{label}</p>
    </motion.div>
  );
}


export default function TrustStats() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 md:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}