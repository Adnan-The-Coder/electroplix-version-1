// terms-and-conditions/page.tsx
"use client";
import { motion } from 'framer-motion';
import { NextPage } from 'next';

import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const TermsAndConditions: NextPage = () => {
  return (
    <>
      <Navbar/>
      <div className="flex min-h-screen flex-col items-center bg-gray-900 py-4 text-white">
        <motion.div
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
          <div className="mb-12 text-center">
            <motion.h1
            className="mb-4 text-4xl font-bold"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          >
              Terms and Conditions
            </motion.h1>
            <motion.p
            className="mb-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
              Please read these Terms and Conditions carefully before using our website.
            </motion.p>
          </div>
          <motion.div
          className="rounded-lg bg-gray-800 p-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
            <p className="text-md mb-4 leading-relaxed">
              Welcome to Electroplix. These Terms and Conditions govern your use of our website. By accessing or using our website, you agree to be bound by these terms. If you disagree with any part of these terms, please do not use our website.
            </p>
            <h2 className="mb-4 text-2xl font-semibold">2. Use of the Site</h2>
            <p className="text-md mb-4 leading-relaxed">
              You may use our website only for lawful purposes and in accordance with these Terms. You agree not to use the site in any way that could damage, disable, overburden, or impair the site or interfere with any other party`s use and enjoyment of the site.
            </p>
            <h2 className="mb-4 text-2xl font-semibold">3. Intellectual Property</h2>
            <p className="text-md mb-4 leading-relaxed">
              All content and materials on our website, including but not limited to text, graphics, logos, and images, are the property of Electroplix or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on our website without our prior written consent.
            </p>
            <h2 className="mb-4 text-2xl font-semibold">4. Limitation of Liability</h2>
            <p className="text-md mb-4 leading-relaxed">
              In no event shall Electroplix be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any damages whatsoever, whether in an action of contract, negligence, or other tort, arising out of or in connection with the use or performance of our website.
            </p>
            <h2 className="mb-4 text-2xl font-semibold">5. Changes to Terms</h2>
            <p className="text-md mb-4 leading-relaxed">
              We may update our Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms and Conditions on this page. You are advised to review these Terms periodically for any changes.
            </p>
            <h2 className="mb-4 text-2xl font-semibold">6. Contact Us</h2>
            <p className="text-md leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at support@electroplix.com.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Footer/>
    </>
  );
};

export default TermsAndConditions;
