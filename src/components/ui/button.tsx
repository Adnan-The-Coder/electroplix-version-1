import React from 'react';
import { motion } from 'framer-motion';

interface SimpleCatchyButtonProps {
  text: string;
}

const SimpleCatchyButton: React.FC<SimpleCatchyButtonProps> = ({ text }) => {
  return (
    <motion.button
      className="w-full bg-gradient-to-r from-cyan-500 via-pink-400 to-purple-600 hover:from-gray-700 hover:to-cyan-700 transition-all duration-200 text-white font-semibold py-3 rounded-lg shadow-md overflow-hidden relative"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
        transition: { type: "spring", stiffness: 400, damping: 10, duration: 0.3 }
      }}
      whileTap={{
        scale: 0.95,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        transition: { type: "spring", stiffness: 300, damping: 10, duration: 0.2 }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 bg-yellow-500 opacity-0 rounded-lg"
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      ></motion.span>
    </motion.button>
  );
};

export default SimpleCatchyButton;
