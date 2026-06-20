"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  Clock3,
} from "lucide-react";

type Location = {
  name: string;
  x: number;
  y: number;
};

const locations: Location[] = [
  { name: "Dharampeth", x: 22, y: 31 },
  { name: "Sadar", x: 50, y: 15 },
  { name: "Civil Lines", x: 82, y: 30 },
  { name: "Pratap Nagar", x: 66, y: 55 },
  { name: "Manish Nagar", x: 40, y: 79 },
  { name: "Wardha Road", x: 84, y: 86 },
  { name: "Sitabuldi", x: 43, y: 26 },
  { name: "Ramdaspeth", x: 32, y: 39 },
  { name: "Dhantoli", x: 48, y: 45 },
  { name: "Trimurti Nagar", x: 58, y: 66 },
  { name: "Bajaj Nagar", x: 28, y: 58 },
  { name: "Shankar Nagar", x: 24, y: 18 },
  { name: "Mankapur", x: 16, y: 48 },
  { name: "Ajni", x: 54, y: 70 },
  { name: "Gandhibagh", x: 65, y: 22 },
  { name: "Seminary Hills", x: 72, y: 12 },
  { name: "Gokulpeth", x: 35, y: 20 },
  { name: "Jaitala", x: 18, y: 74 },
  { name: "Jaripatka", x: 10, y: 32 },
  { name: "Nandanvan", x: 78, y: 58 },
];

export default function ServiceAreas() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Service Coverage
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            Doorstep Mobile Repair Across Nagpur
          </h2>

          <p className="mt-5 text-base text-gray-600 md:text-lg">
            Our technicians travel across Nagpur every day and reach homes,
            offices and workplaces across the city.
          </p>
        </motion.div>

        {/* Map */}
        <div className="mt-10 rounded-[32px] border border-gray-200 bg-gradient-to-br from-yellow-50 to-white p-4 md:p-8 shadow-2xl">

          <div className="relative h-[420px] md:h-[620px] overflow-hidden rounded-[28px]">

            {/* Animated map */}
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "url('https://pplx-res.cloudinary.com/image/upload/pplx_search_images/f63607c80d0928994b92beb1d1f0aed9c6768dea.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter:
                    "grayscale(1) contrast(.8) brightness(1.15)",
                }}
              />

              <div className="absolute inset-0 bg-white/35" />

              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg,#000 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />
            </motion.div>

            {/* PINS */}
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                className="absolute z-30"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                  transform: "translate(-50%,-50%)",
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.04,
                  type: "spring",
                  stiffness: 220,
                }}
              >
                <div className="flex flex-col items-center">

                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.4,
                      delay: index * 0.12,
                    }}
                    className="relative"
                  >
                    {/* Ripple */}
                    <span className="absolute inset-0 animate-ping rounded-full bg-yellow-400 opacity-25" />

                    {/* Pin */}
                    <div className="relative flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-black shadow-xl">
                      <MapPin
                        size={14}
                        className="text-yellow-400 md:h-4 md:w-4"
                      />
                    </div>
                  </motion.div>

                  {/* Labels only desktop */}
                  <span className="mt-2 hidden rounded-full bg-white px-3 py-1 text-xs font-semibold shadow md:block">
                    {location.name}
                  </span>

                </div>
              </motion.div>
            ))}

            {/* Legend */}
            <div className="absolute left-4 top-4 z-40 rounded-xl bg-white px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin
                  size={16}
                  className="text-yellow-500"
                />
                <span className="text-sm font-semibold">
                  Active Coverage
                </span>
              </div>
            </div>

          </div>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Stat icon={<MapPin />} value="25+" label="Coverage Zones" />
            <Stat icon={<Clock3 />} value="30–45m" label="Arrival Time" />
            <Stat icon={<ShieldCheck />} value="500+" label="Repairs" />
            <Stat icon={<ShieldCheck />} value="6 Months" label="Warranty" />

          </div>

        </div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border bg-white p-5 shadow-sm"
    >
      <div className="mb-3 text-yellow-500">
        {icon}
      </div>

      <div className="text-3xl font-bold">
        {value}
      </div>

      <div className="mt-1 text-sm text-gray-600">
        {label}
      </div>
    </motion.div>
  );
}