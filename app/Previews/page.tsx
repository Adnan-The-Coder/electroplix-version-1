"use client";
import { BackgroundGradientAnimation } from "@/components/ui/Background";

const Page = () => {
  return (
    <BackgroundGradientAnimation size="100%">
    <div className="relative w-full h-screen flex items-center justify-center">
          <h1 className="text-3xl md:text-3xl lg:text-7xl font-orbitron font-bold"> 
            Background Gradient Animation
          </h1>
    </div>
  </BackgroundGradientAnimation>
  )
}

export default Page
