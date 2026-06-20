import { brands, phoneModels, services } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Smartphone } from "lucide-react";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const brand = brands.find((b) => b.slug === slug);

  if (!brand) return {};

  return {
    title: `${brand.name} Repair in Nagpur — Doorstep Service | Cell Custody`,
    description: `Doorstep repair for ${brand.name} phones in Nagpur — screen, battery, charging port, and more. Technician at your address.`,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const brand = brands.find((b) => b.slug === slug);

  if (!brand) notFound();

  const models = phoneModels[brand.name] ?? [];

  return (
    <main className="bg-paper">
      {/* HERO */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex items-center gap-4">
            {brand.image ? (
              <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-line bg-paper">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={40}
                  height={40}
                />
              </div>
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-line bg-paper">
                <Smartphone size={26} className="text-slate" />
              </div>
            )}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Brand
              </p>

              <h1 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                {brand.name} Repair in Nagpur
              </h1>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate">
            Doorstep repair for {brand.name} phones — screens, batteries,
            charging ports, cameras, and more. A technician comes to you
            anywhere in Nagpur.
          </p>

          <Link
            href="/book"
            className="group mt-8 inline-flex items-center gap-2 rounded-md bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-paper"
          >
            Book a {brand.name} Repair

            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>

      {/* MODELS */}
      {models.length > 0 && (
        <section className="border-b border-line bg-line/20">
          <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
            <h2 className="font-display text-2xl font-bold text-ink">
              {brand.name} models we service
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {models.map((m) => (
                <span
                  key={m}
                  className="ticket-num rounded-md border border-line bg-paper px-3 py-1.5 text-xs text-ink"
                >
                  {m}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm text-slate">
              Don&apos;t see your model? Choose "Other" on the booking
              form and tell us the exact model — we repair most{" "}
              {brand.name} devices available in India.
            </p>
          </div>
        </section>
      )}

      {/* SERVICES */}
      <section>
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <h2 className="font-display text-2xl font-bold text-ink">
            Repairs available for {brand.name}
          </h2>

          <div className="mt-6 border-t border-line">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center justify-between gap-4 border-b border-line py-4 transition hover:bg-line/30"
              >
                <span className="font-display text-base font-semibold text-ink">
                  {service.name}
                </span>

                <span className="ticket-num text-sm text-slate">
                  ⏱ Est. {service.turnaround}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}