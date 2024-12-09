import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !role) {
      alert("Please fill in all the fields.");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/signup",
        { name, email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      console.log("Signup successful:", data);
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error.response ? error.response.data : error.message);
      alert(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  const handleGoogleSignupSuccess = (response) => {
    console.log("Google Signup Success:", response.credential);
    navigate("/");
  };

  const handleGoogleSignupError = () => {
    console.error("Google Signup Failed");
    alert("Google signup failed. Please try again.");
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white border border-gray-300 w-96 py-10 flex items-center flex-col mb-4 shadow-md">
        <div className="bg-no-repeat mb-6 h-[70px] w-[240px]">
          <p className="max-w-lg text-3xl font-semibold leading-loose text-gray-900 dark:text-white">
            Signup
          </p>
        </div>

        <form className="w-72 flex flex-col" onSubmit={handleSubmit}>
          <input
            autoFocus
            className="text-sm w-full mb-3 rounded-lg border bg-gray-100 border-gray-300 px-4 py-3 focus:outline-none focus:border-blue-400"
            id="name"
            placeholder="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="text-sm w-full mb-3 rounded-lg border bg-gray-100 border-gray-300 px-4 py-3 focus:outline-none focus:border-blue-400"
            id="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="text-sm w-full mb-3 rounded-lg border bg-gray-100 border-gray-300 px-4 py-3 focus:outline-none focus:border-blue-400"
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            className="text-sm w-full mb-5 rounded-lg border bg-gray-100 border-gray-300 px-4 py-3 focus:outline-none focus:border-blue-400"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="" disabled>
              Select your role
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            className="text-sm text-center bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        <div className="flex justify-between items-center w-72 mt-4">
          <span className="bg-gray-300 h-px flex-grow"></span>
          <span className="px-2 text-xs text-gray-500 font-semibold uppercase">
            Or
          </span>
          <span className="bg-gray-300 h-px flex-grow"></span>
        </div>

        <div className="mt-4 w-full flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSignupSuccess}
            onError={handleGoogleSignupError}
          />
        </div>
      </div>

      <div className="bg-white border border-gray-300 text-center w-96 py-4">
        <span className="text-sm">Already have an account?</span>{" "}
        <Link to="/login" className="text-blue-500 text-sm font-semibold">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
