import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export default function GlowCard({ children, className = '', hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, boxShadow: '0 0 30px rgba(108, 99, 255, 0.3)' } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`rounded-card border border-text-muted/20 bg-surface p-6 shadow-glow/0 transition-colors duration-300 hover:border-primary/50 ${className}`}
    >
      {children}
    </motion.div>
  )
}

GlowCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
}
