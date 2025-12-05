import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Education from "./components/Education";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="font-display antialiased relative min-h-screen overflow-x-hidden">
      {/* Developer-Themed Cross Gradient Background */}
      <div className="fixed inset-0 -z-10 transition-colors duration-700">
        {/* Base gradient - Light mode: Clean tech whites with cyan/blue accents */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100
          dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
        ></div>

        {/* Cross gradient layer 1 - Diagonal sweep */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 via-transparent to-indigo-100/60
          dark:from-blue-950/40 dark:via-transparent dark:to-purple-950/40 animate-gradient-x"
        ></div>

        {/* Cross gradient layer 2 - Opposite diagonal */}
        <div
          className="absolute inset-0 bg-gradient-to-tl from-cyan-100/50 via-transparent to-purple-100/50
          dark:from-cyan-950/30 dark:via-transparent dark:to-indigo-950/30 animate-gradient-y"
        ></div>

        {/* Radial glow - Center focus */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
          from-blue-200/30 via-transparent to-transparent
          dark:from-blue-900/20 dark:via-transparent dark:to-transparent"
        ></div>

        {/* Radial glow - Bottom right */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] 
          from-indigo-200/40 via-transparent to-transparent
          dark:from-purple-900/25 dark:via-transparent dark:to-transparent animate-pulse-slow"
        ></div>

        {/* Radial glow - Top left */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] 
          from-cyan-200/40 via-transparent to-transparent
          dark:from-cyan-900/25 dark:via-transparent dark:to-transparent animate-pulse-slow"
        ></div>

        {/* Grid pattern for tech feel - More visible */}
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.8) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Dot pattern overlay for extra tech aesthetic */}
        <div
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.6) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <CustomCursor />
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
      />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
