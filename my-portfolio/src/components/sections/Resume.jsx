import { motion } from "framer-motion";

export default function Resume() {
  const education = [
    {
      year: "2023 – 2027",
      title: "ADP & Post-ADP in Computer Science",
      institution: "National College of Business Administration and Economics (NCBA&E)",
      details: [
        "Current CGPA: 3.1 / 4.00",
        "Focused on computer science fundamentals, full-stack application architecture, and relational database modeling.",
      ],
    },
  ];

  const experience = [
    {
      year: "July 2024 – Dec 2025",
      title: "Full-Stack Developer (Intern)",
      institution: "DevZone Solutions",
      details: [
        "Delivered production features across real client web applications over two consecutive engineering engagements.",
        "Collaborated with senior developers on full-stack architectures, REST APIs, and PostgreSQL database management.",
        "Worked within professional Git workflows, code reviews, and responsive UI standards.",
      ],
    },
    {
      year: "2023 – Present",
      title: "Independent Full-Stack & Automation Engineer",
      institution: "Remote / Freelance",
      details: [
        "Architected full-stack ERP systems, school management platforms, and multi-tenant web applications.",
        "Built real-time features with WebSockets and custom Python automation pipelines.",
        "Integrated OpenAI vision and workflow automation capabilities into modern SaaS tools.",
      ],
    },
  ];

  const columnVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  return (
    <section className="resume-section professional-resume" id="resume">
      <div className="section-heading-pro">
        <p className="eyebrow">EXPERIENCE &amp; EDUCATION</p>
        <h2>Background built on real delivery.</h2>
        <p>Hands-on engineering across agency teams, independent client products, and computer science fundamentals.</p>
      </div>

      <div className="resume-grid">
        <motion.div
          className="resume-column"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h3 className="col-title">
            <i className="pi pi-briefcase" /> Experience
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

        <motion.div
          className="resume-column"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15 }}
        >
          <h3 className="col-title">
            <i className="pi pi-graduation-cap" /> Education
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
      </div>
    </section>
  );
}
