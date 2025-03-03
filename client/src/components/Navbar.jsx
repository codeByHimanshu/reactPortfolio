import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-100 text-black flex justify-center text-3xl font-light px-8 py-8 rounded-3xl shadow-lg mx-auto mt-6 w-11/12 md:w-3/5 animate__animated animate__fadeInDown">
      <div className="flex justify-between items-center">
       
        <button 
          className="md:hidden text-black focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
      <ul className={`flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 ${isOpen ? "block" : "hidden"} md:flex`}>
        <li className="hover:text-amber-400 transition duration-300 cursor-pointer">Home</li>
        <li className="hover:text-amber-400 transition duration-300 cursor-pointer">About</li>
        <li className="hover:text-amber-400 transition duration-300 cursor-pointer">Projects</li>
        <li className="hover:text-amber-400 transition duration-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
