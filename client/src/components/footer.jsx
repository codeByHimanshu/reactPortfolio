import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Branding */}
        <p className="text-gray-600 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
