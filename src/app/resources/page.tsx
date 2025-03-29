import Header from "@/Component/Header/Header";
import Footer from "@/Component/Footer/Footer";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow py-12 px-6">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-teal-600">
          Resources for PCOS Management
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Explore our curated resources to help you better understand and manage PCOS. From educational articles to practical tools, we’ve got you covered.
        </p>

        {/* Resources Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
          {/* Resource 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold text-teal-600 mb-4">
              Educational Articles
            </h2>
            <p className="text-gray-600 mb-6">
              Learn about PCOS symptoms, treatments, and lifestyle tips from trusted experts.
            </p>
            <a
              href="#articles"
              className="bg-teal-600 text-white font-medium rounded-full px-6 py-3 hover:bg-teal-700 transition"
            >
              Read Articles
            </a>
          </div>

          {/* Resource 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold text-teal-600 mb-4">
              Nutrition Guides
            </h2>
            <p className="text-gray-600 mb-6">
              Discover meal plans and dietary tips tailored for PCOS management.
            </p>
            <a
              href="#nutrition"
              className="bg-teal-600 text-white font-medium rounded-full px-6 py-3 hover:bg-teal-700 transition"
            >
              View Guides
            </a>
          </div>

          {/* Resource 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold text-teal-600 mb-4">
              Fitness Tools
            </h2>
            <p className="text-gray-600 mb-6">
              Access workout plans and fitness trackers to stay active and healthy.
            </p>
            <a
              href="#fitness"
              className="bg-teal-600 text-white font-medium rounded-full px-6 py-3 hover:bg-teal-700 transition"
            >
              Explore Tools
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}