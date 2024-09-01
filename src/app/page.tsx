import { Navbar } from "@/components/Navbar";
import Service from "@/components/Service";
import { HeroSection } from "@/components/Header";
import WhyUsSection from "@/components/why-us-section";
import { ProductivitySection } from "@/components/productivity-section";
import PricingSection from "@/components/pricing-section";



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
      </>
  );
}
