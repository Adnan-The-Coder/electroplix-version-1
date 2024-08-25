"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ModernFuturisticButtonProps {
  text: string;
}

const ModernFuturisticButton: React.FC<ModernFuturisticButtonProps> = ({ text }) => {
  return (
    <motion.button
      className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg overflow-hidden"
      whileHover={{
        scale: 1.1,
        rotate: 5,
        background: "linear-gradient(to right, #00bfff, #ff00ff)",
        boxShadow: "0px 20px 50px rgba(0, 255, 255, 0.6), 0px 20px 30px rgba(255, 0, 255, 0.6)",
      }}
      whileTap={{ scale: 0.95, rotate: 0, boxShadow: "none" }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <span className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-200 ease-out"></span>
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.span>
    </motion.button>
  );
};

export default ModernFuturisticButton;
