import Link from 'next/link';
import React from 'react';

const RefundCancellation = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 mb-8">
          Refund & Cancellation Policy
        </h1>

        {/* Policy Content */}
        <div className="space-y-6 text-lg">
          <p className="text-gray-300">
            At Electroplix, we value our customers' satisfaction. Please take a moment to review our refund and cancellation policies to ensure you are fully informed about our terms and conditions.
          </p>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Refund Eligibility</h2>
            <p className="text-gray-300">
              - Refunds are available within 14 days of purchase if the service has not yet been rendered.
              <br />
              - Custom web design projects and development services are non-refundable once work has begun.
              <br />
              - Refunds will be processed to the original payment method within 7 business days.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">Cancellation Policy</h2>
            <p className="text-gray-300">
              - You may cancel your subscription or project at any time before work has commenced with no penalties.
              <br />
              - If work has already begun, partial cancellations may be accepted depending on the stage of development.
              <br />
              - To cancel, please contact our support team via email or chat.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">How to Request a Refund or Cancellation</h2>
            <p className="text-gray-300">
              - Simply reach out to our support team via <span className="text-pink-500"><Link href={"mailto:help.electroplix@gmail.com"}>help.electroplix@gmail.com</Link></span>
              <br />
              - Include your order number and reason for the refund/cancellation request.
              <br />
              - Our team will get back to you within 24 hours to process the request.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-400 text-sm">
        <p>© 2025 Electroplix - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RefundCancellation;
