"use client";
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

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
      <div className="min-h-screen py-4 bg-gray-900 text-white overflow-x-hidden">
        <motion.div
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h1
              className="text-5xl font-bold mb-6 leading-tight"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              Our Advertising Services
            </motion.h1>
            <motion.p
              className="text-lg mb-6 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Elevate your brand with Electroplix's comprehensive advertising solutions. Our innovative services are designed to maximize your reach and impact in the digital space.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(serviceDetails).length > 0 ? (
              Object.keys(serviceDetails).map((service, index) => (
                <motion.div
                  key={service}
                  className="relative bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
                >
                  <div className="absolute inset-0 border-4 border-transparent rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h2 className="text-xl font-semibold mb-4">{service}</h2>
                    <p className="text-md leading-relaxed mb-4">
                      {serviceDetails[service].substring(0, 100)}...
                    </p>
                    <button
                      onClick={() => handleOpenModal(service)}
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="text-center col-span-full"
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
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              onClick={handleCloseModal}
            >
              <motion.div
                className="bg-gray-900 p-8 rounded-lg w-full max-w-lg mx-4"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-semibold mb-4">{selectedService}</h2>
                <p className="text-md leading-relaxed mb-6">
                  {serviceDetails[selectedService]}
                </p>
                <button
                  onClick={handleCloseModal}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
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
