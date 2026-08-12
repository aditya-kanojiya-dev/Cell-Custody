"use client";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
};

export default function AddressField({
  label,
  name,
  placeholder = "Your Address",
  required,
  rows = 3,
}: Props) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">
        {label}
      </label>

      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
}
