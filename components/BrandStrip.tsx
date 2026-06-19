"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";
import { brands } from "@/lib/data";

export default function BrandStrip() {
  return (

    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-5">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp(0)}
          className="text-center text-3xl font-bold"
        >
          Brands We Repair
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerChildren}
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.slug}
              variants={fadeUp(0)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border bg-white p-5 text-center transition hover:shadow-xl"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="mx-auto mb-3 h-16 w-16 object-contain md:h-20 md:w-20"
              />
              <p className="font-semibold">{brand.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

