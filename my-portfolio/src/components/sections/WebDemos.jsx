import { useState } from "react";
import catalog from "../../data/webDemos.json";
import "./WebDemos.css";

const collection = "https://github.com/M-Numan12/numan-web-service-projects";
const liveCollection = "https://numan-web-service-projects.vercel.app";
const categories = ["All", "Business Websites", "WordPress", "Commerce & Booking", "Custom Software", "Mobile Applications", "Custom Web Apps", "Website Improvement", "Lead Generation"];
const featured = new Set([
  "corporate-company-site", "wordpress-business-concept", "woocommerce-store-concept",
  "admin-content-console", "crm-operations-hub", "appointment-mobile", "accessibility-review-demo", "smart-contact-form",
]);

export default function WebDemos() {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const filtered = catalog.filter((item) => active === "All" || item.group === active);
  const visible = active === "All" && !expanded ? filtered.filter((item) => featured.has(item.slug)) : filtered;

  return (
    <div className="web-showcase" aria-label="Web and WordPress service projects">
      <div className="web-showcase-intro">
        <div>
          <span className="web-kicker">Websites · WordPress · Commerce · Applications</span>
          <h3>Websites Built to Inform, Convert, and Grow</h3>
          <p>48 standalone browser concepts. See the visitor journey, try an interaction, and inspect the source. Each preview illustrates the workflow; production services need proper integrations.</p>
        </div>
        <a href={collection} className="web-all-code" target="_blank" rel="noopener noreferrer">Explore the collection ↗</a>
      </div>

      <div className="web-category-tabs" role="group" aria-label="Filter web projects">
        {categories.map((group) => <button key={group} type="button"
          className={active === group ? "active" : ""} aria-pressed={active === group}
          onClick={() => { setActive(group); setExpanded(false); }}>{group}</button>)}
      </div>

      <div className="web-demo-grid">
        {visible.map((item) => {
          const sourceUrl = `${collection}/tree/main/${item.slug}`;
          const liveUrl = `${liveCollection}/${item.slug}/`;
          return <article className="web-demo-card" key={item.slug}>
            <a className="web-demo-visual" href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open the live ${item.title} demo`}>
              <span className="web-browser-bar" aria-hidden="true"><i></i><i></i><i></i><b>Live preview</b></span>
              <span className="web-live-frame" aria-hidden="true">
                <iframe src={liveUrl} title="" loading="lazy" tabIndex="-1" />
              </span>
              <span className="web-preview-cta">Open interactive demo <b aria-hidden="true">↗</b></span>
            </a>
            <div className="web-demo-body">
              <span className="web-category-label">{item.group}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <ol className="web-demo-flow" aria-label="Project workflow">
                <li><span>Input</span>{item.input}</li>
                <li><span>Process</span>{item.process}</li>
                <li><span>Result</span>{item.result}</li>
              </ol>
              {item.group === "WordPress" && <p className="web-disclaimer">WordPress interaction concept; CMS implementation is a separate step.</p>}
              <div className="web-demo-actions">
                <a className="web-demo-link web-demo-live" href={liveUrl} target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">↗</span></a>
                <a className="web-demo-link" href={sourceUrl} target="_blank" rel="noopener noreferrer">Source code <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </article>;
        })}
      </div>

      {active === "All" && <button className="web-more" type="button" onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}>{expanded ? "Show featured projects" : "Show all 48 projects"}</button>}
    </div>
  );
}
