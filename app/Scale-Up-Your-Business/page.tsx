// scale-up-your-business/page.tsx
"use client";
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { FaRocket, FaChartLine, FaCogs, FaUsers } from 'react-icons/fa';
import { useState } from 'react';
import ContactModal from '@/components/ui/ContactModal';

const ScaleUpYourBusiness: NextPage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-4 bg-gray-900 text-white overflow-x-hidden">
        <motion.div
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.h1
              className="text-5xl font-bold mb-6 leading-tight"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              Scale Up Your Business with Electroplix
            </motion.h1>
            <motion.p
              className="text-lg mb-6 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover how Electroplix can help you scale your business to new heights with innovative strategies and cutting-edge technology.
            </motion.p>
          </div>

          {/* Core Benefits Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Accelerate Growth",
                description: "Harness our advanced tools and insights to drive rapid growth and take your business to the next level.",
                icon: FaRocket,
                color: "bg-blue-500",
              },
              {
                title: "Optimize Performance",
                description: "Utilize our performance optimization techniques to streamline operations and enhance efficiency.",
                icon: FaChartLine,
                color: "bg-green-500",
              },
              {
                title: "Custom Solutions",
                description: "Get tailored solutions that fit your unique business needs and challenges perfectly.",
                icon: FaCogs,
                color: "bg-purple-500",
              },
              {
                title: "Expert Support",
                description: "Our team of experts is always ready to assist you with strategic advice and hands-on support.",
                icon: FaUsers,
                color: "bg-pink-500",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-lg space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div
                  className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center shadow-md`}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-base">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Information Section */}
          <div className="bg-gray-800 rounded-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-6">How Electroplix Can Help</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                At Electroplix, we understand the complexities of scaling a business. Our comprehensive approach combines innovative technology with expert insights to drive sustainable growth. Whether you’re looking to enhance your digital presence, optimize operations, or expand your market reach, we have the solutions you need to achieve your goals.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-8">
              {/* Left Column */}
              <div className="md:w-1/2 mb-6 md:mb-0">
                <ul className="list-disc list-inside text-lg space-y-4">
                  <li className="flex items-center space-x-4">
                    <FaRocket className="text-blue-500 w-6 h-6" />
                    <span>Advanced analytics and reporting for data-driven decisions.</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaChartLine className="text-green-500 w-6 h-6" />
                    <span>Customized digital marketing strategies to reach your target audience.</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaCogs className="text-purple-500 w-6 h-6" />
                    <span>Efficient resource management tools to streamline operations.</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaUsers className="text-pink-500 w-6 h-6" />
                    <span>Expert guidance and support to navigate growth challenges.</span>
                  </li>
                </ul>
              </div>

              {/* Right Column */}
              <div className="md:w-1/2">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg p-6 text-center text-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">Unlock Your Business Potential</h3>
                  <p>
                    Partner with Electroplix to leverage cutting-edge solutions that drive growth and efficiency. Contact us today to learn how we can help you achieve your business goals.
                  </p>
                  <button
                    onClick={handleOpenModal}
                    className="mt-4 inline-block bg-white text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-200 transition"
                  >
                    Get Started
                  </button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Scale Up?</h2>
            <p className="text-lg mb-8">
              Contact us today to learn how Electroplix can help you scale your business effectively and sustainably.
            </p>
            <button
              onClick={handleOpenModal}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ScaleUpYourBusiness;
