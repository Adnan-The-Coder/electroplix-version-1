"use client";
import React, { useState } from 'react';

const DashboardContent = () => {
  const [activeTab, setActiveTab] = useState('Exercise');

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      {/* Date Indicator and Search Bar */}
      <div className="mb-8 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">Daily Last 8 Days</div>
        <input
          type="text"
          placeholder="Search something..."
          className="rounded-lg border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      {/* Tabs for Exercise and Daily Habit */}
      <div className="mb-8">
        <ul className="flex space-x-4 text-sm text-gray-500">
          <li 
            className={`cursor-pointer ${activeTab === 'Exercise' ? 'border-b-4 border-purple-500 font-semibold text-purple-500' : ''}`} 
            onClick={() => setActiveTab('Exercise')}
          >
            Exercise
          </li>
          <li 
            className={`cursor-pointer ${activeTab === 'Daily Habit' ? 'border-b-4 border-purple-500 font-semibold text-purple-500' : ''}`} 
            onClick={() => setActiveTab('Daily Habit')}
          >
            Daily Habit
          </li>
        </ul>
      </div>
      {/* Main Statistics Section */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {activeTab === 'Exercise' && (
          <>
            {/* Exercise Time */}
            <div className="rounded-lg bg-white p-5 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700">Exercise Time</h3>
              <p className="mt-4 text-3xl font-bold text-red-500">2 hrs 30 min</p>
              {/* Example Bar Chart */}
              <div className="mt-4">
                <div className="flex h-32 space-x-1">
                  <div className="h-full w-1/6 bg-gray-200"></div>
                  <div className="h-3/5 w-1/6 bg-gray-200"></div>
                  <div className="h-4/5 w-1/6 bg-gray-200"></div>
                  <div className="h-full w-1/6 bg-red-400"></div>
                  <div className="h-2/4 w-1/6 bg-gray-200"></div>
                  <div className="h-3/4 w-1/6 bg-gray-200"></div>
                </div>
              </div>
              <span className="mt-4 block text-gray-400">Weekly</span>
            </div>
            {/* Running Info */}
            <div className="relative flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="mb-2 text-sm text-gray-500">Run at Lapang Cicooreog</h3>
                <p className="mb-4 text-xs text-gray-500">20 July 2023</p>
                <div className="mb-4 flex justify-between text-center text-gray-600">
                  <div>
                    <p className="text-lg font-bold">256</p>
                    <p className="text-xs">Calories</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">65</p>
                    <p className="text-xs">Heart Rate</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">1,054</p>
                    <p className="text-xs">Steps</p>
                  </div>
                </div>
              </div>
              <div className="text-center text-orange-500">
                <p className="text-xs">Time: 03:20:12</p>
                <p className="text-xs">20 KM</p>
              </div>
            </div>
            {/* Real Time Monitoring */}
            <div className="rounded-lg bg-white p-5 text-center shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700">Real Time Monitoring</h3>
              <p className="mt-4 text-3xl font-bold text-red-500">Off</p>
            </div>
            {/* Calories Burned */}
            <div className="rounded-lg bg-white p-5 text-center shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700">Calories Burned</h3>
              <p className="mt-4 text-3xl font-bold text-purple-500">20%</p>
            </div>
          </>
        )}
        {activeTab === 'Daily Habit' && (
          <>
            {/* Home Workouts */}
            <div className="rounded-lg bg-white p-5 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700">Home Workouts</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center justify-between">
                  <p>Plank</p>
                  <span className="text-gray-400">30 Minutes</span>
                </li>
                <li className="flex items-center justify-between">
                  <p>Squats</p>
                  <span className="text-gray-400">20x</span>
                </li>
                <li className="flex items-center justify-between">
                  <p>Push Ups</p>
                  <span className="text-gray-400">10x</span>
                </li>
                <li className="flex items-center justify-between">
                  <p>Sit Ups</p>
                  <span className="text-gray-400">40x</span>
                </li>
                <li className="flex items-center justify-between">
                  <p>Jumping</p>
                  <span className="text-gray-400">40x</span>
                </li>
              </ul>
            </div>
            {/* Popular Classes */}
            <div className="rounded-lg bg-white p-5 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700">Popular Classes</h3>
              <div className="mt-4 flex items-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-yellow-200">
                  {/* Placeholder for Icon */}
                  <span className="text-2xl">🚴‍♀️</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-700">Cycling Sport</h4>
                  <p className="text-sm text-gray-500">Cycling helps burn calories and increases metabolism.</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DashboardContent;