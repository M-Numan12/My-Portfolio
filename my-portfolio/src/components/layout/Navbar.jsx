import { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";

const navSections = [
  { id: "services", label: "Services" },
  { id: "projects", label: "Work" },
  { id: "process", label: "Process" },
  { id: "skills", label: "Stack" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 24);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...navSections.map((s) => s.id), "contact"];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const items = navSections.map(({ id, label }) => ({
    label,
    className: activeSection === id ? "is-active" : "",
    command: () => scrollToSection(id),
  }));

  const start = (
    <button className="brand-lockup" onClick={() => scrollToSection("home")} aria-label="Go to homepage">
      <span className="brand-mark">
        <img src="/mn-brand-icon.png" alt="MN Logo" />
      </span>
      <span className="brand-text">
        <strong>Muhammad Numan</strong>
        <small>Full-Stack · AI Engineer</small>
      </span>
    </button>
  );

  const end = (
    <button className="btn-primary nav-cta" onClick={() => scrollToSection("contact")}>
      Start a project <i className="pi pi-arrow-up-right" />
    </button>
  );

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
      <div className={`navbar-container${scrolled ? " is-scrolled" : ""}`}>
        <div className="navbar-wrapper">
          <Menubar model={items} start={start} end={end} />
        </div>
      </div>
    </>
  );
}
