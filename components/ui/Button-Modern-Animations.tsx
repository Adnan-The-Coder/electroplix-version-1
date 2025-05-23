"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ModernFuturisticButtonProps {
  text: string;
  action?: () => void; // Added action prop
}

const ModernFuturisticButton: React.FC<ModernFuturisticButtonProps> = ({ text, action }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  // Define the default click handler
  const handleClick = () => {
    if (animationComplete) {
      if (action) {
        action();
      } else {
        console.log("Button Clicked");
      }
    }
  };

  return (
    <motion.button
      className="relative overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-8 py-4 font-semibold text-white shadow-lg"
      whileHover={{
        scale: 1.1,
        rotate: 5,
        background: "linear-gradient(to right, #00bfff, #ff00ff)",
        boxShadow: "0px 20px 50px rgba(0, 255, 255, 0.6), 0px 20px 30px rgba(255, 0, 255, 0.6)",
      }}
      whileTap={{ scale: 0.95, rotate: 0, boxShadow: "none" }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      onClick={handleClick}
      onAnimationComplete={() => setAnimationComplete(true)} // Set animationComplete to true when animation finishes
    >
      <span className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-200 ease-out"></span>
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
