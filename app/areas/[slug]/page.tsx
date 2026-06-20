import { areas, services, contact } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return areas.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const area = areas.find((a) => a.slug === slug);

  if (!area) return {};

  return {
    title: `Doorstep Mobile Repair in ${area.name}, Nagpur | Cell Custody`,
    description: `Get expert mobile repair services at your doorstep in ${area.name}, Nagpur. Fast, reliable, and convenient repairs for all your smartphone needs with Cell Custody.`,
  };
}

export default async function AreaPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const area = areas.find((a) => a.slug === slug);

  if (!area) notFound();

  return (
    <main className="bg-paper">
      {/* HERO */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex items-center gap-2 text-yellow-400">
            <MapPin size={16} />

            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Service Area
            </p>
          </div>

          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Doorstep Mobile Repair in {area.name}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
            Experience the convenience of expert mobile repair services at your doorstep in {area.name}, Nagpur. Our skilled technicians are ready to fix your smartphone quickly and reliably, so you can get back to what matters most without the hassle of visiting a repair shop.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-paper"
            >
              Book a Repair in {area.name}

              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-ink"
            >
              <Phone size={16} />
              {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-line bg-line/20">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <h2 className="font-display text-2xl font-bold text-ink">
            Repairs available in {area.name}
          </h2>

          <div className="mt-6 border-t border-line">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center justify-between gap-4 border-b border-line py-4 transition hover:bg-paper"
              >
                <span className="font-display text-base font-semibold text-ink">
                  {service.name}
                </span>

                {/* TIME ESTIMATE INSTEAD OF PRICE */}
                <span className="ticket-num text-sm text-slate">
                  ⏱ Est. {service.turnaround}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER AREAS */}
      <section>
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <h2 className="font-display text-2xl font-bold text-ink">
            Other areas we cover
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {areas
              .filter((a) => a.slug !== area.slug)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/areas/${a.slug}`}
                  className="rounded-md border border-line bg-paper px-4 py-2 text-sm font-medium text-ink transition hover:border-yellow-400 hover:text-yellow-400"
                >
                  {a.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}