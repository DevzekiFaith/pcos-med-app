import { FaLeaf, FaFish, FaAppleAlt } from "react-icons/fa";
import { GiWheat } from "react-icons/gi";
import Header from "@/Component/Header/Header";
import Footer from "@/Component/Footer/Footer";
import Image from "next/image"; // Importing Image for profile pictures

export default function Community() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow py-12 px-6">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-black">
          Join Our Supportive Community
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
          {/* Latest Discussions Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Latest Discussions
            </h2>
            <div className="space-y-4">
              {/* Discussion 1 */}
              <div className="flex items-center gap-4">
                <Image
                  src="/images/me4.jpg" // Replace with the actual path to the image
                  alt="Sarah M."
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold text-black">Sarah M.</h3>
                  <p className="text-xs text-gray-500 mb-1">2 hours ago</p>
                  <p className="text-gray-600">
                    Sharing my success story with lifestyle changes...
                  </p>
                </div>
              </div>
              {/* Discussion 2 */}
              <div className="flex items-center gap-4">
                <Image
                  src="/images/me6.jpg" // Replace with the actual path to the image
                  alt="Emily R."
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold text-black">Emily R.</h3>
                  <p className="text-xs text-gray-500 mb-1">5 hours ago</p>
                  <p className="text-gray-600">
                    Tips for managing PCOS symptoms naturally...
                  </p>
                </div>
              </div>
              {/* Discussion 3 */}
              <div className="flex items-center gap-4">
                <Image
                  src="/images/me7.jpg" // Replace with the actual path to the image
                  alt="Alex J."
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold text-black">Alex J.</h3>
                  <p className="text-xs text-gray-500 mb-1">1 day ago</p>
                  <p className="text-gray-600">
                    How to stay motivated while managing PCOS...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Foods Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Recommended Foods
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Food 1 */}
              <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center text-center">
                <FaLeaf className="text-teal-600 text-3xl mb-2" />
                <h3 className="text-sm font-semibold text-black">
                  Green Leafy Vegetables
                </h3>
                <p className="text-xs text-gray-500">
                  Rich in iron and antioxidants
                </p>
              </div>
              {/* Food 2 */}
              <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center text-center">
                <FaFish className="text-teal-600 text-3xl mb-2" />
                <h3 className="text-sm font-semibold text-black">Fatty Fish</h3>
                <p className="text-xs text-gray-500">
                  High in omega-3 fatty acids
                </p>
              </div>
              {/* Food 3 */}
              <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center text-center">
                <GiWheat className="text-teal-600 text-3xl mb-2" />
                <h3 className="text-sm font-semibold text-black">Whole Grains</h3>
                <p className="text-xs text-gray-500">
                  Complex carbohydrates
                </p>
              </div>
              {/* Food 4 */}
              <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center text-center">
                <FaAppleAlt className="text-teal-600 text-3xl mb-2" />
                <h3 className="text-sm font-semibold text-black">Berries</h3>
                <p className="text-xs text-gray-500">
                  Low-glycemic fruits
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}