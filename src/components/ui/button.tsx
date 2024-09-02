import React from 'react';
import { motion } from 'framer-motion';

interface SimpleCatchyButtonProps {
  text: string;
  variant?: 'default' | 'start' | 'neon'; // Added variant prop
  action?: () => void; // Added action prop
}

const SimpleCatchyButton: React.FC<SimpleCatchyButtonProps> = ({ text, variant = 'default', action }) => {
  // Define the default and variant styles
  const variants = {
    default: {
      button: 'w-full bg-gradient-to-r from-cyan-500 via-pink-400 to-purple-600 hover:from-gray-700 hover:to-cyan-700',
      hover: {
        scale: 1.05,
        boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
        transition: { type: "spring", stiffness: 400, damping: 10, duration: 0.3 }
      },
      tap: {
        scale: 0.95,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        transition: { type: "spring", stiffness: 300, damping: 10, duration: 0.2 }
      },
      span: 'absolute inset-0 bg-yellow-500 opacity-0'
    },
    start: {
      button: 'w-full bg-blue-500 hover:bg-blue-700', // Example colors
      hover: {
        scale: 1.05,
        boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
        transition: { type: "spring", stiffness: 400, damping: 10, duration: 0.3 }
      },
      tap: {
        scale: 0.95,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
        transition: { type: "spring", stiffness: 300, damping: 10, duration: 0.2 }
      },
      span: 'absolute inset-0 bg-red-500 opacity-0' // Different color for this variant
    },
    neon: {
      button: 'w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-yellow-500 hover:to-red-500',
      hover: {
        scale: 1.05,
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
        transition: { type: "spring", stiffness: 400, damping: 10, duration: 0.3 }
      },
      tap: {
        scale: 0.95,
        boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
        transition: { type: "spring", stiffness: 300, damping: 10, duration: 0.2 }
      },
      span: 'absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0'
    }
  };

  // Get the styles based on the variant prop
  const variantStyles = variants[variant];

  // Define the default click handler
  const handleClick = () => {
    if (action) {
      action();
    } else {
      alert('Button clicked');
    }
  };

  return (
    <motion.button
      className={`${variantStyles.button} text-white font-semibold py-3 rounded-lg shadow-md overflow-hidden relative`}
      whileHover={variantStyles.hover}
      whileTap={variantStyles.tap}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      onClick={handleClick}
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className={`${variantStyles.span} rounded-lg`}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      ></motion.span>
    </motion.button>
  );
};

export default SimpleCatchyButton;
