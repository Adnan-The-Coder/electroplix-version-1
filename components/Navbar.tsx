/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import `useRouter` for programmatic navigation
import { motion, useAnimation } from "framer-motion";
import { FaPaintBrush, FaCode, FaFileCode, FaRocket } from 'react-icons/fa';
import { useUser, SignInButton, UserButton } from '@clerk/nextjs';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const controls = useAnimation();
  const router = useRouter(); // Initialize the useRouter hook for navigation

  // eslint-disable-next-line no-unused-vars
  const { user, isSignedIn } = useUser(); // Use Clerk's `useUser` hook

  // Toggle main mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false); // Close Services dropdown when main menu toggles
  };

  // Toggle Services dropdown menu
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

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

  // Handle sign-in button click (redirect to sign-in page)
  const handleSignInClick = () => {
    router.push("/sign-in"); // Redirect to sign-in page
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 p-4">
      <motion.div
        animate={controls}
        className={`flex items-center justify-between ${
          scrolled ? 'max-w-4xl' : 'w-full'
        } ${
          scrolled ? 'border-neon text-neon border-2 bg-black bg-opacity-70' : 'bg-transparent'
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
            <span className="rounded-full bg-gray-700 px-2 py-1 text-xs font-semibold text-white">
              Beta Version-2
            </span>
          </div>
          {/* Desktop Menu */}
          <div className="relative hidden items-center space-x-4 md:flex">
            <button
              onClick={toggleServices}
              className="font-orbitron text-lg text-white hover:text-purple-500 md:text-2xl"
            >
              Services
            </button>
            {/* Services Dropdown */}
            {isServicesOpen && (
              <div className="absolute left-0 top-12 w-64 rounded-lg bg-gray-700 p-2 shadow-lg">
                <Link href="/Advertising-Services" className="flex items-center py-2 text-white hover:text-purple-500">
                  <FaPaintBrush className="mr-2 text-xl" /> Advertising Services
                </Link>
                <Link href="/Custom-Website" className="flex items-center py-2 text-white hover:text-purple-500">
                  <FaCode className="mr-2 text-xl" /> Custom Websites
                </Link>
                <Link href="/Templates" className="flex items-center py-2 text-white hover:text-purple-500">
                  <FaFileCode className="mr-2 text-xl" /> Templates
                </Link>
                <Link href="/Custom-Plan" className="flex items-center py-2 text-white hover:text-purple-500">
                  <FaRocket className="mr-2 text-xl" /> Premium Plans
                </Link>
              </div>
            )}
            <Link href="/docs/components" target="_blank">
              <span className="font-orbitron text-lg text-white hover:text-purple-500 md:text-2xl">
                Components
              </span>
            </Link>
            <Link href="/About">
              <span className="font-orbitron text-lg text-white hover:text-purple-500 md:text-2xl">
                About
              </span>
            </Link>
            {/* SignIn or User Button */}
            <Link href={isSignedIn ? '#' : "/sign-in"} onClick={isSignedIn ? undefined : handleSignInClick}>
              <span className="font-orbitron pt-4 text-lg text-white hover:text-purple-500 md:text-3xl">
                {isSignedIn ? (
                  <UserButton />
                ) : (
                  <SignInButton />
                )}
              </span> 
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl text-white focus:outline-none md:text-3xl"
            >
              <div className=" flex gap-4 pt-2">
                {isMenuOpen ? '✕' : '☰'}
                {isSignedIn ? <UserButton/>: null}
              </div>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 top-16 w-full rounded-lg bg-gray-800 bg-opacity-90 p-4 md:hidden">
            <button
              onClick={toggleServices}
              className="w-full py-2 text-left text-white"
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="rounded-lg bg-gray-700 p-2">
                <Link href="/Advertising-Services" className="block py-1 text-white">
                  Advertising Services
                </Link>
                <Link href="/Custom-Website" className="block py-1 text-white">
                  Custom Websites
                </Link>
                <Link href="/Templates" className="block py-1 text-white">
                  Templates
                </Link>
                <Link href="/Custom-Plan" className="block py-1 text-white">
                  Premium Plans
                </Link>
              </div>
            )}
            <Link href="/docs/components" className="block py-2 text-white">
              Components
            </Link>
            <Link href="/About" className="block py-2 text-white">
              About
            </Link>
            {/* SignIn or User Button */}
            <Link href={isSignedIn ? '#' : "/sign-in"} onClick={isSignedIn ? undefined : handleSignInClick}>
              <span className="font-orbitron pt-4 text-lg text-white hover:text-purple-500 md:text-3xl">
                {isSignedIn ? (
                  null
                ) : (
                  <SignInButton />
                )}
              </span> 
            </Link>
          </div>
        )}
      </motion.div>
    </nav>
  );
}
