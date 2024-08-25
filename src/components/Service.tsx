"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const Service: React.FC = () => {
  const gridVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="px-6 py-12 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Web Components & Premium Templates */}
        <motion.div
          className={twMerge(
            "p-6 bg-gradient-to-r from-purple-800 to-indigo-800 rounded-xl shadow-lg hover:shadow-2xl",
            "hover:bg-gradient-to-r hover:from-indigo-800 hover:to-purple-800 transition-all duration-300"
          )}
          initial="hidden"
          animate="visible"
          variants={gridVariants}
        >
          <h3 className="text-2xl font-semibold mb-4">Web Components & Premium Templates</h3>
          <p className="text-gray-300">
            At Electroplix, we offer a diverse range of free web components and premium templates that empower businesses to create stunning and functional websites with ease. Our components are designed for seamless integration, ensuring that your website not only looks great but performs optimally across all devices.
          </p>
        </motion.div>

        {/* Custom Website Development */}
        <motion.div
          className={twMerge(
            "p-6 bg-gradient-to-r from-teal-800 to-cyan-800 rounded-xl shadow-lg hover:shadow-2xl",
            "hover:bg-gradient-to-r hover:from-cyan-800 hover:to-teal-800 transition-all duration-300"
          )}
          initial="hidden"
          animate="visible"
          variants={gridVariants}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Custom Website Development</h3>
          <p className="text-gray-300">
            Our team of expert developers crafts bespoke websites tailored to your unique business needs. Whether you're looking for a sleek portfolio site, a robust e-commerce platform, or an interactive web application, we build custom solutions that align with your brand’s vision and objectives.
          </p>
        </motion.div>

        {/* Marketing Services */}
        <motion.div
          className={twMerge(
            "p-6 bg-gradient-to-r from-red-800 to-pink-800 rounded-xl shadow-lg hover:shadow-2xl",
            "hover:bg-gradient-to-r hover:from-pink-800 hover:to-red-800 transition-all duration-300"
          )}
          initial="hidden"
          animate="visible"
          variants={gridVariants}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Marketing Services</h3>
          <ul className="text-gray-300 space-y-2">
            <li><strong>Search Engine Optimization (SEO):</strong> Enhance your website’s visibility and attract more organic traffic with our strategic SEO services. We employ the latest techniques to boost your search engine rankings and drive relevant traffic to your site.</li>
            <li><strong>Social Media Optimization (SMO):</strong> Elevate your brand’s presence on social media platforms with our tailored SMO strategies. We help you engage with your audience effectively and build a strong online community.</li>
            <li><strong>Social Media Marketing (SMM):</strong> Our targeted SMM campaigns are designed to amplify your reach and drive conversions. We create compelling content and manage your social media profiles to ensure your brand stands out in the digital landscape.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
