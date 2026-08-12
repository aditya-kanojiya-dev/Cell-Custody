"use client";

import { useState } from "react";

type Props = {
  label: string;
  name: string;
  required?: boolean;
};

// Local-timezone ISO so chips don't shift a day for UTC+ timezones.
function toISO(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function nextNDays(n: number) {
  const days: Date[] = [];
  const today = new Date();
  for (let i = 1; i <= n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

export default function DateSelect({ label, name, required }: Props) {
  const [value, setValue] = useState("");
  const today = toISO(new Date());

  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">
        {label}
      </label>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {nextNDays(7).map((d) => {
          const iso = toISO(d);
          const selected = value === iso;
          return (
            <button
              key={iso}
              type="button"
              onClick={() => setValue(iso)}
              className={`flex min-w-[64px] flex-col items-center rounded-xl border px-3 py-2 text-xs transition ${
                selected
                  ? "border-yellow-400 bg-yellow-400 font-semibold text-black"
                  : "border-gray-300 bg-white text-gray-700 hover:border-yellow-400"
              }`}
            >
              <span>{d.toLocaleDateString("en-US", { weekday: "short" })}</span>
              <span className="text-base font-semibold">{d.getDate()}</span>
            </button>
          );
        })}
      </div>

      <input
        type="date"
        name={name}
        required={required}
        value={value}
        min={today}
        onChange={(e) => setValue(e.target.value)}
        className="input mt-2"
      />
    </div>
  );
}
