import { Navbar } from "@/components/Navbar";
import Service from "@/components/Service";
import { HeroSection } from "@/components/Header";
// import SciFiBackgroundWaves from "@/components/ui/Sci-Fi-Background-Waves";
import FuturisticWave from "@/components/ui/Sci-Fi-Background-Waves";



export default function Home() {
  return (
      <>
      <Navbar/>
      <HeroSection/>
      <Service/>
      <FuturisticWave/>
      </>
  );
}
