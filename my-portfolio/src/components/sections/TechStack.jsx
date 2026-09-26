import { motion } from "framer-motion";

const groups = [
  { title: "Frontend", tools: ["React", "Next.js", "JavaScript", "HTML", "CSS / Sass", "Tailwind"] },
  { title: "Backend", tools: ["Node.js", "Express", "REST APIs", "WebSockets", "JWT / RBAC", "Python"] },
  { title: "Data", tools: ["PostgreSQL", "MySQL", "MongoDB", "Sequelize", "Data modeling"] },
  { title: "Delivery", tools: ["Git & GitHub", "Docker", "Vercel", "Testing", "Performance", "Responsive QA"] },
  { title: "AI & Automation", tools: ["OpenAI API", "Prompt workflows", "Document search", "Lead routing", "Reporting"] },
];

export default function TechStack() {
  return (
    <section className="skills-section professional-stack" id="skills">
      <div className="section-heading-pro">
        <p className="eyebrow">TECHNOLOGY</p>
        <h2>A practical stack selected for the product.</h2>
        <p>I choose tools around reliability, maintainability and business value—not trends or inflated percentage scores.</p>
      </div>
      <div className="stack-grid">
        {groups.map((group, index) => (
          <motion.article key={group.title} className="stack-group" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
            <h3>{group.title}</h3>
            <div>{group.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
