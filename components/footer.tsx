import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import { FooterServiceLinks } from "@/components/footer-service-links";

export function Footer() {
  return (
    <footer className="bg-black pt-2 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-white/[0.08] overflow-hidden relative">

          {/* Background image */}
          <Image
            src="/footer.png"
            alt=""
            fill
            className="object-cover object-bottom opacity-40 pointer-events-none select-none"
            priority
          />

          {/* Main content — watermark left, links right */}
          <div className="flex flex-col sm:flex-row overflow-hidden relative z-10">

            {/* Left — watermark */}
            <div className="relative flex-1 min-h-[120px] sm:min-h-[240px] overflow-hidden flex items-center">
              <div
                className="pointer-events-none select-none text-[72px] sm:text-[110px] lg:text-[144px] font-black tracking-tighter leading-none whitespace-nowrap pl-6 sm:pl-10"
                style={{ WebkitTextStroke: "2px rgba(255,255,255,0.45)", color: "transparent" }}
              >
                QuariX
              </div>
            </div>

            {/* Right — link columns */}
            <div className="shrink-0 px-6 sm:px-10 py-8 sm:py-10 flex items-start">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 sm:gap-x-10 gap-y-6 sm:gap-y-8">

                {/* Navigation */}
                <div className="flex flex-col gap-3">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Navigation</span>
                  {[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/#about" },
                    { label: "Services", href: "/#services" },
                    { label: "Our Works", href: "/#works" },
                    { label: "Contact", href: "/contact" },
                    { label: "Join the team", href: "/join" },
                  ].map((l) => (
                    <Link key={l.label} href={l.href}
                      className="text-[13px] text-neutral-300 hover:text-white transition-colors w-fit">
                      {l.label}
                    </Link>
                  ))}
                </div>

                {/* Services */}
                <div className="flex flex-col gap-3">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Services</span>
                  <FooterServiceLinks />
                </div>

                {/* Legal */}
                <div className="flex flex-col gap-3">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Legal</span>
                  {[
                    { label: "Privacy Policy", href: "#" },
                    { label: "Terms of Service", href: "#" },
                    { label: "Cookie Policy", href: "#" },
                    { label: "Refund Policy", href: "#" },
                  ].map((l) => (
                    <Link key={l.label} href={l.href}
                      className="text-[13px] text-neutral-300 hover:text-white transition-colors w-fit">
                      {l.label}
                    </Link>
                  ))}
                </div>

              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="relative z-10 border-t border-white/[0.07] px-6 sm:px-12 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <p className="text-[12px] text-neutral-400">© {new Date().getFullYear()} QuariX. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a href="mailto:Quarixone@gmail.com"
                className="text-[12px] text-neutral-400 hover:text-white transition-colors">
                Quarixone@gmail.com
              </a>
              <a href="https://github.com/TheQuarixone" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/25 hover:bg-white/[0.07] transition-all">
                <IconBrandGithub size={15} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
