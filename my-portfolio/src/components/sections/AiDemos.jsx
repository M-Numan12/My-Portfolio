import { useState } from "react";
import "./AiDemos.css";

const collection = "https://github.com/M-Numan12/numan-ai-service-projects";

const projects = [
  ["lead-scout", "Lead Scout", "AI Agents", "Lead details", "Qualification score", "Prioritized outreach", "Standalone repository", "https://github.com/M-Numan12/lead-scout"],
  ["support-triage", "Support Triage", "AI Agents", "Support request", "Urgency and topic rules", "Human queue or draft", "Standalone repository", "https://github.com/M-Numan12/support-triage"],
  ["slotwise", "Slotwise", "AI Agents", "Requested time", "Hours and overlap check", "Available slot"],
  ["inbox-guard", "Inbox Guard", "AI Agents", "Email thread metadata", "Reply and safety checks", "Eligible follow-up list"],
  ["cv-review-desk", "CV Review Desk", "AI Agents", "CV and required skills", "Keyword evidence matching", "Human review summary"],
  ["research-brief", "Research Brief", "AI Agents", "Research notes", "Theme frequency analysis", "Source-backed brief"],
  ["web-help-chat", "Web Help Chat", "AI Chatbots", "Visitor question", "FAQ similarity search", "Answer with source"],
  ["whatsapp-webhook-demo", "WhatsApp Webhook Demo", "AI Chatbots", "Signed webhook payload", "Signature and intent check", "Suggested response"],
  ["product-match", "Product Match", "AI Chatbots", "Budget and needs", "Catalog scoring", "Ranked recommendations"],
  ["admissions-guide", "Admissions Guide", "AI Chatbots", "Student question", "Policy intent lookup", "Sourced answer"],
  ["knowledge-assist", "Knowledge Assist", "AI Chatbots", "Knowledge question", "Document term search", "Answer and citation"],
  ["multilingual-help", "Multilingual Help", "AI Chatbots", "Intent and locale", "Language selection", "Localized response"],
  ["lead-router", "Lead Router", "Business Automation", "New lead", "Consent, budget and service", "Team assignment"],
  ["invoice-extract", "Invoice Extract", "Business Automation", "Invoice text", "Field extraction", "Reviewable total"],
  ["mail-sorter", "Mail Sorter", "Business Automation", "Email subject and body", "Topic classification", "Unsent reply draft"],
  ["crm-next-step", "CRM Next Step", "Business Automation", "Lead stage and event", "Transition validation", "Next follow-up date"],
  ["signal-reporter", "Signal Reporter", "Business Automation", "Daily lead and deal data", "Metric calculation", "Report and alerts"],
  ["approval-gate", "Approval Gate", "Business Automation", "Sensitive action", "Independent review gate", "Approved action state"],
  ["model-provider-adapter", "Model Provider Adapter", "Integrations & Insights", "Provider choice", "Credential configuration", "Integration status"],
  ["content-studio", "Content Studio", "Integrations & Insights", "Marketing brief", "Template composition", "Reviewable copy"],
  ["document-search", "Document Search", "Integrations & Insights", "Document question", "Local passage matching", "Ranked source excerpts"],
  ["voice-bridge", "Voice Bridge", "Integrations & Insights", "Text and API key", "Speech API request", "Audio response"],
  ["vision-ocr", "Vision OCR", "Integrations & Insights", "Image file", "Local OCR engine", "Extracted text"],
  ["operations-dashboard", "Operations Dashboard", "Integrations & Insights", "Lead and win events", "Channel aggregation", "Conversion breakdown"],
];

const groups = ["All", "AI Agents", "AI Chatbots", "Business Automation", "Integrations & Insights"];
const integrationNotes = {
  "whatsapp-webhook-demo": "Local webhook logic; live WhatsApp messaging needs Meta integration.",
  "model-provider-adapter": "Configuration demo; live model requests need a provider adapter and API key.",
  "voice-bridge": "Text-to-speech adapter needs an API key; transcription is not implemented.",
  "vision-ocr": "Local OCR requires Tesseract; general image analysis is not included.",
};

export default function AiDemos() {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const filtered = projects.filter((item) => active === "All" || item[2] === active);
  const featuredSlugs = ["lead-scout", "support-triage", "web-help-chat", "lead-router", "document-search", "operations-dashboard"];
  const visible = active === "All" && !expanded ? filtered.filter((item) => featuredSlugs.includes(item[0])) : filtered;

  return (
    <div className="ai-showcase" aria-label="AI service projects">
      <div className="ai-showcase-heading">
        <div>
          <span className="ai-eyebrow">24 independently runnable demos</span>
          <h3>AI Services for Smarter Business Operations</h3>
          <p>Explore each project’s workflow and source code. These use sample data; the README explains how to run each demo and what a live integration would need.</p>
        </div>
        <a className="ai-collection-link" href={collection} target="_blank" rel="noopener noreferrer">Browse all code <span aria-hidden="true">↗</span></a>
      </div>

      <div className="ai-filters" role="group" aria-label="Filter AI projects">
        {groups.map((group) => (
          <button key={group} type="button" className={active === group ? "active" : ""}
            aria-pressed={active === group} onClick={() => setActive(group)}>{group}</button>
        ))}
      </div>

      <div className="ai-demo-grid">
        {visible.map(([slug, title, group, input, process, result, label, separateLink]) => (
          <article className="ai-demo-card" key={slug}>
            <a className="ai-preview" href={separateLink || `${collection}/tree/main/${slug}`}
              target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code`}>
              <img src={`/project-previews/${slug}.svg`}
                alt={`${title} workflow illustration showing ${input}, ${process}, and ${result}`}
                loading="lazy" width="720" height="400" />
            </a>
            <div className="ai-demo-content">
              <span className="ai-group">{group}</span>
              <h4>{title}</h4>
              <ol className="ai-flow" aria-label="How it works">
                <li><small>Input</small><strong>{input}</strong></li>
                <li><small>Process</small><strong>{process}</strong></li>
                <li><small>Result</small><strong>{result}</strong></li>
              </ol>
              {integrationNotes[slug] && <p className="ai-scope-note">{integrationNotes[slug]}</p>}
              <a className="ai-code-link" href={separateLink || `${collection}/tree/main/${slug}`}
                target="_blank" rel="noopener noreferrer">{label || "View code and run instructions"} <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>
      {active === "All" && (
        <button type="button" className="ai-more" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
          {expanded ? "Show featured projects" : "Show all 24 AI projects"}
          <i className={`pi ${expanded ? "pi-chevron-up" : "pi-chevron-down"}`} />
        </button>
      )}
    </div>
  );
}
