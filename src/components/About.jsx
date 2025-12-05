import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { TypeAnimation } from 'react-type-animation'

function About() {
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  const text1 = "I specialize in building modern web applications using the MERN stack. With a focus on clean code and user-centric design, I create scalable solutions that make a difference.";
  const text2 = "I love tackling complex challenges and constantly exploring new technologies. If you're looking for a dedicated developer who values quality and collaboration, let's connect! 🚀";

  // Trigger typing when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startTyping) {
          setStartTyping(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [startTyping]);

  // Typewriter for first paragraph
  useEffect(() => {
    if (!startTyping) return;
    
    let timeout;
    if (displayedText1.length < text1.length) {
      timeout = setTimeout(() => {
        setDisplayedText1(text1.substring(0, displayedText1.length + 1));
      }, 30);
    }
    return () => clearTimeout(timeout);
  }, [displayedText1, startTyping, text1]);

  // Typewriter for second paragraph (starts after first finishes)
  useEffect(() => {
    if (!startTyping || displayedText1.length < text1.length) return;
    
    let timeout;
    if (displayedText2.length < text2.length) {
      timeout = setTimeout(() => {
        setDisplayedText2(text2.substring(0, displayedText2.length + 1));
      }, 30);
    }
    return () => clearTimeout(timeout);
  }, [displayedText2, displayedText1, startTyping, text1.length, text2]);
  // Floating animation variants for tech icons
  const floatingAnimation = (delay = 0) => ({
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  })

  const techIcons = [
    { 
      Icon: FaReact, 
      color: "text-cyan-500", 
      position: "top-0 left-0",
      delay: 0,
      size: "text-5xl"
    },
    { 
      Icon: FaNodeJs, 
      color: "text-green-500", 
      position: "top-0 right-0",
      delay: 1.5,
      size: "text-5xl"
    },
    { 
      Icon: SiMongodb, 
      color: "text-emerald-600", 
      position: "bottom-0 left-0",
      delay: 3,
      size: "text-5xl"
    },
    { 
      Icon: SiExpress, 
      color: "text-slate-700 dark:text-slate-300", 
      position: "bottom-0 right-0",
      delay: 4.5,
      size: "text-5xl"
    }
  ]

  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 relative"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {"About Me".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                className="inline-block"
                style={{ display: char === " " ? "inline" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Floating Tech Icons */}
              {techIcons.map(({ Icon, color, position, delay, size }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${position} -m-2 sm:-m-3 z-10`}
                  variants={floatingAnimation(delay)}
                  initial="initial"
                  animate="animate"
                >
                  <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/50 dark:border-slate-700/50">
                    <Icon className={`text-3xl sm:text-4xl ${color}`} />
                  </div>
                </motion.div>
              ))}

              {/* Main Image Container - Smaller */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl p-3 shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/50 dark:border-slate-700/50"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkkMMN13d73A1qzdf04VnSUJWiQlsVntoSuoPUNQ7wGtk_GgNGUCCux6sGgXDtwZsgu-6fHbHREnBYqlvo7teWoyQeQjzKv0yk0nac7SBQdd9g5KqDAp2x04jNHnddWJWxoScEKva4D6MCM_oB-9gsZsOTgggoJLdpnuYPMeczPo4rxtPApZT4aL6q7cMF77_wq14tejJRkicsbi4EyNsFKaaG3CIbZv8StfunFCV2jj0gnEGNrvDDF01U2NsMC9k0DY5IfgZ9dy6r"
                  alt="Md. Mehedi Hasan Khan"
                  className="w-full aspect-square object-cover rounded-lg"
                />

                {/* Tech Stack Label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-3 text-center"
                >
                  <p className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                    Tech Stack
                  </p>
                  <div className="flex justify-center gap-1.5 flex-wrap">
                    <span className="px-2 py-0.5 text-xs font-medium bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full">
                      React
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                      Node.js
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full">
                      MongoDB
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full">
                      Express
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section with Typewriter */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Terminal-style Card - Smaller */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-400 ml-2">
                  about-me.js
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-4 sm:p-5">
                {/* Greeting */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-3"
                >
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    Hi there!
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                    I'm{' '}
                    <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                      Md. Mehedi Hasan Khan
                    </span>
                  </p>
                </motion.div>

                {/* Typewriter Effect */}
                <div className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                  <TypeAnimation
                    sequence={[
                      'A passionate MERN Stack Developer',
                      2000,
                      'Building beautiful web applications',
                      2000,
                      'Creating seamless user experiences',
                      2000,
                      'Turning ideas into reality',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
                  />
                </div>

                {/* Description with Typewriter */}
                <div className="space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-3">
                  <p className="leading-relaxed min-h-[3rem]">
                    {displayedText1}
                    {displayedText1.length < text1.length && (
                      <span className="inline-block w-0.5 h-3 bg-blue-600 dark:bg-blue-400 ml-0.5 animate-pulse"></span>
                    )}
                  </p>
                  <p className="leading-relaxed min-h-[3rem]">
                    {displayedText2}
                    {displayedText2.length < text2.length && displayedText1.length === text1.length && (
                      <span className="inline-block w-0.5 h-3 bg-blue-600 dark:bg-blue-400 ml-0.5 animate-pulse"></span>
                    )}
                  </p>
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="pt-4 border-t border-slate-200 dark:border-slate-700"
                >
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 text-center">
                    Connect with me
                  </p>
                  <div className="flex gap-3">
                    {/* GitHub Link */}
                    <motion.a
                      href="https://github.com/shamim1202"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-sm font-medium rounded-lg shadow-lg transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </motion.a>

                    {/* LinkedIn Link */}
                    <motion.a
                      href="https://linkedin.com/in/mehedihasan-khan"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
