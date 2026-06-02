import { motion } from "framer-motion";

export default function About() {
  const details = [
    { label: "Name", value: "Muhammad Numan" },
    { label: "Birthday", value: "June 12, 2003" },
    { label: "Phone", value: "+92-3259773687" },
    { label: "Email", value: "Numannaeem134@gmail.com" },
    { label: "Address", value: "Al-Jalil Garden, Sharaqpur Road, Lahore" },
    { label: "Language", value: "English, Urdu, Punjabi" },
    { label: "Freelance", value: "Available" },
  ];

  const handleDownloadCV = () => {
    // Elegant fallback: opens print window for a professional CV format or can be linked to a real PDF
    window.print();
  };

  return (
    <section className="about" id="about">
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>About Me</h2>
        <h4>A Dedicated Full-Stack Developer Based in Pakistan</h4>
        <p>
          I am a passionate Full-Stack Software Engineer with a deep expertise in building robust web applications, enterprise ERP solutions, and secure point-of-sale systems. With a strong foundation in React.js, Node.js, Express, and PostgreSQL, I specialize in creating software that is both highly performant and user-friendly.
        </p>
        <p>
          My experience spans across full-cycle software development, database design with Sequelize, multi-tenant architectures, and role-based data isolation. I strive to write clean, maintainable code and design seamless visual interfaces that elevate businesses and user experiences.
        </p>

        <div className="personal-details">
          {details.map((detail, index) => (
            <div className="detail-item" key={index}>
              <span className="label">{detail.label}</span>
              <span className="value">{detail.value}</span>
            </div>
          ))}
        </div>

        <a href="/M.Numan_CV.docx" download="M.Numan_CV.docx" className="btn-primary">
          Download CV <i className="pi pi-download"></i>
        </a>
      </motion.div>
    </section>
  );
}