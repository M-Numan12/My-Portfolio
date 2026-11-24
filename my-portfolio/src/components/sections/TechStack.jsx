import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend Engineering",
    icon: "pi pi-desktop",
    tools: ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3 / Sass", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    icon: "pi pi-server",
    tools: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Python", "Auth / JWT"],
  },
  {
    title: "Databases & Modeling",
    icon: "pi pi-database",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Sequelize ORM", "Schema Design"],
  },
  {
    title: "AI & Automation",
    icon: "pi pi-bolt",
    tools: ["OpenAI API", "Prompt Workflows", "Document Search", "Lead Routing", "Reporting"],
  },
  {
    title: "Architecture & Security",
    icon: "pi pi-shield",
    tools: ["Multi-Tenant SaaS", "RBAC Isolation", "System Design", "API Hardening", "Performance"],
  },
  {
    title: "DevOps & Delivery",
    icon: "pi pi-cloud-upload",
    tools: ["Git & GitHub", "Docker", "Vercel", "CI / Staging", "Responsive QA"],
  },
];

export default function TechStack() {
  return (
    <section className="skills-section professional-stack" id="skills">
      <div className="section-heading-pro">
        <p className="eyebrow">TECHNOLOGY</p>
        <h2>A proven engineering stack built for reliability.</h2>
        <p>Every tool is chosen for maintainability, speed, and long-term business value — not hype or arbitrary percentage bars.</p>
      </div>
      <div className="stack-grid">
        {groups.map((group, index) => (
          <motion.article
            key={group.title}
            className="stack-group"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <div className="stack-group-header">
              <span className="stack-group-icon" aria-hidden="true">
                <i className={group.icon} />
              </span>
              <h3>{group.title}</h3>
            </div>
            <div className="stack-pills">
              {group.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
