import { FaChartBar, FaDollarSign, FaUsers, FaClock } from 'react-icons/fa';
import React from 'react';

function WhyUsSection() {
  return (
    <section
      className="mb-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 mx-auto max-w-7xl" // Adjust padding and set max-width
      id="solutions-section"
    >
      <h2 className="text-4xl text-white font-bold text-center mb-8">
        Why Choose Electroplix?
      </h2>
      <div className="grid text-white md:grid-cols-2 gap-8"> {/* Adjust gap to match padding changes */}
        {[
          {
            title: "Increased Productivity",
            description: "Boost your business efficiency with our advanced solutions. Streamline workflows and enhance productivity to stay competitive.",
            icon: FaChartBar,
            color: "bg-blue-500",
          },
          {
            title: "Cost-Effective",
            description: "Achieve outstanding results without breaking the bank. Our solutions provide exceptional value.",
            icon: FaDollarSign,
            color: "bg-green-500",
          },
          {
            title: "Scalable Solution",
            description: "Grow your business effortlessly with our scalable solutions. Adapt and expand seamlessly as your needs evolve.",
            icon: FaUsers,
            color: "bg-purple-500",
          },
          { title: "24/7 Support",
            description: "Receive round-the-clock support to keep your operations running smoothly. We’re here to assist you anytime, day or night.", 
            icon: FaClock, 
            color: "bg-pink-500" 
          },
        ].map((reason) => (
          <div key={reason.title} className="flex items-start space-x-6">
            <div
              className={`w-12 h-12 ${reason.color} rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg`}
            >
              <reason.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-300">
              {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUsSection;
