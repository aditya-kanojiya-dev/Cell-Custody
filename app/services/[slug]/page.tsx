import { services, brands } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const service = services.find(
    (s) => s.slug === slug
  );

  if (!service) return {};

  return {
    title: `${service.name} in Nagpur — Doorstep Service | Cell Custody`,
    description: `${service.description} Estimated repair time: ${service.turnaround}. Doorstep mobile repair service in Nagpur.`,
  };
}

const assurances = [
  "Genuine, tested parts",
  "Technician arrives at your address",
  "Final quote confirmed before work starts",
  "Warranty on every repair",
];

export default async function ServicePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const service = services.find(
    (s) => s.slug === slug
  );

  if (!service) notFound();

  return (
    <main className="bg-paper">
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
          <p className="ticket-num text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            {service.ticketCode}
          </p>

          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            {service.name} in Nagpur
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
            {service.description}
          </p>

          {/* Estimated Time Card */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-3xl border border-yellow-400/20 bg-yellow-400/10 px-6 py-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/20">
              <Clock3
                size={24}
                className="text-yellow-500"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate">
                Estimated Repair Time
              </p>

              <p className="ticket-num mt-1 text-2xl font-semibold text-ink">
                {service.turnaround}
              </p>
            </div>
          </div>

          <div>
            <Link
              href="/book"
              className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Book This Repair
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="border-b border-line bg-line/20">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <h2 className="font-display text-2xl font-bold text-ink">
            What's Included
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {assurances.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 flex-shrink-0 text-green"
                />

                <span className="text-sm text-ink">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <h2 className="font-display text-2xl font-bold text-ink">
            Available for Every Major Brand
          </h2>

          <p className="mt-3 max-w-2xl text-slate">
            Our technicians repair smartphones from all
            leading brands with doorstep service across
            Nagpur.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="rounded-2xl border border-line bg-paper px-5 py-3 text-sm font-medium text-ink transition-all duration-300 hover:border-yellow-400 hover:text-yellow-500"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-5xl px-5 py-16 text-center md:px-8 md:py-24">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Ready to get your{" "}
            {service.name.toLowerCase()} sorted?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate">
            Book a certified technician and get your phone
            repaired at home—no queues, no hidden charges.
          </p>

          <Link
            href="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Book Your Repair Slot
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}