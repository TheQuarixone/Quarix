import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";
import { LegalSidebar } from "./legal-sidebar";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-white/30 relative overflow-hidden">
      {/* Top Gradient Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none z-0" />

      {/* Docs-style Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Quarix" width={120} height={36} className="w-[100px] sm:w-[120px] h-auto" priority />
            <span className="text-neutral-600 font-light text-xl hidden sm:inline-block">/</span>
            <span className="text-neutral-300 font-medium text-sm hidden sm:inline-block tracking-wide">Legal</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-4">
            <Link href="/" className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
              Back to Home
            </Link>
          </nav>
          <div className="sm:hidden">
            <MobileNav contactHref="/contact" />
          </div>
        </div>
      </header>

      <div className="flex-1 relative max-w-7xl mx-auto w-full px-4 lg:px-8 flex flex-col md:flex-row">
        <LegalSidebar />

        {/* Content */}
        <div className="flex-1 py-10 md:py-16 md:pl-12 lg:pl-20 max-w-4xl min-w-0">
          {children}
        </div>
      </div>
    </main>
  );
}
