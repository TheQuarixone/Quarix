export default function PrivacyPolicy() {
  return (
    <div className="prose prose-invert prose-neutral max-w-none">
      <div className="border-b border-white/10 pb-8 mb-10">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-white">Privacy Policy</h1>
        <p className="text-neutral-400 text-sm font-medium">Last updated: April 10, 2026</p>
      </div>

      <div className="space-y-10 text-neutral-300 text-sm sm:text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            1. Introduction
          </h2>
          <p>
            Welcome to QuariX (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (quarix.one) or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            2. Information We Collect
          </h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-5 space-y-3 text-neutral-400 marker:text-neutral-600">
            <li><strong className="text-white font-medium">Personal Data:</strong> Name, email address, phone number, and project details you provide via our contact form.</li>
            <li><strong className="text-white font-medium">Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            3. How We Use Your Information
          </h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-5 space-y-3 text-neutral-400 marker:text-neutral-600">
            <li>Respond to your project inquiries and provide tailored proposals.</li>
            <li>Deliver and maintain our web development, app development, and AI services.</li>
            <li>Improve our website functionality and user experience.</li>
            <li>Communicate with you regarding updates, invoices, or support.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            4. Third-Party Services
          </h2>
          <p>
            We use trusted third-party services to operate our business, including Supabase (for secure database storage) and Resend (for email communications). These providers have their own privacy policies and are bound by strict data protection agreements. We do not sell your personal data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            5. Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            6. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at: <a href="mailto:Quarixone@gmail.com" className="text-white hover:text-neutral-300 underline underline-offset-4 decoration-white/20 transition-colors">Quarixone@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
