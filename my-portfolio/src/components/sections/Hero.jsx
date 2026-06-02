import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="welcome-tag" variants={itemVariants}>
          Welcome to my portfolio
        </motion.span>

        <motion.h1 variants={itemVariants}>
          Hi, I'm <span>Muhammad Numan</span>
        </motion.h1>

        <motion.h3 variants={itemVariants}>
          Full-Stack Web Developer & Software Engineer
        </motion.h3>

        <motion.p className="hero-desc" variants={itemVariants}>
          I design and build highly performant ERP systems, POS solutions, and modern web applications with secure backend architectures, robust database schemas, and stunning user interfaces.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <button className="btn-primary" onClick={() => scrollToSection("contact")}>
            Hire Me <i className="pi pi-briefcase"></i>
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection("projects")}>
            See My Works <i className="pi pi-arrow-right"></i>
          </button>
        </motion.div>

        <motion.div className="social-container" variants={itemVariants}>
          <span>Connect:</span>
          <div className="social-links">
            <a href="https://github.com/M-Numan12" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="pi pi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-numan-8656b1406/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="pi pi-linkedin"></i>
            </a>
            <a href="mailto:Numannaeem134@gmail.com" title="Email">
              <i className="pi pi-envelope"></i>
            </a>
            <a href="tel:+923259773687" title="Phone">
              <i className="pi pi-phone"></i>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.25 }}
      >
        <div className="image-wrapper">
          <img src="/assets/images/profile.png" alt="Muhammad Numan" />
        </div>
        <div className="glow-ring"></div>
      </motion.div>
    </section>
  );
}