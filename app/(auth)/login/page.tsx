"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaSpinner } from "react-icons/fa"; // Importing React Icons

const Page = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async (e:any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log(response);
      router.push('/profile');
    } catch (error: any) {
      console.log("Login Failed ", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password));
  }, [user]);

  return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-center min-h-screen py-2"
    >
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
        Welcome Back
      </h2>
      <div className="p-8 w-full">
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
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
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
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
            />
          </div>
          <div className="flex items-center mb-6">
            <Link href="/forgot-password" className="text-sm text-green-400 hover:underline">
              Forgot password?
            </Link>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg 
              hover:from-green-600 hover:to-emerald-700 focus:outline-none 
              focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
              focus:ring-offset-gray-900 transition duration-200 ${buttonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="submit"
            disabled={buttonDisabled || loading}
          >
            {loading ? <FaSpinner className="w-6 h-6 animate-spin mx-auto" /> : "Login"}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <Link href="/SignUp" className="text-green-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>

    </div>

  );
};

export default Page;
