import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiRedux,SiShopify } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "Node.js", icon: <FaNode className="text-green-600" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },

  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
   { name: "Shopify", icon: <SiShopify className="text-green-500" /> }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-10"
      >
        My <span className="text-indigo-600">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-6xl mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
