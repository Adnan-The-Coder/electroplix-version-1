"use client";
import { Navbar } from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/Background";

const Page = () => {
  return (
    <>
    <Navbar/>
    <BackgroundGradientAnimation size="100%">
    <div className="relative w-full h-screen flex items-center justify-center">
          <h1 className="text-3xl md:text-3xl lg:text-7xl font-orbitron font-bold"> 
            Background Gradient Animation
          </h1>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>End</h2>
  </BackgroundGradientAnimation>
    </>
  )
}

export default Page
