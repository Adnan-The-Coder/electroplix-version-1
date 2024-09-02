// Page.tsx

"use client";
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import SuccessAnimate from '@/components/ui/SuccessAnimate';

// Define the available services and their prices, grouped by category
const serviceCategories = {
  hostingAndDomains: {
    webHosting: 10,
    hosting: 15,
  },
  marketing: {
    emailMarketing: 25,
    socialMediaAds: 100,
    seo: 90,
    smo: 50,
  },
  management: {
    reputationManagement: 15,
    databaseReactivation: 30,
    leadFollowup: 30,
    socialMediaPosting: 100,
  },
  chatbots: {
    chatbotsBasic: 40,
    chatbotsAdvanced: 150,
  },
  customServices: {
    customWebsite: 500,
    starterPlan: 250,
    customWebsiteComponent: 50,
  },
};

const Page: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: number }>({});
  const [discount, setDiscount] = useState<number>(0);
  const controls = useAnimation();

  const handleServiceToggle = (service: string, price: number) => {
    setSelectedServices((prev) => {
      const newSelection = { ...prev };
      if (newSelection[service]) {
        delete newSelection[service]; // Remove service if already selected
      } else {
        newSelection[service] = price; // Add service if not selected
      }
      return newSelection;
    });
  };

  const handleServiceRemove = (service: string) => {
    setSelectedServices((prev) => {
      const newSelection = { ...prev };
      delete newSelection[service]; // Remove service
      return newSelection;
    });
  };

  const calculateTotal = () => {
    return Object.values(selectedServices).reduce((total, price) => total + price, 0);
  };

  const applyDiscount = () => {
    if (Object.keys(selectedServices).length > 0) {
      const discountPercentage = 10; // example discount percentage
      setDiscount(discountPercentage);
      controls.start({
        opacity: [0, 1],
        y: [20, 0],
        transition: { duration: 0.5 },
      });
    }
  };

  const renderServiceCategory = (categoryName: string, services: { [key: string]: number }) => (
    <div className="mb-6 p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">{categoryName}</h2>
      {Object.entries(services).map(([key, price]) => (
        <div
          key={key}
          className={`
            p-4 mb-2 rounded-lg cursor-pointer hover:bg-gray-700 flex items-center 
            ${selectedServices[key] ? 'bg-gray-700' : 'bg-gray-800'}
          `}
          onClick={() => handleServiceToggle(key, price)}
        >
          {selectedServices[key] && (
            <FaCheck className="text-green-400 mr-2" />
          )}
          <div>
            <h3 className="text-xl font-semibold">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <p className="text-gray-400">${price}/month</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
<>
    <Navbar/>
    {/* <SuccessAnimate/> */}
    <br />
    <br />
    <br />
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row items-start p-6">
      <div className="w-full lg:w-2/3 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Create Your Custom Pricing Plan</h1>
        
        <div>
          {Object.entries(serviceCategories).map(([category, services]) =>
            renderServiceCategory(category.replace(/([A-Z])/g, ' $1').trim(), services))
        }
        </div>
      </div>

      <div className="lg:w-1/3 w-full lg:ml-6">
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Selected Services</h2>
          <ul className="list-disc ml-6 mb-4">
            {Object.entries(selectedServices).map(([key, price]) => (
                <li key={key} className="mb-2 flex justify-between items-center">
                <span>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                <span className="flex items-center">
                  <span>${price}</span>
                  <button
                    className="ml-2 text-gray-100 hover:text-red-400"
                    onClick={() => handleServiceRemove(key)}
                    >
                    <FaTrash />
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Total Price</h2>
          <p className="text-xl">${calculateTotal()}/month</p>
          <button
            onClick={applyDiscount}
            disabled={Object.keys(selectedServices).length === 0}
            className={`mt-4 px-4 py-2 rounded transition ${Object.keys(selectedServices).length === 0 ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'}`}
            >
            Apply Discount
          </button>
        </div>

        <motion.div
          className="mt-6 p-4 bg-green-600 rounded-lg shadow-lg"
          animate={controls}
          initial={{ opacity: 0, y: 20 }}
          >
          <h2 className="text-2xl font-semibold">Congratulations!</h2>
          <p className="text-xl">You got a {discount}% discount!</p>
        </motion.div>
      </div>
    </div>
    <Footer/>
</>
  );
};

export default Page;
