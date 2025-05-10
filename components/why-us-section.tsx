import { FaChartBar, FaDollarSign, FaUsers, FaClock } from 'react-icons/fa';
import React from 'react';

function WhyUsSection() {
  return (
    <section
      className="mx-auto mb-20 max-w-7xl rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 p-10" // Adjust padding and set max-width
      id="solutions-section"
    >
      <h2 className="mb-8 text-center text-4xl font-bold text-white">
        Why Choose Electroplix?
      </h2>
      <div className="grid gap-8 text-white md:grid-cols-2"> {/* Adjust gap to match padding changes */}
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
              className={`size-12 ${reason.color} flex shrink-0 items-center justify-center rounded-xl shadow-lg`}
            >
              <reason.icon className="size-6 text-white" />
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-bold">{reason.title}</h3>
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
