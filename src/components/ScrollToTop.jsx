import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.15, y: -4 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <motion.span 
            className="material-symbols-outlined"
            animate={{ y: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            arrow_upward
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
