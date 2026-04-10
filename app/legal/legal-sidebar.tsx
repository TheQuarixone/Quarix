"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Refund Policy", href: "/legal/refund" },
];

export function LegalSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 py-6 md:py-16 shrink-0 border-b md:border-b-0 md:border-r border-white/10">
      <div className="sticky top-32 flex flex-col gap-1">
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 mb-4 px-3">Legal Documents</h3>
        <nav className="flex flex-col gap-1">
          {legalLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-3 py-2.5 text-sm rounded-lg transition-all duration-200 flex items-center justify-between group",
                  isActive
                    ? "bg-white/10 text-white font-medium"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-white/5"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
