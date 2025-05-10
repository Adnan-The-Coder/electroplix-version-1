"use client";
import { useEffect, useState } from "react";

const getUserInfo = async () => {
  const res = await fetch("https://ipapi.co/json/");
  const data = await res.json();
  
  return {
    ip: data.ip,
    country: data.country_name,
    city: data.city,
    region: data.region,
  };
};

export default function Home() {
  const [userInfo, setUserInfo] = useState({
    ip: "",
    country: "",
    city: "",
    region: "",
  });

  useEffect(() => {
    getUserInfo().then(setUserInfo);
  }, []);

  return (
    <div>
      <h1>User IP Address: {userInfo.ip}</h1>
      <h2>Location Details:</h2>
      <p>Country: {userInfo.country}</p>
      <p>City: {userInfo.city}</p>
      <p>Region: {userInfo.region}</p>
    </div>
  );
}
