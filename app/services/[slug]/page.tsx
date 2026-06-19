import { services, brands } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.name} in Nagpur — Doorstep Service | Cell Custody`,
    description: `${service.description} Starting at ₹${service.startingPrice}, ${service.turnaround} turnaround, at your doorstep in Nagpur.`,
  };
}

const assurances = [
  "Genuine, tested parts",
  "Technician arrives at your address",
  "Final price confirmed before work starts",
  "Warranty on every repair",
];

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <main className="bg-paper">
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
          <p className="ticket-num text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            {service.ticketCode}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            {service.name} in Nagpur
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
            {service.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate">
                Starting at
              </p>
              <p className="ticket-num mt-1 text-2xl font-semibold text-ink">
                ₹{service.startingPrice}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate">
                Turnaround
              </p>
              <p className="ticket-num mt-1 text-2xl font-semibold text-ink">
                {service.turnaround}
              </p>
            </div>
          </div>

          <Link
            href="/book"
            className="group mt-8 inline-flex items-center gap-2 rounded-md bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
          >
            Book This Repair
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <section className="border-b border-line bg-line/20">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <h2 className="font-display text-2xl font-bold text-ink">
            What&apos;s included
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {assurances.map((a) => (
              <div key={a} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-green"
                />
                <span className="text-sm text-ink">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <h2 className="font-display text-2xl font-bold text-ink">
            Available for every major brand
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {brands.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="rounded-md border border-line bg-paper px-4 py-2 text-sm font-medium text-ink transition hover:border-yellow-400 hover:text-yellow-400"
              >
                {b.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-5 py-14 text-center md:px-8 md:py-20">
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Ready to get your {service.name.toLowerCase()} sorted?
          </h2>
          <Link
            href="/book"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
          >
            Book Your Repair Slot
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
