// about/page.tsx
"use client";

import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { useState } from 'react';

const About: NextPage = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen py-4 bg-gray-900 text-white flex flex-col items-center">
      <motion.div
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
            About Electroplix
          </motion.h1>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Electroplix is at the forefront of innovative technology solutions, providing cutting-edge services and products designed to enhance your digital experience. Our mission is to fuse futuristic technology with modern design to create impactful, user-centric solutions.
          </motion.p>
        </div>

        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          >
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-md leading-relaxed">
            At Electroplix, we envision a world where technology and design intersect seamlessly to create extraordinary experiences. We strive to push the boundaries of what’s possible and deliver solutions that are not only functional but also inspiring.
          </p>
        </motion.div>


        <motion.div
          className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          >
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-md leading-relaxed">
            We are committed to delivering high-quality solutions that not only meet but exceed our clients' expectations. Our focus on innovation and user-centric design ensures that we remain at the cutting edge of technology and continue to set new standards in our field.
          </p>
        </motion.div>
      </motion.div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
