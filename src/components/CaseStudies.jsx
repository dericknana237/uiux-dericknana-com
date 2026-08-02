import { useState, useRef, useEffect } from 'react'
import CaseStudyModal from './CaseStudyModal'

// ─── Asset imports ─────────────────────────────────────────
import nelam1 from '/assets/projet_nelam_mobile_1.jpeg'
import nelam2 from '/assets/projet_nelam_mobile_2.jpeg'
import nelam3 from '/assets/projet_nelam_mobile_3.jpeg'

import zihmaM1 from '/assets/projet_zihma_mobile_2.jpeg'
import zihmaM2 from '/assets/projet_zihma_mobile_1.png'
import zihmaM3 from '/assets/projet_zihma_mobile_3.jpeg'
import zihmaW1 from '/assets/projet_zihma_web_1.jpeg'
import zihmaW2 from '/assets/projet_zihma_web_2.jpeg'

import smartR1 from '/assets/projet_smart_r_1.jpeg'

import aurali1 from '/assets/projet_auraliflow_mobile_1.jpeg'
import aurali2 from '/assets/projet_auraliflow_mobile_2.jpeg'
import aurali3 from '/assets/projet_auraliflow_mobile_3.jpeg'
import aurali4 from '/assets/projet_auraliflow_mobile_4.jpeg'

import mopital0 from '/assets/projet_mopital_web_0.png'
import mopital1 from '/assets/projet_mopital_web_1.png'
import mopital2 from '/assets/projet_mopital_web_2.png'
import mopital3 from '/assets/projet_mopital_web_3.png'
import mopital4 from '/assets/projet_mopital_web_4.png'

// ─── Client logos (SVG text marks) ─────────────────────────
const clientLogos = [
  'Nelam', 'Zihma', 'Smart-R', 'Aurali', 'Mopital', 'Figma', 'React', 'Tailwind',
]

// ─── Projects data ──────────────────────────────────────────
const projects = [
  {
    id: 'nelam',
    tag: 'Mobile App',
    title: 'Nelam',
    headline: 'Simplified Logistics & Package Shipping',
    shortDesc: 'An intuitive mobile application designed to streamline package sending, tracking, and reception with a fast-action focused interface.',
    bgColor: '#FFF8F4',
    accentColor: '#FF6600',
    gradient: 'linear-gradient(135deg, #FFF8F4 0%, #FEEADB 100%)',
    coverImage: nelam1,
    images: [nelam1, nelam2, nelam3],
    role: 'UI/UX Design, Research',
    tools: 'Figma, React Native',
    timeline: '2024',
    platform: 'Mobile (iOS & Android)',
    overview: 'Nelam is a mobile solution designed to redefine the delivery experience. The objective was to create an interface where users can manage shipments and track packages in just a few taps while incorporating social delivery features.',
    problem: 'Traditional logistics apps often feature cluttered interfaces where status tracking (created, in transit, delivered) is difficult for end users to read clearly.',
    solution: 'Designed a clean interface with a highly visual Quick Actions system (Summary, Order). Strategic use of brand orange guides the eye toward primary call-to-actions while significantly reducing cognitive load.',
  },
  {
    id: 'aurali-flow',
    tag: 'E-Commerce Platform',
    title: 'Aurali Flow',
    headline: 'E-Commerce Management & Storefront Accessibility',
    shortDesc: 'A platform unifying advanced product management in back-office with a dynamic, accessible storefront architecture for end customers.',
    bgColor: '#FBF7F7',
    accentColor: '#5B292A',
    gradient: 'linear-gradient(135deg, #FBF7F7 0%, #F3E5E6 100%)',
    coverImage: aurali1,
    images: [aurali1, aurali2, aurali3, aurali4],
    role: 'UI/UX Design, Dev',
    tools: 'Figma, React Native, Vite',
    timeline: '2024–2025',
    platform: 'Mobile (iOS & Android)',
    overview: 'Aurali Flow rethinks how merchants deploy and manage their online stores. The project articulates a powerful inventory management system with multi-tenant e-commerce architecture.',
    problem: 'Merchants often struggle with fragmented tools disconnected from their storefronts. Ensuring perfect accessibility, fluid navigation, and real-time inventory sync remains a major UX challenge.',
    solution: 'Designed distinct yet seamlessly connected interfaces. The back-office provides clear inventory workflows while the front-office focuses on an intuitive, highly accessible shopping showcase.',
  },
  {
    id: 'zihma-web',
    tag: 'Web Marketplace',
    title: 'Zihma Web',
    headline: 'Multi-Service E-Commerce & Booking Platform',
    shortDesc: 'A comprehensive web ecosystem bringing lodging, dining, real estate, and mobility together on a single desktop platform.',
    bgColor: '#F2F9F7',
    accentColor: '#0A5F4B',
    gradient: 'linear-gradient(135deg, #F2F9F7 0%, #DEEFEA 100%)',
    coverImage: zihmaW1,
    images: [zihmaW1, zihmaW2],
    role: 'UI/UX Design, Web Strategy',
    tools: 'Figma, React',
    timeline: '2024',
    platform: 'Web Platform',
    url: 'app.zihma.com',
    overview: 'Zihma Web is the desktop experience of the Zihma ecosystem, tailored for large-screen browsing of accommodations, vehicle rentals, and multi-category marketplace services.',
    problem: 'Grouping diverse services (Stays, Escapes, Restaurants, Mobility) without creating a confusing UI or convoluted navigation hierarchy.',
    solution: 'Designed a welcoming hero section with rich visual category filters and responsive grid cards, ensuring seamless discovery across stays and dining.',
  },
  {
    id: 'zihma-mobile',
    tag: 'Mobile App',
    title: 'Zihma Mobile',
    headline: 'All-in-One Lifestyle & Mobility App',
    shortDesc: 'An intuitive mobile application bringing hotel bookings, vehicle rentals, and city experiences right to your fingertips.',
    bgColor: '#F2F9F7',
    accentColor: '#0A5F4B',
    gradient: 'linear-gradient(135deg, #F2F9F7 0%, #DEEFEA 100%)',
    coverImage: zihmaM1,
    images: [zihmaM2, zihmaM1, zihmaM3],
    role: 'UI/UX Design, App Strategy',
    tools: 'Figma, React Native',
    timeline: '2024',
    platform: 'Mobile (iOS & Android)',
    overview: 'Zihma Mobile provides an immersive mobile app experience for booking luxury suites, renting premium vehicles, and exploring local services.',
    problem: 'Delivering rapid mobile interaction for booking services while maintaining high-quality visual property cards on smaller screens.',
    solution: 'Implemented a persistent bottom navigation bar with clean icons and edge-to-edge listing cards for seamless property and car rentals.',
  },
  {
    id: 'mopital',
    tag: 'Healthcare SaaS',
    title: 'Mopital',
    headline: 'Integrated Hospital Information System (HIS)',
    shortDesc: 'A comprehensive healthcare administration dashboard designed to centralize and optimize daily clinic and hospital operations.',
    bgColor: '#F0F7FB',
    accentColor: '#0D8CB4',
    secondaryColor: '#F05728',
    gradient: 'linear-gradient(135deg, #F0F7FB 0%, #E2F0F8 100%)',
    coverImage: mopital1,
    images: [mopital1, mopital0, mopital2, mopital3, mopital4],
    role: 'UI/UX Design, System Architecture',
    tools: 'Figma, React, Ant Design',
    timeline: '2024–2025',
    platform: 'Web (SaaS)',
    url: 'pro.mopital.com',
    overview: 'Mopital is a robust SaaS platform dedicated to medical management. The system covers patient admissions, practitioner management, appointment scheduling, billing, and SMS/WhatsApp communications.',
    problem: 'Healthcare institutions often suffer from outdated, fragmented digital tools. Medical staff waste valuable time navigating between software to manage a single patient.',
    solution: 'Architected a productivity-focused web back-office. The dashboard offers immediate visibility into daily key metrics (Admissions, Waiting Patients) with strategic quick-action buttons.',
  },
]

export default function CaseStudies() {
  const [selectedProject, setSelectedProject] = useState(null)
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="work" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">Portfolio</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900">
            Case Studies
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto text-base">
            Real projects. Real challenges. Real impact.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className={`project-card rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
              role="button"
              aria-label={`View case study: ${project.title}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[320px]" style={{ backgroundColor: project.bgColor }}>

                {/* Left: Text */}
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    {/* Tag */}
                    <span
                      className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 text-white"
                      style={{ backgroundColor: project.accentColor }}
                    >
                      {project.tag}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-700 mb-4 italic">
                      {project.headline}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <button
                      className="btn-primary text-sm !px-5 !py-2.5"
                      onClick={(e) => { e.stopPropagation(); setSelectedProject(project) }}
                    >
                      Read case study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    <span className="text-xs text-gray-400 font-medium">{project.platform}</span>
                  </div>
                </div>

                {/* Right: Mockup images */}
                <div className="relative flex items-center justify-center p-6 md:p-8 min-h-[300px] md:min-h-[340px] overflow-hidden">
                  {/* Background shape */}
                  <div
                    className="absolute w-64 h-64 rounded-full opacity-15 blur-xl pointer-events-none"
                    style={{ background: project.accentColor }}
                  />

                  {/* Render based on project platform type */}
                  {project.id === 'zihma-web' || project.id === 'mopital' ? (
                    /* Web browser mockup for Mopital & Zihma Web */
                    <div className="relative z-10 w-full max-w-md rounded-xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="bg-gray-100/90 px-3.5 py-2 flex items-center gap-2 border-b border-gray-200/80">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        </div>
                        <div className="mx-auto text-[11px] font-mono text-gray-400 truncate max-w-[200px]">
                          {project.url || 'app.zihma.com'}
                        </div>
                      </div>
                      <img
                        src={project.coverImage || project.images[0]}
                        alt={project.title}
                        className="w-full h-auto object-cover object-top max-h-[220px]"
                      />
                    </div>
                  ) : (
                    /* Mobile phone stack for Zihma Mobile, Aurali Flow, Nelam */
                    <div className="relative z-10 flex items-center justify-center h-[260px] sm:h-[280px] w-full max-w-sm">
                      {project.images.slice(0, 3).map((img, i) => {
                        const styles = [
                          { zIndex: 10, transform: 'translateX(-36px) rotate(-6deg) scale(0.9)', shadow: 'shadow-lg' },
                          { zIndex: 20, transform: 'translateX(0px) rotate(0deg) scale(1)', shadow: 'shadow-2xl' },
                          { zIndex: 10, transform: 'translateX(36px) rotate(6deg) scale(0.9)', shadow: 'shadow-lg' },
                        ]
                        const s = styles[i] || styles[1]
                        return (
                          <div
                            key={i}
                            className={`absolute rounded-[22px] overflow-hidden border-2 border-white bg-white ${s.shadow} group-hover:scale-105 transition-transform duration-500`}
                            style={{
                              zIndex: s.zIndex,
                              transform: s.transform,
                              width: '125px',
                              height: '240px',
                            }}
                          >
                            <img
                              src={img}
                              alt={`${project.title} screenshot ${i + 1}`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case study modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
