"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const Payments = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardNumber || !expiryDate || !cvv) {
      setError('Please fill in all fields.');
      return;
    }
    // Process payment logic here
    console.log('Payment processed:', { cardNumber, expiryDate, cvv });
    // Reset fields after processing
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setError('');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center neon-text">
            Checkout
          </h2>
          {error && <p className="text-red-400 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full p-3 rounded bg-gray-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 neon-input"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm mb-2" htmlFor="expiryDate">
                  Expiry Date (MM/YY)
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  className="w-full p-3 rounded bg-gray-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 neon-input"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-2" htmlFor="cvv">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full p-3 rounded bg-gray-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 neon-input"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="123"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 py-3 rounded-lg text-white font-semibold transition duration-300 hover:bg-blue-600 neon-button"
            >
              Pay Now
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
      <style jsx>{`
        .neon-text {
          color: #0ff;
          text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff;
        }
        .neon-input {
          color: #fff;
          border: 2px solid #0ff;
          transition: border-color 0.3s;
        }
        .neon-input:focus {
          border-color: #ff0;
          box-shadow: 0 0 5px #ff0, 0 0 10px #ff0;
        }
        .neon-button {
          background: linear-gradient(45deg, #0ff, #ff0);
          box-shadow: 0 0 5px #0ff, 0 0 10px #0ff;
        }
      `}</style>
    </>
  );
};

export default Payments;
