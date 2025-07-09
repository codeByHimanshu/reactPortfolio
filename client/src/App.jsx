import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiRedux,
} from "react-icons/si";


const BlobBackground = () => (
  <svg
    className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-[120%]"
    viewBox="0 0 600 600"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(300,300)">
      <motion.path
        animate={{
          d: [
            "M120,-180C160,-140,200,-90,220,-30C240,30,240,90,200,140C160,190,80,240,0,250C-80,260,-160,230,-200,180C-240,130,-240,65,-220,10C-200,-45,-160,-85,-120,-120C-80,-155,-40,-185,0,-190C40,-195,80,-175,120,-180Z",
            "M150,-180C200,-140,240,-90,250,-30C260,30,230,90,180,140C130,190,65,240,0,250C-65,260,-130,230,-180,180C-230,130,-260,65,-250,10C-240,-45,-200,-85,-150,-120C-100,-155,-50,-185,0,-190C50,-195,100,-175,150,-180Z",
            "M140,-160C180,-120,220,-70,220,-10C220,50,180,110,140,160C100,210,50,240,0,250C-50,260,-100,240,-140,190C-180,140,-200,70,-180,20C-160,-30,-120,-80,-80,-120C-40,-160,0,-180,40,-190C80,-200,120,-180,140,-160Z",
          ],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        fill="url(#grad1)"
      />
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
    </g>
  </svg>
);


const MotionCard = ({ className = "", children }) => (
  <motion.div
    className={`bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-lg ${className}`}
    whileHover={{ scale: 1.02, y: -4 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);


const Section = ({ title, children }) => (
  <div className="mb-20">
    <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {title}
    </h2>
    <MotionCard className="max-w-5xl mx-auto">{children}</MotionCard>
  </div>
);


const SplitSection = ({ title, children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
    <MotionCard className="space-y-4">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </MotionCard>
  </div>
);

const App = () => {
  const techIcons = [
    { icon: SiReact, color: "#61DBFB" },
    { icon: SiNodedotjs, color: "#3C873A" },
    { icon: SiExpress, color: "#ffffff" },
    { icon: SiMongodb, color: "#47A248" },
    { icon: SiJavascript, color: "#F0DB4F" },
    { icon: SiTailwindcss, color: "#38BDF8" },
    { icon: SiRedux, color: "#764ABC" },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans bg-gradient-to-br from-black via-gray-900 to-gray-950 overflow-hidden">
    
      <BlobBackground />
      <div className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Himanshu Singh
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-300 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Developer • React • Node • MongoDB
        </motion.p>
        <motion.a
          href="/himanshu_cv_sde.pdf"
          download
          className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Download Resume
        </motion.a>
      </div>

  
      <div className="relative z-10 px-6 max-w-7xl mx-auto pb-20">

        <SplitSection title="About Me">
          <p className="text-gray-300">
            I'm a MERN full-stack developer with a flair for creating elegant,
            high-performance web apps. I build scalable, sleek solutions that
            solve real problems.
          </p>
        </SplitSection>

     
        <SplitSection title="Experience">
          <div className="space-y-6">
            <MotionCard>
              <h3 className="text-purple-300 font-bold text-xl">
                DIGIPANTS – Junior Developer
              </h3>
              <p className="text-gray-400">Sep 2024 – Present</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Boosted booking efficiency by 40% in hotel platform.</li>
                <li>Improved user engagement with dynamic React UI.</li>
                <li>Handled 200+ daily transactions with MongoDB.</li>
                <li>Implemented lazy loading & CDN optimizations.</li>
              </ul>
            </MotionCard>
            <MotionCard>
              <h3 className="text-purple-300 font-bold text-xl">
                Analyze InfoTech – Intern
              </h3>
              <p className="text-gray-400">Jul 2023 – Dec 2023</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Built dynamic e-commerce forms with MongoDB.</li>
                <li>Created secure API endpoints and optimized schemas.</li>
                <li>Added JWT + bcrypt auth for enhanced security.</li>
              </ul>
            </MotionCard>
          </div>
        </SplitSection>

      
        <Section title="Projects">
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "E‑commerce App",
                desc:
                  "MFA login, lazy loading, Stripe integration, Redux state.",
                link:
                  "https://github.com/codeByHimanshu/EcommerceApplication",
              },
              {
                title: "Learning Management System",
                desc:
                  "Full-stack LMS with React, Node, Express, JWT, real-time progress.",
                link: "porfolio-himanshu.netlify.app",
              },
            ].map((proj, i) => (
              <MotionCard key={i}>
                <h4 className="text-pink-400 font-semibold text-lg">
                  {proj.title}
                </h4>
                <p className="text-sm mt-2 text-gray-300">{proj.desc}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-400 underline"
                >
                  View Live ⬈
                </a>
              </MotionCard>
            ))}
          </div>
        </Section>

        <Section title="Tech Stack">
          <motion.div
            className="flex gap-6 overflow-x-auto py-4 px-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {techIcons.map(({ icon: Icon, color }, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon color={color} className="text-5xl" />
              </motion.div>
            ))}
          </motion.div>
        </Section>


        <Section title="Get in Touch">
          <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-10 rounded-3xl shadow-xl">
            <form className="space-y-6 max-w-xl mx-auto text-white">
              <motion.input
                whileFocus={{ scale: 1.03 }}
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:outline-none"
              />
              <motion.input
                whileFocus={{ scale: 1.03 }}
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:outline-none"
              />
              <motion.textarea
                whileFocus={{ scale: 1.03 }}
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg"
              >
                🚀 Send Message
              </motion.button>
            </form>
            <div className="flex justify-center space-x-6 mt-8 text-3xl opacity-80">
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
          </div>
        </Section>
      </div>
    </div>
  );
};

export default App;
