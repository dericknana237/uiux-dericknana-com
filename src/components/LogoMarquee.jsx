import auraliLogo from '/assets/logo_acheteur_aurali.png'
import smartRLogo from '/assets/logo_acheteur_smart_r.jpeg'
import zihmaLogo from '/assets/logo_acheteur_zihma.png'
import nelamLogo from '/assets/logo_nelam_header.png'

const partnerLogos = [
  { name: 'Aurali Flow', src: auraliLogo, h: 'h-7 sm:h-8' },
  { name: 'Smart-R', src: smartRLogo, h: 'h-6 sm:h-7' },
  { name: 'Zihma', src: zihmaLogo, h: 'h-7 sm:h-8' },
  { name: 'Nelam', src: nelamLogo, h: 'h-6 sm:h-7' },
]

export default function LogoMarquee() {
  // Multiply array to create smooth seamless looping animation
  const loopLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos]

  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
          Trusted by companies & partners
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track flex items-center">
          {loopLogos.map((logo, index) => (
            <div
              key={index}
              className="mx-8 sm:mx-14 flex items-center justify-center flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className={`${logo.h} w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 filter mix-blend-multiply`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
