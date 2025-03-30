import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function MeetAda() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center mt-[4rem] rounded-lg shadow-md">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center xl:p-[4rem]">
        {/* Left Section: Introduction */}
        <div className="transition-transform transform hover:scale-105 duration-300">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-6">
            Meet Ada, Your AI Health Companion
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6 font-medium">
            24/7 support and guidance through our intelligent chatbot, providing
            personalized recommendations and answers to your health concerns.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-teal-600 text-xl" />
              <span className="text-gray-700 text-lg font-semibold">
                Symptom tracking and analysis
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-teal-600 text-xl" />
              <span className="text-gray-700 text-lg font-semibold">
                Medication reminders
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-teal-600 text-xl" />
              <span className="text-gray-700 text-lg font-semibold">
                Diet and exercise recommendations
              </span>
            </li>
          </ul>
        </div>

        {/* Right Section: Chat Interface */}
        <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:translate-y-2 hover:scale-105 duration-300">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/ADA.jpg"
              alt="Ada"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-bold text-black">Ada</h3>
              <p className="text-sm text-gray-500 font-medium">
                AI Health Assistant
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {/* Chat Messages */}
            <div className="bg-teal-50 text-teal-900 p-4 rounded-lg font-medium">
              Hello I am Ada, your personal health assistant. How can I help you
              today
            </div>
            <div className="bg-gray-100 text-gray-900 p-4 rounded-lg self-end font-medium">
              I would like to track my symptoms today.
            </div>
            <div className="bg-teal-50 text-teal-900 p-4 rounded-lg font-medium">
              I will help you track your symptoms. Lets start with how you are
              feeling today...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}