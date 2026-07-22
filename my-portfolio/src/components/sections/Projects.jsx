import React, { useRef } from "react";
import { motion } from "framer-motion";

function ProjectCard3D({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    const xPct = x / (box.width / 2);
    const yPct = y / (box.height / 2);

    const rotateX = -yPct * 12; // Max 12 degrees tilt on X-axis
    const rotateY = xPct * 12;  // Max 12 degrees tilt on Y-axis

    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
    card.style.setProperty("--mx", `${e.clientX - box.left}px`);
    card.style.setProperty("--my", `${e.clientY - box.top}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: index * 0.1,
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const detailItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const renderMockup = () => {
    switch (project.type) {
      case "school":
        return (
          <div className="device-shell browser-shell" style={{ "--scroll-y": project.scrollY }}>
            <div className="browser-bar">
              <div className="browser-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <div className="browser-url">{project.mockUrl}</div>
            </div>
            <div className="mockup-screen-container">
              <div className="mockup-page-scroll">
                <div className="sim-header">
                  <span className="sim-logo"><i className="pi pi-building"></i> Academix</span>
                  <div className="sim-nav"><span></span><span></span></div>
                </div>
                <div className="sim-hero">
                  <div className="sim-hero-title"></div>
                  <div className="sim-hero-subtitle"></div>
                </div>
                <div className="sim-grid-3">
                  <div className="sim-card">
                    <span style={{ fontSize: '6px', color: '#c084fc', display: 'block', textTransform: 'uppercase' }}>Enrolled</span>
                    <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#fff' }}>1,240</span>
                  </div>
                  <div className="sim-card">
                    <span style={{ fontSize: '6px', color: '#34d399', display: 'block', textTransform: 'uppercase' }}>Fees Paid</span>
                    <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#fff' }}>94%</span>
                  </div>
                  <div className="sim-card">
                    <span style={{ fontSize: '6px', color: '#60a5fa', display: 'block', textTransform: 'uppercase' }}>Teachers</span>
                    <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#fff' }}>48</span>
                  </div>
                </div>
                <div style={{ padding: '6px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)', marginTop: '8px' }}>
                  <span style={{ fontSize: '6px', color: '#9ca3af', display: 'block', textTransform: 'uppercase', marginBottom: '4px' }}>Class Schedules</span>
                  <div className="sim-calendar">
                    <span className="active"></span><span className="active"></span><span></span><span className="active"></span><span className="active"></span><span></span><span className="active"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "primeprep":
        return (
          <div className="device-shell browser-shell" style={{ "--scroll-y": project.scrollY }}>
            <div className="browser-bar">
              <div className="browser-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <div className="browser-url">{project.mockUrl}</div>
            </div>
            <div className="mockup-screen-container">
              <div className="mockup-page-scroll">
                <div className="sim-header">
                  <span className="sim-logo"><i className="pi pi-chart-line"></i> PrimePrep</span>
                  <div style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', fontSize: '7px', padding: '1px 5px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '3px', fontWeight: 'bold' }}>
                    <i className="pi pi-clock" style={{ fontSize: '6px' }}></i> 29:54
                  </div>
                </div>
                <div className="sim-mcq-box">
                  <div className="mcq-question"></div>
                  <div className="mcq-option correct">
                    <div className="mcq-circle"></div>
                    <div className="mcq-line"></div>
                  </div>
                  <div className="mcq-option">
                    <div className="mcq-circle"></div>
                    <div className="mcq-line"></div>
                  </div>
                </div>
                <div className="sim-chart-container" style={{ marginTop: '12px' }}>
                  <div className="sim-chart-bar bar-1"></div>
                  <div className="sim-chart-bar bar-2"></div>
                  <div className="sim-chart-bar bar-3"></div>
                  <div className="sim-chart-bar bar-4"></div>
                  <div className="sim-chart-bar bar-5"></div>
                  <div className="sim-chart-bar bar-6"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case "erp":
        return (
          <div className="device-shell browser-shell" style={{ "--scroll-y": project.scrollY }}>
            <div className="browser-bar">
              <div className="browser-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <div className="browser-url">{project.mockUrl}</div>
            </div>
            <div className="mockup-screen-container">
              <div className="mockup-page-scroll">
                <div className="sim-header">
                  <span className="sim-logo"><i className="pi pi-desktop"></i> CoreERP</span>
                  <div className="sim-nav"><span></span><span></span></div>
                </div>
                <div className="sim-grid-3">
                  <div className="sim-card" style={{ borderLeft: '2px solid #3b82f6' }}>
                    <span style={{ fontSize: '6px', color: '#9ca3af' }}>Sales</span>
                    <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#fff' }}>$48.2k</span>
                  </div>
                  <div className="sim-card" style={{ borderLeft: '2px solid #ef4444' }}>
                    <span style={{ fontSize: '6px', color: '#9ca3af' }}>Inventory</span>
                    <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#fff' }}>82%</span>
                  </div>
                  <div className="sim-card" style={{ borderLeft: '2px solid #10b981' }}>
                    <span style={{ fontSize: '6px', color: '#9ca3af' }}>Auditing</span>
                    <span style={{ fontSize: '8px', color: '#10b981', fontWeight: 'bold' }}>Clean</span>
                  </div>
                </div>
                <div className="sim-chart-container" style={{ height: '35px', marginTop: '6px' }}>
                  <div className="sim-chart-bar bar-6"></div>
                  <div className="sim-chart-bar bar-5"></div>
                  <div className="sim-chart-bar bar-4"></div>
                  <div className="sim-chart-bar bar-3"></div>
                  <div className="sim-chart-bar bar-2"></div>
                  <div className="sim-chart-bar bar-1"></div>
                </div>
                <div style={{ marginTop: '8px', fontSize: '7px', background: 'rgba(255,255,255,0.02)', padding: '5px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                    <span style={{ color: '#fff' }}>Inv #28901</span>
                    <span style={{ color: '#34d399' }}>+$1,290</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#fff' }}>Inv #28902</span>
                    <span style={{ color: '#fb7185' }}>-$450</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "atm":
        return (
          <div className="device-shell terminal-shell">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="terminal-title">Secure CLI ATM Terminal</div>
            </div>
            <div className="mock-terminal-screen">
              <div className="mock-terminal-lines" style={{ "--scroll-y": project.scrollY }}>
                <div><span className="term-prompt">C:\ATM&gt;</span> python main.py</div>
                <div className="term-comment"># Initializing ATM Core...</div>
                <div>[OK] Connection secure.</div>
                <div><span className="term-prompt">Enter PIN:</span> ****</div>
                <div className="term-success">[OK] PIN verified successfully.</div>
                <div>Welcome M. Numan!</div>
                <div style={{ color: '#fff', fontWeight: 'bold' }}>Current Balance: $48,290.00</div>
                <div><span className="term-prompt">C:\ATM&gt;</span> withdraw 500</div>
                <div className="term-comment"># Dispensing cash notes...</div>
                <div className="term-success">[SUCCESS] Withdrawal complete.</div>
              </div>
            </div>
          </div>
        );
      case "bus":
        return (
          <div className="device-shell phone-shell">
            <div className="phone-shell-container">
              <div className="phone-bezel">
                <div className="phone-notch"></div>
                <div className="mock-phone-scroll" style={{ "--scroll-y": project.scrollY }}>
                  <div className="sim-map">
                    <div className="map-grid"></div>
                    <div className="map-road road-h"></div>
                    <div className="map-road road-v"></div>
                    <div className="map-road road-diag"></div>
                    <div className="map-path"></div>
                    <div className="map-bus"><i className="pi pi-map-marker"></i></div>
                    <div className="map-overlay">
                      <div className="map-title"></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '7px', color: '#00f2fe', fontWeight: 'bold' }}>Bus 42 - ETA 4m</span>
                        <span style={{ fontSize: '6px', color: 'rgba(255,255,255,0.5)' }}>1.2 km</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "nova":
        return (
          <div className="device-shell voice-shell">
            <div className="mock-voice-screen">
              <div className="hologram-circle">
                <i className="pi pi-microphone"></i>
              </div>
              <div className="voice-waveforms">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
              <div style={{ textAlign: 'center', fontSize: '8px' }}>
                <div style={{ color: '#c084fc', fontWeight: 'bold', marginBottom: '2px' }}>"Hey Nova, search web"</div>
                <div style={{ color: '#9ca3af' }}>"Starting hands-free automation..."</div>
              </div>
            </div>
          </div>
        );
      case "trade":
        return (
          <div className="device-shell browser-shell" style={{ "--scroll-y": project.scrollY }}>
            <div className="browser-bar">
              <div className="browser-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <div className="browser-url">{project.mockUrl}</div>
            </div>
            <div className="mockup-screen-container">
              <div className="mockup-page-scroll">
                <div className="sim-header">
                  <span className="sim-logo"><i className="pi pi-chart-bar"></i> TradeJournal</span>
                  <div className="sim-nav"><span></span><span></span></div>
                </div>
                <div className="sim-trade-chart">
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '7px', color: '#9ca3af' }}>
                    <span>USD/JPY - 1H</span>
                    <span style={{ color: '#22c55e', fontWeight: 'bold' }}>+1.42%</span>
                  </div>
                  <div className="candle-chart">
                    <div className="candle up"></div>
                    <div className="candle"></div>
                    <div className="candle up"></div>
                    <div className="candle"></div>
                    <div className="candle up"></div>
                    <div className="candle up"></div>
                  </div>
                </div>
                <div className="sim-ai-feedback">
                  <div className="ai-label">
                    <i className="pi pi-sparkles" style={{ fontSize: '7px' }}></i> AI Feedback
                  </div>
                  <div className="ai-text-line"></div>
                  <div className="ai-text-line"></div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="project-card-3d"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div
        ref={cardRef}
        className="project-card-3d-inner"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {renderMockup()}

        <div className="project-info">
          <div>
            <h3>{project.title}</h3>
            <div className="project-tags">
              {project.technologies.map((tech, idx) => (
                <span className="tag" key={idx}>{tech}</span>
              ))}
            </div>
            <motion.ul 
              className="project-details"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {project.details.map((detail, idx) => (
                <motion.li key={idx} variants={detailItemVariants}>{detail}</motion.li>
              ))}
            </motion.ul>
          </div>
          
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View Project <i className="pi pi-external-link"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projectsList = [
    {
      title: "School Management System",
      icon: "pi pi-building",
      type: "school",
      mockUrl: "https://academix-admin.net",
      scrollY: "-65%",
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
      type: "primeprep",
      mockUrl: "https://primeprep.in/exam/test-taker",
      scrollY: "-50%",
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
      type: "erp",
      mockUrl: "https://erp-core.enterprise.com",
      scrollY: "-60%",
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
      type: "atm",
      scrollY: "-30%",
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
      type: "bus",
      scrollY: "-40%",
      technologies: ["Kotlin", "Android SDK", "Google Maps API", "GPS Tracking"],
      link: "https://github.com/M-Numan12/Bus_Tracking_App",
      details: [
        "A robust mobile application that tracks school or university buses in real time.",
        "Integrated Google Maps API to render exact routes, stops, and dynamic arrival times (ETA).",
        "Reduces student waiting times and enhances transit safety through precise live GPS coordinates.",
        "Implemented secure background services for persistent location coordinates streaming."
      ]
    },
    {
      title: "NOVA AI - Voice Desktop Assistant",
      icon: "pi pi-microphone",
      type: "nova",
      scrollY: "0%",
      technologies: ["Python", "Selenium", "Playwright", "Speech Recognition", "PyAutoGUI", "SQLite"],
      link: "https://github.com/M-Numan12",
      details: [
        "Developed a Python-based voice-controlled desktop automation assistant.",
        "Implemented speech recognition and voice response for hands-free system interaction.",
        "Automated desktop tasks (app launching, file management) and browser navigation.",
        "Designed modular architecture with system startup integration."
      ]
    },
    {
      title: "AI Trade Journal (SaaS Platform)",
      icon: "pi pi-chart-bar",
      type: "trade",
      mockUrl: "https://tradejournal.ai/dashboard",
      scrollY: "-60%",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "OpenAI API", "Socket.io", "Docker"],
      link: "https://github.com/M-Numan12/AI-Trade-Journal",
      details: [
        "Developed a full-stack SaaS trading journal with AI-powered trade analysis and feedback.",
        "Implemented screenshot uploads and chart analysis using OpenAI vision capabilities.",
        "Designed interactive dashboards tracking win rate, risk-reward, and emotional psychology.",
        "Built secure JWT authentication, real-time WebSocket notifications, and optimized PostgreSQL schema."
      ]
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <div className="section-label"><i className="pi pi-folder-open" style={{ fontSize: '10px' }}></i> My Work</div>
        <h2>My Projects</h2>
        <p>A selection of my recent full-stack development projects and software engineering solutions.</p>
      </div>

      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <ProjectCard3D key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}