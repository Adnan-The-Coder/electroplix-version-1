"use client";

import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className="mb-20" id="pricing-section">
      <h2 className="text-4xl text-white font-bold text-center mb-12">
        Flexible Pricing Plans
      </h2>
      <div className="flex justify-center items-center space-x-4 mb-12">
        <span
          className={`text-lg ${!isYearly ? "text-purple-400" : "text-gray-400"}`}
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
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Basic",
            price: { monthly: 9, yearly: 90 },
            features: [
              "10+ Templates",
              "Responsive Layout",
              "Animated Components",
            ],
          },
          {
            name: "Pro",
            price: { monthly: 19, yearly: 190 },
            features: [
              "50+ Templates",
              "Priority Support",
              "Advanced Analytics",
            ],
          },
          {
            name: "Enterprise",
            price: { monthly: 29, yearly: 290 },
            features: [
              "500+ Templates",
              "Dedicated Account Manager",
              "Custom Integrations",
            ],
          },
        ].map((plan) => (
          <motion.div
            key={plan.name}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-xl transition-all duration-200 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-cyan-500" />
              <CardHeader>
                <CardTitle className="text-2xl mb-4 text-white">
                  {plan.name}
                </CardTitle>
                <p className="text-4xl font-bold mb-2 text-white">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                  <span className="text-lg text-gray-400">
                    /{isYearly ? "year" : "month"}
                  </span>
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8 text-white">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <ChevronRight className="w-5 h-5 text-lime-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 via pink-400 to-purple-600 hover:from-lime-600 hover:to-green-700 transition-all duration-200 text-white font-semibold py-3">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
