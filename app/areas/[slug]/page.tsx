import { areas, services } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const area = areas.find((a) => a.slug === params.slug);
  if (!area) return {};
  return {
    title: `Doorstep Mobile Repair in ${area.name}, Nagpur | Cell Custody`,
    description: `Need mobile repair in ${area.name}, Nagpur? Cell Custody sends professional technicians to your home, office, or college. 30-45 min arrival.`,
  };
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = areas.find((a) => a.slug === params.slug);
  if (!area) notFound();

  return (
    <main className="bg-paper min-h-screen pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100 py-16 md:py-24">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-100/30 blur-3xl opacity-50" />
        <div className="mx-auto max-w-5xl px-5 relative">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3.5 py-1.5 text-xs font-bold text-yellow-800">
            <MapPin size={12} className="text-yellow-600 animate-bounce" />
            Active Coverage Zone · Nagpur
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Doorstep Mobile Repair in {area.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
            Looking for mobile repair near {area.name}? Skip the local repair market. 
            Our certified technician will arrive at your home, office, hostel, or cafe in {area.name} within 30 to 45 minutes to fix your phone in front of you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="group inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Book Repair in {area.name}
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="font-display text-2xl font-bold text-gray-900 text-center">
          On-Site Repairs Available in {area.name}
        </h2>
        <p className="mt-2 text-sm text-gray-500 text-center">
          We perform all mobile repairs on the spot. No need to hand over your device or wait for days.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.slug} className="rounded-3xl border border-gray-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="text-xs font-mono text-gray-400">{service.ticketCode}</span>
              <h3 className="text-base font-bold text-gray-900 mt-1">{service.name}</h3>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2">{service.description}</p>
              
              <div className="mt-5 flex items-center justify-between border-t border-gray-50 pt-3 text-xs">
                <span className="font-semibold text-gray-700">₹{service.startingPrice} onwards</span>
                <span className="flex items-center gap-1 text-yellow-600 font-medium">
                  <Clock size={12} /> {service.turnaround}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Area statistics */}
      <section className="mx-auto max-w-5xl px-5 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm">
            <Clock size={28} className="mx-auto text-yellow-500 mb-3" />
            <h4 className="text-lg font-bold text-gray-900">45 Mins Response</h4>
            <p className="text-xs text-gray-500 mt-1">Technician reaches your location in {area.name} quickly.</p>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm">
            <CheckCircle2 size={28} className="mx-auto text-yellow-500 mb-3" />
            <h4 className="text-lg font-bold text-gray-900">100% Transparency</h4>
            <p className="text-xs text-gray-500 mt-1">Your smartphone is repaired right in front of you. 100% data secure.</p>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm">
            <ShieldCheck size={28} className="mx-auto text-yellow-500 mb-3" />
            <h4 className="text-lg font-bold text-gray-900">6 Months Warranty</h4>
            <p className="text-xs text-gray-500 mt-1">High-quality tested spare parts backed by a replacement warranty.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
