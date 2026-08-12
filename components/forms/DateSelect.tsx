"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  label: string;
  name: string;
  required?: boolean;
};

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Local-timezone ISO so dates don't shift a day for UTC+ timezones.
function toISO(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function DateSelect({ label, name, required }: Props) {
  const now = new Date();
  const todayISO = toISO(now);
  const [value, setValue] = useState("");
  const [view, setView] = useState({
    year: now.getFullYear(),
    month: now.getMonth(),
  });

  const selectedDate = value ? new Date(value + "T00:00:00") : null;
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const firstWeekday = new Date(view.year, view.month, 1).getDay();
  const cells: (Date | null)[] = [
    ...Array<null>(firstWeekday).fill(null),
    ...Array.from(
      { length: daysInMonth },
      (_, i) => new Date(view.year, view.month, i + 1)
    ),
  ];

  function shiftMonth(delta: number) {
    const d = new Date(view.year, view.month + delta, 1);
    setView({ year: d.getFullYear(), month: d.getMonth() });
  }

  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">
        {label}
      </label>

      <div className="rounded-xl border border-gray-200 bg-white p-3">
        <div className="mb-2 flex items-center justify-between">
          <button
            type="button"
            onClick={() => shiftMonth(-1)}
            className="rounded-lg p-1 text-gray-500 transition hover:bg-gray-100 hover:text-black"
          >
            <ChevronLeft size={16} />
          </button>

          <span className="text-sm font-semibold text-gray-800">
            {MONTHS[view.month]} {view.year}
          </span>

          <button
            type="button"
            onClick={() => shiftMonth(1)}
            className="rounded-lg p-1 text-gray-500 transition hover:bg-gray-100 hover:text-black"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="mb-1 grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-gray-400">
          {WEEKDAYS.map((w) => (
            <div key={w}>{w}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {cells.map((d, i) => {
            if (!d) return <div key={`blank-${i}`} />;

            const iso = toISO(d);
            const disabled = iso < todayISO;
            const selected = iso === value;
            const isToday = iso === todayISO;

            return (
              <button
                key={iso}
                type="button"
                disabled={disabled}
                onClick={() => setValue(iso)}
                className={`rounded-lg py-1.5 text-xs transition ${
                  selected
                    ? "bg-yellow-400 font-semibold text-black"
                    : disabled
                    ? "text-gray-300"
                    : isToday
                    ? "font-semibold text-yellow-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {d.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      <input
        type="text"
        name={name}
        required={required}
        readOnly
        value={
          selectedDate
            ? selectedDate.toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            : ""
        }
        placeholder="Pick a date from the calendar above"
        className="input mt-2 cursor-pointer bg-white text-sm"
      />
    </div>
  );
}
