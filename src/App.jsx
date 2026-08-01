import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import DesignProcess from './components/DesignProcess'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
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
  )
}
