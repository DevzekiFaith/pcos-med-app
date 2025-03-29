import { FaStethoscope, FaVideo, FaHeartbeat } from "react-icons/fa";
import Header from "@/Component/Header/Header";
import Footer from "@/Component/Footer/Footer";

export default function DiagnosisPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center py-12 px-6">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-black">
          Comprehensive PCOS Care Solutions
        </h1>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg">
          {/* Clinical Diagnosis */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:translate-y-2 duration-300">
            <div className="text-teal-600 text-4xl mb-4">
              <FaStethoscope /> {/* Clinical Diagnosis Icon */}
            </div>
            <h2 className="text-xl font-semibold mb-2 text-black">Clinical Diagnosis</h2>
            <p className="text-gray-600">
              AI-powered diagnostic tools for accurate PCOS assessment and monitoring.
            </p>
          </div>

          {/* Telemedicine */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:translate-y-2 duration-300">
            <div className="text-teal-600 text-4xl mb-4">
              <FaVideo /> {/* Telemedicine Icon */}
            </div>
            <h2 className="text-xl font-semibold mb-2 text-black">Telemedicine</h2>
            <p className="text-gray-600">
              Connect with healthcare providers through secure video consultations.
            </p>
          </div>

          {/* Lifestyle Management */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:translate-y-2 duration-300">
            <div className="text-teal-600 text-4xl mb-4">
              <FaHeartbeat /> {/* Lifestyle Management Icon */}
            </div>
            <h2 className="text-xl font-semibold mb-2 text-black">Lifestyle Management</h2>
            <p className="text-gray-600">
              Personalized nutrition and exercise plans tailored to your needs.
            </p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}