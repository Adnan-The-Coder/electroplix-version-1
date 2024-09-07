"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  // Toggle menu for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust this value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply animation when scrolled
  useEffect(() => {
    if (scrolled) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({
        opacity: 0.9,
        scale: 0.95,
        transition: { duration: 0.5 },
      });
    }
  }, [scrolled, controls]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <motion.div
        animate={controls}
        className={`flex items-center justify-between ${
          scrolled ? 'max-w-4xl' : 'w-full'
        } ${
          scrolled ? 'bg-black bg-opacity-70 border-2 border-neon text-neon' : 'bg-transparent'
        } mx-auto transition-all duration-500 ease-in-out`}
        style={{
          borderColor: scrolled ? '#0ff' : 'transparent',
          color: scrolled ? '#0ff' : 'white',
          boxShadow: scrolled ? '0 0 10px #0ff' : 'none',
          borderRadius: '12px', // Adjust this value for the desired border radius
          padding: '0.5rem', // Adjust padding to match the border radius
        }}
      >
        {/* Header Section */}
        <div className="flex w-full items-center justify-between">
          {/* Left side menu */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <span className="font-orbitron text-2xl md:text-3xl">
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
          <div className="md:hidden absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-black bg-opacity-70 p-4 flex flex-col items-center rounded-lg">
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
      </motion.div>
    </nav>
  );
}
