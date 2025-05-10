/* eslint-disable no-unused-vars */
"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaDumbbell, FaUser, FaHeartbeat, FaUtensils, FaComments, FaBook, FaVideo, FaBullhorn, FaChartLine, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

import DashboardContent from '@/components/Admin/Dashboard';

interface SidebarProps {
  selectedSection: string;
  setSelectedSection: (section: string) => void;
  isOpen: boolean;
  toggleMenu: () => void;
}

interface UserData {
  _id: string;
  username: string;
  email: string;
  isVerified: boolean;
  age?: number;
  gender?: string;
  dietaryPreferences: string[];
  healthParameters: {
    height?: number;
    weight?: number;
    bloodPressure?: {
      systolic?: number;
      diastolic?: number;
    };
    allergies?: string[];
  };
}

const Sidebar: React.FC<SidebarProps> = ({ selectedSection, setSelectedSection, isOpen, toggleMenu }) => {
  const [data, setData] = useState<UserData | null>(null);
  const router = useRouter();

  const getUserDetails = async () => {
    try {
      const res = await axios.get<{ data: UserData }>('/api/users/me');
      const userData: UserData = {
        ...res.data.data,
        dietaryPreferences: res.data.data.dietaryPreferences || [],
        healthParameters: res.data.data.healthParameters || {},
      };
      setData(userData);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch user details");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success("Logout Successful");
      router.push('/login');
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    }
  };

  return (
    <aside className={`fixed top-0 z-50 flex h-screen flex-col bg-gradient-to-t from-gray-900 to-gray-700 p-5 md:sticky md:w-64 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0`}>
      <div className="mb-8 flex items-center justify-between">
        <div className="text-gradient bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent"> 
          <Link href={'/'}> Electroplix </Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          <FaTimes size={24} className="text-white" />
        </button>
      </div>
      <nav className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 grow overflow-y-auto">
        <ul className="space-y-6">
          {[
            { section: 'dashboard', icon: <FaChartLine />, label: 'Dashboard' },
            { section: 'profile', icon: <FaUser />, label: 'Profile' },
            { section: 'workout-plan', icon: <FaDumbbell />, label: 'Workout Plan' },
            { section: 'health-assistant', icon: <FaHeartbeat />, label: 'Personal Health Assistant' },
            { section: 'meal-plans', icon: <FaUtensils />, label: 'Meal Plans' },
            { section: 'community-support', icon: <FaComments />, label: 'Community Support' },
            { section: 'learning-hub', icon: <FaBook />, label: 'Learning Hub' },
            { section: 'virtual-consultations', icon: <FaVideo />, label: 'Virtual Consultations' },
            { section: 'announcement', icon: <FaBullhorn />, label: 'Announcement Avenue' },
          ].map(({ section, icon, label }) => (
            <li key={section}>
              <button
                onClick={() => setSelectedSection(section)}
                className={`flex items-center space-x-2 text-lg font-medium transition duration-300 
                            ${selectedSection === section ? 'text-gradient bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent' : 'hover:text-gradient from-pink-500 via-purple-600 to-indigo-600 text-gray-300 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent'}`}
              >
                {icon} <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-6 space-y-3">
        <button className="w-full rounded bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-4 py-2 text-white transition duration-300 hover:bg-gradient-to-l hover:from-indigo-600 hover:via-purple-600 hover:to-pink-500">
          Settings
        </button>
        <button className="w-full rounded bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-4 py-2 text-white transition duration-300 hover:bg-gradient-to-l hover:from-indigo-600 hover:via-purple-600 hover:to-pink-500" onClick={logout}>
          Log Out
        </button>
      </div>
    </aside>
  );
};

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState('profile');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
    if (isMenuOpen) toggleMenu(); // Close the menu if it's open
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'dashboard':
        return <DashboardContent />;
      case 'profile':
        return <div>Profile Content</div>;
      case 'workout-plan':
        return <div>Workout Content</div>;
      case 'health-assistant':
        return <div>AI</div>;
      case 'meal-plans':
        return <div>Meal Plans Content</div>;
      case 'community-support':
        return <div>Community Support Content</div>;
      case 'learning-hub':
        return <div>Learning Hub Content</div>;
      case 'virtual-consultations':
        return <div>Virtual Consultations Content</div>;
      case 'announcement':
        return <div>Announcement Content</div>;
      default:
        return <div>Profile Content</div>;
    }
  };

  return (
    <div className="relative flex min-h-screen bg-gray-800 text-white">
      <button onClick={toggleMenu} className="absolute right-5 top-5 z-50 md:hidden">
        <FaBars size={24} className="text-white" />
      </button>
      {isMenuOpen && <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={toggleMenu} />}
      <Sidebar selectedSection={selectedSection} setSelectedSection={handleSectionChange} isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="flex-1 overflow-y-auto bg-gradient-to-t from-gray-800 to-gray-900 p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
