import PropTypes from 'prop-types'
import { TypeAnimation } from 'react-type-animation'

export default function AnimatedText({ sequences, className = '', speed = 50 }) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    return <span className={className}>{sequences[0]}</span>
  }

  return (
    <TypeAnimation
      sequence={sequences.flatMap((text) => [text, 2000])}
      wrapper="span"
      speed={speed}
      className={className}
      repeat={Infinity}
      cursor
    />
  )
}

AnimatedText.propTypes = {
  sequences: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  speed: PropTypes.number,
}
