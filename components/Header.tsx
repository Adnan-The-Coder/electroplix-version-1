/* eslint-disable no-unused-vars */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import React from "react";
import { motion } from "framer-motion";

import { BackgroundGradientAnimation } from "./ui/Background";
import ModernFuturisticButton from "./ui/Button-Modern-Animations";

export function HeroSection() {
  const handleComponentClick = () =>{
    window.open('docs/components');
  };

  const handleCustomWebsiteClick = () =>{
    window.open('Custom-Website');
  };
  const handleBookMeetingClick = () =>{
    window.open('book-meeting');
  };

  return (
    <BackgroundGradientAnimation size="100%">
      <div className="relative flex h-screen w-full items-center justify-center bg-black bg-opacity-70">
        <div className="relative z-10 px-4 text-center">
          {/* Animated Title */}
          <motion.h1
            className="font-orbitron bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-4xl font-bold text-transparent drop-shadow-2xl md:text-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            We C.O.D.E !
          </motion.h1>
          {/* Subtitle */}
          <motion.h2
            className="font-orbitron mt-4 text-2xl font-semibold text-white md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Crafting Outstanding Digital Experiences.
          </motion.h2>
          {/* Short Description */}
          <motion.p
            className="font-orbitron mx-auto mt-4 max-w-2xl text-lg text-white md:text-xl lg:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            {/* Build Websites 10x Faster and Efficient */}
            Your vision, expertly crafted
          </motion.p>
          {/* Buttons */}
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex w-full max-w-full flex-col items-center justify-center gap-4 sm:flex-row">
              {/* <ModernFuturisticButton text="Browse Components" action={handleComponentClick} /> */}
              <ModernFuturisticButton text="Book a Meet" action={handleBookMeetingClick}/>
              <ModernFuturisticButton text="Custom Website request" action={handleCustomWebsiteClick}/>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
