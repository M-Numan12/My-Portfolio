import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import TechStack from "./components/sections/TechStack";
import Resume from "./components/sections/Resume";
import Projects from "./components/sections/Projects";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main style={{ marginTop: "75px" }}>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Resume />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} <span>M.Numan</span> All Rights Reserved.
        </p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#projects">Portfolio</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  );
}

export default App;