import Link from "next/link";
import { areas, services } from "@/lib/data";
import { MapPin } from "lucide-react";

export const metadata = {
  title: "Service Areas — Cell Custody",
  description:
    "Doorstep mobile repair coverage across Nagpur. Check if we service your area.",
};

export default function AreasPage() {
  return (
    <main className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Service Areas
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
            Areas We Cover
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-slate md:text-base">
            Our technicians travel across Nagpur every day. Pick your area to
            see available repairs or book directly.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 transition group-hover:bg-yellow-400/20">
                <MapPin size={18} className="text-yellow-500" />
              </div>

              <div>
                <p className="font-semibold text-ink transition group-hover:text-yellow-500">
                  {area.name}
                </p>
                <p className="text-xs text-slate">Nagpur</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 rounded-[32px] bg-yellow-400 p-10 text-center">
          <h2 className="text-3xl font-bold text-black">
            Don&apos;t See Your Area?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-black/80">
            We cover most areas in Nagpur. Contact us to check if we can
            reach your location.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-2xl bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center rounded-2xl border-2 border-black px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Book Repair
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
