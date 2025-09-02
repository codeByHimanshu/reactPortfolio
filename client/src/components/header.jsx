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
          className={[
            "relative flex items-center justify-between",
            "rounded-2xl px-4 sm:px-6 py-3",
            "backdrop-blur-xl",
            "border border-white/15",
            "bg-white/50",
            scrolled ? "shadow-lg shadow-black/5" : "shadow-sm shadow-black/0",
            "transition-all duration-300",
          ].join(" ")}
        >
          <a
            href="#home"
            className="group inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl"
          >
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-inner" />
            <span className="text-lg font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black/80 via-black/80 to-black/80">
              Himanshu<span className="opacity-50">.dev</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-3 py-2 rounded-xl text-sm font-medium text-neutral-700/90 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/6306512288"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl p-2 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              {open ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="mt-2 rounded-2xl border border-white/15 backdrop-blur-xl bg-white/60 shadow-lg">
              <ul className="p-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block w-full rounded-xl px-4 py-3 text-base font-medium text-neutral-800 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="px-2 pt-1 pb-3">
                  <a
                    href="#contact"
                    className="block w-full rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
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
