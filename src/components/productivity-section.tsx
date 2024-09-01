"use client";

import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {  FaChevronRight } from "react-icons/fa";
import SimpleCatchyButton from "./ui/button";
import { Card } from "./ui/card";

export function ProductivitySection() {
  return (
    <motion.div
      className="bg-gradient-to-br rounded-3xl from-gray-800 to-gray-900 p-6 sm:p-10 mb-12 sm:mb-20 shadow-2xl relative overflow-hidden mx-auto max-w-7xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
              <IoMdCheckmarkCircleOutline size={40} className="text-gray-900" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 text-transparent bg-clip-text">
              Scale Up Your Business
            </span>
          </div>
          <span className="text-gray-400 text-sm">Product of the Year</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <Card className="bg-gray-700 p-4 sm:p-6 rounded-2xl shadow-inner">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 mb-2">
                  5+
                </h2>
                <p className="text-gray-300">Web projects Built</p>
              </Card>
              <Card className="bg-gray-700 p-4 sm:p-6 rounded-2xl shadow-inner">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500 mb-2">
                  100+
                </h2>
                <p className="text-gray-300">Tasks solved</p>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <SimpleCatchyButton text="Learn More"/>
              <SimpleCatchyButton text="Try Free"/>
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
              Flexible Team Interactions
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              
Empower your business with our flexible components, templates, and services to seamlessly plan tasks and track progress. Designed for innovation and efficiency, our solutions drive scalable growth, keeping you ahead of the competition.
            </p>
            <div className="flex items-center space-x-2 text-lime-400 hover:text-green-500 transition-colors duration-200 cursor-pointer group">
              <span className="font-semibold">EXPLORE DETAILS</span>
              <FaChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
