"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  Clock3,
  CheckCircle2,
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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Service Coverage
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Doorstep Mobile Repair Across Nagpur
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Our technicians travel across Nagpur every day. From central
            Nagpur to residential and outer city areas, we reach homes,
            offices, hostels, shops, and workplaces across the city.
          </p>
        </div>

        <div className="mt-16 rounded-[36px] border border-gray-200 bg-gradient-to-br from-yellow-50 via-white to-white p-6 shadow-2xl md:p-10">
          <div className="relative h-[550px] overflow-hidden rounded-[28px] border border-gray-100 bg-[#f8f7f2]">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url('https://pplx-res.cloudinary.com/image/upload/pplx_search_images/f63607c80d0928994b92beb1d1f0aed9c6768dea.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(1) contrast(0.75) brightness(1.2)",
              }}
            />

            <div className="absolute inset-0 bg-white/35" />

            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg,#000 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {locations.map((location, index) => {
              const small = [
                "Shankar Nagar",
                "Seminary Hills",
                "Jaripatka",
                "Mankapur",
                "Jaitala",
                "Gokulpeth",
              ].includes(location.name);

              return (
                <motion.div
                  key={location.name}
                  className="absolute z-20"
                  style={{
                    left: `${location.x}%`,
                    top: `${location.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.55,
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="relative"
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.15,
                      }}
                    >
                      {/* Ripple */}
                      <motion.span
                        className="absolute inset-0 rounded-full bg-yellow-400"
                        initial={{
                          scale: 0,
                          opacity: 0.6,
                        }}
                        animate={{
                          scale: [0, 2.5],
                          opacity: [0.5, 0],
                        }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.08,
                        }}
                      />

                      {/* Continuous pulse */}
                      <span className="absolute inset-0 animate-ping rounded-full bg-yellow-400 opacity-20" />

                      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black shadow-xl">
                        <MapPin size={16} className="text-yellow-400" />
                      </div>
                    </motion.div>

                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: index * 0.08 + 0.15,
                        duration: 0.3,
                      }}
                      className={[
                        "mt-2 rounded-full bg-white px-3 py-1.5 text-center font-semibold text-gray-900 shadow-lg",
                        small ? "text-[11px]" : "text-sm",
                      ].join(" ")}
                    >
                      {location.name}
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}

            <div className="absolute left-6 top-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-yellow-500" />
                <span className="font-semibold text-gray-900">
                  Service Area
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-600">
                Active across Nagpur
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat
              icon={<MapPin size={22} />}
              value="20+"
              label="Coverage Zones"
            />

            <Stat
              icon={<Clock3 size={22} />}
              value="30-45m"
              label="Average Arrival"
            />

            <Stat
              icon={<ShieldCheck size={22} />}
              value="500+"
              label="Repairs Completed"
            />

            <Stat
              icon={<ShieldCheck size={22} />}
              value="6 Months"
              label="Warranty Support"
            />
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
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-3 text-yellow-500">{icon}</div>

      <div className="text-3xl font-bold text-gray-900">
        {value}
      </div>

      <div className="mt-1 text-sm text-gray-600">
        {label}
      </div>
    </div>
  );
}