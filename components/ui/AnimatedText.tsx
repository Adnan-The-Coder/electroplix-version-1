// AnimatedText.tsx
"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

// Define the variants for letter animations
const letterVariants: Variants = {
  initial: { y: 0 },
  hover: { 
    y: [0, -10, 0], // Move up and down
    transition: { 
      duration: 0.5, 
      repeat: Infinity, 
      repeatType: 'reverse' 
    }
  }
};

// Split text into individual characters for animation
const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="initial"
          whileHover="hover"
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export { AnimatedText, letterVariants };
