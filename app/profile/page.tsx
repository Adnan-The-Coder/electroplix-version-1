"use client";
import axios from "axios";
import Link from "next/link";
import {toast} from "react-hot-toast";
import Router, { useRouter } from "next/navigation";
import { useState } from "react";


export default function  ProfilePage(){
    const router = useRouter();
    const [data, setData] = useState("nothing");

    const getUserDetails = async () => {
        const res =  await axios.get('/api/users/me');
        console.log(res.data);
        setData(res.data.data._id);
    }

    const logout = async () => {
        try {   
            await axios.get('/api/users/logout');
            toast.success("Logout Successful");
            router.push('/login');
            
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message);
            
        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <h2>{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr />
            <button onClick={logout}>Logout</button>
            <button onClick={getUserDetails}>Get User Details   </button>
        </div>
    )
}