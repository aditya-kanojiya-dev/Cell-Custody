export const metadata = {
  title: "Privacy Policy — Cell Custody Nagpur",
  description: "Privacy policy detailing how we protect customer information at Cell Custody Nagpur.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-paper min-h-screen pb-20">
      <section className="bg-white border-b border-gray-100 py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: June 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 prose prose-slate">
        <h2 className="text-xl font-bold text-gray-900 mt-6">1. Information We Collect</h2>
        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          We collect your name, phone number, physical address, and device model when you submit a doorstep booking request. 
          This information is strictly used to assign technicians and coordinate repairs in Nagpur.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-6">2. Data Storage & Security</h2>
        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          Your details are stored in a secured database. We do not sell, rent, or share your contact details or addresses with third-party advertisers. 
          Technicians are only given access to address details necessary to fulfill active bookings.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-6">3. Cookies</h2>
        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          We use functional cookies to manage secure login sessions for administrators. 
          These cookies do not track browsing behavior on external websites.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-6">4. Contact Rights</h2>
        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          You have the right to request deletion of your booking history and contact records from our active databases by emailing book@cellcustody.in.
        </p>
      </section>
    </main>
  );
}
