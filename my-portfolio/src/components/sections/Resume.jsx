import { motion } from "framer-motion";

export default function Resume() {
  const education = [
    {
      year: "2023 - 2027",
      title: "ADP & Post ADP in Computer Science",
      institution: "National College of Business Administration and Economics (NCBA&E)",
      details: [
        "Current CGPA: 3.1 / 4.00",
        "Focused on computer science fundamentals, full-stack application architectures, and database modeling."
      ]
    }
  ];

  const experience = [
    {
      year: "July 2024 - Dec 2025",
      title: "Full Stack Developer (Intern)",
      institution: "DevZone Solutions",
      details: [
        "Gained hands-on experience in web development and real-world client projects over two separate periods.",
        "Collaborated with the development team on full-stack web application development and database management tasks.",
        "Worked with modern workflows and tech stacks in a professional software development environment."
      ]
    },
    {
      year: "2023 - Present",
      title: "Freelance & Project-Based Developer",
      institution: "Self-Employed",
      details: [
        "Developed full-stack web solutions (ERP Systems, School Management Systems) and automation scripts.",
        "Engineered real-time features using WebSockets and automated workflows using Python.",
        "Integrated AI vision capabilities and trading analysis systems into SaaS platforms."
      ]
    }
  ];

  const columnVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 50 } }
  };

  return (
    <section className="resume-section" id="resume">
      <div className="section-header">
        <h2>My Resume</h2>
        <p>A timeline of my academic background and professional journey as a developer.</p>
      </div>

      <div className="resume-grid">
        <motion.div
          className="resume-column"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="col-title">
            <i className="pi pi-graduation-cap"></i> Education
          </h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div className="timeline-item" key={index}>
                <span className="time-badge">{edu.year}</span>
                <h4>{edu.title}</h4>
                <span className="institution">{edu.institution}</span>
                <ul className="timeline-details">
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="resume-column"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="col-title">
            <i className="pi pi-briefcase"></i> Experience
          </h3>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <span className="time-badge">{exp.year}</span>
                <h4>{exp.title}</h4>
                <span className="institution">{exp.institution}</span>
                <ul className="timeline-details">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
