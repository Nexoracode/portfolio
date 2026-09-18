import { motion } from 'framer-motion'
import useScrollAnimation, { staggerContainer, fadeUpVariants } from '../../hooks/useScrollAnimation'
import GlowCard from '../ui/GlowCard'
import { experience } from '../../data/resume'

export default function Experience() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-3xl font-bold text-text-primary"
        >
          سوابق کاری
        </motion.h2>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative flex flex-col gap-10 before:absolute before:right-1/2 before:top-0 before:h-full before:w-px before:bg-text-muted/20 md:before:right-1/2"
        >
          {experience.map((item, index) => (
            <motion.div
              key={item.role + item.period}
              variants={fadeUpVariants}
              className={`relative w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:self-start md:pr-10' : 'md:self-end md:pl-10'
              }`}
            >
              <span className="absolute right-0 top-6 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-secondary shadow-glow-cyan md:block md:right-auto md:left-0 rtl:md:right-0 rtl:md:left-auto" />
              <GlowCard>
                <p className="text-xs text-text-muted">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-text-primary">{item.role}</h3>
                <p className="mb-3 text-sm text-secondary">{item.company}</p>
                <p className="mb-4 text-sm text-text-muted">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-badge bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {tag}
                    </span>
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
