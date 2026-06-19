"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AtSign } from "lucide-react";
import { fadeUpLift } from "@/lib/motion";
import { services, areas, contact } from "@/lib/data";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUpLift(0)}
      className="border-t border-line bg-ink text-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-lg font-bold tracking-tight">
              CELL<span className="text-yellow-400">CUSTODY</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-paper/60">
              Doorstep mobile repair in Nagpur. Instant repair, lowest
              prices, guaranteed work.
            </p>
            <a
              href="https://www.instagram.com/cell_custody/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-paper/70 hover:text-yellow-400"
            >
              <AtSign size={16} /> @cell_custody
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-paper/50">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-paper/70 hover:text-yellow-400"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-paper/50">
              Areas Covered
            </h3>
            <ul className="mt-4 space-y-2.5">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-sm text-paper/70 hover:text-yellow-400"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-paper/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
              <li>{contact.addressLine}</li>
              <li>
                <a href={contact.phoneHref} className="hover:text-yellow-400">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-yellow-400">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-paper/10 pt-6 text-xs text-paper/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Cell Custody. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-paper/70">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-paper/70">
              Privacy
            </Link>
            <Link href="/warranty" className="hover:text-paper/70">
              Warranty Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

