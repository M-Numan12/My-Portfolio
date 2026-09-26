import { Menubar } from "primereact/menubar";

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const items = [
    { label: "Services", command: () => scrollToSection("services") },
    { label: "Work", command: () => scrollToSection("projects") },
    { label: "Process", command: () => scrollToSection("process") },
    { label: "Stack", command: () => scrollToSection("skills") },
    { label: "About", command: () => scrollToSection("about") },
    { label: "Resume", command: () => scrollToSection("resume") },
  ];

  const start = (
    <button className="brand-lockup" onClick={() => scrollToSection("home")} aria-label="Go to homepage">
      <span className="brand-mark"><img src="/mn-brand-icon.png" alt="" /></span>
      <span>Muhammad Numan</span>
    </button>
  );

  const end = (
    <button className="btn-primary nav-cta" onClick={() => scrollToSection("contact")}>
      Start a project <i className="pi pi-arrow-up-right" />
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
