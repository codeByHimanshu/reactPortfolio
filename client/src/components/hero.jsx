"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-white text-gray-900 pt-28 pb-20 sm:pt-32 sm:pb-24 flex items-center justify-center"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
  
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-black to-orange-400">
          <Typewriter
            words={["Hey, this is Himanshu"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={100}
          />
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
          <Typewriter
            words={["I'm a Full-Stack Developer"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={80}
          />
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl text-gray-600">
          <Typewriter
            words={[
              "I provide tailored solutions to your problems through robust and modern web applications."
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
      </div>
    </section>
  );
}
