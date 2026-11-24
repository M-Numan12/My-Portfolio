import { motion } from "framer-motion";

const details = [
  { icon: "pi pi-map-marker", label: "Based in", value: "Lahore, Pakistan" },
  { icon: "pi pi-globe", label: "Availability", value: "Remote & freelance" },
  { icon: "pi pi-code", label: "Core stack", value: "React, Node.js, PostgreSQL" },
  { icon: "pi pi-cog", label: "Speciality", value: "Business systems & AI" },
  { icon: "pi pi-comments", label: "Languages", value: "English, Urdu, Punjabi" },
  { icon: "pi pi-check-circle", label: "Delivery", value: "Architecture to deployment" },
];

const principles = [
  { icon: "pi pi-sitemap", label: "Clean, maintainable architecture" },
  { icon: "pi pi-lock", label: "Security & role-based isolation" },
  { icon: "pi pi-bolt", label: "Fast, accessible user experiences" },
  { icon: "pi pi-clock", label: "Transparent milestone delivery" },
];

export default function About() {
  return (
    <section className="about professional-about" id="about">
      <motion.div
        className="about-copy"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">ABOUT</p>
        <h2>Engineering with a business-first mindset.</h2>
        <p>
          I’m Muhammad Numan, a full-stack software engineer focused on building software that makes
          operations measurably simpler: clearer customer journeys, faster internal systems, and
          dependable backend infrastructure.
        </p>
        <p>
          I work end-to-end across UI engineering, backend APIs, relational data modeling, AI
          integrations, and deployment. My approach is straightforward: understand the core problem,
          engineer the cleanest strong solution, verify it carefully, and communicate clearly at
          every milestone.
        </p>

        <div className="about-principles">
          {principles.map((item) => (
            <div className="about-principle" key={item.label}>
              <i className={item.icon} aria-hidden="true" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="about-actions">
          <a href="/M.Numan_CV.docx" download className="btn-primary">
            Download CV <i className="pi pi-download" />
          </a>
          <a href="https://github.com/M-Numan12" target="_blank" rel="noreferrer" className="text-link">
            Explore GitHub <i className="pi pi-arrow-up-right" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="about-facts"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="about-facts-header">ENGINEER PROFILE</div>
        {details.map(({ icon, label, value }) => (
          <div className="about-fact-row" key={label}>
            <span>
              <i className={icon} aria-hidden="true" />
              {label}
            </span>
            <strong>{value}</strong>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
