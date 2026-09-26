import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero professional-hero" id="home">
      <motion.div className="hero-left" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <div className="availability-pill"><span /> Available for remote projects</div>
        <p className="eyebrow">FULL-STACK DEVELOPMENT · AI AUTOMATION</p>
        <h1>I build digital products that solve <span>real business problems.</span></h1>
        <h3>Muhammad Numan — Full-Stack Developer</h3>
        <p className="hero-desc">
          From conversion-focused websites to custom ERP platforms and AI-assisted workflows, I turn business requirements into secure, responsive software that teams can actually use.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollToSection("projects")}>View live work <i className="pi pi-arrow-right" /></button>
          <button className="btn-secondary" onClick={() => scrollToSection("contact")}>Discuss a project</button>
        </div>
        <div className="hero-proof" aria-label="Portfolio highlights">
          <div><strong>70+</strong><span>interactive demos</span></div>
          <div><strong>Full cycle</strong><span>frontend to deployment</span></div>
          <div><strong>Remote</strong><span>worldwide collaboration</span></div>
        </div>
        <div className="social-links hero-socials">
          <a href="https://github.com/M-Numan12" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="pi pi-github" /></a>
          <a href="https://www.linkedin.com/in/muhammad-numan-8656b1406/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="pi pi-linkedin" /></a>
          <a href="mailto:Numannaeem134@gmail.com" aria-label="Email"><i className="pi pi-envelope" /></a>
        </div>
      </motion.div>

      <motion.div className="hero-right professional-portrait" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <div className="portrait-frame">
          <img src="/assets/images/profile.png" alt="Muhammad Numan, full-stack developer" />
          <div className="portrait-card">
            <span>Currently building</span>
            <strong>Web apps · AI workflows · Business systems</strong>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
