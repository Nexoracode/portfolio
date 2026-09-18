import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import useScrollAnimation, { staggerContainer, fadeUpVariants } from '../../hooks/useScrollAnimation'
import { contact, personalInfo } from '../../data/resume'

export default function Contact() {
  const { ref, isInView } = useScrollAnimation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`پیام از طرف ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nایمیل: ${form.email}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="px-6 py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-xl text-center"
      >
        <motion.h2 variants={fadeUpVariants} className="mb-3 text-3xl font-bold text-text-primary">
          {contact.heading}
        </motion.h2>
        <motion.p variants={fadeUpVariants} className="mb-10 text-text-muted">
          {contact.subheading}
        </motion.p>

        <motion.form variants={fadeUpVariants} onSubmit={handleSubmit} className="flex flex-col gap-4 text-right">
          <input
            type="text"
            name="name"
            required
            placeholder="نام شما"
            value={form.name}
            onChange={handleChange}
            className="rounded-card border border-text-muted/20 bg-surface px-4 py-3 text-text-primary outline-none transition-colors duration-300 focus:border-primary"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="ایمیل شما"
            value={form.email}
            onChange={handleChange}
            className="rounded-card border border-text-muted/20 bg-surface px-4 py-3 text-text-primary outline-none transition-colors duration-300 focus:border-primary"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="پیام شما"
            value={form.message}
            onChange={handleChange}
            className="resize-none rounded-card border border-text-muted/20 bg-surface px-4 py-3 text-text-primary outline-none transition-colors duration-300 focus:border-primary"
          />
          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 rounded-badge bg-primary px-8 py-3 font-medium text-text-primary shadow-glow transition-transform duration-300 hover:scale-105"
          >
            <Send size={18} /> ارسال پیام
          </button>
        </motion.form>
      </motion.div>
    </section>
  )
}
