import Link from "next/link";
import { services } from "@/lib/data";

export const metadata = {
  title: "Pricing — Cell Custody",
  description: "Transparent starting prices for doorstep mobile repair in Nagpur.",
};

export default function PricingPage() {
  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
          Pricing
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Transparent, starting prices
        </h1>
        <p className="mt-3 max-w-lg text-sm text-slate md:text-base">
          Prices below are starting points — your technician confirms the
          exact quote for your device model before any work begins. No
          hidden charges, ever.
        </p>

        <div className="mt-10 border-t border-line">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="flex items-center justify-between gap-4 border-b border-line py-5 transition hover:bg-line/30"
            >
              <div>
                <span className="ticket-num text-xs text-slate/60">
                  {service.ticketCode}
                </span>
                <p className="font-display text-base font-semibold text-ink md:text-lg">
                  {service.name}
                </p>
              </div>
              <p className="ticket-num text-right text-sm md:text-base">
                <span className="text-ink">₹{service.startingPrice}</span>
                <span className="text-slate/60"> onwards</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
