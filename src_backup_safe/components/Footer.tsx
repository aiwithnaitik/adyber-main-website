function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-[#8c8c8c] py-20 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14">
        
        {/* Brand details */}
        <div className="flex flex-col gap-4">
          <a href="#" className="font-display text-[28px] font-bold text-brand-orange tracking-[-1px] self-start">
            Adyber.
          </a>
          <p className="max-w-[320px] leading-6 text-sm text-[#8c8c8c]">
            Premium creative & digital agency for startups looking to grow fast.
          </p>
        </div>
        
        {/* Bottom copyright and legal references */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-5 text-xs">
          <p>&copy; 2026 Adyber Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[#8c8c8c] hover:text-white transition-colors duration-200 no-underline">
              Privacy Policy
            </a>
            <a href="#" className="text-[#8c8c8c] hover:text-white transition-colors duration-200 no-underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
