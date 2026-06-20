import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Repair Warranty — Cell Custody",
  description: "Warranty terms for repairs carried out by Cell Custody.",
};

const covered = [
  "The specific part replaced or repaired (e.g. screen, battery, charging port)",
  "Workmanship — if the same issue recurs due to how the repair was carried out",
];

const notCovered = [
  "New physical damage (drops, cracks, liquid damage) after the repair",
  "Issues unrelated to the part or component that was repaired",
  "Devices opened or repaired by someone else after our visit",
  "Software issues unrelated to the hardware repair performed",
];

export default function WarrantyPage() {
  return (
    <main className="bg-paper">
      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex items-center gap-2 text-yellow-400-text">
            <ShieldCheck size={18} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Warranty
            </p>
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Repair Warranty
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
            Every eligible repair comes with a warranty period covering the
            part replaced and the workmanship of the repair. Exact warranty
            duration is confirmed by your technician at the time of repair,
            based on the service performed.
          </p>

          <div className="mt-4 rounded-md border border-yellow-400/30 bg-yellow-400/10 px-4 py-3 text-sm text-ink">
            This page is a draft policy template and has not yet been
            reviewed by a lawyer. Confirm exact warranty durations per
            service before publishing.
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-line/10">
        <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-lg font-bold text-ink">
                What&apos;s covered
              </h2>
              <ul className="mt-4 space-y-3">
                {covered.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-ink">
                What&apos;s not covered
              </h2>
              <ul className="mt-4 space-y-3">
                {notCovered.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
          <h2 className="font-display text-lg font-bold text-ink">
            Making a warranty claim
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            If you notice an issue with a part we repaired or replaced,
            message us on WhatsApp with your name, the repair date, and a
            description of the issue. We&apos;ll arrange a follow-up visit to
            inspect and resolve it.
          </p>

          <Link
            href="/contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-md bg-yellow-400 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-paper"
          >
            Contact Us
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
