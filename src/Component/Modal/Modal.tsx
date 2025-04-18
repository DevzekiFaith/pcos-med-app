"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Check if the user is authenticated
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated"); // Remove authentication flag
    setIsAuthenticated(false); // Update state
    toggleModal(); // Close the modal
    router.push("/sign-in"); // Redirect to the Sign-In page
  };

  return (
    <div>
      {/* Burger Icon */}
      <button
        className="lg:hidden text-black focus:outline-none"
        onClick={toggleModal}
        aria-label="Toggle Modal"
      >
        <FaBars className="h-8 w-8" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
          <div className="bg-white w-11/12 max-w-md rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={toggleModal}
              title="Close Modal"
            >
              <FaTimes className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col items-center gap-6">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/pics1.jpg"
                  alt="CycleCare Logo"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-bold text-gray-800">
                  CycleCare
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-4 text-gray-700 text-lg">
                <Link href="/" onClick={toggleModal}>
                  Home
                </Link>
                <Link href="/diagnosis" onClick={toggleModal}>
                  Diagnosis
                </Link>
                <Link href="/telemedicine" onClick={toggleModal}>
                  Telemedicine
                </Link>
                <Link href="/community" onClick={toggleModal}>
                  Community
                </Link>
                <Link href="/resources" onClick={toggleModal}>
                  Resources
                </Link>
                {isAuthenticated ? (
                  <button
                    onClick={handleSignOut}
                    className="text-red-600 border border-red-600 
                    rounded-full px-4 py-2 hover:bg-red-600 
                    hover:text-white transition"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link
                    href="/sign-in"
                    onClick={toggleModal}
                    className="text-teal-600 border border-teal-600 
                    rounded-full px-4 py-2 hover:bg-teal-600 hover:text-white 
                    transition text-center"
                  >
                    Sign In
                  </Link>
                )}
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}