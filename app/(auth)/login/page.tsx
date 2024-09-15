"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


const Page = () => {
  const [user,setUser] = React.useState({
    email:"",
    password:"",

  })

  const onLogin = async ()=>{

  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login up  Page is here</h1>
      <hr />
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
      <button className="p-2 border border-gray-300 rounded-lg  mb-4 focus:outline-none focus:border-gray-600" onClick={onLogin}>Login Here</button>
      <Link href={'/SignUp'}>Visit Sign Up</Link>
    </div>
  )
}

export default Page;