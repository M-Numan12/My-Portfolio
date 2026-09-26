import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Testimonials from "./components/sections/Testimonials";
import TechStack from "./components/sections/TechStack";
import About from "./components/sections/About";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";
import "./Professional.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <TechStack />
        <About />
        <Resume />
        <Contact />
      </main>

      <footer className="footer professional-footer">
        <div>
          <strong>Muhammad Numan</strong>
          <p>Full-stack development and practical AI automation.</p>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#projects">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© {new Date().getFullYear()} Muhammad Numan</p>
      </footer>
    </>
  );
}

export default App;
