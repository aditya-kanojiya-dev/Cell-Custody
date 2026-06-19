import HowItWorks from "@/components/HowItWorks";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "How It Works — Cell Custody Nagpur",
  description: "Find out how doorstep mobile repair works in Nagpur. Get a technician at your address within hours.",
};

export default function HowItWorksPage() {
  return (
    <main className="bg-paper min-h-screen">
      {/* Reusable timeline section */}
      <HowItWorks />

      {/* Detailed Process Description */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="font-display text-3xl font-bold text-gray-900 text-center">
          Common Questions About Doorstep Repair
        </h2>
        
        <div className="mt-12 space-y-8">
          <FAQItem
            question="Do you repair the phone inside my house or in a vehicle?"
            answer="Our technician will perform the repair inside your house, office cubicle, or hostel common room. All they need is a flat table surface and a standard power outlet for their lighting/soldering tools. You can watch the entire process."
          />
          <FAQItem
            question="Is my personal data safe during the repair?"
            answer="Yes, 100%. Traditional service centers require you to leave your unlocked phone for days, exposing your photos, messages, and bank apps. With Cell Custody, the phone never leaves your sight, and you do not need to share your passcode."
          />
          <FAQItem
            question="What happens if the repair takes longer or doesn't work?"
            answer="Most screen and battery swaps take under 45 minutes. If a complex issue takes longer, there are no hourly surcharges. If we diagnose your device and realize it cannot be repaired on-site, the diagnosis is completely free."
          />
        </div>

        <div className="mt-16 rounded-[32px] bg-yellow-400 p-8 text-center text-black md:p-12">
          <h3 className="font-display text-2xl font-bold md:text-3xl">
            Ready to experience hassle-free mobile repair?
          </h3>
          <p className="mt-3 text-sm font-medium text-black/80 max-w-lg mx-auto">
            Book your repair slot today. Our technician will reach Sadar, Dharampeth, Sitabuldi, and other Nagpur zones rapidly.
          </p>
          <Link
            href="/book"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-slate-900"
          >
            Book Doorstep Repair
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 flex items-start gap-3">
        <CheckCircle2 size={20} className="text-yellow-500 mt-0.5 flex-shrink-0" />
        {question}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-500 pl-8">{answer}</p>
    </div>
  );
}
