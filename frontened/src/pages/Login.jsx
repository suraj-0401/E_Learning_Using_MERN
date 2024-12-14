import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isLogined, setIsLogined] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password || !role) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data && data.message === "Login successful!") {
        const { token, userId, name } = data.data;  
        localStorage.setItem("isLogined", "true");
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("email", email);
        localStorage.setItem("userId", userId);
        localStorage.setItem("name", name);
        localStorage.setItem("user", JSON.stringify({ userId, name }));

        console.log("Login successful:", data);
        setIsLogined(true);
        navigate("/"); 
      } else {
        alert("Login failed. Please try again.");
      }

    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      alert(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log("Google Login Success:", response.credential);
    localStorage.setItem("googleToken", response.credential);
    navigate("/");
  };

  const handleGoogleLoginError = () => {
    console.log("Google Login Failed");
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white border border-gray-300 w-96 py-10 flex items-center flex-col mb-4 shadow-md">
        
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Login</h2>

        <form className="w-72 flex flex-col" onSubmit={handleLogin}>
          <input
            autoFocus
            className="text-sm w-full mb-3 rounded-lg border bg-gray-100 border-gray-300 px-4 py-3 focus:outline-none focus:border-blue-400"
            id="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="text-sm w-full mb-3 rounded-lg border bg-gray-100 border-gray-300 px-4 py-3 focus:outline-none focus:border-blue-400"
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            className="text-sm w-full mb-5 rounded-lg border bg-gray-100 border-gray-300 px-4 py-3 focus:outline-none focus:border-blue-400"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            className="text-sm text-center bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600"
          >
            Log In
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
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
        </div>

        <Link to="#" className="text-xs text-blue-700 mt-4 cursor-pointer">
          Forgot password?
        </Link>
      </div>

      <div className="bg-white border border-gray-300 text-center w-96 py-4">
        <span className="text-sm">Don't have an account?</span>{" "}
        <Link to="/signup" className="text-blue-500 text-sm font-semibold">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
