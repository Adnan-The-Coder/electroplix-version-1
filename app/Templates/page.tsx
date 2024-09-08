"use client";
import { Navbar } from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/Background";

const Page = () => {
  return (
    <>
    <Navbar/>
    <BackgroundGradientAnimation size="100%">
    <div className="relative w-full h-screen flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-orbitron font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"> 
            Coming Soon...
          </h1>
    </div>
  </BackgroundGradientAnimation>
    </>
  )
}

export default Page;
