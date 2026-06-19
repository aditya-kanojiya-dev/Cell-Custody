import Link from "next/link";
import { ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Warranty Policy — Cell Custody Nagpur",
  description: "Learn about the 6-month doorstep mobile repair warranty offered by Cell Custody Nagpur.",
};

export default function WarrantyPage() {
  return (
    <main className="bg-paper min-h-screen pb-20">
      <section className="bg-white border-b border-gray-100 py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
            <ShieldCheck size={32} />
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Warranty Policy
          </h1>
          <p className="mt-4 text-base text-gray-500 max-w-xl mx-auto">
            Every screen, battery, and hardware repair completed by Cell Custody Nagpur is covered by our comprehensive doorstep warranty.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 space-y-10">
        {/* Coverage Overview */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Warranty Duration</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            All screen replacements and battery swaps are backed by a <strong>6 Months Replacement Warranty</strong> starting from the day of the repair. 
            All other hardware repairs (e.g., charging port, mic, speaker) are covered by a <strong>3 Months Replacement Warranty</strong>.
          </p>
        </div>

        {/* What is covered */}
        <div className="rounded-3xl border border-green-100 bg-green-50/20 p-6 md:p-8">
          <h2 className="text-xl font-bold text-green-800 flex items-center gap-2 mb-4">
            <CheckCircle2 className="text-green-600" /> What is Covered
          </h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>✓ Touchscreen unresponsiveness or dead touch zones.</li>
            <li>✓ Display issues like dead pixels, flickering, or vertical lines (without physical damage).</li>
            <li>✓ Battery health dropping rapidly, swollen battery, or failure to hold charge.</li>
            <li>✓ Replacement part failures under normal daily operations.</li>
          </ul>
        </div>

        {/* What is NOT covered */}
        <div className="rounded-3xl border border-red-100 bg-red-50/20 p-6 md:p-8">
          <h2 className="text-xl font-bold text-red-800 flex items-center gap-2 mb-4">
            <AlertTriangle className="text-red-600" /> What is NOT Covered (Exclusions)
          </h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>✗ Accidental drops, cracked glass, or internal screen bleeding (black patches) after repair.</li>
            <li>✗ Liquid/water damage occurred after the doorstep repair.</li>
            <li>✗ Software modifications, rooting, or operating system bootloops unrelated to the hardware.</li>
            <li>✗ Subsequent repairs or tampering conducted by any local technician or official service center.</li>
          </ul>
        </div>

        {/* Claims Process */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Claim Warranty</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            If you encounter issues covered under this policy, simply reach out to us on WhatsApp or call our line with your booking code/details. 
            We will schedule a technician visit to your address in Nagpur, inspect the device, and replace the component on the spot for free.
          </p>
          
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Book Repair Now
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://wa.me/919000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-black"
            >
              Support WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
