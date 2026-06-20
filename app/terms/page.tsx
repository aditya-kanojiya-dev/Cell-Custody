export const metadata = {
  title: "Terms of Service — Cell Custody",
  description: "Terms of service for Cell Custody doorstep mobile repair.",
};

export default function TermsPage() {
  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400-text">
          Legal
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-slate">Last updated: June 2026</p>

        <div className="mt-4 rounded-md border border-yellow-400/30 bg-yellow-400/10 px-4 py-3 text-sm text-ink">
          This is a draft policy template and has not yet been reviewed by a
          lawyer. Please have it checked before relying on it for real
          customer agreements.
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate">
          <section>
            <h2 className="font-display text-lg font-bold text-ink">1. Service Overview</h2>
            <p className="mt-2">
              Cell Custody provides doorstep mobile phone repair services in
              Nagpur. A technician visits the address you provide at booking
              to diagnose and, where agreed, repair your device.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">2. Bookings</h2>
            <p className="mt-2">
              Bookings made through our website or WhatsApp are confirmed once
              we respond with a confirmed date, time window, and technician
              assignment. We reserve the right to reschedule a booking due to
              technician availability, weather, or circumstances beyond our
              control, and will inform you as soon as possible.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">3. Pricing and Quotes</h2>
            <p className="mt-2">
              Prices shown on our website are starting prices and may vary
              based on the exact device model, the extent of damage, and
              parts required. The technician will confirm a final price
              on-site before beginning any repair. No work is carried out
              without your approval of the quoted price.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">4. Parts and Repairs</h2>
            <p className="mt-2">
              We use parts that we consider suitable for the repair requested.
              Where original/OEM parts are not used, this will be disclosed
              to you before the repair begins. Devices with prior unauthorised
              repairs, missing parts, or extensive physical damage may affect
              repairability or warranty eligibility.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">5. Payment</h2>
            <p className="mt-2">
              Payment is collected after the repair is completed and approved
              by you, via UPI, card, or cash, unless otherwise agreed at
              booking.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">6. Cancellations</h2>
            <p className="mt-2">
              You may cancel or reschedule a booking any time before the
              technician is dispatched, free of charge. If a technician has
              already been dispatched to your address and the booking is
              cancelled on arrival, a callout charge may apply.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">7. Liability</h2>
            <p className="mt-2">
              While we take care in handling your device, doorstep repair of
              electronic devices carries inherent risk, particularly for
              devices with existing damage, water exposure, or prior repair
              attempts. Our liability for any device is limited to the value
              of the specific repair service booked, except where liability
              cannot be excluded under applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">8. Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
              <a href="mailto:book@cellcustody.in" className="font-semibold text-yellow-400-text">
                book@cellcustody.in
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
