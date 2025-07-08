import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiRedux,
} from "react-icons/si";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

const App = () => {
  const Section = ({ title, children }) => (
    <motion.section className="py-20 px-6 max-w-6xl mx-auto" {...fadeUp}>
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        {title}
      </h2>
      <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 text-gray-300">
        {children}
      </div>
    </motion.section>
  );

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white font-[Poppins]">
      <motion.section
        className="h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
          Himanshu Singh
        </h1>
        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          Full Stack Developer • React • Node • MongoDB
        </p>
        <a
          href="/himanshu_cv_sde.pdf"
          download
          className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
        >
          Download Resume
        </a>
      </motion.section>

      <Section title="About Me">
        I'm a full-stack developer passionate about building clean, fast, and
        scalable applications using the MERN stack. I thrive on solving
        real-world problems with elegant code and sleek UI.
      </Section>

      <Section title="Experience">
        <div className="space-y-6">
          <div className="hover:scale-[1.02] transition-transform">
            <h3 className="text-xl text-purple-300 font-bold">
              DIGIPANTS – Junior Developer
            </h3>
            <p className="text-sm text-gray-400">Sep 2024 – Present</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>
                Spearheaded the development of a hotel management website,
                boosting booking efficiency by 40% through streamlined frontend
                and backend optimizations.
              </li>
              <li>
                Crafted responsive user interfaces with React, resulting in a
                10% increase in user engagement.
              </li>
              <li>
                Implemented robust backend systems with Express.js and MongoDB,
                efficiently handling data for over 200+ transactions daily.
              </li>
              <li>
                Minimized website load time by optimizing images, leveraging
                lazy loading, and integrating CDNs, leading to enhanced
                performance and a smoother user experience.
              </li>
              <li>
                Utilized code optimization techniques such as minifying
                JavaScript, CSS, and HTML to decrease page load times and
                improve overall application speed.
              </li>
            </ul>
          </div>
          <div className="hover:scale-[1.02] transition-transform">
            <h3 className="text-xl text-purple-300 font-bold">
              Analyze InfoTech – Intern
            </h3>
            <p className="text-sm text-gray-400">Jul 2023 – Dec 2023</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>
                Engineered robust solutions for capturing comprehensive product
                details in a e-commerce form, ensuring accurate storage and
                retrieval in MongoDB
              </li>
              <li>
                Created efficient data models, optimized database queries, and
                integrated seamless API endpoints to enhance performance and
                reliability
              </li>
              <li>
                Integrated advanced error handling and user authentication
                mechanisms using JWT and bcrypt, enhancing security and user
                experience within the application.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "E-commerce App",
              desc: "MFA login, lazy loading, Stripe API integration, and Redux-powered state.",
              tech: ["React", "Node", "Redux", "Stripe", "MongoDB"],
              link: "https://github.com/codeByHimanshu/EcommerceApplication",
            },
            {
              title: "Learning Management System",
              desc: (
                <>
                  ◦ Developed a full-stack Learning Management System with React, Node.js, Express, and MongoDB backend.<br />
                  ◦ Enabled mentors to create courses and lectures using protected, token-based API endpoints.<br />
                  ◦ Integrated lecture management with title, video URL, duration, and free preview toggles.<br />
                  ◦ Implemented real-time updates for course ratings, enrollment count, and lecture tracking system.
                </>
              ),
              tech: ["React", "Express", "MongoDB", "JWT"],
              link: "porfolio-himanshu.netlify.app",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-md transition-transform"
            >
              <h4 className="text-pink-400 font-semibold text-lg">
                {proj.title}
              </h4>
              <p className="text-sm mt-2 text-gray-300">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-purple-700/30 px-3 py-1 rounded-full text-xs text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-400 underline text-sm"
              >
                Live Demo
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Tech Stack">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-4xl text-white justify-center text-center">
          {[
            SiReact,
            SiNodedotjs,
            SiExpress,
            SiMongodb,
            SiJavascript,
            SiTailwindcss,
            SiRedux,
          ].map((Icon, i) => (
            <motion.div
              key={i}
              className="hover:scale-125 transition-transform"
            >
              {<Icon />}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <h3 className="text-lg text-purple-300 font-semibold">
          Dr. A.P.J. Abdul Kalam Technical University
        </h3>
        <p className="text-sm">
          B.Tech – Computer Science, CGPA: 7.8 (2020–2024)
        </p>
      </Section>

      {/* CONTACT */}
      <Section title="Get in Touch">
        <div className="flex justify-center space-x-6 text-3xl text-white">
          <a href="mailto:hsaktu261@gmail.com" className="hover:text-red-400">
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/codeByHimanshu"
            target="_blank"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/himanshusingh261/"
            target="_blank"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </Section>
    </div>
  );
};

export default App;
