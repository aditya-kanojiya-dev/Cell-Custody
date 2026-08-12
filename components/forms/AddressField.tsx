"use client";

import { useState } from "react";
import { LocateFixed } from "lucide-react";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
};

type NominatimAddress = {
  house_number?: string;
  road?: string;
  suburb?: string;
  city_district?: string;
  town?: string;
  village?: string;
  city?: string;
  state?: string;
};

// Build a short, specific address from structured geocoder parts instead of
// Nominatim's long display_name ("Road, Suburb, City, State").
function cleanAddress(a?: NominatimAddress) {
  if (!a) return "";
  const line1 = [a.house_number, a.road].filter(Boolean).join(" ");
  const line2 = [
    a.suburb || a.city_district || a.town || a.village,
    a.city || a.state,
  ]
    .filter(Boolean)
    .join(", ");
  return [line1, line2].filter(Boolean).join(", ");
}

export default function AddressField({
  label,
  name,
  placeholder = "Your Address",
  required,
  rows = 3,
}: Props) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  // ponytail: reverse geocode via Nominatim (free, no key). Swap for Google
  // Places autocomplete if you want search-as-you-type — needs an API key.
  function useMyLocation() {
    if (!("geolocation" in navigator)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          setValue(cleanAddress(data.address) || data.display_name || "");
        } catch {
          setStatus("error");
        } finally {
          setStatus("idle");
        }
      },
      () => setStatus("error")
    );
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
          {label}
        </label>

        <button
          type="button"
          onClick={useMyLocation}
          disabled={status === "loading"}
          className="flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-1 text-[11px] font-medium text-gray-700 transition hover:border-yellow-400 hover:text-black disabled:opacity-50"
        >
          <LocateFixed size={12} />
          {status === "loading" ? "Locating..." : "Use My Location"}
        </button>
      </div>

      <textarea
        name={name}
        rows={rows}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="input"
      />

      {status === "error" && (
        <p className="mt-1 text-xs text-red-500">
          Couldn't get your location — please type your address.
        </p>
      )}
    </div>
  );
}
