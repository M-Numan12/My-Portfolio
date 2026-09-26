import { motion } from "framer-motion";

const details = [
  ["Based in", "Lahore, Pakistan"],
  ["Availability", "Remote & freelance"],
  ["Core stack", "React, Node.js, PostgreSQL"],
  ["Speciality", "Business systems & automation"],
  ["Languages", "English, Urdu, Punjabi"],
  ["Delivery", "Planning through deployment"],
];

export default function About() {
  return (
    <section className="about professional-about" id="about">
      <motion.div className="about-copy" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <p className="eyebrow">ABOUT</p>
        <h2>Engineering with a business-first mindset.</h2>
        <p>I’m Muhammad Numan, a full-stack developer focused on software that makes work simpler: clearer customer journeys, faster internal processes and dependable systems.</p>
        <p>I work across interface design, backend architecture, databases, integrations and deployment. My approach is direct: understand the real problem, build the smallest strong solution, test it carefully and communicate progress clearly.</p>
        <div className="about-actions">
          <a href="/M.Numan_CV.docx" download className="btn-primary">Download CV <i className="pi pi-download" /></a>
          <a href="https://github.com/M-Numan12" target="_blank" rel="noreferrer" className="text-link">Explore GitHub <i className="pi pi-arrow-up-right" /></a>
        </div>
      </motion.div>
      <motion.div className="about-facts" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        {details.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
      </motion.div>
    </section>
  );
}
