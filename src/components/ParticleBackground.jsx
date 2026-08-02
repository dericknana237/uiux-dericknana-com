import { useEffect, useRef } from 'react'

/**
 * Full-page soft particle system rendered on a fixed canvas behind all content.
 * Particles are tiny dots / small circles drifting slowly and continuously.
 */
export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    /* ── Config ─────────────────────────────── */
    const PARTICLE_COUNT = 55
    const COLORS = ['#0096FF', '#00CFFF', '#FF0000', '#FF6B6B', '#A78BFA']
    const MIN_R = 2
    const MAX_R = 6
    const MIN_SPEED = 0.15
    const MAX_SPEED = 0.45

    /* ── Resize ────────────────────────────── */
    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    /* ── Particle factory ──────────────────── */
    const rand = (a, b) => a + Math.random() * (b - a)
    const makeParticle = () => ({
      x:     rand(0, canvas.width),
      y:     rand(0, canvas.height),
      r:     rand(MIN_R, MAX_R),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx:    rand(-MAX_SPEED, MAX_SPEED) || MIN_SPEED,
      vy:    rand(-MAX_SPEED, MAX_SPEED) || MIN_SPEED,
      alpha: rand(0.06, 0.18),
      // subtle pulse
      pulse:      0,
      pulseSpeed: rand(0.008, 0.02),
    })

    let particles = Array.from({ length: PARTICLE_COUNT }, makeParticle)
    let rafId

    /* ── Draw loop ─────────────────────────── */
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        /* move */
        p.x += p.vx
        p.y += p.vy
        p.pulse += p.pulseSpeed

        /* wrap around edges */
        if (p.x < -p.r * 2) p.x = canvas.width + p.r
        if (p.x > canvas.width + p.r * 2) p.x = -p.r
        if (p.y < -p.r * 2) p.y = canvas.height + p.r
        if (p.y > canvas.height + p.r * 2) p.y = -p.r

        /* pulsing opacity */
        const a = p.alpha + Math.sin(p.pulse) * 0.04

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.round(a * 255).toString(16).padStart(2, '0')
        ctx.fill()
      })

      rafId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  )
}
