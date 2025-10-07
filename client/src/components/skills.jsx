"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiShopify,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
  { name: "Shopify", icon: <SiShopify className="text-green-500" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "Node.js", icon: <FaNode className="text-green-600" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-20 flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-10"
      >
        My <span className="text-indigo-600">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full px-4 md:px-20">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-6xl mb-3">{skill.icon}</div>
            <h3 className="text-md font-semibold text-gray-700">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
