import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import AnimatedText from '../ui/AnimatedText'
import { personalInfo } from '../../data/resume'
import { staggerContainer, fadeUpVariants } from '../../hooks/useScrollAnimation'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-6"
      >
        <motion.p variants={fadeUpVariants} className="text-secondary">
          سلام، من
        </motion.p>

        <motion.h1
          variants={fadeUpVariants}
          className="text-4xl font-extrabold text-text-primary md:text-6xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div variants={fadeUpVariants} className="text-xl text-text-muted md:text-2xl">
          <AnimatedText sequences={personalInfo.roles} />
        </motion.div>

        <motion.p variants={fadeUpVariants} className="max-w-xl text-text-muted">
          {personalInfo.tagline}
        </motion.p>

        <motion.div variants={fadeUpVariants} className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-badge bg-primary px-8 py-3 font-medium text-text-primary shadow-glow transition-transform duration-300 hover:scale-105"
          >
            مشاهده پروژه‌ها
          </a>
          <a
            href="#contact"
            className="rounded-badge border border-text-muted/30 px-8 py-3 font-medium text-text-primary transition-colors duration-300 hover:border-secondary hover:text-secondary"
          >
            تماس با من
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 text-text-muted hover:text-secondary"
        aria-label="اسکرول به پایین"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  )
}
