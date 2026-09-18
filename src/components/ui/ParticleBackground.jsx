import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (window.innerWidth <= 768 || prefersReducedMotion) return undefined

    const container = containerRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const particleCount = 1200
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 1) {
      positions[i] = (Math.random() - 0.5) * 10
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x6c63ff,
      transparent: true,
      opacity: 0.7,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    let animationId
    function animate() {
      particles.rotation.x += 0.0004
      particles.rotation.y += 0.0006
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }
    animate()

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 hidden md:block"
      aria-hidden="true"
    />
  )
}
