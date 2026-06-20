export const metadata = {
  title: "Privacy Policy — Cell Custody",
  description: "Privacy policy for Cell Custody doorstep mobile repair.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400-text">
          Legal
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate">Last updated: June 2026</p>

        <div className="mt-4 rounded-md border border-yellow-400/30 bg-yellow-400/10 px-4 py-3 text-sm text-ink">
          This is a draft policy template and has not yet been reviewed by a
          lawyer. Please have it checked, especially against applicable data
          protection law, before relying on it for real customer data.
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate">
          <section>
            <h2 className="font-display text-lg font-bold text-ink">1. What We Collect</h2>
            <p className="mt-2">
              When you book a repair, we collect your name, phone number,
              address, device brand and model, and details of the issue you
              describe. This information is sent to us via WhatsApp when you
              submit the booking form.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">2. How We Use It</h2>
            <p className="mt-2">
              We use this information to confirm your booking, assign and
              direct a technician to your address, carry out the repair,
              and follow up about the service. We do not sell your personal
              information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">3. WhatsApp</h2>
            <p className="mt-2">
              Our current booking flow opens WhatsApp with your details
              pre-filled in a message. This message is sent through
              WhatsApp&apos;s own service and is subject to WhatsApp&apos;s privacy
              policy in addition to ours.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">4. Data Retention</h2>
            <p className="mt-2">
              We retain booking and contact information for as long as
              reasonably necessary to provide the service, handle warranty
              claims, and meet our accounting and legal obligations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">5. Your Choices</h2>
            <p className="mt-2">
              You can ask us to update or delete the personal information we
              hold about you by contacting us at the details below, subject
              to any records we&apos;re legally required to keep.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">6. Contact</h2>
            <p className="mt-2">
              For privacy-related questions, contact{" "}
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
