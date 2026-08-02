import { useRef, useEffect, useState } from 'react'
import author1 from '/assets/about_author_1.jpeg'
import author2 from '/assets/about_author_2.jpg'
import author3 from '/assets/about_author_3.jpeg'

const badges = [
  { label: 'Passionate Design', color: 'bg-purple-50 text-purple-600 border border-purple-100', emoji: '🎨' },
  { label: 'Coffee Addict',     color: 'bg-amber-50 text-amber-600 border border-amber-100',   emoji: '☕' },
  { label: 'Nature Lover',      color: 'bg-green-50 text-green-600 border border-green-100',   emoji: '🌿' },
]

const skills = [
  { name: 'UI/UX Design', level: 95 },
  { name: 'User Research', level: 90 },
  { name: 'React / Frontend', level: 85 },
  { name: 'Figma & Prototyping', level: 95 },
  { name: 'Design Systems', level: 88 },
]

export default function About() {
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
    <section ref={sectionRef} id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">The Human Behind the Work</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900">
            About me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: 3-Photo layout (1 tall left, 2 stacked right) constrained to 3:4 ratio */}
          <div className={`grid grid-cols-2 gap-3 sm:gap-4 aspect-[3/4] max-h-[460px] sm:max-h-[500px] w-full mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Left: Tall portrait photo */}
            <div className="h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm group border border-gray-100 bg-white">
              <img
                src={author1}
                alt="Derick NANA"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right: 2 stacked photos */}
            <div className="flex flex-col gap-3 sm:gap-4 h-full min-h-0">
              <div className="flex-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm group border border-gray-100 bg-white min-h-0">
                <img
                  src={author2}
                  alt="Derick NANA"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm group border border-gray-100 bg-white min-h-0">
                <img
                  src={author3}
                  alt="Derick NANA"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>

            {/* Personality badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${badge.color}`}
                >
                  <span>{badge.emoji}</span>
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Bio text */}
            <div className="space-y-4 mb-10">
              <p className="text-gray-700 leading-relaxed">
                I'm <strong>Derick NANA</strong>, a UI/UX designer and frontend developer based in Cameroon. 
                I craft digital experiences that seamlessly combine aesthetics and functionality to create 
                memorable products.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My approach is human-centered — I listen, ask the right questions, and co-create. 
                I partner with startups, SMBs, and product teams to transform complex ideas into clear, 
                accessible, and delightful interfaces.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not designing, you'll find me exploring new creative tools, contributing to open-source 
                projects, or sharing user experience design insights.
              </p>
            </div>

            {/* Skills bars */}
            <div className="space-y-4 mb-10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Core Skills</h4>
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs text-gray-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: visible ? `${skill.level}%` : '0%',
                        background: `#0096FF`,
                        transitionDelay: '400ms',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Work with me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#work" className="btn-outline">
                See my work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
