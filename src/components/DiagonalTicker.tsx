import { Fragment } from 'react'
import { motion } from 'framer-motion'

const orangeItems = ["Website Development", "Social Media", "Branding", "Content Creation", "AI Automations", "Consulting"]
const blackItems = ["Tailored Solutions", "Automated Workflows", "Custom Integrations", "Serving Worldwide Clients"]

const Sparkle = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-4 h-4 md:w-5 md:h-5 lg:w-[22px] lg:h-[22px] fill-current text-white flex-shrink-0 mx-4 md:mx-6 lg:mx-8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
  </svg>
)

function DiagonalTicker() {
  // Multiply list elements to build a row wider than the viewport for marquee looping
  const orangeList = Array(12).fill(orangeItems).flat()
  const blackList = Array(12).fill(blackItems).flat()

  return (
    <motion.section 
      className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[480px] py-8 md:py-14 bg-[#D9D9D9] overflow-hidden relative flex items-center justify-center select-none"
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
      {/* Container holding the crossing ribbons */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Black Ribbon: Rotated -6 degrees, sits behind */}
        <div className="absolute w-[150vw] sm:w-[130vw] min-w-[700px] md:min-w-[1470px] h-[48px] md:h-[64px] lg:h-[72px] bg-black -rotate-6 flex items-center overflow-hidden shadow-none border-none z-0">
          <div className="flex items-center w-max animate-marquee whitespace-nowrap pl-4">
            {blackList.map((item, idx) => (
              <Fragment key={`black-${idx}`}>
                <span className="font-display text-white text-lg sm:text-2xl md:text-[28px] lg:text-[32px] leading-none font-bold tracking-tight uppercase">
                  {item}
                </span>
                <Sparkle />
              </Fragment>
            ))}
          </div>
        </div>

        {/* Orange Ribbon: Rotated +6 degrees, sits on top */}
        <div className="absolute w-[150vw] sm:w-[130vw] min-w-[700px] md:min-w-[1470px] h-[48px] md:h-[64px] lg:h-[72px] bg-brand-orange rotate-6 flex items-center overflow-hidden shadow-none border-none z-10">
          <div className="flex items-center w-max animate-marquee whitespace-nowrap pl-4">
            {orangeList.map((item, idx) => (
              <Fragment key={`orange-${idx}`}>
                <span className="font-display text-white text-lg sm:text-2xl md:text-[28px] lg:text-[32px] leading-none font-bold tracking-tight uppercase">
                  {item}
                </span>
                <Sparkle />
              </Fragment>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default DiagonalTicker
