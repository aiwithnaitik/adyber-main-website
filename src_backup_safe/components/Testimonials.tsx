import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import angelWorldSchoolImage from '../assets/angel-world-school.jpg'
import brothersDhabaImage from '../assets/brothers-dhaba.jpg'

// Custom animated counter component that triggers on viewport entry
function AnimatedNumber({ 
  value, 
  startFrom = 0, 
  suffix = "", 
  duration = 1.5,
  decimals = 0 
}: { 
  value: number, 
  startFrom?: number, 
  suffix?: string, 
  duration?: number,
  decimals?: number 
}) {
  const [count, setCount] = useState(startFrom)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return
    let start = startFrom
    const end = value
    if (start === end) return
    
    let totalMiliseconds = duration * 1000
    let startTime = performance.now()
    
    let timer = requestAnimationFrame(function animate(timestamp) {
      let runtime = timestamp - startTime
      let progress = Math.min(runtime / totalMiliseconds, 1)
      const easeProgress = progress * (2 - progress) // Ease out quadratic
      setCount(easeProgress * (end - start) + start)
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    })
    return () => cancelAnimationFrame(timer)
  }, [isInView, value, startFrom, duration])

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>
}

const slides = [
  {
    image: angelWorldSchoolImage,
    page: "01 / 03",
    quote: "“Adyber built a stunning, high-performance website for our school. Speed and design are top-notch.”",
    name: "Satindar Khurana",
    role: "Principal, Angel World School"
  },
  {
    image: brothersDhabaImage,
    page: "02 / 03",
    quote: "“Adyber designed a beautiful online ordering site for our tiffin service. The clean layout and speed are outstanding.”",
    name: "Varinder Singh",
    role: "Owner, Brothers Dhaba"
  },
  {
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    page: "03 / 03",
    quote: "“Smart design, smooth delivery, and clean branding. Adyber is a powerhouse partner for scaling startups.”",
    name: "Lucas Bennett",
    role: "Co-founder, Hexa Studio"
  }
]

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const imageVariants = {
    hidden: { scale: 1.25, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        mass: 1
      }
    }
  }

  return (
    <section className="w-full lg:h-[857px] py-[112px] px-6 md:px-10 lg:px-[156px] bg-[#D9D9D9] overflow-hidden flex items-center justify-center relative select-none">
      
      {/* Testimonials content container */}
      <div className="w-full max-w-[1128px] flex flex-col items-center relative gap-8 lg:gap-0">
        
        {/* Eyebrow Label */}
        <motion.div 
          className="z-10 mb-4"
          initial={{ opacity: 0, y: 160 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 40,
            mass: 1,
            delay: 0.2
          }}
        >
          <span className="font-body text-sm font-semibold tracking-tight text-muted-gray leading-none">
            (Why clients love Adyber)
          </span>
        </motion.div>

        {/* Huge background ghost heading */}
        <motion.div 
          className="w-full pointer-events-none select-none z-0 overflow-hidden h-[153px] absolute top-[28px] left-0 hidden lg:block"
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
          <h1 className="font-display text-[204px] font-bold leading-none tracking-tighter select-none bg-gradient-to-b from-[#131313]/35 to-transparent bg-clip-text text-transparent opacity-95">
            Testimonials
          </h1>
        </motion.div>

        {/* Bottom row containing cards */}
        <div className="flex flex-col lg:flex-row w-full gap-6 z-10 lg:mt-6">
          
          {/* Left Stats Card */}
          <motion.div 
            className="w-full lg:w-[361px] h-[460px] rounded-[24px] bg-[#1a1a1a] relative overflow-hidden flex flex-col justify-between p-8 pt-[36px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 35
            }}
          >
            {/* Cinematic background noise texture */}
            <div className="absolute inset-0 cinematic-noise opacity-40 mix-blend-overlay z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/40 to-black/80 z-0 pointer-events-none" />
            
            {/* Stats list stack */}
            <div className="relative z-10 flex flex-col gap-10 flex-grow justify-center">
              
              {/* Stat 1 */}
              <div className="flex flex-col gap-1 text-left">
                <span className="font-display text-white text-[72px] md:text-[80px] font-bold leading-none select-none tracking-tight">
                  <AnimatedNumber value={25} suffix="+" startFrom={1} />
                </span>
                <span className="font-body text-white/70 text-xs md:text-sm font-semibold tracking-tight leading-none uppercase">
                  Finalized Projects
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col gap-1 text-left">
                <span className="font-display text-white text-[72px] md:text-[80px] font-bold leading-none select-none tracking-tight">
                  <AnimatedNumber value={97} suffix="%" startFrom={18} />
                </span>
                <span className="font-body text-white/70 text-xs md:text-sm font-semibold tracking-tight leading-none uppercase">
                  Client satisfaction rate
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col gap-1 text-left">
                <span className="font-display text-white text-[72px] md:text-[80px] font-bold leading-none select-none tracking-tight">
                  <AnimatedNumber value={4.9} suffix="/5" startFrom={1.0} decimals={1} />
                </span>
                <span className="font-body text-white/70 text-xs md:text-sm font-semibold tracking-tight leading-none uppercase">
                  Average client rating
                </span>
              </div>

            </div>
          </motion.div>

          {/* Right Testimonial Card / Slideshow */}
          <motion.div 
            className="w-full lg:w-[744px] h-[460px] rounded-[24px] bg-[#222222] relative overflow-hidden flex flex-col justify-between p-10 z-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 35,
              delay: 0.1
            }}
          >
            
            {/* Cinematic slideshow slide content */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                className="absolute inset-0 w-full h-full z-0"
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {/* Background image with scaling in-view effect */}
                <motion.img 
                  src={slides[currentSlide].image} 
                  alt="Laptop Workspace" 
                  className="absolute inset-0 w-full h-full object-cover block"
                  variants={imageVariants}
                />
                {/* Dark shading layer */}
                <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Top-left Indicator */}
            <div className="relative z-10 self-start flex flex-col gap-2">
              <span className="font-body text-sm font-semibold text-white tracking-wide">
                {slides[currentSlide].page.split(" ")[0]}
                <span className="text-white/40 font-normal"> {slides[currentSlide].page.split(" ").slice(1).join(" ")}</span>
              </span>
              <div className="w-[48px] h-[1px] bg-white/30" />
            </div>

            {/* Main Quote and Author Block */}
            <div className="relative z-10 max-w-[540px] flex flex-col gap-6 text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
                >
                  {/* Quote */}
                  <p className="font-display text-xl md:text-2xl lg:text-[28px] leading-[28px] md:leading-[32px] lg:leading-[36px] font-bold text-white tracking-tight">
                    {slides[currentSlide].quote}
                  </p>
                  
                  {/* Author details */}
                  <div className="mt-6 flex flex-col gap-0.5">
                    <span className="font-body text-sm font-semibold text-white">
                      {slides[currentSlide].name}
                    </span>
                    <span className="font-body text-xs text-white/50">
                      {slides[currentSlide].role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slideshow Arrow Buttons */}
            <div className="absolute bottom-10 right-10 z-10 flex gap-2">
              
              {/* Prev Button */}
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200 flex items-center justify-center border-none cursor-pointer outline-none group"
                aria-label="Previous Slide"
              >
                <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>

              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200 flex items-center justify-center border-none cursor-pointer outline-none group"
                aria-label="Next Slide"
              >
                <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Testimonials
