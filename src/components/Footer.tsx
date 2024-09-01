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
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Wave Background */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-r from-purple-600 to-blue-700 -z-10"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
      />
      
      {/* Footer Content */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 relative z-10"
        variants={footerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Electroplix Branding */}
          <div className="w-full md:w-1/4">
            <h1 className="text-3xl font-bold mb-4">
              <AnimatedText text="Electroplix" />
            </h1>
            <p className="text-lg"> 
              Innovating the future with cutting-edge digital solutions.
            </p>
          </div>

          {/* Services Section */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">
              <AnimatedText text="Services" />
            </h2>
            <ul className="space-y-2">
              <li><Link href="/advertising"><motion.span whileHover="hover" variants={letterVariants} className="inline-block hover:text-yellow-400 transition-all">Advertising Services</motion.span></Link></li>
              <li><Link href="/custom-websites"><motion.span whileHover="hover" variants={letterVariants} className="inline-block hover:text-yellow-400 transition-all">Custom Websites</motion.span></Link></li>
              <li><Link href="/templates"><motion.span whileHover="hover" variants={letterVariants} className="inline-block hover:text-yellow-400 transition-all">Website Templates</motion.span></Link></li>
              <li><Link href="/components"><motion.span whileHover="hover" variants={letterVariants} className="inline-block hover:text-yellow-400 transition-all">Website Components</motion.span></Link></li>
              <li><Link href="/saas"><motion.span whileHover="hover" variants={letterVariants} className="inline-block hover:text-yellow-400 transition-all">SaaS Service Models</motion.span></Link></li>
              <li><Link href="/custom-components"><motion.span whileHover="hover" variants={letterVariants} className="inline-block hover:text-yellow-400 transition-all">Custom Components</motion.span></Link></li>
              <li><Link href="/premium-plans"><motion.span whileHover="hover" variants={letterVariants} className="inline-block hover:text-yellow-400 transition-all">Custom Premium Plans</motion.span></Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">
              <AnimatedText text="Company" />
            </h2>
            <ul className="space-y-2">
              <li><Link href="/about"><motion.span whileHover="hover" variants={letterVariants} className="inline-block hover:text-yellow-400 transition-all">About</motion.span></Link></li>
              <li><Link href="/terms"><motion.span whileHover="hover" variants={letterVariants} className="inline-block hover:text-yellow-400 transition-all">Terms and Conditions</motion.span></Link></li>
              <li><Link href="/privacy"><motion.span whileHover="hover" variants={letterVariants} className="inline-block hover:text-yellow-400 transition-all">Privacy Policy</motion.span></Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">
              <AnimatedText text="Contact" />
            </h2>
            <ul className="space-y-2">
              <li><a href="mailto:contact@electroplix.com" className="hover:text-yellow-400 transition-all">Mail</a></li>
              <li><a href="https://twitter.com/electroplix" className="hover:text-yellow-400 transition-all">Twitter</a></li>
              <li><a href="https://facebook.com/electroplix" className="hover:text-yellow-400 transition-all">Facebook</a></li>
              <li><a href="https://instagram.com/electroplix" className="hover:text-yellow-400 transition-all">Instagram</a></li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-800 py-4 text-center text-sm text-gray-400">
        <p>Brought to you by <span className="font-semibold">Adnan</span></p>
        <p>&copy; {new Date().getFullYear()} Electroplix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;