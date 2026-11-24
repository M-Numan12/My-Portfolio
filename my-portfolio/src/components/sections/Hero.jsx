import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero professional-hero" id="home">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <div className="availability-pill">
          <span className="status-dot" aria-hidden="true" />
          Available for remote &amp; contract engineering
        </div>

        <p className="eyebrow">FULL-STACK ENGINEERING · AI AUTOMATION</p>

        <h1>
          Engineering software that solves <span>real business problems.</span>
        </h1>

        <h3>Muhammad Numan — Full-Stack Developer &amp; Systems Builder</h3>

        <p className="hero-desc">
          I architect and ship production-ready web platforms, custom ERP systems, and practical AI
          workflows — built with clean code, dependable databases, and interfaces teams actually
          enjoy using.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollToSection("projects")}>
            Explore live work <i className="pi pi-arrow-right" />
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection("contact")}>
            Discuss a project <i className="pi pi-send" />
          </button>
        </div>

        <div className="hero-proof" aria-label="Portfolio highlights">
          <div className="hero-proof-card">
            <strong>70+</strong>
            <span>Interactive web &amp; AI demos</span>
          </div>
          <div className="hero-proof-card">
            <strong>End-to-End</strong>
            <span>Architecture to production</span>
          </div>
          <div className="hero-proof-card">
            <strong>&lt; 24h</strong>
            <span>Response · Remote worldwide</span>
          </div>
        </div>

        <div className="hero-footer-bar">
          <span className="hero-footer-label">Connect</span>
          <div className="hero-socials">
            <a href="https://github.com/M-Numan12" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <i className="pi pi-github" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-numan-8656b1406/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <i className="pi pi-linkedin" />
            </a>
            <a href="mailto:mrnuman.naeem@gmail.com" aria-label="Email" title="mrnuman.naeem@gmail.com">
              <i className="pi pi-envelope" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-right professional-portrait"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75 }}
      >
        <div className="portrait-frame">
          <div className="portrait-badge-top">
            <i className="pi pi-globe" />
            Remote Worldwide
          </div>
          <img src="/assets/images/profile.png" alt="Muhammad Numan, full-stack software engineer" />
          <div className="portrait-card">
            <span>Currently engineering</span>
            <strong>SaaS Platforms · ERP Systems · AI Workflows</strong>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
