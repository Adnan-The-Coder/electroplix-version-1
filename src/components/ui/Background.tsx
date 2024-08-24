"use client";
import { motion } from 'framer-motion';
import React from 'react';

const shapes = [
  { id: 1, className: 'shape1', position: { top: '10%', left: '15%' } },
  { id: 2, className: 'shape2', position: { top: '40%', left: '25%' } },
  { id: 3, className: 'shape3', position: { top: '70%', left: '50%' } },
];

const Background: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.className}`}
          style={{
            top: shape.position.top,
            left: shape.position.left,
            transform: 'translate(-50%, -50%)', // Center the shape at its position
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.2, rotate: 45 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          whileHover={{
            scale: 1.3,
            borderColor: 'rgba(0, 255, 255, 0.8)',
            boxShadow: '0px 0px 15px 5px rgba(0, 255, 255, 0.8)',
            transition: { duration: 0.5 },
          }}
        />
      ))}
    </div>
  );
};

export default Background;
