"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
            <h1 className="text-4xl">Verify Email</h1>
            <h2 className="p-2 bg-orange-500 text-black">{token ? `${token}` : "No Token"}</h2>

            {verified && (
                <div>
                    <h2 className="text-2xl">Email verified</h2>
                    <Link className="text-blue-500" href="/login">Login</Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-2xl text-red-500">Error occurred</h2>
                </div>
            )}
        </div>
    );
}
