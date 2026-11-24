import { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "mrnuman.naeem@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const channels = [
  {
    icon: "pi pi-envelope",
    label: "Direct Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    icon: "pi pi-linkedin",
    label: "LinkedIn",
    value: "Muhammad Numan",
    href: "https://www.linkedin.com/in/muhammad-numan-8656b1406/",
    external: true,
  },
  {
    icon: "pi pi-github",
    label: "GitHub",
    value: "github.com/M-Numan12",
    href: "https://github.com/M-Numan12",
    external: true,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const handleChange = ({ target }) =>
    setFormData((current) => ({ ...current, [target.name]: target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "submitting", text: "" });

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: formData.subject || `Project enquiry from ${formData.name}`,
          _subject: `Portfolio Query: ${formData.subject || formData.name}`,
          message: formData.message,
          _template: "table",
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success === "false") {
        throw new Error(data.message || "Unable to send message right now.");
      }

      setStatus({
        type: "success",
        text: "Thank you! Your message has been sent directly to my inbox. I’ll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      const mailSubject = encodeURIComponent(formData.subject || `Project enquiry from ${formData.name}`);
      const mailBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      setStatus({
        type: "error",
        text: "Could not send directly right now. You can email me directly or click below to open your email app.",
        fallbackHref: `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`,
      });
    }
  };

  return (
    <section className="contact-section professional-contact" id="contact">
      <div className="contact-intro">
        <p className="eyebrow">START A CONVERSATION</p>
        <h2>Have a project or technical challenge in mind?</h2>
        <p>
          Share your goals, current bottlenecks, and ideal timeline. I’ll review your requirements
          and reply with a clear, practical technical next step.
        </p>

        <div className="response-note">
          <i className="pi pi-clock" aria-hidden="true" />
          Typical response time: under 24 hours
        </div>

        <div className="direct-links">
          {channels.map(({ icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              className="direct-link-card"
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
            >
              <div className="direct-link-main">
                <span className="direct-link-icon" aria-hidden="true">
                  <i className={icon} />
                </span>
                <span className="direct-link-meta">
                  <small>{label}</small>
                  <strong>{value}</strong>
                </span>
              </div>
              <i className="pi pi-arrow-up-right direct-link-arrow" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <motion.form
        className="contact-form-pro"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="form-row">
          <label>
            Name
            <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" />
          </label>
        </div>

        <label>
          Subject
          <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Web app, ERP system, AI workflow..." />
        </label>

        <label>
          Project details
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder="What are you building, and what does a successful launch look like?"
          />
        </label>

        {status.type === "success" && (
          <div className="contact-status contact-status-success" role="status">
            <i className="pi pi-check-circle" /> {status.text}
          </div>
        )}

        {status.type === "error" && (
          <div className="contact-status contact-status-error" role="alert">
            <span>{status.text}</span>
            {status.fallbackHref && (
              <a href={status.fallbackHref} className="text-link">
                Open email app <i className="pi pi-arrow-up-right" />
              </a>
            )}
          </div>
        )}

        <button className="btn-primary" type="submit" disabled={status.type === "submitting"}>
          {status.type === "submitting" ? (
            <>
              Sending... <i className="pi pi-spin pi-spinner" />
            </>
          ) : (
            <>
              Send message <i className="pi pi-send" />
            </>
          )}
        </button>
        <small>Queries are delivered directly to {CONTACT_EMAIL}.</small>
      </motion.form>
    </section>
  );
}
