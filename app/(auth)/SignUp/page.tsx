/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaSpinner } from "react-icons/fa";

import PasswordStrengthMeter from "@/components/PasswordStrengthMeter";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastMessage from "@/components/ui/ToastMessage"; // Import your ToastMessage component

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
    username: "",
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

  const onSignup = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/signup", user);
      addToast("Sign up successful! An email has been sent to verify your account.", 'success');
      
      const login_user = async () => {
        try {
          const response = await axios.post("/api/users/login", user);
          console.log(response);
          router.push('/verifyemail');
        } catch (error: any) {
          console.log("Login Failed ", error.message);
          addToast(error.message, 'error');
        }
      };
      setTimeout(login_user, 3000); // Delay login after signup success
    } catch (error: any) {
      console.log("Sign Up failed ", error.message);
      addToast(error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password && user.username));
  }, [user]);

  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-gray-900 to-emerald-900 py-8">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex min-h-screen w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-800 bg-opacity-50 py-2 shadow-xl backdrop-blur-xl"
        >
          <h2 className="mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-center text-3xl font-bold text-transparent">
            Create Account
          </h2>
          <div className="w-full p-8">
            <form onSubmit={(e) => { e.preventDefault(); onSignup(); }}>
              <div className="mb-4">
                <label htmlFor="username" className="flex items-center">
                  <FaUser className="mr-2" />
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  placeholder="username"
                  className="w-full rounded-lg border border-gray-300 p-2 focus:border-gray-600 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="email"
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
                  placeholder="password"
                  className="w-full rounded-lg border border-gray-300 p-2 focus:border-gray-600 focus:outline-none"
                />
                <PasswordStrengthMeter password={user.password} />
              </div>
              <motion.button
                className={`mt-5 w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 py-3 font-bold text-white shadow-lg 
                  transition duration-200 hover:from-green-600 
                  hover:to-emerald-700 focus:outline-none focus:ring-2 
                  focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${buttonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={onSignup}
                disabled={buttonDisabled || loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? <FaSpinner className="mx-auto animate-spin" size={24} /> : "Sign Up"}
              </motion.button>
            </form>
            {/* Add terms and conditions text */}
            <div className="mt-4 text-center text-sm text-gray-400">
              By signing up, you agree with our{" "}
              <Link href="/Terms-And-Conditions" target="_blanck" className="text-green-400 hover:underline">
                terms and conditions
              </Link>.
            </div>
          </div>
          <div className="flex justify-center bg-gray-900 bg-opacity-50 px-8 py-4">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link href={'/login'} className='text-green-400 hover:underline'>
                Login
              </Link>
            </p>
          </div>
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

export default Page;
