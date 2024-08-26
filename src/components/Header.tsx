"use client";
import React, { useState } from "react";
import { BackgroundGradientAnimation } from "./ui/Background";
import { motion } from "framer-motion";
import ModernFuturisticButton from "./ui/Button-Modern-Animations";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-transparent">
      {/* Header Section */}
      <div className="flex w-full items-center justify-between">
        {/* Left side menu */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <span className="font-orbitron text-2xl md:text-3xl text-white">
              Electroplix
            </span>
          </Link>
          <span className="bg-gray-700 text-white text-xs font-semibold py-1 px-2 rounded-full">
            Beta
          </span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl md:text-3xl text-white focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Right side menu on desktop */}
        <div className="hidden md:flex flex-grow justify-end space-x-8 pr-8">
          <Link href="/Components">
            <span className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl">
              Components
            </span>
          </Link>
          <Link href="/Templates">
            <span className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl">
              Templates
            </span>
          </Link>
          <Link href="/Custom-Website">
            <span className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl">
              Custom Website
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile menu items */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-70 p-4 flex flex-col items-center">
          <Link href="/Components">
            <span className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl py-2">
              Components
            </span>
          </Link>
          <Link href="/Templates">
            <span className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl py-2">
              Templates
            </span>
          </Link>
          <Link href="/Custom-Website">
            <span className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl py-2">
              Custom Website
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export function HeroSection() {
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
              <ModernFuturisticButton text="Browse Components" />
              <ModernFuturisticButton text="Custom Website" />
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}


