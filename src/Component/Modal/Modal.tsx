"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
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
        <div className="fixed inset-0 bg-black opacity-95 z-50 flex items-center justify-center">
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
                <Link href="/sign-in" onClick={toggleModal}>
                  Sign In
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}