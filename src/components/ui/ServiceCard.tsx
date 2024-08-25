// Light mode Service Card

"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description }) => {
  // Animation variants
  const cardVariants = {
    initial: { 
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.1)"
    },
    hover: {
      scale: 1.05,
      rotateX: 10,
      rotateY: 10,
      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const borderVariants = {
    initial: { 
      background: "linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
      borderColor: "rgba(255, 255, 255, 0.1)"
    },
    hover: {
      background: "linear-gradient(45deg, rgba(0, 255, 255, 0.5), rgba(255, 0, 255, 0.5))",
      borderColor: "rgba(0, 255, 255, 1)",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="text-center p-6 bg-white shadow-lg rounded-lg border-2 border-transparent relative overflow-hidden"
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      style={{ perspective: "1200px" }} // Ensure the 3D effect is pronounced
    >
      <motion.div 
        className="absolute inset-0 border-4 border-transparent rounded-lg pointer-events-none"
        variants={borderVariants}
        style={{ zIndex: -1 }} // Position the border effect behind the card content
      />
      <div className="relative z-10"> {/* Ensure content is above the border effect */}
        <Icon className="mx-auto text-6xl text-gray-700 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
