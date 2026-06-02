import { motion } from "framer-motion";

export default function Projects() {
  const projectsList = [
    {
      title: "School Management System",
      icon: "pi pi-building",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Sequelize"],
      link: "https://github.com/M-Numan12",
      details: [
        "Automated administrative, academic, and financial operations.",
        "Role-Based Access Control (Admin, Teachers, Staff, Students & Parents).",
        "Student enrolment, automated fee trackers, and report card generators.",
        "Multi-tenant architecture with secure subdomains."
      ]
    },
    {
      title: "PrimePrep",
      icon: "pi pi-chart-line",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
      link: "https://github.com/M-Numan12",
      details: [
        "Online exam preparation platform built with real-time timers.",
        "Interactive test-taking system with instant scoreboard analytics.",
        "Secure student dashboards tracking past exam metrics.",
        "Robust user registration and state management."
      ]
    },
    {
      title: "Enterprise ERP System",
      icon: "pi pi-desktop",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "SASS"],
      link: "https://github.com/M-Numan12",
      details: [
        "Comprehensive dashboard managing Inventory, Sales, and Finances.",
        "Implemented strict multi-tenant role-based database isolation.",
        "Generates dynamic monthly sales charts and auditing records.",
        "Sequelize ORM for fast queries and solid transactional integrity."
      ]
    },
    {
      title: "Console ATM System",
      icon: "pi pi-wallet",
      technologies: ["Python", "CLI Design", "Object Oriented Programming"],
      link: "https://github.com/M-Numan12",
      details: [
        "Robust command-line interface simulating real banking ATM models.",
        "Implements secure PIN verification, withdrawals, deposits, and statements.",
        "Written using advanced OOP methodologies, error-handling, and loops."
      ]
    },
    {
      title: "Real-Time Bus Tracking App",
      icon: "pi pi-map-marker",
      technologies: ["Kotlin", "Android SDK", "Google Maps API", "GPS Tracking"],
      link: "https://github.com/M-Numan12/Bus_Tracking_App",
      details: [
        "A robust mobile application that tracks school or university buses in real time.",
        "Integrated Google Maps API to render exact routes, stops, and dynamic arrival times (ETA).",
        "Reduces student waiting times and enhances transit safety through precise live GPS coordinates.",
        "Implemented secure background services for persistent location coordinates streaming."
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.7,
        type: "spring",
        stiffness: 70,
      },
    }),
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2>My Projects</h2>
        <p>A selection of my recent full-stack development projects and software engineering solutions.</p>
      </div>

      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <motion.div
            className="glass-card project-card"
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={index}
          >
            <div className="project-img-mock">
              <i className={project.icon}></i>
              <div className="glow-overlay"></div>
              <div className="project-tags">
                {project.technologies.map((tech, idx) => (
                  <span className="tag" key={idx}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <ul className="project-details">
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ display: "inline-block", textDecoration: "none", padding: "8px 20px", fontSize: "14px" }}
              >
                View Project <i className="pi pi-external-link"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}