import { motion } from "framer-motion";

const services = [
  { icon: "pi pi-globe", title: "Websites & WordPress", description: "Fast, responsive business websites, landing pages, WordPress builds and redesigns focused on clarity and conversion.", tags: ["React", "Next.js", "WordPress"] },
  { icon: "pi pi-code", title: "Custom Web Applications", description: "Secure portals, dashboards, SaaS products and internal tools shaped around your operational workflow.", tags: ["Node.js", "REST APIs", "Auth"] },
  { icon: "pi pi-chart-bar", title: "ERP, POS & Admin Systems", description: "Role-based business software for inventory, sales, finance, education and multi-tenant operations.", tags: ["PostgreSQL", "Sequelize", "RBAC"] },
  { icon: "pi pi-bolt", title: "AI Agents & Automation", description: "Practical assistants for lead qualification, support, document search, reporting and repetitive workflow automation.", tags: ["OpenAI API", "Python", "Automation"] },
  { icon: "pi pi-mobile", title: "Mobile App Development", description: "Purpose-built mobile experiences with maps, real-time updates, secure accounts and business integrations.", tags: ["Android", "Kotlin", "APIs"] },
  { icon: "pi pi-wrench", title: "Optimization & Maintenance", description: "Performance, accessibility, responsive fixes, technical SEO foundations, debugging and ongoing improvements.", tags: ["Speed", "Accessibility", "Support"] },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-heading-pro">
        <p className="eyebrow">SERVICES</p>
        <h2>One technical partner, from idea to launch.</h2>
        <p>I help businesses plan, build and improve digital products without unnecessary complexity.</p>
      </div>
      <div className="services-grid professional-services">
        {services.map((service, index) => (
          <motion.article className="glass-card service-card" key={service.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
            <div className="service-number">0{index + 1}</div>
            <div className="service-icon"><i className={service.icon} /></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
