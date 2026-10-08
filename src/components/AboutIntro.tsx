import { motion } from 'framer-motion'
import serviceWebDev from '../assets/service-web-dev.png'
import serviceLocalSeo from '../assets/service-seo.png'
import serviceSocialMedia from '../assets/social-media.jpg'
import serviceBranding from '../assets/service-branding.png'
import serviceContent from '../assets/service-content.png'
import aiAutomationImage from '../assets/service-ai-automation.png'

const tags = [
  { 
    name: 'Website Development', 
    image: serviceWebDev, 
    desc: "High-performance marketing & web apps. Fast-loading, mobile-optimized custom design for brands in Dehradun, Haridwar & globally." 
  },
  { 
    name: 'Local SEO & Marketing', 
    image: serviceLocalSeo, 
    desc: "Result-driven Search Engine Optimization targeting 'marketing agency near me' searches across Dehradun, Haridwar & Uttarakhand." 
  },
  { 
    name: 'Social Media Management', 
    image: serviceSocialMedia, 
    desc: "Strategic growth, scheduling, and community management. We scale your brand's presence across multi-platform social channels." 
  },
  { 
    name: 'Branding & UI/UX', 
    image: serviceBranding, 
    desc: "Distinct visual identity systems that capture market share. Logos, custom color palettes, typography, and clear design guidelines." 
  },
  { 
    name: 'Content Creation', 
    image: serviceContent, 
    desc: "Engaging digital media, copywriting, and visual collateral custom-tailored to tell your brand story and increase conversions." 
  },
  { 
    name: 'Personalised AI Automations', 
    image: aiAutomationImage, 
    desc: "Smart AI integrations, automated workflows, and custom bots to streamline client acquisition, cut overhead, and accelerate growth." 
  }
]

function AboutIntro() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4
      }
    }
  }

  const tagVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 60,
        mass: 1
      }
    }
  }

  return (
    <section id="services" className="w-full bg-[#D9D9D9] py-16 sm:py-20 md:py-[112px] px-4 sm:px-8 md:px-20 lg:px-[252px] flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* Content wrapper */}
      <div className="w-full max-w-[936px] flex flex-col items-center gap-10 md:gap-16">
        
        {/* Top Statement Block */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
          
          {/* Accent small label 'Our Services' */}
          <motion.div 
            className="flex items-center justify-center h-9"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 60,
              mass: 1
            }}
          >
            <span className="font-handwritten text-[28px] sm:text-[34px] leading-none text-brand-orange select-none italic tracking-normal">
              Our Services
            </span>
          </motion.div>

          {/* Main big statement */}
          <motion.h2 
            className="font-display text-[24px] sm:text-[32px] md:text-[38px] lg:text-[48px] leading-[32px] sm:leading-[40px] md:leading-[46px] lg:leading-[56px] font-bold text-near-black max-w-[864px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 25,
              delay: 0.1
            }}
          >
            Everything you need to scale your<br className="hidden md:inline" /> business, all under one roof.
          </motion.h2>

        </div>

        {/* Staggered service cards grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tags.map((tag, idx) => (
            <motion.div
              key={idx}
              className="p-5 bg-white hover:bg-white/95 rounded-[24px] border border-black/[0.05] shadow-sm flex flex-col gap-4 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_35px_rgba(0,0,0,0.04)] cursor-default group"
              variants={tagVariants}
            >
              {/* Image banner instead of icon */}
              <div className="w-full h-32 rounded-xl overflow-hidden bg-near-black/5 relative">
                <img
                  src={tag.image}
                  alt={tag.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Title */}
              <h3 className="font-display text-xl font-bold text-near-black leading-none">
                {tag.name}
              </h3>
              
              {/* Description */}
              <p className="font-body text-xs leading-relaxed text-muted-gray">
                {tag.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  )
}

export default AboutIntro
