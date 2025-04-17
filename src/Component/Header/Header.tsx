"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/Component/Modal/Modal";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated"); // Remove authentication flag
    setIsAuthenticated(false); // Update state
    router.push("/sign-in"); // Redirect to the Sign-In page
  };

  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <Image
          src="/images/pics1.jpg"
          alt="CycleCare Logo"
          width={40}
          height={40}
        />
        <Link href={"/"} className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-800">CycleCare</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:flex gap-6 text-gray-700">
        <Link href="/" className="hover:text-teal-600">
          Home
        </Link>
        <Link href="/diagnosis" className="hover:text-teal-600">
          Diagnosis
        </Link>
        <Link href="/telemedicine" className="hover:text-teal-600">
          Telemedicine
        </Link>
        <Link href="/community" className="hover:text-teal-600">
          Community
        </Link>
        <Link href="/resources" className="hover:text-teal-600">
          Resources
        </Link>
      </nav>

      {/* Sign In / Sign Out Button */}
      <div className="hidden lg:flex gap-4">
        {isAuthenticated ? (
          <button
            onClick={handleSignOut}
            className="text-red-600 border border-red-600 rounded-full px-4 py-2 hover:bg-red-600 hover:text-white transition"
          >
            Sign Out
          </button>
        ) : (
          <Link
            href="/sign-in"
            className="text-teal-600 border border-teal-600 rounded-full px-4 py-2 hover:bg-teal-600 hover:text-white transition"
          >
            Sign In
          </Link>
        )}
      </div>

      {/* Modal for Mobile/Tablet */}
      <Modal />
    </header>
  );
}