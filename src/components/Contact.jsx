import { motion } from 'framer-motion'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
      
      setTimeout(() => setSubmitSuccess(false), 3000)
    }, 1000)
  }

  return (
    <section 
      id="contact" 
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
            {"Get In Touch".split("").map((char, index) => (
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 bg-green-50 dark:bg-green-900/30 border border-green-500 
              text-green-700 dark:text-green-300 px-6 py-4 rounded-2xl 
              shadow-lg shadow-green-200/50 dark:shadow-green-950/50"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">check_circle</span>
                <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
              </div>
            </motion.div>
          )}

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl 
            p-4 sm:p-6 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 
            border border-slate-200/50 dark:border-slate-700/50"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-slate-300 dark:border-slate-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-500/50'
                    } bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white 
                    placeholder:text-slate-400 dark:placeholder:text-slate-500
                    focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">error</span>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-slate-300 dark:border-slate-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-500/50'
                    } bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white 
                    placeholder:text-slate-400 dark:placeholder:text-slate-500
                    focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">error</span>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter the subject"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.subject 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-slate-300 dark:border-slate-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-500/50'
                  } bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white 
                  placeholder:text-slate-400 dark:placeholder:text-slate-500
                  focus:outline-none focus:ring-2 transition-all`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">error</span>
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="4"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-slate-300 dark:border-slate-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-500/50'
                  } bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white 
                  placeholder:text-slate-400 dark:placeholder:text-slate-500
                  focus:outline-none focus:ring-2 transition-all resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">error</span>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 
                hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl 
                shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.span 
                      className="material-symbols-outlined"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      progress_activity
                    </motion.span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <motion.span 
                      className="material-symbols-outlined"
                      animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      send
                    </motion.span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white text-center mb-8">
              Or reach me directly
            </h3>
            
            {/* Mobile: 3 circles in a row, Desktop: Cards */}
            <div className="flex justify-center items-center gap-6 md:grid md:grid-cols-3 md:gap-4">
              {/* Email */}
              <motion.a
                href="mailto:mehedihasankhan25@yahoo.com"
                animate={{ 
                  y: [0, -10, 0],
                  boxShadow: [
                    "0 10px 30px rgba(59, 130, 246, 0.3)",
                    "0 20px 40px rgba(99, 102, 241, 0.4)",
                    "0 10px 30px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex md:flex-col items-center justify-center gap-3 
                w-20 h-20 md:w-auto md:h-auto md:p-6 
                rounded-full md:rounded-xl
                bg-gradient-to-br from-blue-500 to-indigo-600 md:from-white/80 md:to-white/80
                md:dark:from-slate-800/80 md:dark:to-slate-800/80
                backdrop-blur-xl 
                shadow-lg shadow-blue-500/50 md:shadow-slate-200/50 
                md:dark:shadow-slate-950/50 
                border-2 border-blue-400/50 md:border-slate-200/50 
                md:dark:border-slate-700/50
                md:hover:border-blue-500/50 md:dark:hover:border-blue-400/50
                transition-all duration-300 group"
              >
                <div className="md:p-3 md:bg-blue-100 md:dark:bg-blue-900/30 md:rounded-xl">
                  <span className="material-symbols-outlined text-3xl text-white md:text-blue-600 md:dark:text-blue-400">
                    mail
                  </span>
                </div>
                <div className="hidden md:block text-center">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                    Email
                  </p>
                  <p className="text-sm text-slate-900 dark:text-white font-medium break-all">
                    mehedihasankhan25@yahoo.com
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+8801779370001"
                animate={{ 
                  y: [0, -10, 0],
                  boxShadow: [
                    "0 10px 30px rgba(34, 197, 94, 0.3)",
                    "0 20px 40px rgba(22, 163, 74, 0.4)",
                    "0 10px 30px rgba(34, 197, 94, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex md:flex-col items-center justify-center gap-3 
                w-20 h-20 md:w-auto md:h-auto md:p-6 
                rounded-full md:rounded-xl
                bg-gradient-to-br from-green-500 to-emerald-600 md:from-white/80 md:to-white/80
                md:dark:from-slate-800/80 md:dark:to-slate-800/80
                backdrop-blur-xl 
                shadow-lg shadow-green-500/50 md:shadow-slate-200/50 
                md:dark:shadow-slate-950/50 
                border-2 border-green-400/50 md:border-slate-200/50 
                md:dark:border-slate-700/50
                md:hover:border-green-500/50 md:dark:hover:border-green-400/50
                transition-all duration-300 group"
              >
                <div className="md:p-3 md:bg-green-100 md:dark:bg-green-900/30 md:rounded-xl">
                  <span className="material-symbols-outlined text-3xl text-white md:text-green-600 md:dark:text-green-400">
                    call
                  </span>
                </div>
                <div className="hidden md:block text-center">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                    Phone
                  </p>
                  <p className="text-sm text-slate-900 dark:text-white font-medium">
                    +880 177 937 0001
                  </p>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/8801779370001"
                target="_blank"
                rel="noopener noreferrer"
                animate={{ 
                  y: [0, -10, 0],
                  boxShadow: [
                    "0 10px 30px rgba(16, 185, 129, 0.3)",
                    "0 20px 40px rgba(5, 150, 105, 0.4)",
                    "0 10px 30px rgba(16, 185, 129, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex md:flex-col items-center justify-center gap-3 
                w-20 h-20 md:w-auto md:h-auto md:p-6 
                rounded-full md:rounded-xl
                bg-gradient-to-br from-emerald-500 to-teal-600 md:from-white/80 md:to-white/80
                md:dark:from-slate-800/80 md:dark:to-slate-800/80
                backdrop-blur-xl 
                shadow-lg shadow-emerald-500/50 md:shadow-slate-200/50 
                md:dark:shadow-slate-950/50 
                border-2 border-emerald-400/50 md:border-slate-200/50 
                md:dark:border-slate-700/50
                md:hover:border-emerald-500/50 md:dark:hover:border-emerald-400/50
                transition-all duration-300 group"
              >
                <div className="md:p-3 md:bg-emerald-100 md:dark:bg-emerald-900/30 md:rounded-xl">
                  <svg 
                    className="w-8 h-8 text-white md:text-emerald-600 md:dark:text-emerald-400" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="hidden md:block text-center">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                    WhatsApp
                  </p>
                  <p className="text-sm text-slate-900 dark:text-white font-medium">
                    +880 177 937 0001
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simple Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-10 py-6 border-t border-slate-200/50 dark:border-slate-700/50"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-8">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Md. Mehedi Hasan Khan. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </section>
  )
}

export default Contact
