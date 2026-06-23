"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  services,
  areas,
  brands,
  phoneModels,
  contact,
} from "@/lib/data";

const timeSlots = [
  "10:00 AM – 12:00 PM",
  "12:00 PM – 2:00 PM",
  "2:00 PM – 4:00 PM",
  "4:00 PM – 6:00 PM",
  "6:00 PM – 8:00 PM",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

export default function BookingForm() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [customArea, setCustomArea] = useState("");
  const [devices, setDevices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedBrand) {
      const brandObj = brands.find(
        (b) =>
          b.slug === selectedBrand ||
          b.name === selectedBrand
      );

      if (brandObj) {
        setDevices(
          phoneModels[brandObj.name] || []
        );
      } else {
        setDevices([]);
      }
    } else {
      setDevices([]);
    }
  }, [selectedBrand]);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(
        e.currentTarget
      );

      const name =
        formData.get("name")?.toString() || "";

      const phone =
        formData.get("phone")?.toString() || "";

      const issue =
        formData.get("issue")?.toString() || "";

      const address =
        formData.get("address")?.toString() || "";

      const slot =
        formData.get("slot")?.toString() || "";

      const date =
        formData.get("date")?.toString() || "";

      const notes =
        formData.get("notes")?.toString() || "";

      const brandObj = brands.find(
        (b) =>
          b.slug === selectedBrand ||
          b.name === selectedBrand
      );

      const brandName =
        brandObj?.name || selectedBrand;

      const finalArea =
        selectedArea === "other"
          ? customArea
          : selectedArea;

      const message = `Hi Cell Custody,
I would like to book a doorstep mobile repair.

Name: ${name}
Phone: ${phone}
Device: ${brandName} ${selectedDevice}
Repair: ${issue}
Area: ${finalArea}
Address: ${address}
Preferred Date: ${date}
Preferred Slot: ${slot}
Notes: ${notes}`;

      window.open(
        `${contact.whatsappHref}?text=${encodeURIComponent(
          message
        )}`,
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
    <motion.form
      onSubmit={handleSubmit}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={container}
      className="space-y-5"
    >
      {/* Name + Phone */}
      <motion.div
        variants={reveal}
        className="grid gap-5 sm:grid-cols-2"
      >
        <Field label="Full Name">
          <input
            required
            name="name"
            placeholder="Your Name"
            className="input"
          />
        </Field>

        <Field label="Phone Number">
          <input
            required
            name="phone"
            placeholder="9876543210"
            className="input"
          />
        </Field>
      </motion.div>

      {/* Brand + Device */}
      <motion.div
        variants={reveal}
        className="grid gap-5 sm:grid-cols-2"
      >
        <Field label="Phone Brand">
          <select
            value={selectedBrand}
            required
            className="input bg-white"
            onChange={(e) => {
              setSelectedBrand(
                e.target.value
              );
              setSelectedDevice("");
            }}
          >
            <option value="">
              Select Brand
            </option>

            {brands.map((brand) => (
              <option
                key={brand.slug}
                value={brand.slug}
              >
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
            onChange={(e) =>
              setSelectedDevice(
                e.target.value
              )
            }
          >
            <option value="">
              Select Device
            </option>

            {devices.map((device) => (
              <option
                key={device}
                value={device}
              >
                {device}
              </option>
            ))}
          </select>
        </Field>
      </motion.div>

      {/* Repair */}
      <motion.div variants={reveal}>
        <Field label="Repair Needed">
          <select
            required
            name="issue"
            className="input bg-white"
          >
            <option value="">
              Select Repair
            </option>

            {services.map((s) => (
              <option
                key={s.slug}
                value={s.name}
              >
                {s.name}
              </option>
            ))}

            <option value="Other / Not Sure">
              Other / Not Sure
            </option>
          </select>
        </Field>
      </motion.div>

      {/* Area */}
      <motion.div variants={reveal}>
        <Field label="Area">
          <select
            required
            value={selectedArea}
            className="input bg-white"
            onChange={(e) => {
              setSelectedArea(
                e.target.value
              );

              if (
                e.target.value !== "other"
              ) {
                setCustomArea("");
              }
            }}
          >
            <option value="">
              Select Area
            </option>

            {areas.map((a) => (
              <option
                key={a.slug}
                value={a.name}
              >
                {a.name}
              </option>
            ))}

            <option value="other">
              Other (Enter manually)
            </option>
          </select>
        </Field>
      </motion.div>

      {/* Custom Area */}
      {selectedArea === "other" && (
        <motion.div variants={reveal}>
          <Field label="Enter Your Area">
            <input
              type="text"
              value={customArea}
              onChange={(e) =>
                setCustomArea(
                  e.target.value
                )
              }
              placeholder="Enter your area"
              className="input"
              required
            />
          </Field>
        </motion.div>
      )}

      {/* Address */}
      <motion.div variants={reveal}>
        <Field label="Address">
          <textarea
            rows={3}
            required
            name="address"
            placeholder="Your Address"
            className="input min-h-[100px]"
          />
        </Field>
      </motion.div>

      {/* Date + Slot */}
      <motion.div
        variants={reveal}
        className="grid gap-5 sm:grid-cols-2"
      >
        <Field label="Preferred Date">
          <input
            type="date"
            required
            name="date"
            className="input"
          />
        </Field>

        <Field label="Preferred Time Slot">
          <select
            required
            name="slot"
            className="input bg-white"
          >
            <option value="">
              Select Slot
            </option>

            {timeSlots.map((slot) => (
              <option key={slot}>
                {slot}
              </option>
            ))}
          </select>
        </Field>
      </motion.div>

      {/* Notes */}
      <motion.div variants={reveal}>
        <Field label="Additional Notes">
          <textarea
            rows={3}
            required
            name="notes"
            placeholder="Any additional information or requests"
            className="input min-h-[90px]"
          />
        </Field>
      </motion.div>

      {/* Submit */}
      <motion.div variants={reveal}>
        <button
          disabled={loading}
          className="w-full rounded-xl bg-yellow-400 px-6 py-4 font-semibold text-black transition hover:bg-black hover:text-white disabled:opacity-50"
        >
          {loading
            ? "Redirecting..."
            : "Book Repair on WhatsApp"}
        </button>

        <p className="mt-3 text-center text-xs text-gray-500">
          Your booking will open instantly in WhatsApp.
        </p>
      </motion.div>
    </motion.form>
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
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">
        {label}
      </label>

      {children}
    </div>
  );
}