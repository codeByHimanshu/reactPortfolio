"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contributions() {
  const contributions = [
    {
      name: "AV-TradeCorporation",
      url: "https://www.avtradecorp.com/",
      desc: "A company selling wholesale products dry friuts ,grains, spices etc.", // adjust as per actual
    },
    {
      name: "Jyotishwaani",
      url: "https://www.jyotishwaani.com/",
      desc: "A spiritual & astrological service portal.", // adjust as per actual
    },
    {
      name: "QuickSquad",
      url: "https://quicksquad.live/",
      desc: "A modern web platform for team collaboration and productivity.",
    },
    {
      name: "Avyam Healthcare",
      url: "https://avyamhealthcare.com/",
      desc: "A trusted healthcare brand offering quality wellness products.",
    },
    {
      name: "Pearly Tots",
      url: "https://pearlytots.com/",
      desc: "An online store for adorable baby essentials and gifts.",
    },
  ];

  return (
    <section
      id="contributions"
      className="relative bg-white text-gray-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center text-gray-900"
        >
          Contributions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto"
        >
          A few live websites I’ve worked on.
        </motion.p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {contributions.map((site, index) => (
            <motion.a
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="block bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-600 group-hover:text-indigo-800 transition">
                {site.name}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{site.desc}</p>
              <p className="mt-4 text-indigo-500 font-medium text-sm">
                Visit Website →
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
