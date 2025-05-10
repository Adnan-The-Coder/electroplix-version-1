"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

import {AnimatedText,letterVariants } from './ui/AnimatedText';  // Import the AnimatedText component

const footerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      {/* Animated Wave Background */}
      <motion.div
        className="absolute bottom-0 left-0 -z-10 h-40 w-full bg-gradient-to-r from-purple-600 to-blue-700"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
      />
      {/* Footer Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 py-12"
        variants={footerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          {/* Electroplix Branding */}
          <div className="w-full md:w-1/4">
            <h1 className="mb-4 text-3xl font-bold">
              <AnimatedText text="Electroplix" />
            </h1>
            <p className="text-lg"> 
              Innovating the future with cutting-edge digital solutions..
            </p>
          </div>
          {/* Services Section */}
          <div className="w-full md:w-1/4">
            <h2 className="mb-4 text-2xl font-semibold">
              <AnimatedText text="Services" />
            </h2>
            <ul className="space-y-2">
              <li><Link href="/Advertising-Services"><motion.span whileHover="hover" variants={letterVariants} className="inline-block transition-all hover:text-yellow-400">Advertising Services</motion.span></Link></li>
              <li><Link href="/Custom-Website"><motion.span whileHover="hover" variants={letterVariants} className="inline-block transition-all hover:text-yellow-400">Custom Websites</motion.span></Link></li>
              <li><Link href="/Templates"><motion.span whileHover="hover" variants={letterVariants} className="inline-block transition-all hover:text-yellow-400">Website Templates</motion.span></Link></li>
              <li><Link href="docs/components" target="_blanck"><motion.span whileHover="hover" variants={letterVariants} className="inline-block transition-all hover:text-yellow-400">Website Components</motion.span></Link></li>
              {/* <li><Link href="/saas"><motion.span whileHover="hover" variants={letterVariants} className="inline-block hover:text-yellow-400 transition-all">SaaS Service Models</motion.span></Link></li> */}
              <li><Link href="/Custom-Website"><motion.span whileHover="hover" variants={letterVariants} className="inline-block transition-all hover:text-yellow-400">Custom Components</motion.span></Link></li>
              <li><Link href="/Custom-Plan"><motion.span whileHover="hover" variants={letterVariants} className="inline-block transition-all hover:text-yellow-400">Custom Premium Plans</motion.span></Link></li>
            </ul>
          </div>
          {/* Company Section */}
          <div className="w-full md:w-1/4">
            <h2 className="mb-4 text-2xl font-semibold">
              <AnimatedText text="Company" />
            </h2>
            <ul className="space-y-2">
              <li><Link href="/About"><motion.span whileHover="hover" variants={letterVariants} className="inline-block transition-all hover:text-yellow-400">About</motion.span></Link></li>
              <li><Link href="/Terms-And-Conditions"><motion.span whileHover="hover" variants={letterVariants} className="inline-block transition-all hover:text-yellow-400">Terms and Conditions</motion.span></Link></li>
              <li><Link href="/Privacy-Policy"><motion.span whileHover="hover" variants={letterVariants} className="inline-block transition-all hover:text-yellow-400">Privacy Policy</motion.span></Link></li>
            </ul>
          </div>
          {/* Contact Section */}
          <div className="w-full md:w-1/4">
            <h2 className="mb-4 text-2xl font-semibold">
              <AnimatedText text="Contact" />
            </h2>
            <ul className="space-y-2">
              <li><a href="/contact-us" className="transition-all hover:text-yellow-400">Contact Us</a></li>
              <li><a href="mailto:official.electroplix@gmail.com" className="transition-all hover:text-yellow-400">Mail</a></li>
              <li><a href="https://x.com/Electroplix_" className="transition-all hover:text-yellow-400">Twitter</a></li>
              <li><a href="https://www.facebook.com/people/Electroplix/61565564645521/" className="transition-all hover:text-yellow-400">Facebook</a></li>
              <li><a href="https://instagram.com/electroplixofficial" className="transition-all hover:text-yellow-400">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/electroplix/" className="transition-all hover:text-yellow-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </motion.div>
      {/* Footer Bottom Section */}
      <div className="bg-gray-800 py-4 text-center text-sm text-gray-400">
        <p>Brought to you by <span className="font-semibold"><a href="https://www.linkedin.com/in/syedadnanali99/" target='_blanck'>Adnan</a></span></p>
        <p>&copy; {new Date().getFullYear()} Electroplix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;