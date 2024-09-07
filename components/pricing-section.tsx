"use client";

import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import { MdChevronRight } from "react-icons/md"; // Import the icon from react-icons
import React, { useState } from "react";
import SimpleCatchyButton from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: { onetime: 250 }, // Use a one-time price for Basic plan
      features: [
        "5 Page conversion driven mobile-friendly website",
        "Technical and on-page SEO to increase Leads",
        "Integration of reviews to build trust",
        "Unlimited Changes until you're 100% Happy",
        "Weekly Support",
      ],
    },
    {
      name: "Pro",
      price: { monthly: 79, yearly: 479 },
      features: [
        "Website Management",
        "Advanced Analytics",
        "Email Marketing",
        "Reputation Management",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: { monthly: 199, yearly: "2,249" },
      features: [
        "Google Reviews and Chatbots",
        "Database Reactivation Campaign",
        "Lead Followup",
        "Reputation Management",
        "Automated Social Media Posting",
      ],
    },
  ];

  return (
    <section className="mb-20 px-4 sm:px-6 lg:px-8" id="pricing-section">
      <h2 className="text-4xl text-white font-bold text-center mb-12">
        Flexible Pricing Plans
      </h2>
      <div className="flex justify-center items-center space-x-4 mb-12">
        <span
          className={`text-lg ${!isYearly ? "text-cyan-400" : "text-gray-400"}`}
        >
          Monthly
        </span>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
          className="bg-gray-700"
        />
        <span
          className={`text-lg ${isYearly ? "text-purple-400" : "text-gray-400"}`}
        >
          Yearly
        </span>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-xl transition-all duration-200 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl mb-4 text-white">
                  {plan.name}
                </CardTitle>
                <p className="text-4xl font-bold mb-1 text-white">
                  {plan.name === "Starter" ? (
                    <>
                      ${plan.price.onetime}
                      <span className="text-lg text-gray-400"> → one-time</span>
                    </>
                  ) : (
                    <>
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                      <span className="text-lg text-gray-400">
                        /{isYearly ? "year" : "month"}
                      </span>
                    </>
                  )}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8 text-white">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <MdChevronRight className="w-5 h-5 text-lime-400" /> {/* Updated icon */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <SimpleCatchyButton text="Choose Plan"/>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
