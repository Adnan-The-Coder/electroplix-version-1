// components/ui/ContactModal.tsx
import { motion } from 'framer-motion';
import { FC } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 p-8 rounded-lg w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
        <div className="flex flex-col items-center space-y-4">
          <a
            // href="https://www.linkedin.com/company/electroplix"
            href="https://www.linkedin.com/in/syedadnanali99/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>Message Founder,CEO</span>
          </a>
          <a
            href="mailto:syedadnanali0106@gmail.com"
            className="flex items-center space-x-3 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition"
          >
            <FaEnvelope className="w-5 h-5" />
            <span>Email Founder,CEO</span>
          </a>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-400 transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ContactModal;
