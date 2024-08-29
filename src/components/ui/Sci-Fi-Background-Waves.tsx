// This code is slowing the website rendering and animation effects
"use client";
import { motion } from 'framer-motion';
import React from 'react';

const WaveMesh: React.FC = () => {
  const rows = 15;
  const cols = 30;
  const spacingX = 50;
  const spacingY = 40;

  // Function to create the grid of points and lines connecting them
  const createMesh = () => {
    const points = [];
    const lines = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = j * spacingX;
        const y = i * spacingY;

        // Adjust the translateY and translateZ values to create a 3D wave effect
        const translateY = 20 * Math.sin((j + (i * 0.5)) / 2);
        const translateZ = -j * 10 + i * 20;  // This creates a wave that moves forward into the screen

        // Create a point (circle)
        points.push(
          <motion.circle
            key={`point-${i}-${j}`}
            cx={x}
            cy={y}
            r="2"
            fill="#00FF00"
            initial={{ opacity: 0.7 }}
            animate={{
              translateY: translateY,
              translateZ: translateZ,
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );

        // Create a line to the next point in the row
        if (j < cols - 1) {
          lines.push(
            <motion.line
              key={`line-row-${i}-${j}`}
              x1={x}
              y1={y}
              x2={x + spacingX}
              y2={y}
              stroke="#00FF00"
              strokeWidth="1"
              initial={{ opacity: 0.5 }}
              animate={{
                translateY: translateY,
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          );
        }

        // Create a line to the next point in the column
        if (i < rows - 1) {
          lines.push(
            <motion.line
              key={`line-col-${i}-${j}`}
              x1={x}
              y1={y}
              x2={x}
              y2={y + spacingY}
              stroke="#00FF00"
              strokeWidth="1"
              initial={{ opacity: 0.5 }}
              animate={{
                translateY: translateY,
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          );
        }
      }
    }
    return { points, lines };
  };

  const { points, lines } = createMesh();

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <motion.svg
        className="absolute inset-0"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ perspective: '1000px' }} // Add perspective for 3D effect
      >
        <g>
          {lines}
          {points}
        </g>
      </motion.svg>
    </div>
  );
};

export default WaveMesh;
