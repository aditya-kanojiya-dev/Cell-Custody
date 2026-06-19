"use client";

import { FaWhatsapp } from "react-icons/fa";
import { contact } from "@/lib/data";

export default function WhatsAppFab() {
  return (
    <>
    
      {/* Pulse Ring */}
      <div className="fixed bottom-6 right-6 z-40">
        <span className="absolute h-16 w-16 animate-ping rounded-full bg-[#25D366]/30" />
      </div>

      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
      >
        
        {/* Desktop Tooltip */}
        <div className="hidden rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-semibold text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
          Chat on WhatsApp
        </div>

        {/* FAB */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_35px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_18px_45px_rgba(37,211,102,0.45)]">
          {/* Online Badge */}
          <span className="absolute right-1 top-1 h-4 w-4 rounded-full border-2 border-white bg-green-400" />

          <FaWhatsapp
            size={34}
            className="text-white"
          />
        </div>
      </a>
    </>
  );
}