import { Navbar } from "@/components/Navbar";
import Service from "@/components/Service";
import { HeroSection } from "@/components/Header";
import WhyUsSection from "@/components/why-us-section";
import { ProductivitySection } from "@/components/productivity-section";
import PricingSection from "@/components/pricing-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/Footer";



export default function Home() {
  return (
      <>
      <Navbar/>
      <HeroSection/>
      <br />
      <ProductivitySection/>
      <Service/>
      <br />
      <WhyUsSection/>
      <PricingSection/>
      <CTASection/>
      <Footer/>
      </>
  );
}
