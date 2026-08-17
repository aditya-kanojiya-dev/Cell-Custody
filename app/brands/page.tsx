import Link from "next/link";
import Image from "next/image";
import { brands } from "@/lib/data";

export const metadata = {
  title: "Brands We Repair | Cell Custody",
  description:
    "Doorstep mobile repair for Apple, Samsung, Xiaomi, OnePlus, Vivo, Oppo, Realme, Motorola and more brands in Nagpur.",
};

export default function BrandsPage() {
  return (
    <main className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Brands
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
            Brands We Repair
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-slate md:text-base">
            Professional doorstep mobile repair for all major smartphone
            brands across Nagpur. Pick your brand to see supported models.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="group flex flex-col items-center rounded-3xl border border-line bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
            >
              <div className="relative h-16 w-16 md:h-20 md:w-20">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="80px"
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <p className="mt-4 font-semibold text-ink transition group-hover:text-yellow-500">
                {brand.name}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-20 rounded-[32px] bg-yellow-400 p-10 text-center">
          <h2 className="text-3xl font-bold text-black">
            Don&apos;t See Your Brand?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-black/80">
            We repair most smartphone brands available in India. Contact us
            and we&apos;ll let you know if we can help.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-2xl bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
