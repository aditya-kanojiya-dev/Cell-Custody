export const metadata = {
  title: "Terms of Service — Cell Custody Nagpur",
  description: "Terms and conditions for doorstep mobile repair services by Cell Custody Nagpur.",
};

export default function TermsPage() {
  return (
    <main className="bg-paper min-h-screen pb-20">
      <section className="bg-white border-b border-gray-100 py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: June 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 prose prose-slate">
        <h2 className="text-xl font-bold text-gray-900 mt-6">1. Service Authorization</h2>
        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          By booking a doorstep repair with Cell Custody, you authorize our technician to perform diagnostic tests and repair services on your mobile device. 
          You acknowledge that some mobile repairs can void manufacturer warranties.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-6">2. Data Loss Liability</h2>
        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          While doorstep repair keeps your device in sight and reduces data security risks, hardware repairs carry an inherent risk of data loss. 
          You are strongly advised to back up your personal files, photos, and messages before the technician arrives. 
          Cell Custody is not liable for data loss during repairs.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-6">3. Payment Terms</h2>
        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          Payment is due immediately upon successful completion of the repair. We accept UPI transfers, credit/debit cards, and cash. 
          If a technician arrives, diagnoses the device, and determines the device cannot be fixed due to severe structural damage (motherboard defect, etc.), 
          no service fee is charged.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-6">4. Contact Information</h2>
        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          For any questions about service bookings, payments, or agreements, contact us at book@cellcustody.in.
        </p>
      </section>
    </main>
  );
}
