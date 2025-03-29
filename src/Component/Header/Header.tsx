import Image from "next/image";
import Link from "next/link";
import Modal from "@/Component/Modal/Modal"; // Importing the Modal component

export default function Header() {
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
        <span className="text-xl font-bold text-gray-800">CycleCare</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:flex gap-6 text-gray-700">
        <Link href="#home" className="hover:text-teal-600">
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

      {/* Sign In Button */}
      <div className="hidden lg:flex gap-4">
        <Link
          href="#sign-in"
          className="text-teal-600 border border-teal-600 rounded-full px-4 py-2 hover:bg-teal-600 hover:text-white transition"
        >
          Sign In
        </Link>
      </div>

      {/* Modal for Mobile/Tablet */}
      <Modal />
    </header>
  );
}