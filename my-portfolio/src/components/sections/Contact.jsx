import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "pi pi-envelope",
      label: "Email",
      value: "Numannaeem134@gmail.com",
      link: "mailto:Numannaeem134@gmail.com"
    },
    {
      icon: "pi pi-phone",
      label: "Phone",
      value: "+92-3259773687",
      link: "tel:+923259773687"
    },
    {
      icon: "pi pi-map-marker",
      label: "Address",
      value: "Al-Jalil Garden, Sharaqpur Road, Lahore",
      link: "https://maps.google.com/?q=Al-Jalil+Garden,+Sharaqpur+Road,+Lahore"
    },
    {
      icon: "pi pi-linkedin",
      label: "LinkedIn",
      value: "muhammad-numan",
      link: "https://www.linkedin.com/in/muhammad-numan-8656b1406/"
    },
    {
      icon: "pi pi-github",
      label: "GitHub",
      value: "M-Numan12",
      link: "https://github.com/M-Numan12"
    }
  ];

  return (
    <section className="contact-section" id="contact" style={{ background: "rgba(12, 16, 32, 0.4)" }}>
      <div className="section-header">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for project inquiries, freelance opportunities, or collaborations.</p>
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-left glass-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ cursor: "default" }}
        >
          <h3>Just Say Hello</h3>
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{
                background: "rgba(34, 197, 94, 0.1)",
                border: "1px solid #22c55e",
                padding: "20px",
                borderRadius: "10px",
                color: "#22c55e",
                textAlign: "center",
                fontWeight: "600"
              }}
            >
              Message Sent successfully! 🎉 I will get back to you shortly.
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. john@example.com"
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Project Proposal"
                />
              </div>

              <div className="input-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ marginTop: "10px", width: "max-content" }}>
                {isSubmitting ? (
                  <>
                    Sending... <i className="pi pi-spin pi-spinner"></i>
                  </>
                ) : (
                  <>
                    Send Message <i className="pi pi-send"></i>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {contactInfo.map((info, index) => (
            <div className="glass-card info-card" key={index} style={{ cursor: "default" }}>
              <div className="icon-box">
                <i className={info.icon}></i>
              </div>
              <div className="info-content">
                <span className="label">{info.label}</span>
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  {info.value}
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}