import { Navbar } from "@/components/Navbar";
import Service from "@/components/Service";
import { HeroSection } from "@/components/Header";
import SciFiBackgroundWaves from "@/components/ui/Sci-Fi-Background-Waves";
// import FuturisticWavePattern from "@/components/ui/Future-Waves";
import FuturisticWave from "@/components/ui/Future-Waves";



export default function Home() {
  return (
      <>
      <Navbar/>
      <HeroSection/>
      <Service/>
      <SciFiBackgroundWaves/>
      {/* <FuturisticWavePattern/> */}
      <FuturisticWave/>
      </>
  );
}
