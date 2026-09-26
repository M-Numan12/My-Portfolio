import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discover", text: "Clarify the audience, workflow, success criteria, scope and delivery priorities." },
  { number: "02", title: "Design & build", text: "Create the interface and system in focused milestones with visible progress." },
  { number: "03", title: "Test & launch", text: "Validate responsive behavior, key user paths, performance and deployment." },
  { number: "04", title: "Improve", text: "Use feedback and real usage to refine the product and plan the next release." },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section process-section" id="process">
      <div className="section-heading-pro">
        <p className="eyebrow">PROCESS</p>
        <h2>Clear steps. Visible progress. No surprises.</h2>
        <p>A simple delivery process keeps decisions fast and the final product aligned with the real goal.</p>
      </div>
      <div className="process-grid">
        {steps.map((step, index) => (
          <motion.article key={step.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
