import { useEffect } from 'react'

function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - Adyber"
  }, [])

  return (
    <div className="min-h-screen bg-[#D9D9D9] text-[#131313] font-body selection:bg-brand-orange selection:text-white pb-24">
      {/* Top Header Row */}
      <header className="w-full max-w-[1144px] mx-auto px-6 py-12 flex justify-between items-center border-b border-black/10">
        <a href="/" className="font-display text-[26px] font-bold text-brand-orange tracking-[-1px] no-underline">
          Adyber.
        </a>
        <a href="/" className="font-body text-sm font-semibold uppercase tracking-wider text-[#131313] hover:text-[#8c8c8c] transition-colors duration-200 no-underline">
          &larr; Back to Home
        </a>
      </header>

      {/* Policy Content */}
      <main className="w-full max-w-[800px] mx-auto px-6 mt-16 text-left">
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-gray mb-12 font-medium">Last updated: July 24, 2026</p>

        <div className="space-y-10 text-base leading-relaxed text-[#2c2c2c] font-normal">
          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">1. Introduction</h2>
            <p>
              Welcome to Adyber. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <a href="mailto:team@adyber.com" className="text-brand-orange hover:underline font-semibold">team@adyber.com</a>.
            </p>
            <p>
              When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website, or otherwise contacting us.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contact Data:</strong> We collect your first and last name, email address, phone number, and other similar contact details when you fill out our contact form.</li>
              <li><strong>Project Details:</strong> We collect project descriptions, business goals, and other project-related details you share through our consultation forms.</li>
              <li><strong>Automatically Collected Data:</strong> When you access our website, we may automatically collect certain browser and device information (such as your IP address, browser type, and operating system) to optimize site performance and analyze analytics.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">3. How We Use Your Information</h2>
            <p>
              We use the personal information collected via our website for a variety of business purposes described below:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To facilitate client outreach and project consultation requests.</li>
              <li>To deliver the services and build the digital systems requested by our clients.</li>
              <li>To send administrative information, updates, or marketing communication (where applicable).</li>
              <li>To monitor safety, prevent fraud, and enforce our Terms of Service.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">4. Data Sharing and Disclosure</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">5. Security of Your Information</h2>
            <p>
              We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure, so transmission of personal information to and from our website is at your own risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">6. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights under applicable data protection laws (such as GDPR or CCPA). These may include the right to request access and obtain a copy of your personal information, to request rectification or erasure, or to restrict the processing of your personal information. To make such a request, please contact us.
            </p>
          </section>

          <section className="space-y-4 border-t border-black/10 pt-8">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">7. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may email us at:
            </p>
            <div className="bg-white/40 border border-black/[0.05] rounded-2xl p-6 mt-4">
              <p className="font-bold text-[#131313]">Adyber Agency</p>
              <p className="text-sm text-muted-gray mt-1">General Inquiries: <a href="mailto:team@adyber.com" className="text-brand-orange hover:underline font-semibold">team@adyber.com</a></p>
              <p className="text-sm text-muted-gray">Support & Privacy Officer: <a href="mailto:naitik@adyber.com" className="text-brand-orange hover:underline font-semibold">naitik@adyber.com</a></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy
