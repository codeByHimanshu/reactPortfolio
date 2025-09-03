import React from "react";

export default function Contributions() {
  const contributions = [
    "https://quicksquad.live/",
    "https://avyamhealthcare.com/",
    "https://pearlytots.com/",
  ];

  return (
    <section
      id="contributions"
      className="relative bg-gray-50 text-gray-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
          A few live websites I’ve worked on.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {contributions.map((url, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Preview Frame */}
              <div className="w-full overflow-hidden pointer-events-none">
                <iframe
                  src={url}
                  title={`preview-${index}`}
                  scrolling="no"
                  style={{ overflow: "hidden" }}
                  className="w-full h-[700px] border-0 pointer-events-none"
                />
              </div>

          
              <div className="p-4">
                <p className="block text-indigo-600 font-medium group-hover:text-indigo-800 transition">
                  {url.replace(/^https?:\/\//, "").replace(/\/$/, "")} →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
