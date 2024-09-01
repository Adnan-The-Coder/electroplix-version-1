"use client";
import React from "react";
import SimpleCatchyButton from "./ui/button";

function CTASection() {
  return (
    <section className="mb-20 text-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl py-16 px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl text-white font-bold mb-6">
        Want a Custom Plan ? 
      </h2>
      <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
        Create a custom Plan Tailored to your Business needs.
        <br />
        Start your 7-day free trial today .
        <br />
        No credit card required.
      </p>
      <div className="max-w-xs mx-auto">
        <SimpleCatchyButton text="Get Started Now" variant="neon"/>
      </div>
    </section>
  );
}

export default CTASection;
