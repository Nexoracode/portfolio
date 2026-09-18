import { motion } from 'framer-motion'
import useScrollAnimation, { staggerContainer, fadeUpVariants } from '../../hooks/useScrollAnimation'
import { about } from '../../data/resume'

export default function About() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="about" className="px-6 py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row-reverse"
      >
        <motion.div variants={fadeUpVariants} className="flex-shrink-0">
          <div className="h-56 w-56 overflow-hidden rounded-card border-2 border-primary shadow-glow md:h-72 md:w-72">
            <img
              src={about.image}
              alt="عکس پروفایل"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 text-center md:text-right">
          <motion.h2 variants={fadeUpVariants} className="text-3xl font-bold text-text-primary">
            {about.heading}
          </motion.h2>

          {about.paragraphs.map((paragraph) => (
            <motion.p key={paragraph} variants={fadeUpVariants} className="text-text-muted">
              {paragraph}
            </motion.p>
          ))}

          <motion.div variants={fadeUpVariants} className="grid grid-cols-3 gap-4">
            {about.stats.map((stat) => (
              <div key={stat.label} className="rounded-card bg-surface p-4">
                <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                <p className="text-xs text-text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
