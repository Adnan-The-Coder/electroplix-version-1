"use client";
import React from "react";
import { motion } from "framer-motion";
import ModernFuturisticButton from "./ui/Button-Modern-Animations";
import { BackgroundGradientAnimation } from "./ui/Background";

export function Hero() {
  return (
    <BackgroundGradientAnimation size="100%">
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center text-center mt-16 px-4">

        {/* Animated Title */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-orbitron font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          >
          We C.O.D.E !
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-2xl text-white md:text-3xl lg:text-4xl font-orbitron font-semibold mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
          Crafting Outstanding Digital Experiences
        </motion.h2>

        {/* Short Description */}
        <motion.p
          className="text-lg text-white md:text-xl lg:text-2xl font-orbitron mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
          Build Websites 10x Faster and Efficient
        </motion.p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <ModernFuturisticButton text="Browse Components"/>
          <ModernFuturisticButton text="Custom Website"/>
        </div>
      </div>
            </div>
    </BackgroundGradientAnimation>
  );
}
