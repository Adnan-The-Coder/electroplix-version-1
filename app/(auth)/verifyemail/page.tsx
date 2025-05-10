/* eslint-disable no-unused-vars */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // Importing React Icons
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function VerifyEmailPage() {
    const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [verified, setVerified] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleChange = (index: number, value: string) => {
        const newCode = [...code];

        // Handle pasted content
        if (value.length > 1) {
            const pastedCode = value.slice(0, 6).split("");
            for (let i = 0; i < 6; i++) {
                newCode[i] = pastedCode[i] || "";
            }
            setCode(newCode);

            // Focus on the last non-empty input or the first empty one
            const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
            const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
            inputRefs.current[focusIndex]?.focus();
        } else {
            newCode[index] = value;
            setCode(newCode);

            // Move focus to the next input field if value is entered
            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const verificationCode = code.join("");

        setIsLoading(true);
        try {
            const response = await axios.post('/api/users/verifyemail', { token: verificationCode });
            console.log("After posting axios", response.data);
            setVerified(true);
            toast.success("Email verified successfully");
        } catch (error: any) {
            setError(true);
            console.log(error.response?.data);
            toast.error("Verification failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    // Auto submit when all fields are filled
    useEffect(() => {
        if (code.every((digit) => digit !== "")) {
            handleSubmit(new Event("submit") as unknown as React.FormEvent<HTMLFormElement>);
        }
    }, [code]);

    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-gray-900 to-emerald-900 py-8">
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
          <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='w-full max-w-md rounded-2xl bg-gray-800 bg-opacity-50 p-8 shadow-xl backdrop-blur-xl'
            >
            <h1 className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-center text-4xl font-bold text-transparent">
              Verify Email
            </h1>
            <p className="mb-6 text-center text-gray-300">Enter the 6-digit code sent to your email address.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-between">
                {code.map((digit, index) => (
                  <input
                                key={index}
                                ref={(el) => { inputRefs.current[index] = el; }}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="size-12 rounded-lg border-2 border-gray-600 bg-gray-700 text-center text-2xl font-bold text-white focus:border-green-500 focus:outline-none"
                            />
                        ))}
              </div>
              {error && <p className="mt-2 font-semibold text-red-500">Verification failed. Please try again.</p>}
              <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={isLoading || code.some((digit) => !digit)}
                        className="w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 font-bold text-white shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
                    >
                {isLoading ? "Verifying..." : "Verify Email"}
              </motion.button>
            </form>
            {verified && (
            <div className="mt-6 flex flex-col items-center">
              <FaCheckCircle className="mb-2 text-5xl text-green-500" />
              <h2 className="text-2xl">Email Verified</h2>
              <Link href="/profile" className="mt-2 text-blue-500 hover:underline">Continue to Dashboard</Link>
            </div>
                )}
          </motion.div>
        </div>
      </div>
    );
}
