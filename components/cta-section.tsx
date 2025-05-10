"use client";

import React from "react";

import SimpleCatchyButton from "./ui/button";
import ShootingStarsBackground from "./ui/ShootingStarsBackground"; // Import the shooting stars background component

function CTASection() {
  const handleCustomPlanClick = () => {
    window.open('/Custom-Plan');
  }
  
return (
  <section className="relative mx-auto mb-20 max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 px-8 py-16 text-center">
    {/* Background Animation */}
    <ShootingStarsBackground />
    {/* Content */}
    <div className="relative z-10">
      <h2 className="mb-6 text-4xl font-bold text-white">
        Want a Custom Plan?
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300">
        Create a custom plan tailored to your business needs.
        <br />
      </p>
      <div className="mx-auto max-w-xs">
        <SimpleCatchyButton text="Get Started Now" variant="neon" action={handleCustomPlanClick}/>
      </div>
    </div>
  </section>
);
}

export default CTASection;
