export default function CookiePolicy() {
  return (
    <div className="prose prose-invert prose-neutral max-w-none">
      <div className="border-b border-white/10 pb-8 mb-10">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-white">Cookie Policy</h1>
        <p className="text-neutral-400 text-sm font-medium">Last updated: April 10, 2026</p>
      </div>

      <div className="space-y-10 text-neutral-300 text-sm sm:text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            1. What Are Cookies
          </h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            2. How We Use Cookies
          </h2>
          <p className="mb-4">QuariX uses cookies for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-3 text-neutral-400 marker:text-neutral-600">
            <li><strong className="text-white font-medium">Essential Cookies:</strong> These are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas or use a shopping cart.</li>
            <li><strong className="text-white font-medium">Analytical/Performance Cookies:</strong> They allow us to recognize and count the number of visitors and see how visitors move around our website. This helps us improve the way our website works.</li>
            <li><strong className="text-white font-medium">Functionality Cookies:</strong> These are used to recognize you when you return to our website, enabling us to personalize our content for you (e.g., your choice of language or region).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            3. Third-Party Cookies
          </h2>
          <p>
            Please note that third parties (including, for example, analytics providers like Vercel Speed Insights) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 group">
            <span className="text-neutral-600 group-hover:text-white/50 transition-colors">#</span>
            4. Managing Cookies
          </h2>
          <p>
            You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies), you may not be able to access all or parts of our website.
          </p>
        </section>
      </div>
    </div>
  );
}
