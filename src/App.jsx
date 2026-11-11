import { useEffect, useState } from 'react'
import GeoCanvas from './components/GeoCanvas.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Research from './components/Research.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import useReveal from './hooks/useReveal.js'
import useSpotlight from './hooks/useSpotlight.js'
import './App.css'

export default function App() {
  const [ready, setReady] = useState(false)
  useReveal()
  useSpotlight()
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])
  return (
    <>
      <a href="#about" className="skip-link">Skip to content</a>
      <GeoCanvas />
      <Navbar />
      <main className={ready ? 'is-ready' : ''}>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}
