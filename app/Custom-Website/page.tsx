"use client";
import { Navbar } from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/Background";
import ModernFuturisticButton from "@/components/ui/Button-Modern-Animations";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <BackgroundGradientAnimation size="100%">
        <div className="relative w-full h-screen flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-orbitron font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-center mb-8">
            Coming Soon...
          </h1>
          <div className="w-full max-w-xl flex flex-col items-center gap-4 opacity-5 bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-8">
            <p className="text-center text-sm md:text-base lg:text-lg text-white/80">
              Sign Up Now to get a custom Website
            </p>
            <ModernFuturisticButton
              text="Sign Up"
              action={() => router.push("/SignUp")}
            />
            <p className="text-center text-sm md:text-base lg:text-lg text-white/80">
              Get Early Access, with phenomenal discounts!
            </p>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
};

export default Page;  