"use client";

import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {  FaChevronRight } from "react-icons/fa";

import SimpleCatchyButton from "./ui/button";
import { Card } from "./ui/card";

export function ProductivitySection() {
  const handleTryFree = () =>{
    window.open('/docs/components');
  }
  const handleLearnMore = () =>{
    window.open('/Scale-Up-Your-Business');
  }
  
return (
  <motion.div
      className="relative mx-auto mb-12 max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-2xl sm:mb-20 sm:p-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
    <div className="relative z-10">
      <div className="mb-6 flex flex-col items-start justify-between sm:mb-8 sm:flex-row sm:items-center">
        <div className="mb-4 flex items-center space-x-3 sm:mb-0">
          <div className="flex size-8 items-center justify-center rounded-full bg-purple-400">
            <IoMdCheckmarkCircleOutline size={40} className="text-gray-900" />
          </div>
          <span className="bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
            Scale Up Your Business
          </span>
        </div>
        <span className="text-sm text-gray-400">Product of the Year</span>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 md:flex-row">
            <Card className="rounded-2xl bg-gray-700 p-4 shadow-inner sm:p-6">
              <h2 className="mb-2 text-4xl font-bold text-purple-400 sm:text-5xl md:text-6xl">
                5+
              </h2>
              <p className="text-gray-300">Web projects Built</p>
            </Card>
            <Card className="rounded-2xl bg-gray-700 p-4 shadow-inner sm:p-6">
              <h2 className="mb-2 text-4xl font-bold text-green-500 sm:text-5xl md:text-6xl">
                100+
              </h2>
              <p className="text-gray-300">Tasks solved</p>
            </Card>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <SimpleCatchyButton text="Learn More" action={handleLearnMore}/>
            <SimpleCatchyButton text="Try Free" action={handleTryFree}/>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
            Flexible Team Interactions
          </h3>
          <p className="mb-6 leading-relaxed text-gray-300">
            Empower your business with our flexible components, templates, and services to seamlessly plan tasks and track progress. Designed for innovation and efficiency, our solutions drive scalable growth, keeping you ahead of the competition.
          </p>
          <div className="group flex cursor-pointer items-center space-x-2 text-lime-400 transition-colors duration-200 hover:text-green-500">
            <span className="font-semibold" onClick={handleLearnMore}>EXPLORE DETAILS</span>
            <FaChevronRight
                size={20}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);
}
