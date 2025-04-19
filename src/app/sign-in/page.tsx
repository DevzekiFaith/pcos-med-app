"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";

export default function SignInPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<{ email: string; password: string }>();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: { email: string; password: string }) => {
    // Mock authentication logic
    if (data.email === "unovaconsultingfirstafrica@gmail.com" && data.password === "Praise4212#") {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/"); // Redirect to a protected route
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl flex flex-col lg:flex-row items-center gap-8 transition-transform transform hover:scale-105 hover:translate-y-2 duration-300">
        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/images/sn4.jpg"
            alt="Sign-In Illustration"
            width={400}
            height={400}
            className="rounded-lg shadow-md hover:scale-110 
            transition-transform 
            duration-300"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-black text-center mb-6 
          transition-transform transform hover:scale-105 duration-300">
            Welcome Back!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-black font-medium">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black transition-transform transform hover:scale-105 duration-300"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-black font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password", { required: "Password is required" })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none 
                  focus:ring-2 focus:ring-teal-500 text-black transition-transform transform hover:scale-105 duration-300"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash className="text-black" /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}