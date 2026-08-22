import { motion } from 'framer-motion'
import webDevImage from '../assets/web-dev.jpg'
import socialMediaImage from '../assets/social-media.jpg'
import aiAutomationImage from '../assets/ai-automation.jpg'

const tags = [
  { 
    name: 'Website Development', 
    image: webDevImage, 
    desc: "High-performance marketing and product sites. Responsive, fast-loading, and interactive digital experiences." 
  },
  { 
    name: 'Social Media Management', 
    image: socialMediaImage, 
    desc: "Strategic growth, scheduling, and community building. We manage and scale your brand's presence across all channels." 
  },
  { 
    name: 'Branding', 
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80", 
    desc: "Distinct identity systems that stand out. We design custom color palettes, typographies, logos, and clear brand guidelines." 
  },
  { 
    name: 'Content Creation', 
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80", 
    desc: "Engaging digital media, copywriting, and visual assets custom-tailored to tell your brand story and capture attention." 
  },
  { 
    name: 'Business Consulting', 
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80", 
    desc: "Actionable strategic planning, market analysis, and process optimization to help your startup scale efficiently." 
  },
  { 
    name: 'Personalised AI Automations', 
    image: aiAutomationImage, 
    desc: "Smart integration of AI tools, custom workflows, and automated systems to save time, reduce overhead, and boost output." 
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
    <section id="services" className="w-full bg-[#D9D9D9] py-[112px] px-6 md:px-20 lg:px-[252px] flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* Content wrapper */}
      <div className="w-full max-w-[936px] flex flex-col items-center gap-16">
        
        {/* Top Statement Block */}
        <div className="flex flex-col items-center gap-6 text-center">
          
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
            <span className="font-handwritten text-[34px] leading-none text-brand-orange select-none italic tracking-normal">
              Our Services
            </span>
          </motion.div>

          {/* Main big statement */}
          <motion.h2 
            className="font-display text-[28px] md:text-[38px] lg:text-[48px] leading-[36px] md:leading-[46px] lg:leading-[56px] font-bold text-near-black max-w-[864px]"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
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
