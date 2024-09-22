"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { FaPaintBrush, FaCode, FaFileCode, FaRocket, FaCogs } from 'react-icons/fa';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const controls = useAnimation();

  // Toggle menu for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      if (isScrolled) {
        setIsServicesOpen(false); // Close services menu on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply animation when scrolled
  useEffect(() => {
    controls.start({
      opacity: scrolled ? 1 : 0.9,
      scale: scrolled ? 1 : 0.95,
      transition: { duration: 0.5 },
    });
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
          borderRadius: '12px',
          padding: '0.5rem',
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

          {/* Right side menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl"
            >
              Services
            </button>
            <Link href="/docs/components" target="_blanck">
              <span className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl">
                Components
              </span>
            </Link>
            <Link href="/About">
              <span className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl">
                About
              </span>
            </Link>
            <Link href="/SignUp">
              <span className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl">
                Sign Up
              </span>
            </Link>
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
        </div>

        {/* Dropdown menu for desktop */}
        {isServicesOpen && (
          <div className="hidden md:block absolute top-16 right-0 mt-2 w-64 bg-gray-800 bg-opacity-90 p-4 rounded-lg shadow-lg grid grid-cols-2 gap-2">
            {/* Close button */}
            <button
              onClick={() => setIsServicesOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl focus:outline-none"
            >
              ✕
            </button>

            <Link href="/Advertising-Services" className="flex items-center text-white hover:text-purple-500 py-2">
              <FaPaintBrush className="text-2xl mr-2" />
              <span>Advertising Services</span>
            </Link>
            <Link href="/Custom-Website" className="flex items-center text-white hover:text-purple-500 py-2">
              <FaCode className="text-2xl mr-2" />
              <span>Custom Websites</span>
            </Link>
            <Link href="/Templates" className="flex items-center text-white hover:text-purple-500 py-2">
              <FaFileCode className="text-2xl mr-2" />
              <span>Website Templates</span>
            </Link>
            <Link href="/docs/components" target="_blanck" className="flex items-center text-white hover:text-purple-500 py-2">
              <FaRocket className="text-2xl mr-2" />
              <span>Website Components</span>
            </Link>
            <Link href="/Custom-Website" className="flex items-center text-white hover:text-purple-500 py-2">
              <FaCogs className="text-2xl mr-2" />
              <span>Custom Components</span>
            </Link>
            <Link href="/Custom-Plan" className="flex items-center text-white hover:text-purple-500 py-2">
              <FaRocket className="text-2xl mr-2" />
              <span>Custom Premium Plans</span>
            </Link>
          </div>
        )}

        {/* Mobile menu items */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-gray-800 bg-opacity-90 p-4 flex flex-col items-center rounded-lg">
            <div className="flex flex-col w-full items-start">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-white w-full text-left py-2"
              >
                Services
              </button>
              {isServicesOpen && (
                <div className="w-full bg-gray-700 rounded-lg p-2">
                  <Link href="/Advertising-Services" className="flex items-center text-white hover:text-purple-500 py-2">
                    Advertising Services
                  </Link>
                  <Link href="/Custom-Website" className="flex items-center text-white hover:text-purple-500 py-2">
                    Custom Websites
                  </Link>
                  <Link href="/Templates" className="flex items-center text-white hover:text-purple-500 py-2">
                    Website Templates
                  </Link>
                  <Link href="/docs/components" target="_blanck" className="flex items-center text-white hover:text-purple-500 py-2">
                    Website Components
                  </Link>
                  <Link href="/Custom-Website" className="flex items-center text-white hover:text-purple-500 py-2">
                    Custom Components
                  </Link>
                  <Link href="/Custom-Plan" className="flex items-center text-white hover:text-purple-500 py-2">
                    Custom Premium Plans
                  </Link>
                </div>
              )}
              <Link href="/docs/components" target="_blanck">
                <span className="font-orbitron text-white hover:text-purple-500 text-lg py-2">
                  Components
                </span>
              </Link>
              <Link href="/About">
                <span className="font-orbitron text-white hover:text-purple-500 text-lg py-2">
                  About
                </span>
              </Link>
              <Link href="/SignUp">
                <span className="font-orbitron text-white hover:text-purple-500 text-lg py-2">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
}
