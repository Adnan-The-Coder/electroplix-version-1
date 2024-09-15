"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


const Page = () => {
  const router = useRouter();
  const [user,setUser] = React.useState({
    email:"",
    password:"",
    username:"",

  })

  const onSignup = async ()=>{

  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Sign up  Page is here</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
            id="username"
            type="text"
            value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}
            placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input
            id="email"
            type="email"
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
            id="password"
            type="password"
            value={user.email}
            onChange={(e)=>setUser({...user,password:e.target.value})}
            placeholder="password"
      />
      <button className="p-2 border border-gray-300 rounded-lg  mb-4 focus:outline-none focus:border-gray-600" onClick={onSignup}>Sign Up</button>
      <Link href={'/login'}>Visit Login</Link>
    </div>
  )
}

export default Page;