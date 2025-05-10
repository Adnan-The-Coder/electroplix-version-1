// scale-up-your-business/page.tsx
"use client";
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { FaRocket, FaChartLine, FaCogs, FaUsers } from 'react-icons/fa';
import { useState } from 'react';

import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
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
      <div className="min-h-screen overflow-x-hidden bg-gray-900 py-4 text-white">
        <motion.div
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header Section */}
          <div className="mb-12 text-center">
            <motion.h1
              className="mb-6 text-5xl font-bold leading-tight"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              Scale Up Your Business with Electroplix
            </motion.h1>
            <motion.p
              className="mx-auto mb-6 max-w-3xl text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover how Electroplix can help you scale your business to new heights with innovative strategies and cutting-edge technology.
            </motion.p>
          </div>
          {/* Core Benefits Section */}
          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                className="flex flex-col items-start space-y-4 rounded-lg bg-gray-800 p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div
                  className={`size-12 ${benefit.color} flex items-center justify-center rounded-xl shadow-md`}
                >
                  <benefit.icon className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold">{benefit.title}</h3>
                  <p className="text-base text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Detailed Information Section */}
          <div className="mb-12 rounded-lg bg-gray-800 p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-6 text-4xl font-bold">How Electroplix Can Help</h2>
              <p className="mx-auto mb-6 max-w-2xl text-lg">
                At Electroplix, we understand the complexities of scaling a business. Our comprehensive approach combines innovative technology with expert insights to drive sustainable growth. Whether you’re looking to enhance your digital presence, optimize operations, or expand your market reach, we have the solutions you need to achieve your goals.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8">
              {/* Left Column */}
              <div className="mb-6 md:mb-0 md:w-1/2">
                <ul className="list-inside list-disc space-y-4 text-lg">
                  <li className="flex items-center space-x-4">
                    <FaRocket className="size-6 text-blue-500" />
                    <span>Advanced analytics and reporting for data-driven decisions.</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaChartLine className="size-6 text-green-500" />
                    <span>Customized digital marketing strategies to reach your target audience.</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaCogs className="size-6 text-purple-500" />
                    <span>Efficient resource management tools to streamline operations.</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaUsers className="size-6 text-pink-500" />
                    <span>Expert guidance and support to navigate growth challenges.</span>
                  </li>
                </ul>
              </div>
              {/* Right Column */}
              <div className="md:w-1/2">
                <motion.div
                  className="rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 text-center text-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="mb-4 text-2xl font-semibold">Unlock Your Business Potential</h3>
                  <p>
                    Partner with Electroplix to leverage cutting-edge solutions that drive growth and efficiency. Contact us today to learn how we can help you achieve your business goals.
                  </p>
                  <button
                    onClick={handleOpenModal}
                    className="mt-4 inline-block rounded-lg bg-white px-4 py-2 text-gray-900 transition hover:bg-gray-200"
                  >
                    Get Started
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
          {/* Call to Action Section */}
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-semibold">Ready to Scale Up?</h2>
            <p className="mb-8 text-lg">
              Contact us today to learn how Electroplix can help you scale your business effectively and sustainably.
            </p>
            <button
              onClick={handleOpenModal}
              className="rounded-lg bg-blue-500 px-6 py-3 text-lg text-white transition hover:bg-blue-600"
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
