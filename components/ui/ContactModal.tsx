/* eslint-disable tailwindcss/migration-from-tailwind-2 */
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClose}
    >
      <motion.div
        className="mx-4 w-full max-w-md rounded-lg bg-gray-900 p-8"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="mb-4 text-center text-2xl font-semibold">Contact Us</h2>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://www.linkedin.com/in/syedadnanali99/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 rounded-lg bg-blue-700 px-4 py-2 text-white transition hover:bg-blue-600"
          >
            <FaLinkedin className="size-5" />
            <span>Message Founder,CEO</span>
          </a>
          <a
            href="mailto:syedadnanali0106@gmail.com"
            className="flex items-center space-x-3 rounded-lg bg-green-500 px-4 py-2 text-white transition hover:bg-green-400"
          >
            <FaEnvelope className="size-5" />
            <span>Email Founder,CEO</span>
          </a>
        </div>
        <button
          onClick={onClose}
          className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-400"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ContactModal;
