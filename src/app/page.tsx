import Image from "next/image";
import Link from "next/link";
import Header from "@/Component/Header/Header"; 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main
        className="flex flex-col items-center justify-center flex-grow text-white text-center p-8"
        style={{ backgroundColor: "#129D90" }}
      >
        <div className="w-full max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Content */}
          <div
            className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg transition-transform duration-500 hover:scale-105"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Empowering Women’s Health
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6">
              Track your cycle, get personalized diagnoses, and connect with a supportive community.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="#get-started"
                className="bg-white text-teal-600 font-medium rounded-full px-6 py-3 transition-transform transform hover:scale-110 hover:bg-[#129D90] hover:text-white"
              >
                Get Started
              </Link>
              <Link
                href="#learn-more"
                className="bg-transparent border border-white text-white font-medium rounded-full px-6 py-3 hover:bg-white hover:text-teal-600 transition-transform transform hover:scale-110"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Data BI Image */}
          <div
            className="flex justify-center transition-transform duration-500 hover:scale-105 hover:translate-y-2"
          >
            <Image
              src="/images/chart1.jpg"
              width={800}
              height={800}
              alt="chart-image"
              className="rounded-lg shadow-lg w-[600px] h-[340px]"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        <p>&copy; 2025 CycleCare. All rights reserved.</p>
      </footer>
    </div>
  );
}
