"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production this should report to an error-tracking service.
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-paper px-5 font-sans antialiased">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-ink">
            <AlertTriangle size={24} className="text-amber" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-ink">
            Something went wrong
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-sm text-slate">
            An unexpected error occurred. You can try again, or head back to
            the homepage.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => reset()}
              className="rounded-md border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
            >
              Try again
            </button>
            <Link
              href="/"
              className="rounded-md bg-amber px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-paper"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
