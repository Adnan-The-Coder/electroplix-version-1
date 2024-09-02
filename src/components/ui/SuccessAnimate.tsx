"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
// import '../../styles/SuccessAnimate.css'; 

const numRectangles = 20; // Number of rectangles to animate

// Define the animation variants with proper types
const rectangleVariants: Variants = {
  initial: (i: number) => ({
    opacity: 0,
    y: -1000,
    x: Math.random() * 1000 - 500, // Random horizontal start position
    rotateZ: Math.random() * 360, // Random rotation
    scale: Math.random() * 0.5 + 0.5, // Random scale
  }),
  animate: {
    opacity: 1,
    y: '100vh',
    rotateZ: 0,
    scale: 1,
    transition: {
      duration: 3,
      ease: 'easeOut',
    },
  },
};

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3F33F', '#FF33A1'];

const SuccessAnimate: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {Array.from({ length: numRectangles }).map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={rectangleVariants}
          initial="initial"
          animate="animate"
          className="absolute"
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: colors[i % colors.length],
            position: 'absolute',
            borderRadius: '10px',
            transformStyle: 'preserve-3d',
          }}
        />
      ))}
    </div>
  );
};

export default SuccessAnimate;
