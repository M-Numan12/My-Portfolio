import { Menubar } from "primereact/menubar";

export default function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const items = [
    { label: "Home", icon: "pi pi-home", command: () => scrollToSection("home") },
    { label: "About", icon: "pi pi-user", command: () => scrollToSection("about") },
    { label: "Services", icon: "pi pi-briefcase", command: () => scrollToSection("services") },
    { label: "Skills", icon: "pi pi-sliders-h", command: () => scrollToSection("skills") },
    { label: "Resume", icon: "pi pi-file", command: () => scrollToSection("resume") },
    { label: "Portfolio", icon: "pi pi-folder-open", command: () => scrollToSection("projects") },
    { label: "Reviews", icon: "pi pi-star", command: () => scrollToSection("testimonials") },
    { label: "Contact", icon: "pi pi-envelope", command: () => scrollToSection("contact") },
  ];

  const start = (
    <div className="logo" onClick={() => scrollToSection("home")}>
      M.Numan
    </div>
  );

  const end = (
    <button className="btn-primary" onClick={() => scrollToSection("contact")} style={{ padding: "8px 18px", fontSize: "14px" }}>
      Let's Talk <i className="pi pi-send" style={{ fontSize: "12px" }}></i>
    </button>
  );

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  );
}