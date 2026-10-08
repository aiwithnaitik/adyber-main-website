import { useEffect } from 'react'

function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service - Adyber"
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

      {/* Terms Content */}
      <main className="w-full max-w-[800px] mx-auto px-6 mt-16 text-left">
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-gray mb-12 font-medium">Last updated: July 24, 2026</p>

        <div className="space-y-10 text-base leading-relaxed text-[#2c2c2c] font-normal">
          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Adyber, concerning your access to and use of our website, as well as any other media form, media channel, mobile website, or services related, linked, or otherwise connected thereto.
            </p>
            <p>
              By accessing the Site and utilizing our services, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from using the Site or services and must discontinue use immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">2. Scope of Agency Services</h2>
            <p>
              Adyber is a premium creative and digital agency providing website development, branding, UI/UX design, search engine optimization (SEO), and related marketing services.
            </p>
            <p>
              Specific project scopes, deliverables, timelines, and milestones shall be outlined in separate service agreements, project proposals, or statements of work signed or agreed upon by both parties. Any changes to the scope of work must be agreed upon in writing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise specified in a signed service agreement:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Client Content:</strong> The client retains all ownership and intellectual property rights in any materials, assets, logos, copy, or instructions provided to Adyber for the project.</li>
              <li><strong>Deliverables:</strong> Upon receipt of full and final payment, Adyber transfers and assigns to the client all rights, titles, and interests in the final digital deliverables (websites, designs, logos) custom-created for the project.</li>
              <li><strong>Retained Rights:</strong> Adyber retains ownership of any pre-existing code, libraries, design methodologies, templates, tools, and general knowledge used or developed during the project.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">4. Billing and Payment Terms</h2>
            <p>
              Billing schedules, project deposits, and payment terms will be defined in the project-specific agreement.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Project deposits are non-refundable once work has commenced.</li>
              <li>Invoices are due upon receipt or within the timeframe specified in the project agreement.</li>
              <li>Late payments may result in suspension of services, delay of deliverables, or interest fees as permitted by law.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">5. Client Cooperation and Information</h2>
            <p>
              The timely completion of projects depends heavily on client cooperation. You agree to provide all necessary assets, feedback, copy, images, credentials, and approvals in a timely manner. Adyber is not responsible for project delays caused by a lack of client response or delayed asset delivery.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">6. Limitation of Liability</h2>
            <p>
              In no event will Adyber, its founders, directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of our site or agency services, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">7. Term and Termination</h2>
            <p>
              These Terms of Service remain in full force and effect while you use our site or engage our services. Either party may terminate a project engagement in accordance with the terms specified in the signed service contract.
            </p>
          </section>

          <section className="space-y-4 border-t border-black/10 pt-8">
            <h2 className="font-display text-xl font-bold text-[#131313] uppercase tracking-wide">8. Contact Information</h2>
            <p>
              If you have any questions or require clarifications regarding these terms, please contact us at:
            </p>
            <div className="bg-white/40 border border-black/[0.05] rounded-2xl p-6 mt-4">
              <p className="font-bold text-[#131313]">Adyber Agency</p>
              <p className="text-sm text-muted-gray mt-1">Email: <a href="mailto:connect@adyber.com" className="text-brand-orange hover:underline font-semibold">connect@adyber.com</a></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default TermsOfService
