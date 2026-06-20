import Link from "next/link";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services We Offer | Cell Custody",
  description:
    "Doorstep mobile repair services in Nagpur including screen replacement, battery replacement, charging repair, camera repair, software fixes and more.",
};

export default function ServicesPage() {
  return (
    <main className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Our Services
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
            Repairs We Offer
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-slate md:text-base">
            Professional doorstep mobile repairs across Nagpur.
            Fast turnaround, genuine parts, and experienced technicians —
            delivered right where you are.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10">
                  <Icon
                    size={28}
                    className="text-yellow-500"
                  />
                </div>

                {/* Title */}
                <h2 className="mt-6 font-display text-2xl font-bold text-ink">
                  {service.name}
                </h2>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {service.description}
                </p>

                {/* Time */}
                <div className="mt-5 inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                  {service.turnaround}
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-yellow-500">
                  View Service
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-[32px] bg-yellow-400 p-10 text-center">
          <h2 className="text-3xl font-bold text-black">
            Need a Repair Today?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-black/80">
            Book a technician and get your device repaired at your home
            or office.
          </p>

          <Link
            href="/book"
            className="mt-8 inline-flex items-center rounded-2xl bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Book Repair
          </Link>
        </div>
      </div>
    </main>
  );
}