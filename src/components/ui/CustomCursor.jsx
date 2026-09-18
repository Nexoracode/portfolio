import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDesktop] = useState(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return isFinePointer && !prefersReducedMotion && window.innerWidth > 768
  })

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 })
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    if (!isDesktop) return undefined

    function handleMouseMove(e) {
      cursorX.set(e.clientX - 12)
      cursorY.set(e.clientY - 12)
      if (!isVisible) setIsVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isDesktop, isVisible, cursorX, cursorY])

  if (!isDesktop) return null

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[999] h-6 w-6 rounded-full bg-gradient-to-br from-primary to-secondary mix-blend-screen blur-sm"
      style={{
        x: springX,
        y: springY,
        opacity: isVisible ? 0.8 : 0,
      }}
    />
  )
}
