import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './components/Hero'
import DiagonalTicker from './components/DiagonalTicker'
import AboutIntro from './components/AboutIntro'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FounderIntro from './components/FounderIntro'
import ContactConnect from './components/ContactConnect'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

function App() {
  const getViewFromHash = (hash: string) => {
    if (hash === '#privacy') return 'privacy'
    if (hash === '#terms') return 'terms'
    return 'home'
  }

  const [view, setView] = useState(() => getViewFromHash(window.location.hash))

  useEffect(() => {
    if (view === 'privacy') {
      document.title = 'Privacy Policy | Adyber Agency'
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', 'Privacy Policy for Adyber, top digital marketing & web agency.')
    } else if (view === 'terms') {
      document.title = 'Terms of Service | Adyber Agency'
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', 'Terms of Service for Adyber, top digital marketing & web agency.')
    } else {
      document.title = 'Adyber | Digital Marketing & Web Agency in Dehradun'
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', 'Adyber is a top digital marketing & web agency in Dehradun & Haridwar. We build AI automations, high-converting websites, and scale businesses fast.')
    }
  }, [view])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutQuart
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const handleHashChange = () => {
      const newHash = window.location.hash
      const newView = getViewFromHash(newHash)

      setView((prevView) => {
        if (prevView !== newView) {
          lenis.scrollTo(0, { immediate: true })
        }
        return newView
      })

      if (newView === 'home' && newHash && newHash !== '#') {
        const id = newHash.substring(1)
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            lenis.scrollTo(element)
          }
        }, 100)
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      lenis.destroy()
    }
  }, [])

  if (view === 'privacy') {
    return <PrivacyPolicy />
  }

  if (view === 'terms') {
    return <TermsOfService />
  }

  return (
    <div className="min-h-screen bg-[#D9D9D9] relative">
      <div className="relative z-10 bg-[#D9D9D9]">
        <main>
          <Hero />
          <DiagonalTicker />
          <AboutIntro />
          <Pricing />
          <Testimonials />
          <FounderIntro />
          <ContactConnect />
        </main>
      </div>
    </div>
  )
}

export default App
