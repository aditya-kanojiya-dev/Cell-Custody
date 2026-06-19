import BookingForm from "@/components/BookingForm";
import { Phone, MessageCircle } from "lucide-react";
import { contact } from "@/lib/data";

export const metadata = {
  title: "Book a Repair — Cell Custody",
  description:
    "Book doorstep mobile repair in Nagpur. Pick your slot, we'll send a technician.",
};

export default function BookPage() {
  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
          Book Now
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Get a technician at your door
        </h1>
        <p className="mt-3 max-w-lg text-sm text-slate md:text-base">
          Fill in your details below. We&apos;ll confirm your slot over WhatsApp
          within minutes.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_320px]">
          <div className="rounded-lg border border-line bg-paper p-6 md:p-8">
            <BookingForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-line p-5">
              <h3 className="font-display text-sm font-bold text-ink">
                Prefer to talk first?
              </h3>
              <div className="mt-4 space-y-3">
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-2 text-sm font-semibold text-ink"
                >
                  <Phone size={16} className="text-amber" />
                  {contact.phoneDisplay}
                </a>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-ink"
                >
                  <MessageCircle size={16} className="text-green" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-line bg-line/20 p-5">
              <h3 className="font-display text-sm font-bold text-ink">
                What happens next
              </h3>
              <ol className="ticket-num mt-3 space-y-2 text-sm text-slate">
                <li>01. We confirm your slot by WhatsApp</li>
                <li>02. Technician is assigned to your area</li>
                <li>03. They arrive within your chosen window</li>
                <li>04. Final quote confirmed before any work</li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
