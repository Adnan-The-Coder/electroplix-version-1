"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { FaPaintBrush, FaCode, FaFileCode, FaRocket, FaCogs } from 'react-icons/fa';
import Cookies from "js-cookie";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const controls = useAnimation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Toggle main mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false); // Close Services dropdown when main menu toggles
  };

  // Toggle Services dropdown menu
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };


   // Check if the user is authenticated on component mount
   useEffect(() => {
    const authCookie = Cookies.get("auth");  // Get the 'auth' cookie
    if (authCookie === "true") {
      setIsAuthenticated(true);  // Set the authentication state
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Close Services dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      if (isScrolled) {
        setIsServicesOpen(false); // Auto close dropdown on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add animation when scrolled
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
          {/* Logo */}
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 relative">
            <button
              onClick={toggleServices}
              className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl"
            >
              Services
            </button>

            {/* Services Dropdown */}
            {isServicesOpen && (
              <div className="absolute top-12 left-0 w-64 bg-gray-700 rounded-lg p-2 shadow-lg">
                <Link href="/Advertising-Services" className="flex items-center text-white hover:text-purple-500 py-2">
                  <FaPaintBrush className="text-xl mr-2" /> Advertising Services
                </Link>
                <Link href="/Custom-Website" className="flex items-center text-white hover:text-purple-500 py-2">
                  <FaCode className="text-xl mr-2" /> Custom Websites
                </Link>
                <Link href="/Templates" className="flex items-center text-white hover:text-purple-500 py-2">
                  <FaFileCode className="text-xl mr-2" /> Templates
                </Link>
                <Link href="/Custom-Plan" className="flex items-center text-white hover:text-purple-500 py-2">
                  <FaRocket className="text-xl mr-2" /> Premium Plans
                </Link>
              </div>
            )}

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
              {/* <span className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl">
                Sign Up
              </span> */}
              {/* Conditionally render based on auth state */}
            {isAuthenticated ? (
              <Link href="/profile">
                <span className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl">
                  Profile
                </span>
              </Link>
            ) : (
              <Link href="/SignUp">
                <span className="font-orbitron text-white hover:text-purple-500 text-lg md:text-2xl">
                  Sign Up
                </span>
              </Link>
            )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-2xl md:text-3xl text-white focus:outline-none"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 bg-opacity-90 p-4 rounded-lg">
            <button
              onClick={toggleServices}
              className="text-white w-full text-left py-2"
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="bg-gray-700 rounded-lg p-2">
                <Link href="/Advertising-Services" className="block text-white py-1">
                  Advertising Services
                </Link>
                <Link href="/Custom-Website" className="block text-white py-1">
                  Custom Websites
                </Link>
                <Link href="/Templates" className="block text-white py-1">
                  Templates
                </Link>
                <Link href="/Custom-Plan" className="block text-white py-1">
                  Premium Plans
                </Link>
              </div>
            )}
            <Link href="/docs/components" className="block text-white py-2">
              Components
            </Link>
            <Link href="/About" className="block text-white py-2">
              About
            </Link>
            <Link href="/SignUp" className="block text-white py-2">
            {isAuthenticated ? (
              <Link href="/profile">
                  Profile
              </Link>
            ) : (
              <Link href="/SignUp">
                  Sign Up
              </Link>
            )}
            </Link>
          </div>
        )}
      </motion.div>
    </nav>
  );
}
