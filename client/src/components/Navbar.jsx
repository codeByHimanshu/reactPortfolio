export default function Navbar() {
    return (
      <nav className="bg-amber-900 text-white text-2xl font-light px-8 py-4 rounded-lg shadow-lg flex justify-center items-center mx-auto mt-10 w-3/4 animate__animated animate__fadeInDown">
        <ul className="flex space-x-8">
          <li className="hover:text-amber-400 transition duration-300 cursor-pointer">Home</li>
          <li className="hover:text-amber-400 transition duration-300 cursor-pointer">About</li>
          <li className="hover:text-amber-400 transition duration-300 cursor-pointer">Projects</li>
          <li className="hover:text-amber-400 transition duration-300 cursor-pointer">Contact</li>
        </ul>
      </nav>
    );
  }