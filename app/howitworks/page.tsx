import Link from "next/link";
import {
  MessageSquareText,
  MapPinCheck,
  Wrench,
  BadgeCheck,
  ArrowRight,
  ShieldCheck,
  Clock3,
  IndianRupee,
} from "lucide-react";

export const metadata = {
  title: "How It Works — Cell Custody",
  description:
    "How doorstep mobile repair works with Cell Custody: book, get matched with a technician, repair at your door, warranty included.",
};

const steps = [
  {
    code: "01",
    icon: MessageSquareText,
    title: "Book your slot",
    description:
      "Fill in your name, phone, brand, model, and the issue on our booking page — or message us directly on WhatsApp. Pick a date and a 2-hour time window that works for you.",
  },
  {
    code: "02",
    icon: MapPinCheck,
    title: "We confirm and assign a technician",
    description:
      "We confirm your booking over WhatsApp, then assign a technician covering your area. You'll know roughly when they'll arrive.",
  },
  {
    code: "03",
    icon: Wrench,
    title: "Technician arrives and diagnoses",
    description:
      "Your technician arrives within the chosen window, inspects the device, and tells you exactly what's wrong and what it'll cost — before touching anything.",
  },
  {
    code: "04",
    icon: BadgeCheck,
    title: "Repair, payment, and warranty",
    description:
      "Once you approve the quote, the repair is carried out on the spot. Pay by UPI, card, or cash, and get a warranty period covering parts and workmanship.",
  },
];

const principles = [
  {
    icon: IndianRupee,
    title: "No hidden charges",
    description: "The price confirmed on-site is the price you pay. No surprise add-ons after the work starts.",
  },
  {
    icon: Clock3,
    title: "Time windows, not guesses",
    description: "You get a 2-hour arrival window, not a vague 'sometime today.'",
  },
  {
    icon: ShieldCheck,
    title: "Warranty on the work",
    description: "Every eligible repair is backed by a warranty period for parts and labour.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-paper">
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400-text">
            How It Works
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            From booking to a working phone, in four steps
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate">
            No shop visit, no waiting in line. Here&apos;s exactly what
            happens after you book.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-line/10">
        <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step.code} className="flex gap-5 rounded-lg border border-line bg-paper p-6">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-ink">
                  <step.icon size={20} className="text-yellow-400" />
                </div>
                <div>
                  <p className="ticket-num text-xs text-slate/60">{step.code}</p>
                  <h2 className="mt-1 font-display text-lg font-bold text-ink">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            What stays the same, every time
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title}>
                <p.icon size={22} className="text-yellow-400-text" />
                <h3 className="mt-3 font-display text-base font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-5 py-14 text-center md:px-8 md:py-20">
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Ready to book your repair?
          </h2>
          <Link
            href="/book"
            className="group mt-6 inline-flex items-center gap-2 rounded-md bg-yellow-400 px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-paper"
          >
            Book Your Repair Slot
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
