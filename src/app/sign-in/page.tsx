"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignInPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<{ email: string; password: string }>();
  const router = useRouter();

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
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/images/sn4.jpg"
            alt="Sign-In Illustration"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-black text-center mb-6">Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-black font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-black font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}