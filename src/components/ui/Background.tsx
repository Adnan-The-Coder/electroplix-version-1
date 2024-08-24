"use client";
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const shapes = [
  { id: 1, className: 'shape1' },
  { id: 2, className: 'shape2' },
  { id: 3, className: 'shape3' },
];

const Background: React.FC = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(Math.random()); // To trigger a different animation on reload
  }, []);

  const lightningEffect = {
    initial: { opacity: 0, pathLength: 0 },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <motion.div
        key={key}
        className="absolute top-0 left-0 w-48 h-48 border-t border-l border-cyan-400"
        variants={lightningEffect}
        initial="initial"
        animate="animate"
      />

      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.className}`}
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
