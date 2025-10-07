"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function useScrolled(threshold = 4) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(2);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
        <nav
          aria-label="Primary"
          className={`relative flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3
            backdrop-blur-xl border border-white/20 bg-white/30
            ${scrolled ? "shadow-lg shadow-black/10" : "shadow-sm"}
            transition-all duration-300`}
        >
          
          <a
            href="#home"
            className="group inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl"
          >
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400">
              Himanshu<span className="opacity-60 text-black">.dev</span>
            </span>
          </a>

        
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative px-3 py-2 rounded-xl text-sm font-medium text-neutral-700/90 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group transition"
                  >
                    {link.label}
                    <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/6306512288"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition"
            >
              Hire Me
            </a>
          </div>

          
          <div className="md:hidden flex items-center">
            <button
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl p-2 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition"
            >
              {open ? <FaTimes className="h-6 w-6 text-gray-800" /> : <FaBars className="h-6 w-6 text-gray-800" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="mt-2 rounded-2xl border border-white/20 backdrop-blur-xl bg-white/30 shadow-lg">
              <ul className="p-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block w-full rounded-xl px-4 py-3 text-base font-medium text-neutral-800 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="px-2 pt-1 pb-3">
                  <a
                    href="#contact"
                    className="block w-full rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-md hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition"
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
