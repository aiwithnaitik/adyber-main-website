import { motion, Variants } from 'framer-motion'
import Header from './Header'
import heroImage from '../assets/hero.png'

interface AnimatedChunkProps {
  text: string
  className: string
  baseDelay: number
}

// Character stagger reveal component split word-by-word
function AnimatedChunk({ text, className, baseDelay }: AnimatedChunkProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: baseDelay
      }
    }
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'none',
      transition: {
        type: 'spring',
        duration: 0.4
      }
    }
  };

  const words = text.split(' ')

  return (
    <motion.span
      className={`inline-flex ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, cIdx) => (
            <motion.span
              key={cIdx}
              className="reveal-char"
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
          {wIdx < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </motion.span>
  );
}

// Commented out to resolve unused variable warning. Uncomment when restoring the ticker section.
/*
const clientLogos = [
  "https://framerusercontent.com/images/3cWSgJFsUVvZeOw9LdQmTOSVFhE.svg",
  "https://framerusercontent.com/images/nfabfL1KTOOmw22T9soWodkE5Q.svg",
  "https://framerusercontent.com/images/pFmkT2mGzyfTzJsLN2Lr3fdbIk.svg",
  "https://framerusercontent.com/images/oqkjAivG8qVmaPBg07Z4Yst8rwk.svg",
  "https://framerusercontent.com/images/nmwtsE1SWD34rSXL3OhLE7CTn0.svg",
  "https://framerusercontent.com/images/zhMiNUjAyE25vd6XOETCIwS38.svg"
];
*/

function Hero() {
  return (
    <section id="hero" className="w-full bg-smoky-white rounded-b-[24px] sm:rounded-b-[32px] overflow-hidden flex flex-col items-center pt-[76px] sm:pt-[84px] md:pt-[96px] relative">
      <Header />

      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center text-center relative pb-4 md:pb-4 lg:pb-4">
        
        {/* Social Proof Row */}
        <motion.div 
          className="flex items-center justify-center w-auto h-8 gap-2.5 mt-4 md:mt-6 whitespace-nowrap flex-nowrap"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1.4, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="flex items-center relative flex-shrink-0">
            <img src="https://framerusercontent.com/images/LdiJIgo7vhBde0WiWHd48uSzxU.png" alt="Adyber Co-Founder Naitik Grover - Lead Developer Dehradun" className="w-8 h-8 rounded-full border-2 border-white shadow-[0px_1px_2px_rgba(0,0,0,0.08),_0px_2px_6px_rgba(0,0,0,0.04)] object-cover z-[3]" />
            <img src="https://framerusercontent.com/images/I9yoNS4RgoWEeRpJDtgEIoLAd4Y.png" alt="Adyber Co-Founder Rishi Kapoor - Marketing Expert Haridwar" className="w-8 h-8 rounded-full border-2 border-white shadow-[0px_1px_2px_rgba(0,0,0,0.08),_0px_2px_6px_rgba(0,0,0,0.04)] object-cover z-[2] -ml-2.5" />
            <img src="https://framerusercontent.com/images/G5E86VA7DStEga3pPtCu3nwW1qE.png" alt="Adyber Client - Digital Marketing & Growth" className="w-8 h-8 rounded-full border-2 border-white shadow-[0px_1px_2px_rgba(0,0,0,0.08),_0px_2px_6px_rgba(0,0,0,0.04)] object-cover z-[1] -ml-2.5" />
          </div>
          <span className="font-body text-xs sm:text-sm leading-none font-normal tracking-[-0.14px] text-muted-gray whitespace-nowrap">
            Trusted by founders.
          </span>
        </motion.div>

        {/* Headline block with explicit SEO title context for search bots */}
        <h1 className="mt-5 md:mt-8 flex flex-col justify-center items-center gap-1.5 sm:gap-2 md:gap-3 select-none h-auto w-full px-2 sm:px-4">
          <span className="sr-only">Adyber — Top Digital Marketing Agency & Custom Web Development in Dehradun & Haridwar</span>
          {/* Row 1 */}
          <div className="h-9 min-[375px]:h-10 min-[420px]:h-12 sm:h-16 md:h-20 flex items-center justify-center gap-1.5 min-[375px]:gap-2 sm:gap-3 md:gap-4 whitespace-nowrap max-w-full">
            <AnimatedChunk text="We Build" className="font-display text-[23px] min-[360px]:text-[26px] min-[390px]:text-[28px] min-[430px]:text-[32px] sm:text-[46px] md:text-[72px] leading-tight md:leading-[80px] font-normal tracking-normal text-near-black" baseDelay={0.2} />
            
            {/* Inline Chip 1 (Oval capsule) */}
            <motion.div 
              className="w-9 h-6 min-[360px]:w-10 min-[360px]:h-7 min-[390px]:w-12 min-[390px]:h-8 min-[430px]:w-14 min-[430px]:h-9 sm:w-16 sm:h-[50px] md:w-[81px] md:h-16 rounded-full overflow-hidden inline-flex items-center justify-center bg-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] align-middle flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 137, damping: 30, mass: 1.4, delay: 0.6 }}
            >
              <img src="https://framerusercontent.com/images/luFfRKwjQbMAmBeknRUvUg7XY.svg" alt="Phone Mockup" className="w-full h-full object-cover" />
            </motion.div>

            <AnimatedChunk text="AI Systems" className="font-display text-[23px] min-[360px]:text-[26px] min-[390px]:text-[28px] min-[430px]:text-[32px] sm:text-[46px] md:text-[72px] leading-tight md:leading-[80px] font-normal tracking-normal text-brand-orange" baseDelay={0.4} />
          </div>
          
          {/* Row 2 */}
          <div className="h-9 min-[375px]:h-10 min-[420px]:h-12 sm:h-16 md:h-20 flex items-center justify-center gap-1.5 min-[375px]:gap-2 sm:gap-3 md:gap-4 whitespace-nowrap max-w-full">
            <AnimatedChunk text="that run" className="font-display text-[23px] min-[360px]:text-[26px] min-[390px]:text-[28px] min-[430px]:text-[32px] sm:text-[46px] md:text-[72px] leading-tight md:leading-[80px] font-normal tracking-normal text-near-black" baseDelay={0.6} />
            <AnimatedChunk text="and" className="font-display text-[23px] min-[360px]:text-[26px] min-[390px]:text-[28px] min-[430px]:text-[32px] sm:text-[46px] md:text-[72px] leading-tight md:leading-[80px] font-normal tracking-normal text-brand-orange" baseDelay={0.7} />

            {/* Inline Chip 2 (Oval capsule) */}
            <motion.div 
              className="w-9 h-6 min-[360px]:w-10 min-[360px]:h-7 min-[390px]:w-12 min-[390px]:h-8 min-[430px]:w-14 min-[430px]:h-9 sm:w-16 sm:h-[50px] md:w-[81px] md:h-16 rounded-full overflow-hidden inline-flex items-center justify-center bg-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] align-middle flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 137, damping: 30, mass: 1.4, delay: 0.6 }}
            >
              <img src="https://framerusercontent.com/images/q6Lt0wxatBudeFMJylqNDhblWfw.png" alt="Developer with Laptop" className="w-full h-full object-cover" />
            </motion.div>

            <AnimatedChunk text="Grow" className="font-display text-[23px] min-[360px]:text-[26px] min-[390px]:text-[28px] min-[430px]:text-[32px] sm:text-[46px] md:text-[72px] leading-tight md:leading-[80px] font-normal tracking-normal text-near-black" baseDelay={0.8} />
          </div>

          {/* Row 3 */}
          <div className="h-9 min-[375px]:h-10 min-[420px]:h-12 sm:h-16 md:h-20 flex items-center justify-center gap-1.5 min-[375px]:gap-2 sm:gap-3 md:gap-4 whitespace-nowrap max-w-full">
            <AnimatedChunk text="Your" className="font-display text-[23px] min-[360px]:text-[26px] min-[390px]:text-[28px] min-[430px]:text-[32px] sm:text-[46px] md:text-[72px] leading-tight md:leading-[80px] font-normal tracking-normal text-brand-orange" baseDelay={1.0} />

            {/* Inline Chip 3 (Oval capsule) */}
            <motion.div 
              className="w-9 h-6 min-[360px]:w-10 min-[360px]:h-7 min-[390px]:w-12 min-[390px]:h-8 min-[430px]:w-14 min-[430px]:h-9 sm:w-16 sm:h-[50px] md:w-[81px] md:h-16 rounded-full overflow-hidden inline-flex items-center justify-center bg-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] align-middle flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 137, damping: 30, mass: 1.4, delay: 1.0 }}
            >
              <img src="https://framerusercontent.com/images/SEe6jn6sx24EVdMsr0kTyBN4Ok.png" alt="Global Connection" className="w-full h-full object-cover" />
            </motion.div>

            <AnimatedChunk text="Business." className="font-display text-[23px] min-[360px]:text-[26px] min-[390px]:text-[28px] min-[430px]:text-[32px] sm:text-[46px] md:text-[72px] leading-tight md:leading-[80px] font-normal tracking-normal text-near-black" baseDelay={1.2} />
          </div>
        </h1>

        {/* Supporting Paragraph */}
        <motion.p 
          className="mt-5 md:mt-8 max-w-2xl font-body text-sm sm:text-base leading-6 font-normal tracking-[-0.16px] text-muted-gray px-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 52, damping: 16, mass: 1, delay: 1.4 }}
        >
          We combine AI automation, digital marketing, websites, and SaaS development to simplify operations, increase conversions, and scale businesses faster.
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          className="mt-8 md:mt-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 52, damping: 16, mass: 1, delay: 1.6 }}
        >
          <a 
            href="#pricing" 
            className="inline-flex items-center justify-center bg-charcoal-btn text-white font-body text-sm font-medium px-5 py-3 rounded-full shadow-cta-shadow transition-all duration-300 gap-2 hover:gap-[18px] hover:bg-btn-hover"
          >
            <span>View Plans</span>
            <svg className="w-5 h-5 transition-transform duration-300" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* Showcase Image with Scroll Enter Perspective Animation */}
        <div className="mt-10 md:mt-20 w-full px-3 md:px-2 perspective-1200 transform-style-3d flex justify-center">
          <motion.div 
            className="w-full max-w-[1424px] h-[220px] sm:h-[380px] md:h-[560px] lg:h-[802px] rounded-xl sm:rounded-2xl md:rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] bg-black will-change-transform"
            initial={{ opacity: 0, y: -10, scale: 0.8, rotateX: 35 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.09, 0.89, 0.36, 0.96]
            }}
          >
            <img src={heroImage} alt="Adyber Portfolio Showcase" className="w-full h-full object-cover block" />
          </motion.div>
        </div>

        {/* =========================================================
            SECTION: CLIENT LOGOS MARQUEE TICKER ROW
            To restore this section, uncomment the motion.div block below.
            ========================================================= */}
        {/*
        <motion.div 
          className="w-full max-w-[1128px] mx-auto py-16 px-6 md:px-0 overflow-hidden relative flex justify-center items-center marquee-container mt-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: 'spring',
            stiffness: 66,
            damping: 20,
            mass: 1
          }}
        >
          <div className="absolute top-0 left-0 w-[25px] h-full bg-gradient-to-r from-smoky-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[25px] h-full bg-gradient-to-l from-smoky-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-12 md:gap-[80px] w-max animate-marquee align-middle select-none">
            {clientLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Client Logo ${idx + 1}`}
                className="h-8 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            ))}
            {clientLogos.map((logo, idx) => (
              <img
                key={`dup-${idx}`}
                src={logo}
                alt={`Client Logo Dup ${idx + 1}`}
                className="h-8 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            ))}
          </div>
        </motion.div>
        */}

      </div>
    </section>
  )
}

export default Hero
