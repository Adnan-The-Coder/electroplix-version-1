"use client";
import Link from "next/link";
import { useState } from "react";


export function Navbar() {
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