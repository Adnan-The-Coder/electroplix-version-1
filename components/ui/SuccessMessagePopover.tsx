// components/ui/SuccessMessagePopover.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface SuccessMessagePopoverProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

const SuccessMessagePopover: React.FC<SuccessMessagePopoverProps> = ({ title, content, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Automatically close after 5 seconds

      return () => clearTimeout(timer); // Clean up timer on unmount
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        className="relative rounded-lg border-2 border-[#00d2ff] p-6 text-white"
        style={{
          background: 'linear-gradient(145deg, #00d2ff, #3a47d5)',
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
        <p>{content}</p>
        <button
          className="absolute right-2 top-2 border-none bg-transparent text-2xl font-bold hover:text-[#00d2ff]"
          onClick={onClose}
        >
          ×
        </button>
      </motion.div>
    </div>
  );
};

export default SuccessMessagePopover;
