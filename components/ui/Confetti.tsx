// Confetti.tsx
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const confettiColors = [
  'bg-red-500',
  'bg-blue-500',
  'bg-yellow-500',
  'bg-green-500',
  'bg-purple-500',
];

const ConfettiPiece = ({ style, initial }: { style: React.CSSProperties, initial: boolean }) => (
  <motion.div
    className={`w-4 h-4 absolute rounded-full ${confettiColors[Math.floor(Math.random() * confettiColors.length)]}`}
    style={style}
    initial={{ opacity: 1, z: 0 }}
    animate={{
      y: initial ? [0, 200] : [0],
      x: initial ? [0, Math.random() * 300 - 150] : [0],
      z: initial ? [0, Math.random() * 100 - 50] : [0], // 3D depth effect
      opacity: [1, 0],
    }}
    transition={{
      duration: 2.5,
      ease: 'easeOut',
      delay: Math.random() * 0.5, // Random delay for explosion effect
    }}
  />
);

const Confetti = () => {
  const [initial, setInitial] = useState(false);

  useEffect(() => {
    // Trigger the animation once when the component is mounted
    setInitial(true);
  }, []);

  const confettiPieces = Array.from({ length: 30 }).map((_, index) => {
    const left = Math.random() * 100 + '%';
    const top = Math.random() * 100 + '%';
    const rotate = Math.random() * 360 + 'deg';
    const scale = Math.random() * 0.5 + 0.5;

    return {
      key: index,
      style: {
        left,
        top,
        transform: `rotate(${rotate}) scale(${scale})`,
        width: '10px',
        height: '10px',
      } as React.CSSProperties,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-1000">
      {confettiPieces.map(({ key, style }) => (
        <ConfettiPiece key={key} style={style} initial={initial} />
      ))}
    </div>
  );
};

export default Confetti;
