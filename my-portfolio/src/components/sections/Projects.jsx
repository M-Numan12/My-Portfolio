import { motion } from "framer-motion";
import AiDemos from "./AiDemos";
import WebDemos from "./WebDemos";

const featured = [
  { title: "AetherMetrics", subtitle: "Business analytics dashboard", image: "https://raw.githubusercontent.com/M-Numan12/AETHERMETRICS/main/preview.png", tags: ["JavaScript", "Analytics", "Responsive UI"], result: "Transforms fictional transaction data into searchable KPIs, channel insights and CSV exports.", link: "https://github.com/M-Numan12/AETHERMETRICS" },
  { title: "AI Trade Journal", subtitle: "Full-stack SaaS concept", icon: "pi pi-chart-line", tags: ["Next.js", "PostgreSQL", "OpenAI API"], result: "Combines trade tracking, performance analytics and AI-assisted chart feedback in one workflow.", link: "https://github.com/M-Numan12/AI-Trade-Journal" },
  { title: "Real-Time Bus Tracking", subtitle: "Android location experience", icon: "pi pi-map-marker", tags: ["Kotlin", "Google Maps", "GPS"], result: "Explores live route visibility, stop information and ETA updates for safer student transport.", link: "https://github.com/M-Numan12/Bus_Tracking_App" },
  { title: "Web Services Lab", subtitle: "42 interactive business demos", icon: "pi pi-window-maximize", tags: ["Websites", "WordPress", "Lead generation"], result: "Shows working visitor journeys for company sites, booking, commerce and business applications.", link: "https://numan-web-service-projects.vercel.app/" },
];

export default function Projects() {
  return (
    <section className="projects-section professional-projects" id="projects">
      <div className="section-heading-pro project-heading">
        <div><p className="eyebrow">SELECTED WORK</p><h2>Projects that show the thinking, not just the technology.</h2></div>
        <a href="https://github.com/M-Numan12" target="_blank" rel="noreferrer" className="text-link">All repositories <i className="pi pi-arrow-up-right" /></a>
      </div>
      <div className="featured-grid">
        {featured.map((project, index) => (
          <motion.article className="featured-project" key={project.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
            <a className="featured-visual" href={project.link} target="_blank" rel="noreferrer">
              {project.image ? <img src={project.image} alt={`${project.title} interface preview`} loading="lazy" /> : <i className={project.icon} />}
              <span className="project-index">0{index + 1}</span>
            </a>
            <div className="featured-copy">
              <span>{project.subtitle}</span><h3>{project.title}</h3><p>{project.result}</p>
              <div className="project-pills">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a href={project.link} target="_blank" rel="noreferrer" className="text-link">View project <i className="pi pi-arrow-up-right" /></a>
            </div>
          </motion.article>
        ))}
      </div>
      <AiDemos />
      <WebDemos />
    </section>
  );
}
