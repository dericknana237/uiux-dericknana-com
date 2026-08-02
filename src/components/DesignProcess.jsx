import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Understand and align',
    bg: 'bg-pastel-pink',
    border: 'border-red-100',
    accent: '#FF0000',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    body: "I don't just ask questions, I ask the right questions. I dig into user psychology, business constraints, team dynamics, and market signals to uncover what's really going on. I turn scattered insights, fuzzy ideas, and half-baked goals into clear, focused direction. If a brief doesn't exist, I'll help build it. If the strategy is murky, I'll clarify it.",
  },
  {
    number: '02',
    title: 'Design and collaborate',
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    accent: '#6B7280',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    body: "I move from strategy to systems with speed and intention. Every screen I design is grounded in business goals, user insights, and practical constraints. I annotate clearly and structure files so cross-functional teams can easily follow along. I believe in collaboration that's honest and proactive, not just checking a box.",
  },
  {
    number: '03',
    title: 'Test and adapt',
    bg: 'bg-pastel-sky',
    border: 'border-blue-100',
    accent: '#0096FF',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    body: "My work doesn't have to stop at the handoff. I validate designs through experimentation, testing, and ongoing iteration. Whether it's an A/B test, a usability study, or post-launch analysis, I believe in learning fast and improving faster. I'm not afraid to change direction when the data demands it.",
  },
]

export default function DesignProcess() {
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
    <section ref={sectionRef} id="process" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">How I work</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900">
            The Design Process
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
            A structured yet flexible approach that transforms ambiguity into elegant, purposeful design.
          </p>
        </div>

        {/* Cards with dashed connectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Horizontal dashed line – desktop only */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 dashed-connector z-0 pointer-events-none" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative process-card rounded-3xl border ${step.border} ${step.bg} p-8 md:mx-3 flex flex-col gap-5 z-10 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Number badge */}
              <div
                className="absolute -top-4 left-8 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                style={{ backgroundColor: step.accent }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mt-4"
                style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>

              {/* Connector arrow – between cards, desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-7 top-1/2 -translate-y-1/2 items-center justify-center z-20">
                  <div className="w-14 flex items-center justify-center">
                    <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                      <line x1="0" y1="8" x2="30" y2="8" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4 3"/>
                      <polyline points="26,4 32,8 26,12" fill="none" stroke="#d1d5db" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
