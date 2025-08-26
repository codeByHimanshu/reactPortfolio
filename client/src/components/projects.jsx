import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern online shopping platform with product listings, cart, checkout, and secure payment integration.",
      image:
        "https://source.unsplash.com/600x400/?ecommerce,shopping,website",
      link: "#",
    },
    {
      title: "Learning Management System",
      description:
        "An LMS built for online education with course management, quizzes, and student progress tracking.",
      image: "https://source.unsplash.com/600x400/?elearning,education,app",
      link: "#",
    },
    {
      title: "Vehicle Renting System",
      description:
        "A vehicle rental web app with booking, availability tracking, and secure payment options.",
      image: "https://source.unsplash.com/600x400/?car,rent,transport",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-white text-gray-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
          Projects
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
          A selection of my recent work — combining clean UI, modern tech, and
          seamless user experience.
        </p>

        {/* Project Cards */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-5 inline-block text-indigo-600 font-medium hover:text-indigo-800 transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
