/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

type ServiceDetails = {
  [key: string]: string;
};

const AdvertisingServices: NextPage = () => {
  const [serviceDetails, setServiceDetails] = useState<ServiceDetails>({});
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch('/data/ServiceDetails.json');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data: ServiceDetails = await response.json();
        console.log('Fetched data:', data); // Log the fetched data
        setServiceDetails(data);
      } catch (error) {
        console.error('Failed to fetch service details:', error);
      }
    };
    fetchServiceDetails();
  }, []);

  const handleOpenModal = (service: string) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
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
          <div className="mb-12 text-center">
            <motion.h1
              className="mb-6 text-5xl font-bold leading-tight"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              Our Advertising Services
            </motion.h1>
            <motion.p
              className="mx-auto mb-6 max-w-3xl text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Elevate your brand with Electroplix's comprehensive advertising solutions. Our innovative services are designed to maximize your reach and impact in the digital space.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.keys(serviceDetails).length > 0 ? (
              Object.keys(serviceDetails).map((service, index) => (
                <motion.div
                  key={service}
                  className="relative transform overflow-hidden rounded-lg bg-gray-800 p-6 shadow-lg transition-transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
                >
                  <div className="absolute inset-0 rounded-lg border-4 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                  <div className="relative z-10">
                    <h2 className="mb-4 text-xl font-semibold">{service}</h2>
                    <p className="text-md mb-4 leading-relaxed">
                      {serviceDetails[service].substring(0, 100)}...
                    </p>
                    <button
                      onClick={() => handleOpenModal(service)}
                      className="text-blue-400 underline hover:text-blue-300"
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p>Loading services... Please check back later.</p>
                <p>In the meantime, feel free to explore our general advertising solutions!</p>
              </motion.div>
            )}
          </div>
          {selectedService && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
              onClick={handleCloseModal}
            >
              <motion.div
                className="mx-4 w-full max-w-lg rounded-lg bg-gray-900 p-8"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="mb-4 text-2xl font-semibold">{selectedService}</h2>
                <p className="text-md mb-6 leading-relaxed">
                  {serviceDetails[selectedService]}
                </p>
                <button
                  onClick={handleCloseModal}
                  className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  Close
                </button>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default AdvertisingServices;
