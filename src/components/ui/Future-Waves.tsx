"use client"
import React from 'react';
import { motion } from 'framer-motion';

const FuturisticWavePattern: React.FC = () => {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Animated Wave Background */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00FF00" />
              <stop offset="100%" stopColor="#00FF88" />
            </linearGradient>
          </defs>
          <path
            fill="url(#wave-gradient)"
            d="M0,400 Q200,200 400,400 T800,400 T1200,400 V800 H0 Z"
          >
            <animate
              attributeName="d"
              values="
                M0,400 Q200,200 400,400 T800,400 T1200,400 V800 H0 Z;
                M0,400 Q200,300 400,400 T800,500 T1200,400 V800 H0 Z;
                M0,400 Q200,200 400,400 T800,400 T1200,400 V800 H0 Z"
              dur="4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
            />
          </path>
        </svg>
      </motion.div>

      {/* Central Circular Pattern */}
    </div>
  );
};

export default FuturisticWavePattern;
