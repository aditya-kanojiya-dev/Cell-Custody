"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AtSign,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { fadeUpLift } from "@/lib/motion";
import {
  services,
  areas,
  brands,
  contact,
} from "@/lib/data";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUpLift(0)}
      className="border-t border-line bg-ink text-paper"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">

        {/* TOP */}
        <div className="grid gap-10 md:grid-cols-5">

          {/* BRAND */}
          <div className="md:col-span-2">
            <Link href="/">
              <span className="font-display text-2xl font-bold tracking-tight">
                CELL
                <span className="text-yellow-400">
                  CUSTODY
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-paper/60">
              Doorstep mobile repair across Nagpur.
              Fast turnaround, verified technicians,
              and repairs done where you are.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm">

              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2 text-paper/70 hover:text-yellow-400"
              >
                <Phone size={16} />
                {contact.phoneDisplay}
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-paper/70 hover:text-yellow-400"
              >
                <Mail size={16} />
                {contact.email}
              </a>

              <div className="inline-flex items-center gap-2 text-paper/70">
                <MapPin size={16} />
                {contact.addressLine}
              </div>

              <a
                href="https://www.instagram.com/cell_custody/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-paper/70 hover:text-yellow-400"
              >
                <AtSign size={16} />
                @cell_custody
              </a>
            </div>

            <Link
              href="/book"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-semibold text-ink transition hover:scale-[1.02]"
            >
              Book Repair
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-paper/50">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {[
                "book",
                "services",
                "brands",
                "areas",
                "howitworks",
                "contact",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link}`}
                    className="text-sm text-paper/70 hover:text-yellow-400"
                  >
                    {link
                      .replace("-", " ")
                      .replace(/\b\w/g, (c) =>
                        c.toUpperCase()
                      )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-paper/50">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-paper/70 hover:text-yellow-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BRANDS */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-paper/50">
              Brands
            </h3>

            <ul className="mt-5 space-y-3">
              {brands.slice(0, 8).map((brand) => (
                <li key={brand.slug}>
                  <Link
                    href={`/brands/${brand.slug}`}
                    className="text-sm text-paper/70 hover:text-yellow-400"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AREA PILLS */}
        <div className="mt-12 border-t border-paper/10 pt-8">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-paper/50">
            Areas Covered
          </h3>

          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="rounded-full border border-paper/10 px-3 py-2 text-xs text-paper/60 hover:border-yellow-400 hover:text-yellow-400"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-4 border-t border-paper/10 pt-6 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Cell Custody.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="hover:text-paper">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-paper">
              Terms
            </Link>

            <Link href="/warranty" className="hover:text-paper">
              Warranty Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}