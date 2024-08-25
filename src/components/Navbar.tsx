"use client";
import React, { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white bg-transparent p-4">
      {/* Header Section */}
      <div className="flex w-full items-center justify-between absolute top-4 px-4">
        {/* Left side menu */}
        <div>
          <Link href="/">
            <span className="font-orbitron text-2xl md:text-3xl">
              Electroplix
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl md:text-3xl focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Right side menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/Components">
            <span className="font-orbitron hover:text-purple-500 text-lg md:text-2xl">
              Components
            </span>
          </Link>
          <Link href="/Templates">
            <span className="font-orbitron hover:text-purple-500 text-lg md:text-2xl">
              Templates
            </span>
          </Link>
          <Link href="/Custom-Website">
            <span className="font-orbitron hover:text-purple-500 text-lg md:text-2xl">
              Custom Website
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile menu items */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-70 p-4 flex flex-col items-center">
          <Link href="/Components">
            <span className="font-orbitron hover:text-purple-500 text-lg md:text-2xl py-2">
              Components
            </span>
          </Link>
          <Link href="/Templates">
            <span className="font-orbitron hover:text-purple-500 text-lg md:text-2xl py-2">
              Templates
            </span>
          </Link>
          <Link href="/Custom-Website">
            <span className="font-orbitron hover:text-purple-500 text-lg md:text-2xl py-2">
              Custom Website
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
