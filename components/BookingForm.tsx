"use client";

import { useEffect, useState } from "react";
import { services, areas, brands, phoneModels, contact } from "@/lib/data";

const timeSlots = [
  "10:00 AM – 12:00 PM",
  "12:00 PM – 2:00 PM",
  "2:00 PM – 4:00 PM",
  "4:00 PM – 6:00 PM",
  "6:00 PM – 8:00 PM",
];

export default function BookingForm() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");
  const [devices, setDevices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Update devices dropdown list when brand changes
  useEffect(() => {
    if (selectedBrand) {
      // Find the brand name based on the slug or name
      const brandObj = brands.find(b => b.slug === selectedBrand || b.name === selectedBrand);
      if (brandObj) {
        const models = phoneModels[brandObj.name] || [];
        setDevices(models);
      } else {
        setDevices([]);
      }
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
      const issue = formData.get("issue")?.toString() || "";
      const area = formData.get("area")?.toString() || "";
      const address = formData.get("address")?.toString() || "";
      const slot = formData.get("slot")?.toString() || "";
      const date = formData.get("date")?.toString() || "";
      const notes = formData.get("notes")?.toString() || "";

      // Find brand display name
      const brandObj = brands.find(b => b.slug === selectedBrand || b.name === selectedBrand);
      const brandName = brandObj ? brandObj.name : selectedBrand;

      // Construct pre-filled WhatsApp message
      const message = `Hi Cell Custody,
I would like to book a doorstep mobile repair.

Name: ${name}
Phone: ${phone}
Device: ${brandName} ${selectedDevice}
Repair: ${issue}
Area: ${area}
Address: ${address}
Preferred Date: ${date}
Preferred Slot: ${slot}
Notes: ${notes}`;

      const encoded = encodeURIComponent(message);
      
      // WhatsApp redirect link using the number from lib/data.ts
      // (keeps booking fully frontend + direct WhatsApp message)
      const whatsappUrl = `${contact.whatsappHref}&text=${encoded}`;

      
      alert("Redirecting to WhatsApp to complete your booking...");
      window.open(whatsappUrl, "_blank");

      e.currentTarget.reset();
      setSelectedBrand("");
      setSelectedDevice("");
    } catch (error) {
      console.error(error);
      alert("Failed to prepare booking redirect");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name">
          <input
            id="name"
            required
            name="name"
            title="Please enter your full name"
            aria-label="Full Name"
            type="text"
            placeholder="Your Name"
            className="input"
          />
        </Field>

        <Field label="Phone Number" htmlFor="phone">
          <input
            id="phone"
            required
            name="phone"
            title="Please enter your phone number"
            aria-label="Phone Number"
            type="tel"
            placeholder="9876543210"
            className="input"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone Brand" htmlFor="brand">
          <select
            required
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value);
              setSelectedDevice("");
            }}
            className="input bg-white"
            title="Please select your phone brand"
            aria-label="Phone Brand"
          >
            <option value="">Select Brand</option>
            {brands.map((brand) => (
              <option key={brand.slug} value={brand.slug}>
                {brand.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Phone Model" htmlFor="model">
          <select
            required
            value={selectedDevice}
            disabled={!selectedBrand}
            onChange={(e) => setSelectedDevice(e.target.value)}
            title="Please select your device"
            aria-label="Phone Model"
            className="input bg-white"
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

      <Field label="Repair Needed" htmlFor="issue">
        <select
          id="issue"
          name="issue"
          required
          className="input bg-white"
          title="Please select the repair type"
          aria-label="Repair Needed"
        >
          <option value="">Select Repair Type</option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Other">Other / Not Sure</option>
        </select>
      </Field>

      <Field label="Area" htmlFor="area">
        <select
          id="area"
          name="area"
          required
          className="input bg-white"
          title="Please select your area"
          aria-label="Area"
        >
          <option value="">Select Area</option>
          {areas.map((area) => (
            <option key={area.slug} value={area.name}>
              {area.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Address" htmlFor="address">
        <textarea
          id="address"
          name="address"
          title="Please enter your address"
          aria-label="Address"
          required
          rows={3}
          placeholder="House number, street, landmark"
          className="input min-h-[100px]"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Preferred Date" htmlFor="date">
          <input
            id="date"
            type="date"
            name="date"
            title="Please select a date"
            aria-label="Preferred Date"
            required
            className="input"
          />
        </Field>

        <Field label="Preferred Time Slot" htmlFor="slot">
          <select
            id="slot"
            name="slot"
            title="Please select a time slot"
            aria-label="Preferred Time Slot"
            required
            className="input bg-white"
          >
            <option value="">Select Slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Additional Notes" htmlFor="notes">
        <textarea
          id="notes"
          name="notes"
          title="Please enter any additional notes"
          aria-label="Additional Notes"
          required
          rows={3}
          placeholder="Anything else we should know?"
          className="input min-h-[90px]"
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-yellow-400 px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white hover:shadow-xl disabled:opacity-50"
      >
        {loading ? "Redirecting..." : "Book Repair on WhatsApp"}
      </button>

      <p className="text-center text-xs text-gray-500">
        Your booking will open instantly in WhatsApp.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
