import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-4/5 md:w-3/5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-6 shadow-lg rounded-full transition-all duration-300 ease-in-out z-50 ${
        isScrolled ? "shadow-2xl scale-95 opacity-90" : "shadow-md scale-100"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Himanshu Singh</h1>
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
        <ul className={`md:flex space-x-8 hidden ${isOpen ? "block" : "hidden"}`}>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item} className="hover:text-amber-400 transition duration-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-center px-6 pt-20">
      <div className="max-w-2xl bg-gray-800 p-10 rounded-2xl shadow-xl animate__animated animate__fadeInUp animate__slow">
        <h1 className="text-6xl font-extrabold text-white mb-4 animate__zoomIn">Hey! I'm <span className="text-orange-500">Himanshu Singh</span></h1>
        <p className="text-xl text-gray-300 animate__fadeIn">A passionate <span className="text-orange-400 font-semibold">Full-Stack Developer</span></p>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="bg-indigo-100 py-16 px-6 text-center animate__fadeInUp">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-900 mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hi, I'm Himanshu Singh, a detail-oriented full-stack developer specializing in React, Node.js, and MongoDB.
          I build scalable, efficient, and visually appealing web applications.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="bg-gray-200 py-16 px-6 text-center animate__fadeInDown">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["E-commerce App", "Hotel Booking System", "AI Chatbot"].map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-gray-800">{project}</h3>
              <p className="text-gray-600 mt-2">A brief description of {project}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-white py-16 px-6 text-center animate__fadeInUp">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-6">Let's connect and collaborate!</p>
        <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded-lg border border-gray-300" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded-lg border border-gray-300" required />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 rounded-lg border border-gray-300" rows="5" required></textarea>
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700">Send Message</button>
        </form>
      </div>
    </section>
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