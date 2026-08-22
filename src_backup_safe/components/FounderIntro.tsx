import { motion } from 'framer-motion'
import naitikFounder1 from '../assets/naitik_founder1.jpg'
import rishiFounder2 from '../assets/rishi_founder2.jpg'

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white/90" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current text-white/90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current text-white/90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const naitikTimeline = [
  { role: "Started Adyber", years: "2024" },
  { role: "Web Developer at Adyber", years: "2025" },
  { role: "Founder of Adyber", years: "2026" }
]

const rishiTimeline = [
  { role: "UI/UX Designer", years: "2022" },
  { role: "Marketing Expert & Designer at Adyber", years: "2024" },
  { role: "Founder of Adyber", years: "2026" }
]

function FounderIntro() {
  const textRevealVariants = {
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

  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  return (
    <section id="about" className="w-full bg-[#D9D9D9] flex flex-col items-center justify-center overflow-hidden select-none gap-24 md:gap-32 lg:gap-40 py-28 relative">
      
      {/* ========================================================
          PROFILE 1: Finton (Image Left, Bio Right)
          ======================================================== */}
      <div className="w-full max-w-[1920px] px-6 md:px-10 lg:px-[156px] relative flex flex-col items-center">
        
        {/* Eyebrow Label */}
        <div className="z-10 mb-4 self-center">
          <span className="font-body text-sm font-semibold tracking-tight text-muted-gray leading-none">
            (Intro)
          </span>
        </div>

        {/* Massive ghost heading background */}
        <motion.div 
          className="w-full max-w-[1128px] pointer-events-none select-none z-0 overflow-hidden h-[153px] absolute top-[28px] left-1/2 -translate-x-1/2 hidden lg:block"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 320,
            damping: 60,
            mass: 1,
            delay: 0.2
          }}
        >
          <h1 className="font-display text-[204px] font-bold leading-none tracking-tighter text-left bg-gradient-to-b from-[#131313]/35 to-transparent bg-clip-text text-transparent opacity-95">
            Founder
          </h1>
        </motion.div>

        {/* Two-column layout container */}
        <div className="w-full max-w-[1128px] flex flex-col lg:flex-row gap-20 lg:gap-[216px] justify-between items-center lg:items-end z-10 lg:mt-6">
          
          {/* Left Portrait Card */}
          <motion.div 
            className="w-full max-w-[456px] h-[570px] rounded-[24px] border border-black/[0.06] bg-[#cbcbcb] relative overflow-hidden flex flex-col justify-end p-8"
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 110,
              damping: 25,
              mass: 1
            }}
          >
            {/* Dramatic portrait image */}
            <img 
              src={naitikFounder1} 
              alt="Naitik Portrait" 
              className="absolute inset-0 w-full h-full object-cover block z-0"
            />

            {/* Social icon buttons */}
            <div className="relative z-20 flex gap-2">
              <a href="https://x.com/NaitikGrover" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors duration-200">
                <XIcon />
              </a>
              <a href="https://naitikgrover.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors duration-200">
                <GlobeIcon />
              </a>
              <a href="mailto:naitik@adyber.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors duration-200">
                <MailIcon />
              </a>
            </div>

          </motion.div>

          {/* Right Content Column */}
          <motion.div 
            className="w-full max-w-[456px] flex flex-col justify-end text-left space-y-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            {/* Biography details */}
            <div className="flex flex-col gap-6">
              
              {/* Heading */}
              <motion.h2 
                className="font-display text-[40px] font-bold text-near-black leading-[48px]"
                variants={textContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {"The Founder".split(" ").map((word, wordIdx) => (
                  <span key={wordIdx} className="inline-block mr-3">
                    {word.split("").map((char, charIdx) => (
                      <motion.span 
                        key={charIdx} 
                        variants={textRevealVariants}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h2>

              {/* Bio Paragraph */}
              <p className="font-body text-lg leading-7 text-muted-gray font-normal">
                Naitik Grover is a website developer and SEO expert focused on crafting fast, functional digital experiences. He works with brands and startups to build high-performance websites and execute SEO strategies that maximize organic search visibility. He balances clean, modern code with optimization to turn web traffic into growth.
              </p>

            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-black/12" />

            {/* Career Timeline */}
            <div className="flex flex-col gap-8 w-full">
              {naitikTimeline.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center w-full font-body text-sm leading-none">
                  <span className="font-bold text-[#131313]">{item.role}</span>
                  <span className="text-muted-gray">{item.years}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>

      {/* ========================================================
          PROFILE 2: Olivia (Bio Left, Image Right)
          ======================================================== */}
      <div className="w-full max-w-[1920px] px-6 md:px-10 lg:px-[156px] relative flex flex-col items-center">


        {/* Two-column layout container (alternated columns: Text Left, Image Right) */}
        <div className="w-full max-w-[1128px] flex flex-col-reverse lg:flex-row gap-20 lg:gap-[216px] justify-between items-center lg:items-end z-10 lg:mt-6">

          {/* Left Content Column */}
          <motion.div 
            className="w-full max-w-[456px] flex flex-col justify-end text-left space-y-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            {/* Biography details */}
            <div className="flex flex-col gap-6">
              
              {/* Heading */}
              <motion.h2 
                className="font-display text-[40px] font-bold text-near-black leading-[48px]"
                variants={textContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {"The Founder".split(" ").map((word, wordIdx) => (
                  <span key={wordIdx} className="inline-block mr-3">
                    {word.split("").map((char, charIdx) => (
                      <motion.span 
                        key={charIdx} 
                        variants={textRevealVariants}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h2>

              {/* Bio Paragraph */}
              <p className="font-body text-lg leading-7 text-muted-gray font-normal">
                Rishi Kapoor is a founder of Adyber, working as a marketing expert and designer. He works with early-stage startups and established brands to build cohesive brand systems and high-converting marketing campaigns. Rishi blends analytic marketing logic with premium aesthetic layouts to drive organic growth.
              </p>

            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-black/12" />

            {/* Career Timeline */}
            <div className="flex flex-col gap-8 w-full">
              {rishiTimeline.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center w-full font-body text-sm leading-none">
                  <span className="font-bold text-[#131313]">{item.role}</span>
                  <span className="text-muted-gray">{item.years}</span>
                </div>
              ))}
            </div>

          </motion.div>
          
          {/* Right Portrait Card */}
          <motion.div 
            className="w-full max-w-[456px] h-[570px] rounded-[24px] border border-black/[0.06] bg-[#cbcbcb] relative overflow-hidden flex flex-col justify-end p-8"
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 110,
              damping: 25,
              mass: 1
            }}
          >
            {/* Dramatic portrait image */}
            <img 
              src={rishiFounder2} 
              alt="Rishi Portrait" 
              className="absolute inset-0 w-full h-full object-cover block z-0"
            />

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default FounderIntro
