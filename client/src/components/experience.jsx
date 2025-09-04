import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "MERN Stack Developer",
      company: "Digipants etwork Pvt. Ltd.",
      period: "1Yrs + ",
      description:
        "Developed full-stack projects with MongoDB, Express, React, and Node.js. Implemented REST APIs and authentication.",
    },
    {
      role: "Intern Web Developer",
      company: "Analyze Infotech",
      period: "6 Months",
      description:
        "Worked on improving UI/UX for client projects, fixing bugs, and collaborating with designers to ship features quickly.",
    },
    {
      role: "Freelance Web Developer",
      company: "client-based",
      period: "2023 – Present",
      description:
        "Building responsive web applications with React and Tailwind CSS. Focused on clean UI and accessibility.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative bg-white text-gray-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
        <div className="mt-12 relative border-l border-gray-300">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-6 relative animate__animated animate__bounceIn">
              <span className="absolute -left-3 top-2 h-6 w-6 rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 shadow"></span>

              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.role}
                </h3>
                <p className="text-gray-500 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.period}</p>
                <p className="mt-3 text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
