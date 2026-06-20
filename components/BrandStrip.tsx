"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { brands } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
    },
  },
};

export default function BrandStrip() {
  return (
    <motion.section
      className="bg-gray-50 py-16"
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={container}
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* TITLE */}
        <motion.div
          variants={reveal}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Brands We Repair
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Professional doorstep repair support
            for all major smartphone brands.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.slug}
              variants={reveal}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <Link
                href={`/brands/${brand.slug}`}
                className="group block rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:border-yellow-400 hover:shadow-xl"
              >
                {/* IMAGE */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="mx-auto mb-4 h-16 w-16 object-contain md:h-20 md:w-20"
                  />
                </motion.div>

                {/* NAME */}
                <p className="font-semibold text-gray-900 transition group-hover:text-yellow-600">
                  {brand.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}