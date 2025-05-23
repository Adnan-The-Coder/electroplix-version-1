/* eslint-disable no-unused-vars */
"use client";
import React, { useState } from 'react';
import { useAnimation } from 'framer-motion';
import { FaCheck, FaTrash, FaInfoCircle } from 'react-icons/fa';

import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import Confetti from '@/components/ui/Confetti';
import CustomPopover from '@/components/ui/CustomPopover';
import SuccessMessagePopover from '@/components/ui/SuccessMessagePopover';
import CustomFormPopover from '@/components/ui/CustomFormPopover';

// Define the available services and their prices, grouped by category
const serviceCategories = {
  hostingAndDomains: {
    BasicHosting: { price: 8, details: ['✔ Basic web hosting plan with ~25,000 visits monthly.','✔ Standard DDoS protection','✔ Cloudflare protected nameservers','✔ Malware Scanner','✔ Web application firewall'] },
    AdvanceHosting: { price: 15, details: ['✔ Web hosting plan with ~100,000 visits monthly.', '✔ Free CDN','✔ Enhanced DDoS protection','✔ Cloudflare protected nameservers','✔ Malware Scanner','✔ Web application firewall'] },
  },
  marketing: {
    BasicEmailMarketing: { price: 25, details: ['✔ Email campaigns with up to 10,000 emails.', '✔ 2500 contacts','✔ Email Templates','✔ Bounce Categorization'] },
    AdvanceEmailMarketing: { price: 100, details: ['✔ Email campaigns with up to 100,000 emails.', '✔ 25,000 contacts','✔ Email Templates','✔ Bounce Categorization','✔ Dedicated Rate Tracking','✔ SaaS Safeguard'] },
    socialMediaAds: { price: 100, details: ['✔ Facebook Paid Ads', '✔ Instagram Paid Ads','✔ Google Ads','✔ Bounce Categorization','✔ Dedicated Rate Tracking','✔ SaaS Safeguard'] },
    // socialMediaAds: { price: 100, details: ['Social media advertising campaigns management.'] },
    seo: { price: 90, details: ['Search Engine Optimization for better ranking.'] },
    smo: { price: 50, details: ['Social Media Optimization for increased engagement.'] },
  },
  management: {
    reputationManagement: { price: 15, details: ['Manage and improve online reputation.'] },
    databaseReactivation: { price: 30, details: ['Reactivate and maintain your database.'] },
    leadFollowup: { price: 30, details: ['Follow-up with potential leads.'] },
    socialMediaPosting: { price: 100, details: ['Regular posting on social media platforms.'] },
  },
  chatbots: {
    chatbotsBasic: { price: 40, details: ['Basic chatbot with predefined responses.'] },
    chatbotsAdvanced: { price: 150, details: ['Advanced chatbot with AI and machine learning.'] },
  },
  customServices: {
    customWebsite: { price: 500, details: ['Fully customized website design and development.'] },
    starterPlan: { price: 250, details: ['Basic plan with essential features.'] },
    customWebsiteComponent: { price: 50, details: ['Custom components for your website.'] },
  },
};

const Page: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: number }>({});
  const [discount, setDiscount] = useState<number>(0);
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [popoverContent, setPopoverContent] = useState<{ title: string; details: string[] } | null>(null);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<{ title: string; content: string } | null>(null);
  const [successMessageOpen, setSuccessMessageOpen] = useState<boolean>(false);
  const [formPopoverOpen, setFormPopoverOpen] = useState<boolean>(false);
  const controls = useAnimation();

  const handleServiceToggle = (service: string, price: number, details: string[]) => {
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
    return Object.values(selectedServices).reduce((total, price) => total + price, 0).toFixed(2);
  };

  const applyDiscount = () => {
    if (Object.keys(selectedServices).length > 0 && !discountApplied) {
      const discountPercentage = 10; // Example discount percentage
      setDiscount(discountPercentage);
      setDiscountApplied(true); // Mark discount as applied
      setShowConfetti(true);
      controls.start({
        opacity: [0, 1],
        y: [20, 0],
        transition: { duration: 0.5 },
      });

      // Apply discount to selected services
      setSelectedServices((prev) => {
        const newSelection = { ...prev };
        const discountFactor = (100 - discountPercentage) / 100;
        Object.keys(newSelection).forEach((key) => {
          newSelection[key] = parseFloat((newSelection[key] * discountFactor).toFixed(2));
        });
        
return newSelection;
      });

      // Show success message
      setSuccessMessage({ title: 'Success!', content: `You got a ${discountPercentage}% discount!` });
      setSuccessMessageOpen(true);
    }
  };

  const handlePopoverOpen = (title: string, details: string[]) => {
    setPopoverContent({ title, details });
    setPopoverOpen(true);
  };

  const renderServiceCategory = (categoryName: string, services: { [key: string]: { price: number; details: string[] } }) => (
    <div className="mb-6 rounded-lg bg-gray-800 p-4 shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">{categoryName}</h2>
      {Object.entries(services).map(([key, { price, details }]) => (
        <div
          key={key}
          className={`
            mb-2 flex cursor-pointer items-center rounded-lg p-4 hover:bg-gray-700 
            ${selectedServices[key] ? 'bg-gray-700' : 'bg-gray-800'}
          `}
          onClick={() => handleServiceToggle(key, price, details)}
        >
          {selectedServices[key] && (
            <FaCheck className="mr-2 text-green-400" />
          )}
          <div className="grow">
            <h3 className="text-xl font-semibold">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <p className="text-gray-400">${price.toFixed(2)}/month</p>
          </div>
          <button
            className="ml-2 text-gray-300 hover:text-gray-100"
            onClick={(e) => {
              e.stopPropagation();
              handlePopoverOpen(key.replace(/([A-Z])/g, ' $1').trim(), details);
            }}
          >
            <FaInfoCircle />
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="flex min-h-screen flex-col items-start bg-gray-900 p-6 text-white lg:flex-row">
        <div className="w-full max-w-4xl lg:w-2/3">
          <h1 className="mb-6 text-3xl font-bold">Create Your Custom Pricing Plan</h1>
          <div>
            {Object.entries(serviceCategories).map(([category, services]) =>
              renderServiceCategory(category.replace(/([A-Z])/g, ' $1').trim(), services))
            }
          </div>
        </div>
        <div className="w-full lg:ml-6 lg:w-1/3">
          <div className="mt-6 rounded-lg bg-gray-800 p-4 shadow-lg">
            <h2 className="mb-2 text-2xl font-semibold">Selected Services</h2>
            <ul className="mb-4 ml-6 list-disc">
              {Object.entries(selectedServices).map(([key, price]) => (
                <li key={key} className="mb-2 flex items-center justify-between">
                  <span>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="flex items-center">
                    <span>${price.toFixed(2)}</span>
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
            <h2 className="mb-2 text-2xl font-semibold">Total Price</h2>
            <p className="text-xl">${calculateTotal()}/month</p>
            <div className="mt-4 flex items-center">
              <button
                onClick={applyDiscount}
                disabled={Object.keys(selectedServices).length === 0 || discountApplied}
                className={`mr-2 rounded px-4 py-2 transition ${Object.keys(selectedServices).length === 0 || discountApplied ? 'cursor-not-allowed bg-gray-600' : 'bg-blue-600 hover:bg-blue-500'}`}
              >
                Apply Discount
              </button>
              <button
                onClick={() => setFormPopoverOpen(true)}
                className="rounded bg-green-600 px-4 py-2 hover:bg-green-500"
              >
                Create Custom Plan
              </button>
            </div>
          </div>
          {showConfetti && <Confetti />} {/* Display Confetti on discount application */}
        </div>
      </div>
      {popoverContent && (
        <CustomPopover
          title={popoverContent.title}
          points={popoverContent.details}
          isOpen={popoverOpen}
          onClose={() => setPopoverOpen(false)}
        />
      )}
      {successMessage && (
        <SuccessMessagePopover
          title={successMessage.title}
          content={successMessage.content}
          isOpen={successMessageOpen}
          onClose={() => setSuccessMessageOpen(false)}
        />
      )}
      {formPopoverOpen && (
        <CustomFormPopover
          isOpen={formPopoverOpen}
          onClose={() => setFormPopoverOpen(false)}
        />
      )}
      <Footer />
    </>
  );
};

export default Page;
