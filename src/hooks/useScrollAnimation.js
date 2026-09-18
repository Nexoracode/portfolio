import { useRef } from 'react'
import { useInView } from 'framer-motion'

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

export default function useScrollAnimation({ once = true, amount = 0.3 } = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  return { ref, isInView }
}
