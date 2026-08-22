function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-[#8c8c8c] py-20 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14">
        
        {/* Brand details */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-3">
            <a href="#" className="font-display text-[28px] font-bold text-brand-orange tracking-[-1px] self-start">
              Adyber.
            </a>
            <p className="max-w-[420px] leading-6 text-sm text-[#8c8c8c]">
              Top digital marketing, website development & AI automation agency in Dehradun & Haridwar. Scaling startups & regional businesses fast.
            </p>
          </div>
          <address className="not-italic text-xs text-[#717171] leading-5">
            <span className="font-medium text-[#a1a1a1]">Serving Clients In:</span><br />
            Dehradun, Haridwar, Rishikesh, Roorkee & Worldwide
          </address>
        </div>
        
        {/* Bottom copyright and legal references */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-5 text-xs">
          <p>&copy; 2026 Adyber. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-[#8c8c8c] hover:text-white transition-colors duration-200 no-underline">
              Privacy Policy
            </a>
            <a href="#terms" className="text-[#8c8c8c] hover:text-white transition-colors duration-200 no-underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
