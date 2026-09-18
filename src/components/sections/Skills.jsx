import { motion } from 'framer-motion'
import useScrollAnimation, { staggerContainer, fadeUpVariants } from '../../hooks/useScrollAnimation'
import GlowCard from '../ui/GlowCard'
import { skills } from '../../data/resume'

export default function Skills() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold text-text-primary"
        >
          مهارت‌ها
        </motion.h2>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-8 md:grid-cols-2"
        >
          {skills.map((group) => (
            <motion.div key={group.category} variants={fadeUpVariants}>
              <GlowCard hover={false}>
                <h3 className="mb-6 text-lg font-semibold text-secondary">{group.category}</h3>
                <div className="flex flex-col gap-5">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between text-sm text-text-primary">
                        <span>{skill.name}</span>
                        <span className="text-text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-badge bg-background">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full rounded-badge bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
