import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const handleChange = ({ target }) => setFormData((current) => ({ ...current, [target.name]: target.value }));
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Project enquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:Numannaeem134@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section professional-contact" id="contact">
      <div className="contact-intro">
        <p className="eyebrow">LET'S BUILD SOMETHING USEFUL</p>
        <h2>Have a project or business problem in mind?</h2>
        <p>Share the goal, the current challenge and your preferred timeline. I’ll help you identify a sensible technical next step.</p>
        <div className="direct-links">
          <a href="mailto:Numannaeem134@gmail.com"><i className="pi pi-envelope" /> Numannaeem134@gmail.com</a>
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
        <button className="btn-primary" type="submit">Open email draft <i className="pi pi-arrow-up-right" /></button>
        <small>This form opens your email app. Your message is not stored on this website.</small>
      </motion.form>
    </section>
  );
}
