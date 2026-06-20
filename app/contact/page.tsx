import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { contact } from "@/lib/data";

export const metadata = {
  title: "Contact — Cell Custody",
  description: "Get in touch with Cell Custody for doorstep mobile repair in Nagpur.",
};

  export default function ContactPage() {
  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400-text">
          Contact
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Talk to us
        </h1>
        <p className="mt-3 text-sm text-slate md:text-base">
          Questions before booking? Reach out directly — we usually reply
          within minutes during service hours.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <a
            href={contact.phoneHref}
            className="flex items-start gap-3 rounded-lg border border-line p-5 transition hover:border-yellow-400-text"
          >
            <Phone size={20} className="mt-0.5 text-yellow-400-text" />
            <div>
              <p className="font-display text-sm font-bold text-ink">Call</p>
              <p className="mt-1 text-sm text-slate">{contact.phoneDisplay}</p>
            </div>
          </a>

          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-lg border border-line p-5 transition hover:border-yellow-400-text"
          >
            <MessageCircle size={20} className="mt-0.5 text-green" />
            <div>
              <p className="font-display text-sm font-bold text-ink">
                WhatsApp
              </p>
              <p className="mt-1 text-sm text-slate">Chat with us directly</p>
            </div>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="flex items-start gap-3 rounded-lg border border-line p-5 transition hover:border-yellow-400-text"
          >
            <Mail size={20} className="mt-0.5 text-yellow-400-text" />
            <div>
              <p className="font-display text-sm font-bold text-ink">Email</p>
              <p className="mt-1 text-sm text-slate">{contact.email}</p>
            </div>
          </a>

          <div className="flex items-start gap-3 rounded-lg border border-line p-5">
            <MapPin size={20} className="mt-0.5 text-yellow-400-text" />
            <div>
              <p className="font-display text-sm font-bold text-ink">
                Service Area
              </p>
              <p className="mt-1 text-sm text-slate">{contact.addressLine}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
