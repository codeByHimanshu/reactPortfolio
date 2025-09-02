import Contributions from "./components/contributions";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Reveal from "./components/reaveal";
import Skills from "./components/skills";

const App = () => {
  return (
    <>
      <Header />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>

        <Experience />
      </Reveal>
      <Reveal>

        <Skills />
      </Reveal>
      <Reveal>

        <Projects />
      </Reveal>
      <Reveal>
        <Contributions />
      </Reveal>
      <Footer />
    </>
  );
};

export default App;
