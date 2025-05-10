/* eslint-disable tailwindcss/migration-from-tailwind-2 */
// components/ui/CustomFormPopover.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface CustomFormPopoverProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomFormPopover: React.FC<CustomFormPopoverProps> = ({ isOpen, onClose }) => {
  const [planName, setPlanName] = useState<string>('');
  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (planName.trim() === '') {
      alert('Please enter a plan name.');
      
return;
    }
    // Handle form submission logic here
    console.log('Plan Name:', planName);
    // For demo purposes
    onClose();
  };

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 ${isOpen ? 'block' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-11/12 rounded-lg bg-gray-800 p-6 shadow-lg md:w-1/3">
        <button
          className="absolute right-2 top-2 text-gray-400 hover:text-gray-200"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <h2 className="mb-4 text-2xl font-semibold">Create Custom Plan</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2 block text-gray-300" htmlFor="planName">Plan Name</label>
            <input
              id="planName"
              type="text"
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
              className="w-full rounded bg-gray-700 p-2 text-gray-100"
              placeholder="Enter the name of your custom plan"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-gray-300">Sign In or Log In</label>
            <button
              type="button"
              className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
              onClick={() => setIsSignIn(!isSignIn)}
            >
              {isSignIn ? 'Log In' : 'Sign In'}
            </button>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default CustomFormPopover;
