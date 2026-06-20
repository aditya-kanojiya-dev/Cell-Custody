"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

import { contact } from "@/lib/data";
import logo from "@/public/images/Logo.jpg";

const navLinks = [
  { href: "/", label: "Home" },
{ href: "/services", label: "Services" },
{ href: "/howitworks", label: "How It Works" },
{ href: "/#reviews", label: "Reviews" },
{ href: "/contact", label: "Contact" },
];

export default function Header() {
const [open, setOpen] = useState(false);

return ( <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-xl"> 
<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
    {/* Logo */}
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={logo}
        alt="Cell Custody"
        width={40}
        height={40}
        className="rounded-xl object-cover shadow-sm cursor-pointer"
        priority
        onClick={() => window.location.href = "/"}
      />
      <div>
        <h2 className="text-lg font-bold tracking-tight text-gray-900">
          CELL
          <span className="text-yellow-500 ">CUSTODY</span>
        </h2>
        <p className="text-xs text-gray-500 text-center">
          Doorstep Mobile Repair
        </p>
      </div>
    </Link>

    {/* Desktop Navigation */}
    <nav className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
        >
          {link.label}
        </Link>
      ))}
    </nav>

    {/* Desktop CTA */}
    <div className="hidden items-center gap-3 md:flex">

      <a
        href={contact.phoneHref}
        className="flex items-center gap-2 text-sm font-semibold text-gray-900"
      >
        <Phone size={16} />
        {contact.phoneDisplay}
      </a>

      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-lg border border-green-200 px-3 py-2 text-sm font-semibold text-green-600 transition hover:bg-green-50"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>

      <Link
        href="/book"
        className="rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg"
      >
        Book Repair
      </Link>
    </div>

    {/* Mobile Menu Button */}
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={() => setOpen(!open)}
      className="rounded-lg border border-gray-200 p-2 text-gray-900 transition hover:bg-gray-50 md:hidden"
    >
      {open ? <X size={22} /> : <Menu size={22} />}
    </button>
  </div>

  {/* Mobile Menu */}
  {open && (
    <div className="border-t border-gray-100 bg-white md:hidden">
      <div className="flex flex-col gap-4 px-5 py-5">

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-gray-700"
          >
            {link.label}
          </Link>
        ))}

        <div className="mt-2 flex flex-col gap-3 border-t border-gray-100 pt-4">

          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-gray-900"
          >
            <Phone size={16} />
            {contact.phoneDisplay}
          </a>

          <a
            href={contact.whatsappHref}
            target="self" 
            rel="noopener noreferrer"
            className="text-sm font-semibold text-green-600 hover:text-green-700"
          >
            <MessageCircle size={16} /> <span className="text-center">WhatsApp Us</span>
          </a>

          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-yellow-400 px-4 py-3 text-center text-sm font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            Book Repair
          </Link>
        </div>
      </div>
    </div>
  )}
</header>
);
}
