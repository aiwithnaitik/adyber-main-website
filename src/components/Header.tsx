import { useState } from 'react'
import { motion } from 'framer-motion'

function Header() {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <motion.header 
      className="absolute top-0 left-0 w-full z-20 h-[80px] md:h-[96px] bg-transparent flex items-end pb-3"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 18,
        delay: 0.2
      }}
    >
      {/* Hanging Top Status Badge (Refined SVG notch shape - 280px width on desktop, responsive scaling on mobile) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-[240px] sm:w-[280px] h-[32px] sm:h-[36px] flex flex-col justify-start">
        <div className="relative w-full h-[28px] sm:h-[32px] flex items-center justify-center">
          <svg className="absolute top-0 left-0 w-full h-[32px] sm:h-[36px]" width="280" height="36" viewBox="0 0 280 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 0 C 20 0, 20 32, 50 32 L 230 32 C 260 32, 260 0, 280 0 Z" fill="#353535"/>
          </svg>
          <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-white text-[10px] sm:text-[12px] font-medium leading-none">
            <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full shadow-[0_0_8px_#10b981]"></span>
            Available for New Projects
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20 flex justify-between items-center relative">

        {/* Logo */}
        <a href="/" className="font-display text-[26px] sm:text-[30px] font-bold text-brand-orange tracking-[-1px]">
          Adyber.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
          <a href="#services" className="font-body text-sm font-medium text-muted-gray hover:text-near-black transition-colors duration-200">Services</a>
          <a href="#pricing"  className="font-body text-sm font-medium text-muted-gray hover:text-near-black transition-colors duration-200">Pricing</a>
          <a href="#about"    className="font-body text-sm font-medium text-muted-gray hover:text-near-black transition-colors duration-200">About</a>
          <a href="#contact"  className="font-body text-sm font-medium text-muted-gray hover:text-near-black transition-colors duration-200">Contact</a>
        </nav>

        {/* Contact CTA */}
        <a
          href="#contact"
          className="hidden md:block font-body text-sm font-medium text-white bg-charcoal-btn hover:bg-btn-hover px-6 py-2.5 rounded-full transition-colors duration-200"
        >
          Contact
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="flex md:hidden flex-col gap-1.5 cursor-pointer z-50 border-none bg-transparent p-1"
          onClick={() => setMenuActive(!menuActive)}
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-[2px] bg-near-black transition-all duration-300 ${menuActive ? 'rotate-45 translate-y-[8px]' : ''}`} />
          <span className={`w-6 h-[2px] bg-near-black transition-all duration-300 ${menuActive ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-[2px] bg-near-black transition-all duration-300 ${menuActive ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </button>

        {/* Mobile Navigation Drawer */}
        <nav className={`absolute top-[80px] md:top-[96px] left-0 w-full bg-smoky-white/98 backdrop-blur-[20px] border-b border-black/5 px-6 py-8 flex flex-col gap-6 transition-all duration-300 z-40 md:hidden ${menuActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
          <a href="#services" className="font-body text-base font-medium text-muted-gray hover:text-near-black transition-colors duration-200" onClick={() => setMenuActive(false)}>Services</a>
          <a href="#pricing"  className="font-body text-base font-medium text-muted-gray hover:text-near-black transition-colors duration-200" onClick={() => setMenuActive(false)}>Pricing</a>
          <a href="#about"    className="font-body text-base font-medium text-muted-gray hover:text-near-black transition-colors duration-200" onClick={() => setMenuActive(false)}>About</a>
          <a href="#contact"  className="font-body text-base font-medium text-muted-gray hover:text-near-black transition-colors duration-200" onClick={() => setMenuActive(false)}>Contact</a>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
