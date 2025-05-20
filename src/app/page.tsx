import Image from "next/image";
import Link from "next/link";
import Header from "@/Component/Header/Header"; 
import Footer from "@/Component/Footer/Footer";
import MeetAda from "@/Component/Meet-Ada/Meet-Ada";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main
        className="flex flex-col items-center justify-center flex-grow text-white 
        text-center lg:text-left p-8"
        style={{ backgroundColor: "#129D90" }}
      >
        <div className="w-full max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              AI-Powered Healthcare for PCOS Management
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-8">
              Personalized care solutions combining clinical expertise with advanced technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/diagnosis"
                className="bg-white text-teal-600 font-medium 
                rounded-full px-6 py-3 hover:bg-gray-100 transition"
              >
                Get Started
              </Link>
              <Link
                href="#learn-more"
                className="bg-transparent border border-white 
                text-white font-medium rounded-full px-6 py-3 
                hover:bg-white hover:text-teal-600 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/chart1.jpg"
              width={600}
              height={400}
              alt="PCOS Management Dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div>
          <MeetAda/>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
