import { Suspense, lazy } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/ui/ScrollProgress'
import CustomCursor from './components/ui/CustomCursor'
import ParticleBackground from './components/ui/ParticleBackground'
import useLenis from './hooks/useLenis'

const Hero = lazy(() => import('./components/sections/Hero'))
const About = lazy(() => import('./components/sections/About'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Contact = lazy(() => import('./components/sections/Contact'))

function SectionFallback() {
  return <div className="flex min-h-[50vh] items-center justify-center text-text-muted">در حال بارگذاری...</div>
}

export default function App() {
  useLenis()

  return (
    <div className="relative overflow-hidden">
      <ParticleBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Suspense fallback={<SectionFallback />}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
