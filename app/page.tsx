import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import BrandStrip from "@/components/BrandStrip";
import ServiceTicketList from "@/components/ServiceTicketList";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfter from "@/components/BeforeAfter";
import WarrantyBanner from "@/components/WarrantyBanner";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";

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
