import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode, FaUniversity } from "react-icons/fa";
import { SiMongodb, SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, SiExpress, SiRedux } from "react-icons/si";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Section = ({ title, children }) => (
  <motion.section {...fadeUp} className="py-16 px-6 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
      {title}
    </h2>
    {children}
  </motion.section>
);

const App = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white font-[Poppins]">
      {/* HERO */}
      <motion.section
        className="h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Himanshu Singh
        </h1>
        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          Full Stack Developer | React | Node.js | MongoDB
        </p>
        <a
          href="/himanshu_cv_sde.pdf"
          download
          className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
        >
          Download Resume
        </a>
      </motion.section>

      {/* ABOUT */}
      <Section title="About Me">
        <motion.div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md text-gray-300 shadow-xl">
          I’m a passionate developer with hands-on experience building modern web apps using the MERN stack. I focus on user experience, performance, and delivering results that solve real business problems.
        </motion.div>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Experience">
        <div className="space-y-8">
          {[
            {
              title: "Junior Software Developer - DIGIPANTS",
              date: "Sep 2024 – Present",
              points: [
                "Built hotel management system increasing booking efficiency by 40%",
                "Optimized performance with lazy loading, CDNs, and image optimization",
                "Used Express.js and MongoDB to handle 200+ transactions/day",
              ],
            },
            {
              title: "Developer Intern - Analyze InfoTech",
              date: "Jul 2023 – Dec 2023",
              points: [
                "Created secure forms with MongoDB, JWT, bcrypt",
                "Improved DB query performance & reliability",
                "Enhanced UX with validations & error handling",
              ],
            },
          ].map((exp, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
              {...fadeUp}
            >
              <h3 className="text-xl font-bold text-purple-400">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-300">
                {exp.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section title="Projects">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "E-commerce Application",
              tech: ["React", "Node", "MongoDB", "Redux", "Stripe"],
              desc: "Built a secure, scalable ecommerce app with MFA, Stripe payments, lazy loading, and code splitting.",
              repo: "https://github.com/codeByHimanshu/EcommerceApplication",
            },
            {
              title: "Book Store",
              tech: ["React", "Express", "MongoDB", "JWT", "APIs"],
              desc: "Created book catalog with user login, cart, orders, API integration for metadata/reviews.",
              repo: "https://github.com/codeByHimanshu",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              className="bg-white/5 p-6 rounded-2xl shadow-md backdrop-blur-sm hover:scale-[1.03] transition-transform"
              {...fadeUp}
            >
              <h4 className="text-xl font-semibold text-pink-400">{proj.title}</h4>
              <p className="text-sm mt-2 text-gray-300">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((tech, t) => (
                  <span
                    key={t}
                    className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={proj.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-blue-400 underline hover:text-blue-200"
              >
                View Repo
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section title="Tech Stack">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center text-3xl text-gray-200">
          {[SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiTailwindcss, SiRedux].map((Icon, i) => (
            <motion.div key={i} className="hover:scale-110 transition-transform" {...fadeUp}>
              <Icon />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section title="Education">
        <motion.div className="bg-white/5 p-6 rounded-2xl text-gray-300 backdrop-blur-lg shadow-xl">
          <div className="flex items-center space-x-4">
            <FaUniversity className="text-3xl text-blue-400" />
            <div>
              <h3 className="text-xl font-bold">Dr. A.P.J. Abdul Kalam Technical University</h3>
              <p className="text-sm">B.Tech – Computer Science (2020–2024), CGPA: 7.8</p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* CONTACT */}
      <Section title="Let's Connect">
        <div className="flex justify-center space-x-6 text-3xl">
          <a href="mailto:hsaktu261@gmail.com" className="text-red-400 hover:scale-125 transition-transform">
            <FaEnvelope />
          </a>
          <a href="https://github.com/codeByHimanshu" target="_blank" className="hover:scale-125 transition-transform">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/himanshusingh261/" target="_blank" className="text-blue-500 hover:scale-125 transition-transform">
            <FaLinkedin />
          </a>
        </div>
      </Section>
    </div>
  );
};

export default App;
