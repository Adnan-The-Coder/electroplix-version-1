/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaSpinner } from "react-icons/fa"; // Importing React Icons

import ToastMessage from "@/components/ui/ToastMessage"; // Import your ToastMessage component
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

const Page: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [nextId, setNextId] = useState(0);

  const addToast = (message: string, type: 'success' | 'error') => {
    const newToast = { id: nextId, message, type };
    setToasts((prev) => [...prev, newToast]);
    setNextId((prev) => prev + 1);

    // Auto-remove toast after 3 seconds
    setTimeout(() => {
      removeToast(newToast.id);
    }, 3000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log(response);
      
      // Show success toast
      addToast("Login successful! Redirecting...", 'success');
  
      // Wait for 2 seconds before redirecting
      setTimeout(() => {
        setLoading(false); // Ensure loading state is set before redirect
        router.push('/profile');
      }, 2000);
    } catch (error: any) {
      setLoading(false); // Ensure loading is false in case of error
      if (error.response?.status === 400) {
        addToast("Wrong credentials. Please try again.", 'error');
      } else if (error.response?.status === 500) {
        addToast("Internal server error. Please try again later.", 'error');
      } else {
        addToast("An unexpected error occurred. Please try again.", 'error');
      }
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password));
  }, [user]);

  return (
    <>
      <Navbar/>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-gray-900 to-emerald-900 py-8">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-800 bg-opacity-50 py-2 shadow-xl backdrop-blur-xl"
      >
          <h2 className="mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-center text-3xl font-bold text-transparent">
            Welcome Back
          </h2>
          <div className="w-full p-8">
            <form onSubmit={onLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  Email Address
                </label>
                <input
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email Address"
                className="w-full rounded-lg border border-gray-300 p-2 focus:border-gray-600 focus:outline-none"
              />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="flex items-center">
                  <FaLock className="mr-2" />
                  Password
                </label>
                <input
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
                className="w-full rounded-lg border border-gray-300 p-2 focus:border-gray-600 focus:outline-none"
              />
              </div>
              <div className="mb-6 flex items-center">
                <Link href="/forgot-password" className="text-sm text-green-400 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 font-bold text-white shadow-lg 
                transition duration-200 hover:from-green-600 
                hover:to-emerald-700 focus:outline-none focus:ring-2 
                focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${buttonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
              type="submit"
              disabled={buttonDisabled || loading}
            >
                {loading ? <FaSpinner className="mx-auto size-6 animate-spin" /> : "Login"}
              </motion.button>
            </form>
          </div>
          <div className="flex justify-center bg-gray-900 bg-opacity-50 px-8 py-4">
            <p className="text-sm text-gray-400">
              Don`t have an account?{" "}
              <Link href="/SignUp" className="text-green-400 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
        <div className="absolute right-0 top-0 p-4">
          {toasts.map((toast) => (
            <ToastMessage key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
        ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page;
