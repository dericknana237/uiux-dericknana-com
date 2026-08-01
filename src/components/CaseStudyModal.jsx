import { useEffect } from 'react'

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-content mx-auto my-auto">

        {/* Header band */}
        <div
          className="rounded-t-3xl p-8 md:p-12 relative overflow-hidden"
          style={{ background: project.gradient || 'linear-gradient(135deg, #FFF0F0, #EFF8FF)' }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            id="modal-close-btn"
            aria-label="Close case study"
            className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-110 transition-all duration-200 shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10" style={{ background: project.accentColor }} />
          <div className="absolute bottom-0 left-1/3 w-16 h-16 rounded-full opacity-10" style={{ background: '#0096FF' }} />

          <div className="relative z-10">
            {/* Tag */}
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 text-white" style={{ backgroundColor: project.accentColor }}>
              Case Study
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3">{project.title}</h2>
            <p className="text-gray-600 text-base max-w-xl">{project.shortDesc}</p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-6 mt-6">
              {[
                { label: 'Role', value: project.role || 'UI/UX Design, Research' },
                { label: 'Tools', value: project.tools || 'Figma, React' },
                { label: 'Timeline', value: project.timeline || '2024' },
                { label: 'Platform', value: project.platform || 'Mobile & Web' },
              ].map((meta) => (
                <div key={meta.label}>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">{meta.label}</div>
                  <div className="text-sm font-semibold text-gray-800 mt-0.5">{meta.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mockup images */}
        {project.images && project.images.length > 0 && (
          <div className="px-8 md:px-12 py-6 overflow-x-auto">
            <div className="flex gap-4 pb-2">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="h-64 md:h-80 w-auto rounded-2xl shadow-md flex-shrink-0 object-cover"
                />
              ))}
            </div>
          </div>
        )}

        {/* Body */}
        <div className="px-8 md:px-12 pb-12 space-y-10">
          {/* Project Overview */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
              Project Overview
            </h3>
            <p className="text-gray-700 leading-relaxed text-base">{project.overview}</p>
          </div>

          <hr className="border-gray-100" />

          {/* Problem */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md"
              style={{ backgroundColor: '#FF0000' }}>
              P
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Problem</h3>
              <p className="text-gray-600 leading-relaxed">{project.problem}</p>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Solution */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md"
              style={{ backgroundColor: '#0096FF' }}>
              S
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Solution</h3>
              <p className="text-gray-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
