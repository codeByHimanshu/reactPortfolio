
import Navbar from "./components/Navbar";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="max-w-2xl text-center p-10 shadow-xl rounded-2xl bg-gray-800 animate__animated animate__fadeInUp animate__slow">
        <h1 className="text-6xl font-extrabold text-white mb-4 animate__animated animate__zoomIn animate__delay-1s">
          Hey! I'm <span className="text-orange-500">Himanshu Singh</span>
        </h1>
        <p className="text-xl text-gray-300 animate__animated animate__fadeIn animate__delay-2s">
          A passionate <span className="text-orange-400 font-semibold">Full-Stack Developer</span>
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 animate__animated animate__fadeInUp animate__slow">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Hi, I'm Himanshu Singh, a detail-oriented full-stack developer specialized in
          React, Node.js, and MongoDB. I build scalable, efficient, and visually appealing web applications.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="bg-gray-200 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 animate__animated animate__fadeInDown">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((num, index) => (
            <div key={num} className={`bg-white p-6 rounded-lg shadow-md animate__animated animate__zoomIn animate__delay-${index + 1}s`}>
              <h3 className="text-xl font-semibold text-gray-800">Project {num}</h3>
              <p className="text-gray-600 mt-2">Brief description of your project goes here.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 animate__animated animate__fadeInUp animate__slow">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-6">Let's connect and collaborate!</p>
        <div className="space-y-3">
          <p className="text-lg text-gray-700"><strong>Email:</strong> your.email@example.com</p>
          <p className="text-lg text-gray-700"><strong>Phone:</strong> +91 98765 43210</p>
          <p className="text-lg text-gray-700"><strong>Location:</strong> Lucknow, India</p>
        </div>
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