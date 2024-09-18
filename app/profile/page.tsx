"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa"; // Importing icons

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing");

    const getUserDetails = async () => {
        try {
            const res = await axios.get('/api/users/me');
            console.log(res.data);
            setData(res.data.data._id);
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
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl p-8"
            >
                <h1 className="text-3xl font-bold text-center text-gradient bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                    Profile
                </h1>
                <hr className="my-4 border-gray-600" />
                
                <div className="flex flex-col items-center mb-6">
                    <FaUserCircle className="text-green-500 text-6xl mb-2" />
                    <p className="text-lg">Profile Page</p>
                    <h2 className="mt-4 text-xl">
                        {data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`} className="text-blue-500 hover:underline">{data}</Link>}
                    </h2>
                </div>

                <hr className="my-4 border-gray-600" />
                
                <div className="flex flex-col space-y-4">
                    <button
                        onClick={logout}
                        className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg shadow-lg hover:from-red-600 hover:to-red-700 focus:outline-none"
                    >
                        <FaSignOutAlt className="mr-2" /> Logout
                    </button>
                    <button
                        onClick={getUserDetails}
                        className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none"
                    >
                        Get User Details
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
