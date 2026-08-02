import { useRef, useEffect, useState, useCallback } from 'react'

const ACCENT = '#0096FF'
const BG     = '#EFF8FF'

const drKevinImg  = '/assets/Temoin_Dr_Kevin_EKEM_CEO_Glentera.png'
const ingPierreImg = '/assets/Temoin_Ing_SEUNKOUA_Pierre_CEO_Nelam_Group.png'
const ingPenanoImg = '/assets/Temoin_Ing_Penano_steve_CEO_Aurali_Group.png'
const claireImg   = '/assets/Temoin_Claire_Djine_Fondatrice_Solid_Claire.png'

const testimonials = [
  {
    id: 'dr-kevin',
    quote:
      "Travailler avec Derick a été une expérience remarquable. Il a su concevoir pour Mopital une interface utilisateur intuitive et un front-end robuste qui répondent parfaitement aux besoins de nos utilisateurs médicaux. Sa rigueur, sa créativité et sa compréhension des enjeux UX dans le domaine de la santé sont impressionnantes. Je le recommande sans hésitation.",
    name: 'Dr Kevin EKEM',
    role: 'CEO',
    company: 'Glentera / Mopital',
    photo: drKevinImg,
    tags: ['UI Design', 'Front-End Dev'],
  },
  {
    id: 'ing-pierre',
    quote:
      "Working with Derick on the Nelam Group project was a game-changer. His ability to manage complex design workflows while delivering a polished product experience exceeded our expectations. He bridged the gap between product strategy and visual execution seamlessly. A truly reliable and talented professional.",
    name: 'Ing. Pierre SEUNKOUA',
    role: 'CEO',
    company: 'Nelam Group',
    photo: ingPierreImg,
    tags: ['Gestion Projet', 'Design Produit'],
  },
  {
    id: 'ing-penano',
    quote:
      "Derick a joué un rôle clé dans le développement d'Aurali Flow. Sa maîtrise de la gestion de projet combinée à ses compétences en développement front-end ont permis de livrer une application fluide, esthétique et fonctionnelle dans les délais impartis. C'est un professionnel sérieux, polyvalent et très agréable à collaborer.",
    name: 'Ing. Penano Steve',
    role: 'CEO',
    company: 'Aurali Group',
    photo: ingPenanoImg,
    tags: ['Gestion Projet', 'Dev Frontend'],
  },
  {
    id: 'claire-djine',
    quote:
      "Derick a su capturer l'essence de Solid Claire et lui donner une identité visuelle forte et cohérente. Son travail de branding a transformé notre image de marque et nous a permis de nous démarquer sur le marché. Il est à l'écoute, créatif et toujours force de proposition. Une collaboration que je ne regrette absolument pas !",
    name: 'Claire Djine',
    role: 'Fondatrice',
    company: 'Solid Claire',
    photo: claireImg,
    tags: ['Branding'],
  },
]

export default function Testimonials() {
  const sectionRef  = useRef(null)
  const trackRef    = useRef(null)
  const [visible, setVisible]       = useState(false)
  const [activeIdx, setActiveIdx]   = useState(0)
  const [perPage, setPerPage]       = useState(2)

  /* ── Intersection observer ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  /* ── Responsive cards per page ── */
  useEffect(() => {
    const update = () => setPerPage(window.innerWidth < 768 ? 1 : 2)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalPages = Math.ceil(testimonials.length / perPage)

  const goTo = useCallback((page) => {
    const clamped = Math.max(0, Math.min(page, totalPages - 1))
    setActiveIdx(clamped)
    if (trackRef.current) {
      const cardW = trackRef.current.offsetWidth / perPage
      trackRef.current.scrollTo({ left: clamped * cardW * perPage, behavior: 'smooth' })
    }
  }, [totalPages, perPage])

  /* ── Sync dots on native scroll ── */
  const handleScroll = useCallback(() => {
    if (!trackRef.current) return
    const scrollLeft = trackRef.current.scrollLeft
    const cardW      = trackRef.current.offsetWidth / perPage
    const page       = Math.round(scrollLeft / (cardW * perPage))
    setActiveIdx(Math.min(page, totalPages - 1))
  }, [perPage, totalPages])

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: ACCENT }}
          >
            Kind Words
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900">
            What clients say
          </h2>
        </div>

        {/* ── Carousel wrapper ── */}
        <div className={`relative transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Prev button */}
          <button
            id="testimonial-prev"
            onClick={() => goTo(activeIdx - 1)}
            disabled={activeIdx === 0}
            aria-label="Témoignage précédent"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ color: ACCENT }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            id="testimonial-next"
            onClick={() => goTo(activeIdx + 1)}
            disabled={activeIdx >= totalPages - 1}
            aria-label="Témoignage suivant"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ color: ACCENT }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scroll track */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 scroll-smooth pb-2"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                id={`testimonial-${t.id}`}
                className="testimonial-card flex-shrink-0 rounded-3xl p-8 relative overflow-hidden"
                style={{
                  width: `calc((100% - ${(perPage - 1) * 24}px) / ${perPage})`,
                  scrollSnapAlign: 'start',
                  backgroundColor: BG,
                  minHeight: '320px',
                }}
              >
                {/* Giant quotation mark */}
                <div
                  className="absolute top-4 right-6 font-serif text-[110px] leading-none font-bold select-none pointer-events-none"
                  style={{ color: ACCENT, opacity: 0.06 }}
                >
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill={ACCENT} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {t.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${ACCENT}18`, color: ACCENT }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-base leading-relaxed mb-8 relative z-10 italic">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 relative z-10">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover shadow-md"
                    style={{ outline: `2px solid ${ACCENT}30` }}
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">
                      {t.role}{' '}
                      <span className="font-medium" style={{ color: ACCENT }}>
                        @ {t.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array(totalPages).fill(0).map((_, i) => (
              <button
                key={i}
                id={`testimonial-dot-${i}`}
                onClick={() => goTo(i)}
                aria-label={`Page ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width:  i === activeIdx ? '28px' : '8px',
                  height: '8px',
                  backgroundColor: i === activeIdx ? ACCENT : `${ACCENT}30`,
                }}
              />
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={`text-center mt-14 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-gray-400 text-sm mb-4">Prêt à créer quelque chose de remarquable ensemble ?</p>
          <a
            href={`https://wa.me/237655316013?text=${encodeURIComponent("Hello Derick 👋, I'm reaching out from your portfolio. I'd love to discuss a project with you.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Démarrer une conversation
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
