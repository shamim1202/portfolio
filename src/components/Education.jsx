import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Education() {
  const [displayedText, setDisplayedText] = useState("")
  const [startTyping, setStartTyping] = useState(false)

  const degreeText = "Master's of Business Administration - MBA"

  // Trigger typing when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startTyping) {
          setStartTyping(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('education')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [startTyping])

  // Typewriter effect
  useEffect(() => {
    if (!startTyping) return
    
    let timeout
    if (displayedText.length < degreeText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(degreeText.substring(0, displayedText.length + 1))
      }, 50)
    }
    return () => clearTimeout(timeout)
  }, [displayedText, startTyping, degreeText])

  return (
    <section 
      id="education" 
      className="py-20 sm:py-24 relative"
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
            {"Education".split("").map((char, index) => (
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
              >
                {char}
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

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 sm:px-8 py-6">
              <div className="flex items-start gap-4">
                {/* Graduation Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                  className="bg-white/20 backdrop-blur-sm p-3 rounded-xl"
                >
                  <span className="material-symbols-outlined text-4xl text-white">
                    school
                  </span>
                </motion.div>

                {/* Degree Info */}
                <div className="flex-1">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-xl sm:text-2xl font-bold text-white mb-2"
                  >
                    {displayedText}
                    {displayedText.length < degreeText.length && (
                      <span className="inline-block w-0.5 h-6 bg-white ml-1 animate-pulse"></span>
                    )}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-blue-100 text-sm sm:text-base"
                  >
                    Govt. Syed hatem ali college, Barishal
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="px-6 sm:px-8 py-4 space-y-4">
              {/* University Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">
                    location_city
                  </span>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    University Name
                  </h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 ml-9">
                  National University (Bangladesh)
                </p>
              </motion.div>

              {/* Duration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">
                    calendar_month
                  </span>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Duration
                  </h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 ml-9">
                  2020
                </p>
              </motion.div>

              {/* CGPA/Grade */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">
                    workspace_premium
                  </span>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    CGPA
                  </h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 ml-9">
                  2.94 / 4.00
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
