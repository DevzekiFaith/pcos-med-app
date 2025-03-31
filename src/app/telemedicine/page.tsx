import Image from "next/image";
import Header from "@/Component/Header/Header";
import Footer from "@/Component/Footer/Footer";

export default function TelemedicinePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow py-12 px-6">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-teal-600">
          Telemedicine: Accessible Healthcare at Your Fingertips
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Connect with healthcare providers from the comfort of your home. Our telemedicine platform ensures secure, convenient, and personalized care for managing PCOS and other health concerns.
        </p>

        {/* Features Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-screen-lg mx-auto">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Why Choose Telemedicine?
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-4">
              <li>Convenient access to healthcare professionals anytime, anywhere.</li>
              <li>Secure video consultations for personalized care.</li>
              <li>Reduced travel time and costs for appointments.</li>
              <li>Comprehensive follow-ups and progress tracking.</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <Image
              src="/images/telemedicine1.jpg"
              alt="Telemedicine Consultation"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-screen-lg mx-auto">
          {/* Left Image */}
          <div className="flex-1">
            <Image
              src="/images/telemedicine2.jpg"
              alt="Secure Video Consultation"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our telemedicine platform is designed to make healthcare simple and accessible:
            </p>
            <ol className="list-decimal list-inside text-gray-700 text-lg space-y-4">
              <li>Sign up and create your profile.</li>
              <li>Book an appointment with a healthcare provider.</li>
              <li>Join a secure video consultation at your scheduled time.</li>
              <li>Receive personalized advice and treatment plans.</li>
            </ol>
          </div>
        </div>

        {/* Streamlit Card */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://cyclecare-telemedicine.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:translate-y-2 duration-300 cursor-pointer max-w-sm"
          >
            <div className="text-teal-600 text-4xl mb-4">
              <Image
                src="/images/telemedicine-icon.png" // Replace with an appropriate icon or image
                alt="Telemedicine Icon"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-black">Telemedicine Platform</h2>
            <p className="text-gray-600">
              Access our secure telemedicine platform for personalized healthcare.
            </p>
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}