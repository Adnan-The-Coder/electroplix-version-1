"use client";

import React from "react";
import SimpleCatchyButton from "./ui/button";
import ShootingStarsBackground from "./ui/ShootingStarsBackground"; // Import the shooting stars background component

function CTASection() {
  const handleCustomPlanClick = () => {
    window.open('/Custom-Plan');
  }
  return (
    <section className="relative mb-20 text-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl py-16 px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Background Animation */}
      <ShootingStarsBackground />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl text-white font-bold mb-6">
          Want a Custom Plan?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Create a custom plan tailored to your business needs.
          <br />
        </p>
        <div className="max-w-xs mx-auto">
          <SimpleCatchyButton text="Get Started Now" variant="neon" action={handleCustomPlanClick}/>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
