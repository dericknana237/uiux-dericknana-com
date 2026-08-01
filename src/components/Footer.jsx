const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/dericknana/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm7.92 5.666a10.13 10.13 0 012.153 5.835c-.315-.063-3.467-.703-6.638-.303-.076-.172-.144-.352-.22-.532a33.42 33.42 0 00-.638-1.39c3.505-1.43 5.104-3.493 5.343-3.61zM12 2.072a9.972 9.972 0 016.88 2.749c-.207.187-1.641 2.13-5.02 3.4-1.57-2.885-3.31-5.26-3.576-5.63.235-.033.477-.52.716-.52zm-2.757.52c.25.337 1.963 2.72 3.55 5.558-4.478 1.19-8.434 1.16-8.846 1.15A10.04 10.04 0 019.243 2.59zM1.99 12.013v-.259c.4.009 5.052.073 9.848-1.372.275.536.534 1.08.774 1.628-.12.033-.24.07-.356.11-4.96 1.604-7.59 5.984-7.805 6.334A10.01 10.01 0 011.99 12.013zm10.01 10c-2.4 0-4.61-.843-6.34-2.24.174-.33 2.155-4.12 7.652-6.046.025-.01.047-.018.07-.025a39.3 39.3 0 012.01 7.084 9.96 9.96 0 01-3.392.227zm5.206-1.252a41.48 41.48 0 00-1.878-6.689c3.003-.48 5.636.31 5.944.4a10.05 10.05 0 01-4.066 6.29z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/dericknana237',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Top contact section */}
      <div className="section-padding border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: CTA */}
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">
                Let's Connect
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                Have a project in mind?{' '}
                <span className="text-gradient-brand italic">Let's talk.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                I'm always open to new projects, collaborations, or just a good conversation about design.
                Feel free to reach out — I'd love to hear about what you're building.
              </p>
            </div>

            {/* Right: Contact info */}
            <div className="flex flex-col gap-6">
              <a
                href="mailto:adnedesign@gmail.com"
                id="contact-email-link"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              >
                {/* Circle icon – gradient fill */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-200"
                  style={{ background: 'linear-gradient(135deg, #0096FF 0%, #00CFFF 100%)' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">Email</div>
                  <div className="text-white font-medium group-hover:text-brand-blue transition-colors duration-200">
                    adnedesign@gmail.com
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-500 ml-auto group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>

              <a
                href={`https://wa.me/237655316013?text=${encodeURIComponent("Hello Derick 👋, I'm reaching out from your portfolio. I'd love to discuss a project with you.")}`}
                id="contact-whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              >
                {/* Circle icon – outline style */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                  style={{ border: '2px solid #0096FF', color: '#0096FF' }}
                >
                  {/* WhatsApp icon */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">WhatsApp</div>
                  <div className="text-white font-medium group-hover:text-brand-blue transition-colors duration-200">
                    +237 655 316 013
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-500 ml-auto group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#EAF3FF] flex items-center justify-center">
            <span className="text-[#0096FF] font-serif font-bold text-xs">DN</span>
          </div>
          <span className="font-serif text-gray-300 text-sm">
            Derick NANA<span className="text-brand-red">.</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs text-center">
          © {year} Derick NANA — UI/UX Designer & Developer. All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              id={`social-${social.label.toLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
