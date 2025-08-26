import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white text-gray-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              About Me
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              I’m a passionate web developer who loves crafting modern, 
              responsive, and user-friendly web applications. With a 
              focus on clean UI and smooth user experience, I aim to 
              bring impactful ideas to life through code.
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Skilled in <span className="font-semibold">React, Tailwind CSS, 
              JavaScript, and MERN Stack</span>, I specialize in building 
              full-stack projects that balance aesthetics with performance.
            </p>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Skills & Tools
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-gray-700">
                <li>⚡ React & Next.js</li>
                <li>⚡ Tailwind CSS</li>
                <li>⚡ Node.js & Express</li>
                <li>⚡ MongoDB</li>
                <li>⚡ Git & GitHub</li>
                <li>⚡ REST APIs</li>
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="h-64 w-64 sm:h-80 sm:w-80 rounded-2xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
