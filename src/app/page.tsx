import Hero from "@/components/home/Hero";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import AboutSnippet from "@/components/home/AboutSnippet";
import CtaSection from "@/components/home/CtaSection";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import IndustriesStrip from "@/components/home/IndustriesStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsShowcase />
      <AboutSnippet />
      <CtaSection />
      <Testimonials />
      <FaqSection />
      <IndustriesStrip />
    </>
  );
}
