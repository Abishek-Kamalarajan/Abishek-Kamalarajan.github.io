import { useState } from 'react'
import Preloader from './components/Preloader.jsx'
import GeoCanvas from './components/GeoCanvas.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Research from './components/Research.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import useReveal from './hooks/useReveal.js'
import './App.css'

export default function App() {
  const [loading, setLoading] = useState(true)
  useReveal()
  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <GeoCanvas />
      <Navbar />
      <main className={loading ? '' : 'is-ready'}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Education />
        <Contact />
      </main>
    </>
  )
}
