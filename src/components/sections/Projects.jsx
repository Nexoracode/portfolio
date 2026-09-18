import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import useScrollAnimation, { staggerContainer, fadeUpVariants } from '../../hooks/useScrollAnimation'
import { projects } from '../../data/resume'

export default function Projects() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold text-text-primary"
        >
          پروژه‌ها
        </motion.h2>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeUpVariants}>
              <Tilt
                glareEnable
                glareMaxOpacity={0.15}
                glareColor="#6C63FF"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                className="h-full"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-card border border-text-muted/20 bg-surface transition-colors duration-300 hover:border-primary/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
                    <p className="flex-1 text-sm text-text-muted">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-badge bg-secondary/10 px-3 py-1 text-xs text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary hover:text-secondary"
                      >
                        <ExternalLink size={16} /> دمو
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-text-muted hover:text-secondary"
                      >
                        <GithubIcon size={16} /> کد
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
