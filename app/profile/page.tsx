/* eslint-disable react/jsx-key */
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaUserCircle, FaHome, FaServicestack, FaBell, FaClipboardList } from "react-icons/fa";

import Footer from "@/components/Footer";

interface UserData {
    _id: string;
    username: string;
    email: string;
    isVerified: boolean; // Updated to use isVerified
    isAdmin: boolean;    // You can use this if needed
}

export default function Dashboard() {
    const router = useRouter();
    const [data, setData] = useState<UserData | null>(null);
    const [activeTab, setActiveTab] = useState("overview");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const getUserDetails = async () => {
        try {
            const res = await axios.get<{ data: UserData }>('/api/users/me');
            setData(res.data.data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch user details");
        }
    };

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success("Logout Successful");
            router.push('/login');
        } catch (error: unknown) {
            console.error(error);
            toast.error("Logout failed");
        }
    };

    useEffect(() => {
        getUserDetails();

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial value
        
return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
      <>
        <div className="flex h-screen flex-col overflow-hidden bg-gray-900">
          <header className="flex items-center justify-between bg-gray-800 p-4 shadow-md">
            <h1 className="text-xl text-white md:hidden">Dashboard</h1>
            <h1 className="hidden text-xl text-white md:block">Dashboard</h1>
            <div className="hidden space-x-4 md:ml-4 md:flex">
              {["overview", "services", "notifications", "custom-plans"].map((tab) => (
                <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-white ${activeTab === tab ? 'font-bold' : 'hover:underline'}`}
                        >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
                    ))}
            </div>
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                <FaUserCircle className="cursor-pointer text-2xl text-green-500" />
              </button>
              {dropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg">
                <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>
                <button onClick={logout} className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200">Logout</button>
              </div>
                    )}
            </div>
          </header>
          <div className="flex flex-1 overflow-hidden">
            <main className="flex flex-1 items-start justify-center overflow-auto bg-gray-900 p-4 md:p-8">
              <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-3xl rounded-2xl bg-gray-900 bg-opacity-80 p-6 shadow-xl backdrop-blur-xl md:p-8"
                    >
                <h1 className="text-gradient mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-center text-3xl font-bold text-transparent">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h1>
                {activeTab === "overview" && data && (
                  <div>
                    <p className="text-lg text-white">
                      Welcome {data.username}! Here`s your Profile Overview.
                    </p>
                    <h2 className="mt-4 break-words text-xl text-green-400">
                      User ID: {data._id}
                    </h2>
                    <p className="text-lg text-white">Email: {data.email}</p>
                    <p className="text-lg text-white">Verified: {data.isVerified ? 'Yes' : 'No'}</p>
                  </div>
                        )}
                {activeTab === "services" && (
                  <div>
                    <p className="text-lg text-white">Here are your services.</p>
                    {/* Add service details here */}
                  </div>
                        )}
                {activeTab === "notifications" && (
                  <div>
                    <p className="text-lg text-white">You have no new notifications.</p>
                    {/* Add notification details here */}
                  </div>
                        )}
                {activeTab === "custom-plans" && (
                  <div>
                    <p className="text-lg text-white">Create or manage your custom plans here.</p>
                    {/* Add custom plan details here */}
                  </div>
                        )}
              </motion.div>
            </main>
          </div>
          <nav className="fixed inset-x-0 bottom-0 flex justify-around bg-gray-800 p-4 shadow-lg md:hidden">
            {["overview", "services", "notifications", "custom-plans"].map((tab, index) => {
                    const icons = [<FaHome />, <FaServicestack />, <FaBell />, <FaClipboardList />];
                    
return (
  <button
    key={tab}
    onClick={() => setActiveTab(tab)}
    className={`text-white ${activeTab === tab ? 'font-bold' : ''}`}
>
    {icons[index]}
  </button>
);
                })}
          </nav>
        </div>
        {!isMobile && <Footer />}
      </>
    );
}
