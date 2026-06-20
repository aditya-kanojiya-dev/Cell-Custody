import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-paper px-5">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-ink">
          <Wrench size={24} className="text-amber" />
        </div>
        <p className="ticket-num text-xs uppercase tracking-[0.2em] text-amber-text">
          Error 404
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          This page wasn&apos;t found
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-slate">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-md border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
          >
            Back to Home
          </Link>
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 rounded-md bg-amber px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-paper"
          >
            Book a Repair
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
