import { Fragment } from 'react'
import { motion } from 'framer-motion'

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-current text-white flex-shrink-0 mx-4 md:mx-6 lg:mx-8 animate-[spin_10s_linear_infinite]" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
  </svg>
)

const emails = Array(12).fill("team@adyber.com")

function ContactConnect() {
  const charVariants = {
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
        staggerChildren: 0.04,
        delayChildren: 0.2
      }
    }
  }

  const panelVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.1
      }
    }
  }

  return (
    <section id="contact" className="w-full bg-[#D9D9D9] pt-[60px] sm:pt-[100px] md:pt-[167px] lg:pt-[267px] pb-0 overflow-hidden relative flex flex-col items-center justify-end select-none">
      
      {/* Giant Background Heading */}
      <motion.div 
        className="w-full pointer-events-none select-none z-0 h-[153px] absolute top-[28px] lg:top-[128px] left-0 hidden lg:block px-6 md:px-10 lg:px-12"
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
        <h1 className="font-display text-[13.5vw] xl:text-[210px] 2xl:text-[240px] font-bold leading-none tracking-tighter text-left bg-gradient-to-b from-[#131313]/35 to-transparent bg-clip-text text-transparent opacity-95">
          Let's Connect
        </h1>
      </motion.div>

      {/* Contact Panel Card Container */}
      <motion.div 
        className="w-full sm:w-[calc(100%-16px)] max-w-[1424px] rounded-t-[24px] sm:rounded-t-[32px] rounded-b-none overflow-hidden relative flex flex-col justify-between pt-10 sm:pt-16 lg:pt-24 px-4 sm:px-8 md:px-16 lg:px-[148px] pb-10 sm:pb-16 z-10 min-h-[auto] md:min-h-[600px] lg:min-h-[900px] lg:h-auto"
        variants={panelVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Background thumbnail collage image */}
        <img 
          src="https://framerusercontent.com/images/1sREGvYWbdhqXmijCOMUIsD7A.png" 
          alt="Portfolio Grid Collage" 
          className="absolute inset-0 w-full h-full object-cover block z-0 blur-[2px]"
        />
        {/* Dark overlay sheet */}
        <div className="absolute inset-0 bg-black/75 z-0 pointer-events-none" />

        {/* Top Content Row: Headline & Form */}
        <div className="relative z-10 flex flex-col lg:flex-row w-full justify-between items-start gap-10 md:gap-16 lg:gap-0 max-w-[1144px] mx-auto">
          
          {/* Left Column: Heading and Subtext */}
          <div className="w-full lg:w-[456px] flex flex-col gap-3 sm:gap-4 text-left">
            
            {/* Title with Character Reveal */}
            <motion.h2 
              className="font-display text-[30px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[36px] sm:leading-[48px] md:leading-[60px] lg:leading-[72px] font-bold text-white"
              variants={headingContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {"Got a project in".split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block mr-2 sm:mr-3">
                  {word.split("").map((char, charIdx) => (
                    <motion.span 
                      key={charIdx} 
                      variants={charVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}<br />
              {"mind?".split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block mr-2 sm:mr-3">
                  {word.split("").map((char, charIdx) => (
                    <motion.span 
                      key={charIdx} 
                      variants={charVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h2>

            {/* Supporting Description */}
            <p className="font-body text-xs sm:text-sm text-white/60 font-medium">
              Let's make something happen together
            </p>

          </div>

          {/* Right Column: Styled Contact Form Card */}
          <form 
            onSubmit={(e) => e.preventDefault()}
            className="w-full lg:w-[480px] bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-[20px] sm:rounded-[24px] p-5 sm:p-8 md:p-10 flex flex-col gap-4 sm:gap-6 text-left shadow-2xl relative z-10"
          >
            
            {/* Field 1: Name */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="contact-name" className="font-body text-xs font-semibold uppercase tracking-wider text-white/70 leading-none">
                Your Name
              </label>
              <input 
                type="text" 
                id="contact-name"
                placeholder="Enter your Name"
                className="w-full h-11 sm:h-12 px-4 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange/50 focus:bg-white/[0.08] transition-all duration-200 font-body text-sm"
              />
            </div>

            {/* Field 2: Email */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="contact-email" className="font-body text-xs font-semibold uppercase tracking-wider text-white/70 leading-none">
                Your Email
              </label>
              <input 
                type="email" 
                id="contact-email"
                placeholder="Enter the Email"
                className="w-full h-11 sm:h-12 px-4 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange/50 focus:bg-white/[0.08] transition-all duration-200 font-body text-sm"
              />
            </div>

            {/* Field 4: Which service do you want? */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="contact-service" className="font-body text-xs font-semibold uppercase tracking-wider text-white/70 leading-none">
                Which service do you want?
              </label>
              <div className="relative w-full">
                <select 
                  id="contact-service"
                  className="w-full h-11 sm:h-12 pl-4 pr-10 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:outline-none focus:border-brand-orange/50 focus:bg-white/[0.08] transition-all duration-200 font-body text-sm appearance-none cursor-pointer"
                  style={{ colorScheme: 'dark' }}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#181818] text-white/50">Select a Service</option>
                  <option value="web-dev" className="bg-[#181818] text-white">Web Development</option>
                  <option value="ui-ux" className="bg-[#181818] text-white">UI/UX Design</option>
                  <option value="seo" className="bg-[#181818] text-white">SEO Optimization</option>
                  <option value="branding" className="bg-[#181818] text-white">Branding & Identity</option>
                  <option value="other" className="bg-[#181818] text-white">Other Services</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Field 5: Project Description */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="contact-desc" className="font-body text-xs font-semibold uppercase tracking-wider text-white/70 leading-none">
                Project Description
              </label>
              <textarea 
                id="contact-desc"
                placeholder="Describe your project, timeline, and goals..."
                rows={3}
                className="w-full min-h-[88px] sm:min-h-[96px] p-4 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange/50 focus:bg-white/[0.08] transition-all duration-200 font-body text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full h-11 sm:h-12 mt-2 bg-[#F4F4F4] hover:bg-brand-orange hover:text-white text-[#131313] font-body text-sm font-semibold tracking-tight transition-all duration-200 rounded-xl border-none cursor-pointer outline-none flex items-center justify-center"
            >
              Send Now!
            </button>

          </form>

        </div>

        {/* Bottom Content Row: Email Ticker Marquee */}
        <div className="relative z-10 w-full overflow-hidden mt-12 sm:mt-[100px] lg:mt-[150px] max-w-[1144px] mx-auto select-none">
          <div className="flex items-center w-max animate-marquee whitespace-nowrap pl-4">
            {emails.map((email, idx) => (
              <Fragment key={idx}>
                <span className="font-display text-white text-lg sm:text-2xl lg:text-[30px] font-bold uppercase tracking-tight">
                  {email}
                </span>
                <SparkleIcon />
              </Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Content Row: Connected Footer Section */}
        <div className="relative z-10 w-full mt-10 sm:mt-16 max-w-[1144px] mx-auto flex flex-col gap-8 md:gap-12 border-t border-white/10 pt-8 sm:pt-12">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-left">
            
            {/* Col 1: Brand Info */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <a href="/" className="font-display text-[24px] sm:text-[26px] font-bold text-brand-orange tracking-[-1px] self-start no-underline">
                Adyber.
              </a>
              <p className="font-body text-xs sm:text-sm text-white/50 leading-relaxed max-w-[240px]">
                Premium creative & digital agency for startups looking to grow fast.
              </p>
            </div>
            
            {/* Col 2: Navigation Links */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-white/80">Navigation</h4>
              <div className="flex flex-col gap-2">
                <a href="/" className="font-body text-xs sm:text-sm text-white/50 hover:text-white transition-colors duration-200 no-underline self-start">Home</a>
                <a href="#services" className="font-body text-xs sm:text-sm text-white/50 hover:text-white transition-colors duration-200 no-underline self-start">Services</a>
                <a href="#pricing" className="font-body text-xs sm:text-sm text-white/50 hover:text-white transition-colors duration-200 no-underline self-start">Pricing</a>
                <a href="#about" className="font-body text-xs sm:text-sm text-white/50 hover:text-white transition-colors duration-200 no-underline self-start">About</a>
                <a href="#contact" className="font-body text-xs sm:text-sm text-white/50 hover:text-white transition-colors duration-200 no-underline self-start">Contact</a>
              </div>
            </div>
            
            {/* Col 3: Social Links */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-white/80">Socials</h4>
              <div className="flex flex-col gap-2">
                <a href="https://instagram.com/code.naitik" target="_blank" rel="noopener noreferrer" className="font-body text-xs sm:text-sm text-white/50 hover:text-white transition-colors duration-200 no-underline self-start">Instagram</a>
                <a href="https://discord.gg/tRjXdV6xjb" target="_blank" rel="noopener noreferrer" className="font-body text-xs sm:text-sm text-white/50 hover:text-white transition-colors duration-200 no-underline self-start">Discord</a>
                <a href="https://www.linkedin.com/in/NaitikGrover" target="_blank" rel="noopener noreferrer" className="font-body text-xs sm:text-sm text-white/50 hover:text-white transition-colors duration-200 no-underline self-start">LinkedIn</a>
                <a href="https://x.com/NaitikGrover" target="_blank" rel="noopener noreferrer" className="font-body text-xs sm:text-sm text-white/50 hover:text-white transition-colors duration-200 no-underline self-start">Twitter / X</a>
              </div>
            </div>
            
            {/* Col 4: Connect / Agency Info */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-white/80">Connect</h4>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <span className="font-body text-xs sm:text-sm text-white/50">Email:</span>
                <a href="mailto:team@adyber.com" className="font-body text-xs sm:text-sm text-white hover:text-brand-orange transition-colors duration-200 no-underline self-start font-medium">team@adyber.com</a>
                <span className="font-body text-xs sm:text-sm text-white/50 mt-2">Support:</span>
                <a href="mailto:naitik@adyber.com" className="font-body text-xs sm:text-sm text-white hover:text-brand-orange transition-colors duration-200 no-underline self-start font-medium">naitik@adyber.com</a>
              </div>
            </div>
            
          </div>
          
          {/* Bottom Copyright Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/5 pt-6 sm:pt-8 gap-4 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} Adyber Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-white transition-colors duration-200 no-underline">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors duration-200 no-underline">Terms of Service</a>
            </div>
          </div>
          
        </div>

      </motion.div>

    </section>
  )
}

export default ContactConnect
