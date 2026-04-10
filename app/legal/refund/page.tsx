export default function RefundPolicy() {
  return (
    <div className="prose prose-invert prose-neutral max-w-none">
      <div className="border-b border-white/10 pb-8 mb-10">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-white">Refund Policy</h1>
        <p className="text-neutral-400 text-sm font-medium">Last updated: April 10, 2026</p>
      </div>

      <div className="space-y-10 text-neutral-300 text-sm sm:text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            1. General Policy
          </h2>
          <p>
            At QuariX, we strive to deliver high-quality custom software, websites, and AI solutions. Because our services require significant time, resources, and custom engineering, our refund policy is structured around project milestones.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            2. Upfront Deposits
          </h2>
          <p>
            Most projects require an upfront deposit to secure a spot in our development schedule and cover initial research, design, and architecture phases. <strong className="text-white font-medium">Upfront deposits are strictly non-refundable</strong> once work has commenced.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            3. Milestone Payments
          </h2>
          <p>
            Payments made for completed and approved milestones are non-refundable. If you decide to cancel a project mid-development, you will not be billed for future unstarted milestones, but no refunds will be issued for milestones that have already been paid for and delivered.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            4. Cancellations
          </h2>
          <p>
            If you wish to cancel an ongoing project, you must provide written notice to <a href="mailto:Quarixone@gmail.com" className="text-white hover:text-neutral-300 underline underline-offset-4 decoration-white/20 transition-colors">Quarixone@gmail.com</a>. Upon cancellation, we will package and deliver all work completed up to the date of cancellation, provided all outstanding invoices for completed work have been settled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            5. Exceptions
          </h2>
          <p>
            Refunds may be granted at the sole discretion of QuariX in exceptional circumstances, such as if we are entirely unable to deliver the agreed-upon core functionality due to technical limitations on our end. Such exceptions are evaluated on a case-by-case basis.
          </p>
        </section>
      </div>
    </div>
  );
}
