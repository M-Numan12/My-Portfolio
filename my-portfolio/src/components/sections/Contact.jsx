import { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "mrnuman.naeem@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

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
        <p className="eyebrow">LET'S BUILD SOMETHING USEFUL</p>
        <h2>Have a project or business problem in mind?</h2>
        <p>Share the goal, the current challenge and your preferred timeline. I’ll help you identify a sensible technical next step.</p>
        <div className="direct-links">
          <a href={`mailto:${CONTACT_EMAIL}`}><i className="pi pi-envelope" /> {CONTACT_EMAIL}</a>
          <a href="https://www.linkedin.com/in/muhammad-numan-8656b1406/" target="_blank" rel="noreferrer"><i className="pi pi-linkedin" /> LinkedIn</a>
          <a href="https://github.com/M-Numan12" target="_blank" rel="noreferrer"><i className="pi pi-github" /> GitHub</a>
        </div>
      </div>
      <motion.form className="contact-form-pro" onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="form-row">
          <label>Name<input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" /></label>
          <label>Email<input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" /></label>
        </div>
        <label>Subject<input name="subject" value={formData.subject} onChange={handleChange} placeholder="Website, app, automation..." /></label>
        <label>Project details<textarea name="message" value={formData.message} onChange={handleChange} required rows="6" placeholder="What are you building, and what does success look like?" /></label>

        {status.type === "success" && (
          <div className="contact-status contact-status-success" role="status">
            <i className="pi pi-check-circle" /> {status.text}
          </div>
        )}

        {status.type === "error" && (
          <div className="contact-status contact-status-error" role="alert">
            <span>{status.text}</span>
            {status.fallbackHref && (
              <a href={status.fallbackHref} className="text-link">Open email app <i className="pi pi-arrow-up-right" /></a>
            )}
          </div>
        )}

        <button className="btn-primary" type="submit" disabled={status.type === "submitting"}>
          {status.type === "submitting" ? (
            <>Sending... <i className="pi pi-spin pi-spinner" /></>
          ) : (
            <>Send message <i className="pi pi-send" /></>
          )}
        </button>
        <small>Your query will be sent directly to {CONTACT_EMAIL}.</small>
      </motion.form>
    </section>
  );
}
