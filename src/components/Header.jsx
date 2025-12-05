import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Header({ darkMode, toggleDarkMode, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typewriter text
  const fullText =
    "Hi! I'm Md. Mehedi Hasan Khan, a Junior MERN Stack Developer based in Bangladesh.";

  // Typewriter effect
  useEffect(() => {
    let timeout;

    if (isPaused) {
      // Pause before starting to delete or retype
      timeout = setTimeout(() => {
        setIsPaused(false);
        if (displayedText === fullText) {
          setIsDeleting(true);
        } else {
          setIsDeleting(false);
        }
      }, 2000); // 2 second pause
    } else if (isDeleting) {
      // Deleting characters
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length - 1));
        }, 20); // Faster deletion
      } else {
        // Finished deleting, pause before retyping
        setIsPaused(true);
      }
    } else {
      // Typing characters
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
        }, 50); // Natural typing speed
      } else {
        // Finished typing, pause before deleting
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isPaused, fullText]);

  // Function to render text with highlighting
  const renderTextWithHighlight = (text) => {
    const nameStart = text.indexOf("Md. Mehedi Hasan Khan");
    const nameEnd = nameStart + "Md. Mehedi Hasan Khan".length;

    if (nameStart === -1 || text.length < nameStart) {
      // Name not reached yet
      return <span>{text}</span>;
    }

    const before = text.substring(0, nameStart);
    const name = text.substring(nameStart, Math.min(nameEnd, text.length));
    const after = text.length > nameEnd ? text.substring(nameEnd) : "";

    return (
      <>
        <span>{before}</span>
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {name}
        </span>
        <span>{after}</span>
      </>
    );
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Get In Touch" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 bg-[size:4rem_4rem] opacity-20"></div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 py-3"
            : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Clean, No Animation */}
            <motion.button
              onClick={() => scrollToSection("home")}
              className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent
              hover:from-blue-700 hover:to-indigo-700
              dark:hover:from-blue-300 dark:hover:to-indigo-300
              transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MH. KHAN
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <motion.button
                      onClick={() => scrollToSection(item.id)}
                      className={`relative font-medium text-sm transition-colors duration-300 ${
                        activeSection === item.id
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.span
                          className="absolute -bottom-1 left-0 right-0 h-0.5 
                          bg-gradient-to-r from-blue-600 to-indigo-600 
                          dark:from-blue-400 dark:to-indigo-400"
                          layoutId="activeSection"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.button>
                  </li>
                ))}
              </ul>

              {/* Dark/Light Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-xl 
                bg-slate-100 dark:bg-slate-800 
                hover:bg-slate-200 dark:hover:bg-slate-700
                text-slate-700 dark:text-slate-300
                transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle dark mode"
              >
                <span className="material-symbols-outlined text-xl">
                  {darkMode ? "light_mode" : "dark_mode"}
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl 
              bg-slate-100 dark:bg-slate-800 
              hover:bg-slate-200 dark:hover:bg-slate-700
              text-slate-700 dark:text-slate-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="material-symbols-outlined text-xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 
              bg-white/95 dark:bg-slate-800/95 
              backdrop-blur-xl rounded-2xl p-4 
              shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50"
            >
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        activeSection === item.id
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                      }`}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-8 z-10">
        <main className="flex flex-col items-center text-center pt-12 sm:pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm uppercase tracking-widest 
            text-slate-600 dark:text-slate-400 mb-4 font-medium"
          >
            Dynamic Web Magic with MERN Stack
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight 
            text-slate-900 dark:text-white max-w-4xl leading-tight"
          >
            Transforming Concepts into{" "}
            <span
              className="bg-gradient-to-r from-blue-600 to-indigo-600 
            dark:from-blue-400 dark:to-indigo-400 
            bg-clip-text text-transparent"
            >
              Seamless User Experiences
            </span>
          </motion.h1>

          {/* Infinite Typewriter Effect Subtitle */}
          <div className="mt-8 text-lg text-slate-700 dark:text-slate-300 max-w-3xl min-h-[3.5rem] flex items-center justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="inline-flex items-center justify-center flex-wrap"
            >
              {renderTextWithHighlight(displayedText)}
              {/* Blinking cursor */}
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="inline-block w-0.5 h-5 bg-blue-600 dark:bg-blue-400 ml-1"
              />
            </motion.p>
          </div>

          <motion.a
            href="/Resume-of-mehedi.pdf"
            download="Md_Mehedi_Hasan_Khan_Resume.pdf"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group mt-10 inline-flex items-center gap-2 px-8 py-4 
            bg-gradient-to-r from-blue-600 to-indigo-600 
            hover:from-blue-700 hover:to-indigo-700
            text-white font-medium rounded-xl 
            shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20
            transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="material-symbols-outlined text-base"
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              download
            </motion.span>
            Download Resume
          </motion.a>
        </main>
      </div>
    </section>
  );
}

export default Header;
