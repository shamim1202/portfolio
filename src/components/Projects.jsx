import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  const projects = [
    {
      title: "Daily Loop",
      description: "A full-stack blog and article sharing platform where users can create, read, and engage with content. Features user authentication, article management, and interactive community features.",
      image: "https://i.ibb.co.com/Qb3Zy5g/dailyloop.png",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      category: "mern",
      demoLink: "https://dailyloop.netlify.app/",
      githubFrontend: "https://github.com/shamim1202/daily-loop-client",
      githubBackend: "https://github.com/shamim1202/daily-loop-server"
    },
    {
      title: "Warm Paws",
      description: "A compassionate pet adoption platform connecting loving families with pets in need of homes. Features pet listings, adoption requests, and user profiles for seamless pet adoption experience.",
      image: "https://i.ibb.co.com/Qb3Zy5g/dailyloop.png",
      tags: ["React", "Firebase", "TailwindCSS"],
      category: "frontend",
      demoLink: "https://petwarmpaws.netlify.app/",
      githubLink: "https://github.com/shamim1202/warmpaws"
    },
    {
      title: "Travel Nest",
      description: "A modern travel and tourism platform built with Next.js for optimal performance. Features destination browsing, tour packages, booking system, and user reviews with server-side rendering.",
      image: "https://i.ibb.co.com/Qb3Zy5g/dailyloop.png",
      tags: ["Next.js", "Node.js", "Express", "MongoDB"],
      category: "mern",
      demoLink: "https://travel-nest-client.vercel.app/",
      githubFrontend: "https://github.com/shamim1202/travel-nest-client",
      githubBackend: "https://github.com/shamim1202/travel-nest-server"
    }
  ]

  const tabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'mern', label: 'MERN Stack', count: projects.filter(p => p.category === 'mern').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length }
  ]

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab)

  return (
    <section 
      id="projects" 
      className="py-20 sm:py-28 relative"
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
            {"Featured Projects".split("").map((char, index) => (
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
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Explore my latest work and creative solutions
          </motion.p>
        </motion.div>

        {/* Smooth Tabs - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12 overflow-x-auto px-4 sm:px-0"
        >
          <div className="inline-flex bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-1.5 shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 min-w-max">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                  <span className={`text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${
                    activeTab === tab.id
                      ? 'bg-white/20'
                      : 'bg-slate-200 dark:bg-slate-700'
                  }`}>
                    {tab.count}
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/50 dark:border-slate-700/50"
              >
                {/* Project Live Preview */}
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <div className="absolute inset-0 overflow-hidden">
                    <iframe
                      src={project.demoLink}
                      title={project.title}
                      className="w-full h-[200%] origin-top scale-50 pointer-events-auto"
                      loading="lazy"
                      style={{ 
                        transform: 'scale(0.5)',
                        transformOrigin: 'top left',
                        width: '200%',
                        height: '200%'
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Quick Actions */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl text-sm font-medium text-slate-900 dark:text-white"
                    >
                      <motion.span 
                        className="material-symbols-outlined text-base"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        visibility
                      </motion.span>
                      Live
                    </motion.a>
                    {project.githubLink ? (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/btn flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl text-sm font-medium text-slate-900 dark:text-white"
                      >
                        <motion.span 
                          className="material-symbols-outlined text-base"
                          animate={{ rotate: [0, 360] }}
                          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        >
                          code
                        </motion.span>
                        Code
                      </motion.a>
                    ) : (
                      <>
                        <motion.a
                          href={project.githubFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.08, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="group/btn flex-1 flex items-center justify-center gap-1 px-2 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl text-xs font-medium text-slate-900 dark:text-white"
                        >
                          <span className="material-symbols-outlined text-sm">code</span>
                          Client
                        </motion.a>
                        <motion.a
                          href={project.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.08, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="group/btn flex-1 flex items-center justify-center gap-1 px-2 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl text-xs font-medium text-slate-900 dark:text-white"
                        >
                          <span className="material-symbols-outlined text-sm">storage</span>
                          Server
                        </motion.a>
                      </>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
              <span className="material-symbols-outlined text-3xl text-slate-400">folder_off</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try selecting a different category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
