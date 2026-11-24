import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: "pi pi-compass",
    title: "Discover",
    text: "Clarify business goals, user workflows, technical constraints, scope, and delivery priorities before writing a line of code.",
    deliverable: "Deliverable: Architecture & scope plan",
  },
  {
    number: "02",
    icon: "pi pi-sliders-h",
    title: "Design & Build",
    text: "Ship the interface, APIs, and database in focused weekly milestones with staging previews and clear progress updates.",
    deliverable: "Deliverable: Live milestone builds",
  },
  {
    number: "03",
    icon: "pi pi-verified",
    title: "Test & Launch",
    text: "Verify responsive layouts, edge cases, authentication, performance metrics, and zero-downtime production deployment.",
    deliverable: "Deliverable: Production release & docs",
  },
  {
    number: "04",
    icon: "pi pi-chart-line",
    title: "Scale & Refine",
    text: "Use real user telemetry and feedback to optimize speed, tighten workflows, and deliver the next phase smoothly.",
    deliverable: "Deliverable: Ongoing iteration & support",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section process-section" id="process">
      <div className="section-heading-pro">
        <p className="eyebrow">PROCESS</p>
        <h2>Clear steps. Visible progress. Zero guesswork.</h2>
        <p>A structured engineering workflow keeps technical decisions fast and every release aligned with real business outcomes.</p>
      </div>
      <div className="process-grid">
        {steps.map((step, index) => (
          <motion.article
            key={step.number}
            className="process-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="process-card-top">
              <span className="process-step-num">{step.number}</span>
              <i className={step.icon} aria-hidden="true" />
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <div className="process-deliverable">{step.deliverable}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
