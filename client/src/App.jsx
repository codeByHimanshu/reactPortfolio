import React from "react";
import ContactForm from "./components/contact";
import Contributions from "./components/contributions";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Reveal from "./components/reaveal";

export default function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <main>
        <Reveal direction="up"><Hero /></Reveal>
        <Reveal direction="up" delay={0.2}><Experience /></Reveal>
        <Reveal direction="up" delay={0.4}><Skills /></Reveal>
        <Reveal direction="up" delay={0.6}><Contributions /></Reveal>
        <Reveal direction="up" delay={0.8}><Projects /></Reveal>
        {/* <Reveal direction="up" delay={1}><ContactForm /></Reveal> */}
      </main>
      <Footer />
    </div>
  );
}
