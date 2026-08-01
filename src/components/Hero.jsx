import { useState, useEffect, useRef } from 'react'
import profileImg from '/assets/derick_nana_uiprofil_1.jpeg'

const roles = [
  { word: 'digital products', color: '#0096FF' },
  { word: 'UI/UX systems', color: '#FF6600' },
  { word: 'web platforms', color: '#0D8CB4' },
  { word: 'mobile apps', color: '#0A5F4B' },
]

function useTypewriter(words, typingSpeed = 100, deletingSpeed = 60, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [phase, setPhase] = useState('typing') // typing | pausing | deleting

  useEffect(() => {
    const currentWord = words[roleIndex].word
    let timeout

    if (phase === 'typing') {
      if (displayed.length < currentWord.length) {
        timeout = setTimeout(() => setDisplayed(currentWord.slice(0, displayed.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pause)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 200)
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed)
      } else {
        setRoleIndex((i) => (i + 1) % words.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, phase, roleIndex, words, typingSpeed, deletingSpeed, pause])

  return { text: displayed, color: words[roleIndex].color, phase }
}

export default function Hero() {
  const { text, color, phase } = useTypewriter(roles)
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-bg min-h-screen flex items-center section-padding pt-28 md:pt-32"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── Left: Text ─────────────────────────────────── */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div className="mb-4">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Available for new projects</span>
          </div>

          {/* Greeting with Name (Clean, understated, NO gradient) */}
          <p className="text-xl sm:text-2xl font-medium text-gray-600 mb-3">
            Hi there, I'm <span className="font-serif font-bold text-gray-900">Derick NANA</span> 👋
          </p>

          {/* Main Giant Headline with Typewriter */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.12] mb-6">
            I design & build{' '}
            <span
              className={`font-sans font-bold inline-block transition-colors duration-300 ${phase !== 'deleting' ? 'typewriter-cursor' : ''}`}
              style={{ color }}
            >
              {text}
            </span>
          </h1>

          {/* Bio paragraph */}
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg mb-10">
            UI/UX Designer & Frontend Developer crafting digital experiences that are
            both beautiful and purposeful. I bridge the gap between <strong className="text-gray-700">user psychology</strong>,{' '}
            <strong className="text-gray-700">business goals</strong>, and{' '}
            <strong className="text-gray-700">elegant interfaces</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="btn-primary">
              View my work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#about" className="btn-outline">
              About me
            </a>
          </div>

          {/* Social proof numbers */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-gray-100">
            {[
              { num: '5+', label: 'Years Experience' },
              { num: '20+', label: 'Projects Delivered' },
              { num: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-2xl font-bold text-gray-900">{stat.num}</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Visual ──────────────────────────────── */}
        <div className={`relative flex items-center justify-center transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          {/* Decorative gradient blob */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #0096FF 0%, transparent 70%)' }}
            />
          </div>
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #FF0000 0%, transparent 70%)' }}
          />

          {/* Abstract floating shapes */}
          <div className="absolute top-10 right-8 float-anim-slow">
            <div className="w-10 h-10 rounded-full border-2 border-brand-red opacity-30" />
          </div>
          <div className="absolute bottom-16 left-4 float-anim">
            <div className="w-6 h-6 rounded-full bg-accent-vivid opacity-20" />
          </div>
          <div className="absolute top-1/3 right-2 float-anim-fast">
            <svg width="32" height="32" viewBox="0 0 32 32" className="opacity-25">
              <polygon points="16,2 30,28 2,28" fill="none" stroke="#FF0000" strokeWidth="2"/>
            </svg>
          </div>

          {/* Leaf / botanical shape */}
          <div className="absolute -bottom-4 right-1/4 float-anim-slow">
            <svg width="48" height="64" viewBox="0 0 48 64" className="opacity-20">
              <ellipse cx="24" cy="32" rx="16" ry="28" fill="#0096FF" transform="rotate(-20 24 32)"/>
            </svg>
          </div>

          {/* Profile image with styled frame */}
          <div className="relative z-10">
            {/* Outer ring */}
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-brand shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
                <img
                  src={profileImg}
                  alt="Derick NANA – UI/UX Designer & Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
