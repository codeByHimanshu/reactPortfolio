"use client";

import React from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
        <div
          className="flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3
                     backdrop-blur-xl border border-white/20 bg-white/30 shadow-md transition-all duration-300"
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-xl  font-bold tracking-tight
                       bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-900 to-black
                       hover:scale-105 transition-transform"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Himanshu<span className="opacity-80 text-gray-800">.dev</span>
          </a>

         
          <div className="flex items-center gap-2">
            <a
              href="mailto:himanshu@example.com"
              className="flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-2 rounded-lg 
                         bg-gray-800 text-white text-xs sm:text-sm font-medium shadow-sm hover:opacity-90 transition"
            >
              <MdEmail className="text-white" size={16} />
              <span className="hidden sm:inline">Email Me</span>
            </a>
            <a
              href="tel:+916306512288"
              className="flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-2 rounded-lg 
                         bg-gray-700 text-white text-xs sm:text-sm font-medium shadow-sm hover:opacity-90 transition"
            >
              <MdCall className="text-white" size={16} />
              <span className="hidden sm:inline">Call Me</span>
            </a>
            <a
              href="https://wa.me/916306512288"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-2 rounded-lg 
                         bg-green-600 text-white text-xs sm:text-sm font-medium shadow-sm hover:opacity-90 transition"
            >
              <FaWhatsapp className="text-white" size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
