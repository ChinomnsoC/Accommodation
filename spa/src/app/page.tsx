// Mark this as a Client Component
"use client"; 

import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axiosInstance.get('/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Accommodation App</h1>
      <p>{message}</p>
    </div>
  );
}