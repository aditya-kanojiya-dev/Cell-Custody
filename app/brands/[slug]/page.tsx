import { brands, phoneModels, services } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Smartphone } from "lucide-react";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const brand = brands.find((b) => b.slug === params.slug);
  if (!brand) return {};
  return {
    title: `${brand.name} Mobile Repair in Nagpur — Doorstep Service | Cell Custody`,
    description: `Professional doorstep repair for all ${brand.name} models in Nagpur. Screen replacement, battery repair, charging port fixes with warranty.`,
  };
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = brands.find((b) => b.slug === params.slug);
  if (!brand) notFound();

  const models = phoneModels[brand.name] || [];

  return (
    <main className="bg-paper min-h-screen pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100 py-16 md:py-24">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-100/50 blur-3xl opacity-50" />
        <div className="mx-auto max-w-5xl px-5 relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
            Brand Support
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {brand.name} Repair Service in Nagpur
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
            Get your {brand.name} smartphone repaired at your home, office, or hostel in Nagpur. 
            All repairs are done on-site by certified technicians using high-quality tested spare parts.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="group inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Book {brand.name} Repair
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Supported Models */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="font-display text-2xl font-bold text-gray-900">
          Popular {brand.name} Models We Repair
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Don't see your model listed? Don't worry. Select "Other" in our booking form and we'll handle it.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {models.filter(m => m !== "Other").map((model) => (
            <div
              key={model}
              className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 transition duration-300 hover:border-yellow-400 hover:shadow-sm"
            >
              <Smartphone size={18} className="text-yellow-500 flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-800">{model}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Common Repairs & Pricing */}
      <section className="mx-auto max-w-5xl px-5 py-8">
        <h2 className="font-display text-2xl font-bold text-gray-900">
          Common {brand.name} Repair Price Estimations
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.slug} className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div>
                <span className="text-xs font-mono uppercase text-gray-400">{service.ticketCode}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{service.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{service.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-sm text-gray-400">Estimated Starting Price</span>
                <span className="font-mono text-base font-bold text-gray-900">₹{service.startingPrice} onwards</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust factors */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="rounded-3xl bg-yellow-50/50 border border-yellow-100 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black flex-shrink-0">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Cell Custody Assurance</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Every {brand.name} repair comes with <strong>6 Months Warranty</strong>, genuine tested components, 
              and our flat "no repair, no fee" policy. If we can't fix your phone, you don't pay a single rupee.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
