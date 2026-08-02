import { useState, useEffect, useRef } from 'react'
import profileImg from '/assets/derick_nana_uiprofil_1.jpeg'

const roles = [
  { word: 'digital products', color: '#0096FF' },
  { word: 'UI/UX systems',    color: '#FF6600' },
  { word: 'web platforms',    color: '#0D8CB4' },
  { word: 'mobile apps',      color: '#0A5F4B' },
]

function useTypewriter(words, typingSpeed = 100, deletingSpeed = 60, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [phase, setPhase] = useState('typing')

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

/* ─── Floating particle shapes ─────────────────────────────────────
   These ARE the particle system — geometric shapes drifting softly.
   Very low opacity so they're ambient, not distracting.
──────────────────────────────────────────────────────────────────── */
const SHAPES = [
  /* circles */
  { type: 'circle', size: 40,  top: '8%',  left: '60%', anim: 'float-anim-slow',  color: '#FF0000', opacity: 0.12 },
  { type: 'circle', size: 18,  top: '20%', left: '80%', anim: 'float-anim',       color: '#0096FF', opacity: 0.15 },
  { type: 'circle', size: 28,  top: '65%', left: '55%', anim: 'float-anim-fast',  color: '#0096FF', opacity: 0.10 },
  { type: 'circle', size: 14,  top: '80%', left: '75%', anim: 'float-anim-slow',  color: '#FF6600', opacity: 0.12 },
  { type: 'circle', size: 22,  top: '45%', left: '90%', anim: 'float-anim',       color: '#FF0000', opacity: 0.08 },
  { type: 'circle', size: 10,  top: '12%', left: '72%', anim: 'float-anim-fast',  color: '#0096FF', opacity: 0.14 },
  { type: 'circle', size: 32,  top: '90%', left: '62%', anim: 'float-anim',       color: '#FF0000', opacity: 0.09 },
  /* triangles */
  { type: 'triangle', size: 32, top: '30%', left: '85%', anim: 'float-anim-slow', color: '#FF0000', opacity: 0.13 },
  { type: 'triangle', size: 20, top: '72%', left: '68%', anim: 'float-anim',      color: '#0096FF', opacity: 0.10 },
  { type: 'triangle', size: 26, top: '15%', left: '92%', anim: 'float-anim-fast', color: '#FF6600', opacity: 0.11 },
  { type: 'triangle', size: 16, top: '55%', left: '58%', anim: 'float-anim-slow', color: '#0096FF', opacity: 0.09 },
  /* ellipses / botanical */
  { type: 'ellipse',  w: 48, h: 64, top: '85%', left: '78%', anim: 'float-anim-slow', color: '#0096FF', opacity: 0.08, rotate: -20 },
  { type: 'ellipse',  w: 30, h: 44, top: '35%', left: '95%', anim: 'float-anim',      color: '#FF0000', opacity: 0.07, rotate: 15  },
  { type: 'ellipse',  w: 24, h: 36, top: '60%', left: '82%', anim: 'float-anim-fast', color: '#0096FF', opacity: 0.09, rotate: -35 },
]

function ParticleShape({ s }) {
  const style = { position: 'absolute', top: s.top, left: s.left, pointerEvents: 'none', zIndex: 0 }
  if (s.type === 'circle') {
    return (
      <div className={s.anim} style={style}>
        <div
          style={{
            width: s.size, height: s.size, borderRadius: '50%',
            border: `2px solid ${s.color}`,
            opacity: s.opacity,
          }}
        />
      </div>
    )
  }
  if (s.type === 'triangle') {
    return (
      <div className={s.anim} style={style}>
        <svg width={s.size} height={s.size} viewBox="0 0 32 32" style={{ opacity: s.opacity }}>
          <polygon points="16,2 30,28 2,28" fill="none" stroke={s.color} strokeWidth="2" />
        </svg>
      </div>
    )
  }
  // ellipse
  return (
    <div className={s.anim} style={style}>
      <svg width={s.w} height={s.h} viewBox={`0 0 ${s.w} ${s.h}`} style={{ opacity: s.opacity }}>
        <ellipse
          cx={s.w / 2} cy={s.h / 2} rx={s.w / 2 - 2} ry={s.h / 2 - 2}
          fill={s.color}
          transform={`rotate(${s.rotate} ${s.w / 2} ${s.h / 2})`}
        />
      </svg>
    </div>
  )
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
      className="hero-bg min-h-screen flex items-center section-padding"
      style={{ paddingTop: '88px' }}  /* matches navbar height — no layout shift */
    >
      {/* Particle shapes — scattered across the right side and beyond */}
      {SHAPES.map((s, i) => <ParticleShape key={i} s={s} />)}

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        style={{ alignItems: 'center' }}
      >
        {/* ── Left: Text ─────────────────────────────────── */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="mb-4">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Available for new projects</span>
          </div>

          <p className="text-xl sm:text-2xl font-medium text-gray-600 mb-3">
            Hi there, I'm <span className="font-serif font-bold text-gray-900">Derick NANA</span> 👋
          </p>

          {/*
            LAYOUT-SHIFT FIX:
            The typewriter line switches between 1-line ("web platforms") and 2-line
            ("digital products"). We reserve a FIXED height = 2 lines at every breakpoint
            so the right column (portrait) never moves.
            At text-4xl/leading-[1.15]: 2 × 2.25rem × 1.15 ≈ 5.175rem → 5.5rem
            At text-5xl/leading-[1.15]: 2 × 3rem   × 1.15 ≈ 6.9rem   → 7rem
            At text-6xl/leading-[1.15]: 2 × 3.75rem× 1.15 ≈ 8.625rem → 9rem
            We use clamp to cover all breakpoints.
          */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.15] mb-6">
            <span className="block mb-1 sm:mb-2">I design &amp; build</span>
            <span
              className={`font-sans font-bold block transition-colors duration-300 ${phase !== 'deleting' ? 'typewriter-cursor' : ''}`}
              style={{
                color,
                height: 'clamp(5.5rem, 9vw, 9rem)',  /* always 2-line height — no shift */
                overflow: 'hidden',
                display: 'block',
              }}
            >
              {text}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg mb-10">
            UI/UX Designer &amp; Frontend Developer crafting digital experiences that are
            both beautiful and purposeful. I bridge the gap between{' '}
            <strong className="text-gray-700">user psychology</strong>,{' '}
            <strong className="text-gray-700">business goals</strong>, and{' '}
            <strong className="text-gray-700">elegant interfaces</strong>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="btn-primary">
              View my work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#about" className="btn-outline">About me</a>
          </div>

          <div className="flex gap-8 mt-12 pt-8 border-t border-gray-100">
            {[
              { num: '5+',   label: 'Years Experience' },
              { num: '20+',  label: 'Projects Delivered' },
              { num: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-2xl font-bold text-gray-900">{stat.num}</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Portrait ──────────────────────────────── */}
        <div
          className={`relative flex items-center justify-center transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
        >
          {/* Soft glow blob */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              className="rounded-full"
              style={{
                width: '420px', height: '420px',
                background: 'radial-gradient(circle, rgba(0,150,255,0.10) 0%, transparent 70%)',
              }}
            />
          </div>
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,0,0,0.07) 0%, transparent 70%)' }}
          />

          {/* Portrait ring */}
          <div className="relative z-10">
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
