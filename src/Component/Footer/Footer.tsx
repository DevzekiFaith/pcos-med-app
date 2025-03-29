import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Ensure proper import
import Link from "next/link"; // Import Link from next/link

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CycleCare Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">CycleCare</h3>
            <p className="text-gray-400">
              Empowering PCOS patients with AI-driven healthcare solutions.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#support" className="hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaFacebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaTwitter className="h-6 w-6" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaInstagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          &copy; 2025 CycleCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}