import { motion } from "framer-motion";

export default function TechStack() {
  const skills = [
    { name: "React.js & Next.js (MERN/SaaS)", percentage: 90 },
    { name: "Node.js & Express.js (REST/WebSockets)", percentage: 85 },
    { name: "PostgreSQL, MySQL & MongoDB", percentage: 80 },
    { name: "JavaScript (ES6+) & Python Automation", percentage: 85 },
    { name: "HTML5, CSS3, Tailwind CSS & SASS", percentage: 95 },
    { name: "AI Integration (OpenAI API) & Docker", percentage: 75 },
  ];

  return (
    <section className="skills-section" id="skills">
      <motion.div
        className="skills-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2>My Technical Skills</h2>
        <p>
          I have spent years mastering web development, backend engineering, and database management. My technical stack is focused on creating efficient, reliable, and highly scalable digital products.
        </p>
        <p>
          I am highly proficient in frontend single-page applications (SPAs) with React, robust server-side routing with Express.js, and complex SQL/NoSQL database configurations. I write clean, modular, and reusable code with a deep focus on speed, performance, and responsive design systems.
        </p>
      </motion.div>

      <div className="skills-right">
        {skills.map((skill, index) => (
          <div className="skill-bar-container" key={index}>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="skill-track">
              <motion.div
                className="skill-progress"
                initial={{ width: "0%" }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}