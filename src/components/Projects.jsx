import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack online store with payment integration, user authentication, and an admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["Next.js", "React", "Stripe"],
      category: "fullstack",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative tool to organize and track tasks with real-time updates and notifications.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      tags: ["React", "Firebase", "Material-UI"],
      category: "frontend",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "REST API Backend",
      description: "Scalable backend API with authentication, database management, and real-time features.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      tags: ["Node.js", "Express", "MongoDB"],
      category: "backend",
      demoLink: "#",
      githubLink: "#"
    }
  ]

  const tabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length }
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
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick Actions */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.demoLink}
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
                      View
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
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
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
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
