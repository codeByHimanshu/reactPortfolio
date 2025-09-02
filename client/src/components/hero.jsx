import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-white text-gray-900 pt-28 pb-20 sm:pt-32 sm:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
    
          <div>
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight">
              Crafting Modern &{" "}
              <span className="bg-gradient-to-r from-gray-500 via-fuchsia-100 to-blue-500 bg-clip-text text-transparent">
                Clean UIs
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              I design and build responsive, user-friendly web apps with clean
              interfaces and modern technologies. Let’s create something
              impactful together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 px-6 py-3 text-white font-semibold shadow hover:opacity-95"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
              >
                Contact Me
              </a>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}
