"use client";

import { motion } from "framer-motion";
import { MdChevronRight } from "react-icons/md"; // Import the icon from react-icons
import React, { useState } from "react";

import { Switch } from "@/components/ui/switch";

import SimpleCatchyButton from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Coming Up",
      price: { onetime: null }, // Use a one-time price for Basic plan
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ]
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
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Flexible Pricing Plans
      </h2>
      <div className="mb-12 flex items-center justify-center space-x-4">
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
            <Card className="overflow-hidden border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-200 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="mb-4 text-2xl text-white">
                  {plan.name}
                </CardTitle>
                <p className="mb-1 text-4xl font-bold text-white">
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
                <ul className="mb-8 space-y-4 text-white">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <MdChevronRight className="size-5 text-lime-400" /> {/* Updated icon */}
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
