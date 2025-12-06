import { motion } from 'framer-motion'
import { useState } from 'react'

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  // Skills organized by category with proficiency levels
  const skillCategories = [
    {
      category: "Frontend",
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "HTML5", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TailwindCSS", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ]
    },
    {
      category: "Backend",
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "Node.js", level: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", level: 78, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "REST API", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Firebase", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ]
    },
    {
      category: "Tools & Others",
      color: "from-purple-500 to-indigo-600",
      skills: [
        { name: "Git", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Postman", level: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "Figma", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      ]
    }
  ]

  return (
    <section 
      id="skills" 
      className="py-20 sm:py-28 relative"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {"Skills & Technologies".split("").map((char, index) => (
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
            transition={{ duration: 0.8, delay: 1 }}
            className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Skills Categories */}
        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
                />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills in Category - Desktop: Bars, Mobile: Circles */}
              
              {/* Desktop View - Progress Bars */}
              <div className="hidden md:grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl p-5 
                    shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 
                    border border-slate-200/50 dark:border-slate-700/50
                    transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-12 h-12 transition-transform duration-300"
                        />
                        {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg blur-md -z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                          {skill.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile View - Circular Progress */}
              <div className="grid grid-cols-3 gap-3 md:hidden">
                {category.skills.map((skill, skillIndex) => {
                  const circumference = 2 * Math.PI * 36; // radius = 36
                  const strokeDashoffset = circumference - (skill.level / 100) * circumference;
                  
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl p-2 sm:p-3 
                      shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 
                      border border-slate-200/50 dark:border-slate-700/50
                      flex flex-col items-center justify-center"
                    >
                      {/* Circular Progress */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                          {/* Background Circle */}
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            stroke="currentColor"
                            strokeWidth="5"
                            fill="none"
                            className="text-slate-200 dark:text-slate-700"
                          />
                          {/* Progress Circle */}
                          <motion.circle
                            cx="40"
                            cy="40"
                            r="36"
                            stroke="url(#gradient)"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ strokeDashoffset: circumference }}
                            whileInView={{ strokeDashoffset: strokeDashoffset }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, ease: "easeOut" }}
                            style={{
                              strokeDasharray: circumference,
                            }}
                          />
                          {/* Gradient Definition */}
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" className={category.color.includes('cyan') ? 'text-cyan-500' : category.color.includes('green') ? 'text-green-500' : 'text-purple-500'} stopColor="currentColor" />
                              <stop offset="100%" className={category.color.includes('cyan') ? 'text-blue-600' : category.color.includes('green') ? 'text-emerald-600' : 'text-indigo-600'} stopColor="currentColor" />
                            </linearGradient>
                          </defs>
                        </svg>
                        
                        {/* Icon in Center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-7 h-7 sm:w-9 sm:h-9"
                          />
                        </div>
                        

                      </div>
                      
                      {/* Skill Name */}
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white mt-3 text-center">
                        {skill.name}
                      </h4>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
