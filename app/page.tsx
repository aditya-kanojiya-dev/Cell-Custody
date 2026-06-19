import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import BrandStrip from "@/components/BrandStrip";
import ServiceTicketList from "@/components/ServiceTicketList";
import WarrantyBanner from "@/components/WarrantyBanner";
import BeforeAfter from "@/components/BeforeAfter";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import EmergencyCTA from "@/components/EmergencyCTA";
import TrustStats from "@/components/StatsStrip";

export default function Home() {
  return (
    <main>
      <Hero />

      <StatsStrip />

      <BrandStrip />

      <ServiceTicketList />

      <WhyUs />

      <HowItWorks />

      <BeforeAfter />

      <WarrantyBanner />

      <Testimonials />

      <ServiceAreas />

      <FAQ />

    </main>
  );
}