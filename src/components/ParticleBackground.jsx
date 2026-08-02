import { useEffect, useRef } from 'react'

/**
 * Full-page soft particle system — fixed canvas behind all content.
 * Responsive: smaller sizes and fewer particles on mobile screens.
 * Subtle, ambient, elegant shapes (circles, triangles, ellipses, dots).
 */
export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const rand = (a, b) => a + Math.random() * (b - a)
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

    const COLORS = ['#0096FF', '#FF0000', '#FF6600', '#00CFFF']
    const TYPES  = ['circle', 'circle', 'circle', 'triangle', 'ellipse', 'dot']

    let isMobile = window.innerWidth < 768
    let particles = []
    let rafId

    /* ── Factory ─────────────────────────────────────────── */
    const makeParticle = (width, height, mobile) => {
      const type  = pick(TYPES)
      const color = pick(COLORS)
      const speed = rand(0.05, 0.25)
      const angle = rand(0, Math.PI * 2)

      // Mobile sizes & opacity vs Desktop
      const minSize = mobile ? 8 : 12
      const maxSize = mobile ? 20 : 30
      const dotSize = mobile ? rand(1.5, 3.5) : rand(2, 4.5)

      return {
        type,
        color,
        x:      rand(0, width),
        y:      rand(0, height),
        vx:     Math.cos(angle) * speed,
        vy:     Math.sin(angle) * speed,
        size:   type === 'dot' ? dotSize : rand(minSize, maxSize),
        alpha:  mobile ? rand(0.04, 0.09) : rand(0.05, 0.12),
        rotate: rand(0, Math.PI * 2),
        rotV:   rand(-0.003, 0.003),
        pulse:  rand(0, Math.PI * 2),
        pulseV: rand(0.006, 0.015),
      }
    }

    /* ── Init / Resize ──────────────────────────────────── */
    const initParticles = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width  = w
      canvas.height = h
      isMobile = w < 768

      const count = isMobile ? 22 : 38
      particles = Array.from({ length: count }, () => makeParticle(w, h, isMobile))
    }

    initParticles()
    window.addEventListener('resize', initParticles)

    /* ── Zone multiplier ───────────────────────────────────── */
    function zoneFactor(x) {
      if (isMobile) return 1.0
      const t = Math.max(0, (x / canvas.width - 0.45) / 0.55)
      return 1 + t * 1.5
    }

    function alphaHex(a) {
      return Math.round(Math.max(0, Math.min(1, a)) * 255)
        .toString(16).padStart(2, '0')
    }

    /* ── Draw helpers ────────────────────────────────────── */
    function drawCircle(p) {
      const a = (p.alpha + Math.sin(p.pulse) * 0.02) * zoneFactor(p.x)
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2)
      ctx.strokeStyle = p.color + alphaHex(a)
      ctx.lineWidth = isMobile ? 1 : 1.25
      ctx.stroke()
    }

    function drawTriangle(p) {
      const a = (p.alpha + Math.sin(p.pulse) * 0.02) * zoneFactor(p.x)
      const r = p.size / 2
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rotate)
      ctx.beginPath()
      ctx.moveTo(0, -r)
      ctx.lineTo(r * 0.866, r * 0.5)
      ctx.lineTo(-r * 0.866, r * 0.5)
      ctx.closePath()
      ctx.strokeStyle = p.color + alphaHex(a)
      ctx.lineWidth = isMobile ? 1 : 1.25
      ctx.stroke()
      ctx.restore()
    }

    function drawEllipse(p) {
      const a = ((p.alpha * 0.6) + Math.sin(p.pulse) * 0.015) * zoneFactor(p.x)
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rotate)
      ctx.beginPath()
      ctx.ellipse(0, 0, p.size / 2, p.size / 3, 0, 0, Math.PI * 2)
      ctx.fillStyle = p.color + alphaHex(a)
      ctx.fill()
      ctx.restore()
    }

    function drawDot(p) {
      const a = (p.alpha + Math.sin(p.pulse) * 0.02) * zoneFactor(p.x)
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = p.color + alphaHex(a)
      ctx.fill()
    }

    /* ── Animation loop ──────────────────────────────────── */
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.rotate += p.rotV
        p.pulse  += p.pulseV

        const pad = p.size + 4
        if (p.x < -pad)                p.x = canvas.width  + pad
        if (p.x > canvas.width  + pad) p.x = -pad
        if (p.y < -pad)                p.y = canvas.height + pad
        if (p.y > canvas.height + pad) p.y = -pad

        switch (p.type) {
          case 'circle':   drawCircle(p);   break
          case 'triangle': drawTriangle(p); break
          case 'ellipse':  drawEllipse(p);  break
          default:         drawDot(p);      break
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', initParticles)
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
