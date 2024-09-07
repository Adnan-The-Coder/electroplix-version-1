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
      className={`fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-semibold mb-4">Create Custom Plan</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="planName">Plan Name</label>
            <input
              id="planName"
              type="text"
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-gray-100"
              placeholder="Enter the name of your custom plan"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Sign In or Log In</label>
            <button
              type="button"
              className="w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 text-white"
              onClick={() => setIsSignIn(!isSignIn)}
            >
              {isSignIn ? 'Log In' : 'Sign In'}
            </button>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500 text-white"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 text-white"
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
