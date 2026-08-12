"use client";

import { useEffect, useState } from "react";
import { brands, phoneModels, areas, contact } from "@/lib/data";
import AddressField from "@/components/forms/AddressField";
import DateSelect from "@/components/forms/DateSelect";

const tgBrands = brands.filter((b) =>
  ["apple", "samsung", "oneplus"].includes(b.slug)
);

const timeSlots = [
  "10:00 AM – 12:00 PM",
  "12:00 PM – 2:00 PM",
  "2:00 PM – 4:00 PM",
  "4:00 PM – 6:00 PM",
  "6:00 PM – 8:00 PM",
];

export default function TemperedGlassForm() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [customArea, setCustomArea] = useState("");
  const [devices, setDevices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedBrand) {
      const brandObj = brands.find(
        (b) => b.slug === selectedBrand || b.name === selectedBrand
      );
      setDevices(brandObj ? phoneModels[brandObj.name] || [] : []);
    } else {
      setDevices([]);
    }
  }, [selectedBrand]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const name = formData.get("name")?.toString() || "";
      const phone = formData.get("phone")?.toString() || "";
      const address = formData.get("address")?.toString() || "";
      const date = formData.get("date")?.toString() || "";
      const slot = formData.get("slot")?.toString() || "";

      const brandObj = brands.find(
        (b) => b.slug === selectedBrand || b.name === selectedBrand
      );
      const finalArea = selectedArea === "other" ? customArea : selectedArea;

      const message = `Hi Cell Custody,
I would like to book a Tempered Glass installation.

Name: ${name}
Phone: ${phone}
Device: ${brandObj?.name || selectedBrand} ${selectedDevice}
Service: Tempered Glass
Area: ${finalArea}
Address: ${address}
Preferred Date: ${date}
Preferred Slot: ${slot}`;

      window.open(
        `${contact.whatsappHref}?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      e.currentTarget.reset();
      setSelectedBrand("");
      setSelectedDevice("");
      setSelectedArea("");
      setCustomArea("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name">
          <input required name="name" placeholder="Your Name" className="input" />
        </Field>
        <Field label="Phone Number">
          <input required name="phone" placeholder="9876543210" className="input" />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone Brand">
          <select
            value={selectedBrand}
            required
            className="input bg-white"
            onChange={(e) => {
              setSelectedBrand(e.target.value);
              setSelectedDevice("");
            }}
          >
            <option value="">Select Brand</option>
          {tgBrands.map((brand) => (
            <option key={brand.slug} value={brand.slug}>
              {brand.name}
            </option>
          ))}
          </select>
        </Field>
        <Field label="Phone Model">
          <select
            required
            value={selectedDevice}
            disabled={!selectedBrand}
            className="input bg-white"
            onChange={(e) => setSelectedDevice(e.target.value)}
          >
            <option value="">Select Device</option>
            {devices.map((device) => (
              <option key={device} value={device}>
                {device}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Area">
        <select
          required
          value={selectedArea}
          className="input bg-white"
          onChange={(e) => {
            setSelectedArea(e.target.value);
            if (e.target.value !== "other") setCustomArea("");
          }}
        >
          <option value="">Select Area</option>
          {areas.map((a) => (
            <option key={a.slug} value={a.name}>
              {a.name}
            </option>
          ))}
          <option value="other">Other (Enter manually)</option>
        </select>
      </Field>

      {selectedArea === "other" && (
        <Field label="Enter Your Area">
          <input
            type="text"
            value={customArea}
            onChange={(e) => setCustomArea(e.target.value)}
            placeholder="Enter your area"
            className="input"
            required
          />
        </Field>
      )}

      <AddressField label="Address" name="address" required rows={2} />

      <div className="grid gap-4 sm:grid-cols-2">
        <DateSelect label="Preferred Date" name="date" required />
        <Field label="Preferred Time Slot">
          <select required name="slot" className="input bg-white">
            <option value="">Select Slot</option>
            {timeSlots.map((slot) => (
              <option key={slot}>{slot}</option>
            ))}
          </select>
        </Field>
      </div>

      <button
        disabled={loading}
        className="w-full rounded-xl bg-yellow-400 px-6 py-3.5 font-semibold text-black transition hover:bg-black hover:text-white disabled:opacity-50"
      >
        {loading ? "Redirecting..." : "Book on WhatsApp"}
      </button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-600">
        {label}
      </label>
      {children}
    </div>
  );
}
