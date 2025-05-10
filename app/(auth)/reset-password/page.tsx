/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaLock, FaSpinner, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import Link from "next/link";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastMessage from "@/components/ui/ToastMessage";

interface Toast {
    id: number;
    message: string;
    type: 'success' | 'error';
}

const ResetPasswordPage = () => {
    const router = useRouter();
    const [token, setToken] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [verified, setVerified] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [nextId, setNextId] = useState(0);

    const addToast = (message: string, type: 'success' | 'error') => {
        const newToast = { id: nextId, message, type };
        setToasts((prev) => [...prev, newToast]);
        setNextId((prev) => prev + 1);
        setTimeout(() => removeToast(newToast.id), 3000);
    };

    const removeToast = (id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    const validatePasswords = () => {
        if (!newPassword || !confirmPassword) {
            addToast("Both password fields are required", 'error');
            
return false;
        }
        if (newPassword !== confirmPassword) {
            addToast("Passwords must match", 'error');
            
return false;
        }
        
return true;
    };

    const resetPassword = async () => {
        if (!validatePasswords()) return;

        try {
            setLoading(true);
            const response = await axios.post('/api/users/reset-password', { token, password: newPassword });
            console.log("After posting axios", response.data);
            setVerified(true);
            addToast("Password reset successfully!", 'success');
            setTimeout(() => router.push('/login'), 2000);
        } catch (error: any) {
            setError(true);
            console.log(error.response?.data);
            addToast("Error occurred while resetting password", 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const urlToken = new URLSearchParams(window.location.search).get("token");
        setToken(urlToken || "");
    }, []);

    return (
      <>
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-gray-900 to-emerald-900 py-8">
          <Navbar />
          <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-800 bg-opacity-50 py-2 shadow-xl backdrop-blur-xl"
                >
            <h2 className="mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-center text-3xl font-bold text-transparent">
              Create New Password
            </h2>
            <div className="w-full p-8">
              <form onSubmit={(e) => { e.preventDefault(); resetPassword(); }}>
                <div className="mb-4">
                  <label htmlFor="newPassword" className="flex items-center">
                    <FaLock className="mr-2" />
                    New Password
                  </label>
                  <input
                                    id="newPassword"
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="New Password"
                                    className="w-full rounded-lg border border-gray-300 p-2 focus:border-gray-600 focus:outline-none"
                                    required
                                />
                </div>
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="flex items-center">
                    <FaLock className="mr-2" />
                    Confirm Password
                  </label>
                  <input
                                    id="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                    className="w-full rounded-lg border border-gray-300 p-2 focus:border-gray-600 focus:outline-none"
                                    required
                                />
                </div>
                <motion.button
                                className={`mt-5 w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 py-3 font-bold text-white shadow-lg 
                                    transition duration-200 hover:from-green-600 
                                    hover:to-emerald-700 focus:outline-none focus:ring-2 
                                    focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
                                onClick={resetPassword}
                                disabled={loading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                  {loading ? <FaSpinner className="mx-auto animate-spin" size={24} /> : "Set New Password"}
                </motion.button>
              </form>
            </div>
            {verified && (
            <div className="mt-6 flex flex-col items-center">
              <FaCheckCircle className="mb-2 text-5xl text-green-500" />
              <h2 className="text-2xl">Password Reset Success!</h2>
              <Link href="/login" className="mt-2 text-blue-500 hover:underline">Login to continue</Link>
            </div>
                    )}
            {error && (
            <div className="mt-6 flex flex-col items-center">
              <FaExclamationCircle className="mb-2 text-5xl text-red-500" />
              <h2 className="text-2xl text-red-500">Error occurred</h2>
            </div>
                    )}
          </motion.div>
        </div>
        <Footer />
        <div className="absolute right-0 top-0 p-4">
          {toasts.map((toast) => (
            <ToastMessage key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
                ))}
        </div>
      </>
    );
};

export default ResetPasswordPage;
