import Link from "next/link";
import {
  Smartphone,
  Battery,
  Droplets,
  Camera,
  PlugZap,
  Wrench,
  ArrowRight,
} from "lucide-react";

const serviceCards = [
  {
    title: "Screen Repair",
    description:
      "Cracked glass, touch issues, OLED & LCD replacements.",
    icon: Smartphone,
    href: "/services/screen-replacement",
  },
  {
    title: "Battery Replacement",
    description:
      "Fast-draining batteries replaced with quality parts.",
    icon: Battery,
    href: "/services/battery-replacement",
  },
  {
    title: "Water Damage",
    description:
      "Deep cleaning, diagnostics and board-level recovery.",
    icon: Droplets,
    href: "/services/water-damage",
  },
  {
    title: "Charging Port",
    description:
      "Charging issues, loose ports and connector repairs.",
    icon: PlugZap,
    href: "/services/charging-port-repair",
  },
  {
    title: "Camera Repair",
    description:
      "Front and rear camera replacement and calibration.",
    icon: Camera,
    href: "/services/camera-repair",
  },
  {
    title: "Software Issues",
    description:
      "Boot loops, updates, performance and OS troubleshooting.",
    icon: Wrench,
    href: "/services/software-repair",
  },
];

export default function ServiceBentoGrid() {
  return (
    <section
      id="services"
      className="border-b border-line bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Most Requested Repairs
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Professional Mobile Repairs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate md:text-base">
            Genuine parts, expert technicians, doorstep service
            and transparent pricing across Nagpur.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {serviceCards.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10">
                  <Icon
                    size={24}
                    className="text-yellow-500"
                  />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-yellow-500">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}

          {/* Large CTA Card */}
          <div className="rounded-3xl border border-yellow-400 bg-yellow-400 p-8 text-black md:col-span-3">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider">
                  Same-Day Doorstep Service
                </p>

                <h3 className="mt-2 font-display text-3xl font-bold">
                  Book Your Repair Today
                </h3>

                <p className="mt-2 max-w-2xl text-black/80">
                  Get your phone repaired at home by certified
                  technicians. No queues, no hidden charges.
                </p>
              </div>

              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-4 text-sm font-semibold text-white transition hover:scale-105"
              >
                Book Repair
                <ArrowRight
                  size={18}
                  className="ml-2"
                />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}