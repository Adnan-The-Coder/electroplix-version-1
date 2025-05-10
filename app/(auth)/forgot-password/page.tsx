/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaSpinner } from "react-icons/fa"; // Importing React Icons
import Link from "next/link";
import { NextResponse } from "next/server";
import axios from "axios";

import ToastMessage from "@/components/ui/ToastMessage";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Toast {
    id: number;
    message: string;
    type: "success" | "error";
}

const ForgotPasswordPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [nextId, setNextId] = useState(0);
    const [user, setUser] = useState({ email: "" });
    const [countdown, setCountdown] = useState(0); // Timer state

    const forgot_Passwrd = async (e: React.FormEvent) => {
        e.preventDefault();
        if (countdown > 0) return; // Prevent form submission if countdown is active

        try {
            setLoading(true);
            setCountdown(60); // Start countdown at 60 seconds
            setButtonDisabled(true); // Disable button

            const response = await axios.post('/api/users/forgot-password', { email: user.email });
            console.log(response);

            addToast("If the email is associated with an account, a reset link has been sent.", 'success');
            setTimeout(() => {
                setLoading(false);
                addToast("Reset Your Password with the link sent to you email", 'success');
            }, 4000);

            // Start countdown timer
            const intervalId = setInterval(() => {
                setCountdown(prev => {
                    if (prev <= 1) {
                        clearInterval(intervalId);
                        setButtonDisabled(false); // Re-enable button when countdown ends
                        
return 0;
                    }
                    
return prev - 1;
                });
            }, 1000);

            // Clear interval on component unmount
            return () => clearInterval(intervalId);
        } catch (error: any) {
            setLoading(false);
            if (error.message?.status === 400) {
                addToast("Email Not Found, Probably You didn't sign Up", 'error');
                addToast("Redirectly to Sign Up...", 'error');
                setTimeout(() => {
                    setLoading(false); // Ensure loading state is set before redirect
                    router.push('/SignUp');
                }, 1000);
            } else if (error.response?.status === 500) {
                addToast("Internal server error. Please try again later.", 'error');
            } else {
                addToast("An unexpected error occurred. Please try again.", 'error');
            }
            
return NextResponse.json(error.message);
        }
    };

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

    return (
      <>
        <Navbar />
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-gray-900 to-emerald-900 py-8">
          <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex min-h-[60vh] w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-800 bg-opacity-50 py-2 shadow-xl backdrop-blur-xl"
                >
            <h2 className="mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-center text-3xl font-bold text-transparent">
              Reset Password
            </h2>
            <div className="w-full p-8">
              <form onSubmit={forgot_Passwrd}>
                <div className="mb-4">
                  <label htmlFor="email" className="flex items-center">
                    <FaEnvelope className="mr-2" />
                    Enter your Email Address
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
                  {loading ? <FaSpinner className="mx-auto size-6 animate-spin" /> : "Send Reset Password Link"}
                </motion.button>
                {countdown > 0 && (
                <p className="mt-2 text-center text-gray-400">
                  Resend in {countdown} seconds
                </p>
                            )}
              </form>
            </div>
            <div className="flex justify-center bg-gray-900 bg-opacity-50 px-8 py-4">
              <p className="text-sm text-gray-400">
                Don't have an account?{" "}
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
        <Footer />
      </>
    );
};

export default ForgotPasswordPage;
