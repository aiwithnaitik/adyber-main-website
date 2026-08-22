import { useState, useEffect } from 'react'
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
    const handleHashChange = () => {
      const newHash = window.location.hash
      const newView = getViewFromHash(newHash)

      setView((prevView) => {
        if (prevView !== newView) {
          window.scrollTo(0, 0)
        }
        return newView
      })

      // If returning to home page with a hash tag, scroll to the corresponding section smoothly.
      if (newView === 'home' && newHash && newHash !== '#') {
        const id = newHash.substring(1)
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
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
