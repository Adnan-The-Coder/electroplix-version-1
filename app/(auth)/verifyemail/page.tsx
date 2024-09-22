"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa"; // Importing React Icons

export default function VerifyEmailPage() {
    const [token, setToken] = useState<string>("");
    const [verified, setVerified] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const verifyUserEmail = async () => {
        try {
            const response = await axios.post('/api/users/verifyemail', { email: 'user@example.com', token });
            console.log("After posting axios", response.data);
            setVerified(true);
        } catch (error: any) {
            setError(true);
            console.log(error.response?.data);
        }
    };

    useEffect(() => {
        const urlToken = new URLSearchParams(window.location.search).get("token");
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if (token) {
            verifyUserEmail();
        }
    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl p-8'
            >
                <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                    Verify Email
                </h1>

                {verified && (
                    <div className="flex flex-col items-center mt-6">
                        <FaCheckCircle className="text-green-500 text-5xl mb-2" />
                        <h2 className="text-2xl">Email Verified</h2>
                        <Link href="/login" className="text-blue-500 hover:underline mt-2">Login to continue</Link>
                    </div>
                )}
                
                {error && (
                    <div className="flex flex-col items-center mt-6">
                        <FaExclamationCircle className="text-red-500 text-5xl mb-2" />
                        <h2 className="text-2xl text-red-500">Error occurred</h2>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
