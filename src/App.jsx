import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import DesignProcess from './components/DesignProcess'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Soft particle system — fixed, behind all content */}
      <ParticleBackground />

      {/* All page content sits above the canvas */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <LogoMarquee />
          <DesignProcess />
          <CaseStudies />
          <Testimonials />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  )
}
