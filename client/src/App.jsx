import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-4/5 md:w-3/5 bg-gradient-to-r from-blue-500 to-indigo-700 text-white py-4 px-6 shadow-lg rounded-full transition-all duration-300 ease-in-out z-50 ${
        isScrolled ? "shadow-2xl scale-95 opacity-90" : "shadow-md scale-100"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide">Himanshu Singh</h1>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
        <ul className={`md:flex space-x-8 hidden ${isOpen ? "block" : "hidden"}`}>
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-amber-400 transition duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Section({ title, children, bgColor, textColor }) {
  return (
    <section className={`${bgColor} ${textColor} py-20 px-6 text-center`}>
      <div className="max-w-4xl mx-auto animate-fadeInUp">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-center px-6 pt-20">
      <div className="max-w-2xl bg-gray-800 p-10 rounded-2xl shadow-xl animate-fadeInUp">
        <h1 className="text-6xl font-extrabold text-white mb-4">
          Hey! I'm <span className="text-orange-500">Himanshu Singh</span>
        </h1>
        <p className="text-xl text-gray-300">
          A passionate <span className="text-orange-400 font-semibold">Full-Stack Developer</span>
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section title="About Me" bgColor="bg-indigo-100" textColor="text-gray-700">
      <p className="text-lg leading-relaxed">
        Hi, I'm Himanshu Singh, a detail-oriented full-stack developer specializing in React, Node.js, and MongoDB.
        I build scalable, efficient, and visually appealing web applications.
      </p>
    </Section>
  );
}

function Projects() {
  return (
    <Section title="My Projects" bgColor="bg-gray-200" textColor="text-gray-800">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {["E-commerce App", "Hotel Booking System", "AI Chatbot"].map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{project}</h3>
            <p className="text-gray-600 mt-2">A brief description of {project}.</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section title="Contact Me" bgColor="bg-white" textColor="text-gray-800">
      <p className="text-lg text-gray-600 mb-6">Let's connect and collaborate!</p>
      <form className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 rounded-lg border border-gray-300"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 rounded-lg border border-gray-300"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 rounded-lg border border-gray-300"
          rows="5"
          required
        ></textarea>
        <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    </Section>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;