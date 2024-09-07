"use client";
import React, { useState } from "react";
import { BackgroundGradientAnimation } from "./ui/Background";
import { motion } from "framer-motion";
import ModernFuturisticButton from "./ui/Button-Modern-Animations";
import { AnimatedText } from "./ui/AnimatedText";


export function HeroSection() {
  const handleComponentClick = () =>{
    window.open('docs/components');
  };

  const handleCustomWebsiteClick = () =>{
    window.open('docs/components');
  };

  return (
    <BackgroundGradientAnimation size="100%">
      <div className="relative w-full h-screen flex items-center justify-center bg-black bg-opacity-70">
        <div className="relative text-center z-10 px-4">
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
            className="text-lg text-white md:text-xl lg:text-2xl font-orbitron mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            Build Websites 10x Faster and Efficient
          </motion.p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-4 max-w-full w-full items-center justify-center">
              <ModernFuturisticButton text="Browse Components" action={handleComponentClick} />
              <ModernFuturisticButton text="Custom Website" action={handleCustomWebsiteClick}/>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}


