import { motion } from 'framer-motion'



const CheckIcon = ({ dark = false, orange = false }: { dark?: boolean; orange?: boolean }) => (
  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
    orange ? 'bg-[#FF4D00]/10 text-[#FF4D00]' :
    dark ? 'bg-white/10 text-white' : 
    'bg-near-black/5 text-near-black'
  }`}>
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
)

const ArrowIcon = () => (
  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

function Pricing() {
  const headingText = "Explore Pricing"

  const characterVariants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'none',
      transition: {
        duration: 0.4
      }
    }
  }

  const headingContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 25,
        mass: 1
      }
    }
  }

  const customFeatures = [
    "Custom AI integrations & workflow engineering",
    "High-performance website & SaaS development",
    "Dedicated Slack channel & weekly sync calls",
    "Priority support & rapid turnaround queue"
  ]

  return (
    <section id="pricing" className="w-full bg-[#D9D9D9] py-16 sm:py-20 md:py-[112px] px-4 sm:px-8 md:px-10 lg:px-[156px] flex flex-col items-center justify-center relative select-none">
      
      {/* Container */}
      <div className="w-full max-w-[792px] flex flex-col items-center gap-10 md:gap-16">
        
        {/* Heading Area */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
          
          {/* Eyebrow */}
          <span className="font-body text-sm md:text-base text-muted-gray leading-none">
            (Pricing Plan)
          </span>

          {/* Heading with Character Reveal */}
          <motion.h2 
            className="font-display text-[28px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[34px] sm:leading-[52px] md:leading-[64px] lg:leading-[72px] font-bold text-near-black"
            variants={headingContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {headingText.split("").map((char, index) => (
              <motion.span 
                key={index} 
                variants={characterVariants}
                className="inline-block"
                style={{ display: char === " " ? "inline" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

        </div>

        {/* Pricing Cards Stack */}
        <div className="w-full flex flex-col gap-6 relative">
          
          {/* CARD: Custom Partner Plan / Light Card with Orange Accents */}
          <motion.div
            className="w-full rounded-[20px] sm:rounded-[24px] bg-white border border-black/[0.04] overflow-hidden flex flex-col md:flex-row p-5 sm:p-8 justify-between relative cursor-default z-10 shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Desktop columns layout (hidden on mobile) */}
            <div className="hidden md:flex flex-row justify-between w-full h-[316px] z-10">
              
              {/* Left Column */}
              <div className="w-[48%] flex flex-col justify-between h-full">
                
                <div className="flex flex-col items-start gap-4">
                  {/* Plan Title & Description */}
                  <h3 className="font-display text-2xl font-bold text-near-black leading-none">
                    Tailored Partner Plan
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-muted-gray max-w-[340px]">
                    Collaborate directly with our engineering team to build custom AI workflows, SaaS platforms, and digital systems aligned with your targets.
                  </p>
                </div>

                {/* Bottom Delivery Row */}
                <div className="w-full">
                  <div className="w-[340px] h-[1px] bg-black/[0.08] mb-3" />
                  <div className="flex justify-between w-[340px] font-body text-sm text-muted-gray leading-none">
                    <span>Engagement Model</span>
                    <span className="font-semibold text-near-black">Direct Partnership</span>
                  </div>
                </div>

              </div>

              {/* Right Column */}
              <div className="w-[48%] flex flex-col justify-between h-full">
                
                {/* Price block */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col leading-none gap-0.5">
                    <span className="font-display text-xl text-muted-gray font-bold tracking-tight">
                      Custom Solutions
                    </span>
                    <span className="font-display text-[32px] leading-none font-bold text-[#FF4D00] mt-1.5">
                      Tailored Pricing
                    </span>
                  </div>
                  <div className="w-full h-[1px] bg-black/[0.08]" />
                </div>

                {/* Features List with Orange Checkmarks */}
                <div className="flex flex-col gap-4 py-2">
                  {customFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckIcon orange />
                      <span className="font-body text-sm text-near-black leading-none">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action button (Orange background hovering to darker orange) */}
                <a 
                  href="https://wa.me/917819916385" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 bg-[#FF4D00] hover:bg-[#E04400] text-white rounded-full flex items-center justify-center font-body text-sm font-semibold tracking-tight transition-colors duration-200 group"
                >
                  Book a Discovery Call
                  <ArrowIcon />
                </a>

              </div>

            </div>

            {/* Mobile Stacked Layout (hidden on desktop) */}
            <div className="flex md:hidden flex-col gap-5 w-full text-left z-10">
              {/* Plan Title */}
              <h3 className="font-display text-xl font-bold text-near-black leading-none">
                Tailored Partner Plan
              </h3>
              {/* Description */}
              <p className="font-body text-xs sm:text-sm leading-relaxed text-muted-gray">
                Collaborate directly with our engineering team to build custom AI workflows, SaaS platforms, and digital systems aligned with your targets.
              </p>
              {/* Price */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col leading-none gap-0.5">
                  <span className="font-display text-base text-muted-gray font-bold tracking-tight">
                    Custom Solutions
                  </span>
                  <span className="font-display text-[24px] leading-none font-bold text-[#FF4D00] mt-1">
                    Tailored Pricing
                  </span>
                </div>
                <div className="w-full h-[1px] bg-black/[0.08]" />
              </div>
              {/* Features List */}
              <div className="flex flex-col gap-3">
                {customFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckIcon orange />
                    <span className="font-body text-xs sm:text-sm text-near-black leading-tight">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
              {/* Delivery Row */}
              <div>
                <div className="w-full h-[1px] bg-black/[0.08] mb-3" />
                <div className="flex justify-between font-body text-xs sm:text-sm text-muted-gray leading-none">
                  <span>Engagement Model</span>
                  <span className="font-semibold text-near-black">Direct Partnership</span>
                </div>
              </div>
              {/* Button */}
              <a 
                href="https://wa.me/917819916385" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 bg-[#FF4D00] hover:bg-[#E04400] text-white rounded-full flex items-center justify-center font-body text-sm font-semibold tracking-tight transition-colors duration-200 group"
              >
                Book a Discovery Call
                <ArrowIcon />
              </a>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Pricing
