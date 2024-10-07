"use client";
import { motion } from 'framer-motion';
import { FaGlobe, FaCog, FaSearch, FaMobileAlt, FaUsers, FaBullhorn, FaServer, FaLaptopCode } from 'react-icons/fa';
import React from 'react';
import ServiceCard from './ui/Service-Card';

const Service: React.FC = () => {
  // Animation variants for the container and header
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
  };

  const headerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="container rounded-3xl mx-auto max-w-7xl px-4 py-12 bg-gray-900 text-white">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold">Our Services</h1>
        <h2 className="text-xl text-gray-300 mt-2">Web Components & Premium Templates</h2>
        <p className="text-gray-400 mt-4">
          At Electroplix, we offer a diverse range of free web components and premium templates that empower businesses to create stunning and functional websites with ease. Our components are designed for seamless integration, ensuring that your website not only looks great but performs optimally across all devices.
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 px-4 md:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <ServiceCard 
          Icon={FaLaptopCode} 
          title="Custom Website Development" 
          description="Our team of expert developers crafts bespoke websites tailored to your unique business needs. Whether you're looking for a sleek portfolio site, a robust e-commerce platform, or an interactive web application, we build custom solutions that align with your brand’s vision and objectives."
        />
        <ServiceCard 
          Icon={FaSearch} 
          title="Search Engine Optimization (SEO)" 
          description="Enhance your website’s visibility and attract more organic traffic with our strategic SEO services. We employ the latest techniques to boost your search engine rankings and drive relevant traffic to your site."
        />
        <ServiceCard 
          Icon={FaUsers} 
          title="Social Media Optimization (SMO)" 
          description="Elevate your brand’s presence on social media platforms with our tailored SMO strategies. We help you engage with your audience effectively and build a strong online community."
        />
        <ServiceCard 
          Icon={FaBullhorn} 
          title="Social Media Marketing (SMM)" 
          description="Our targeted SMM campaigns are designed to amplify your reach and drive conversions. We create compelling content and manage your social media profiles to ensure your brand stands out in the digital landscape."
        />
        <ServiceCard 
          Icon={FaMobileAlt} 
          title="Mobile Apps" 
          description="Develop mobile applications that provide a seamless experience on any device. Our apps are built to enhance user engagement and are optimized for both Android and iOS."
        />
        <ServiceCard 
          Icon={FaServer} 
          title="Hosting" 
          description="We offer reliable and secure hosting solutions to keep your website running smoothly. Our hosting services include regular backups, updates, and 24/7 support."
        />
        <ServiceCard 
          Icon={FaCog} 
          title="Web Design" 
          description="From conceptualization to execution, our web design services are focused on creating visually appealing and user-friendly interfaces that reflect your brand identity."
        />
        <ServiceCard 
          Icon={FaGlobe} 
          title="Visual Design" 
          description="We provide top-notch visual design services that align with your brand’s messaging and target audience, ensuring your website looks as good as it performs."
        />
      </motion.div>
    </div>
  );
};

export default Service;
