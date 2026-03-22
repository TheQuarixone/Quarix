"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const links = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Works", href: "/#works" },
  { label: "Contact", href: "/contact" },
];

export function MobileNav({ contactHref = "/contact" }: { contactHref?: string }) {
  const [open, setOpen] = useState(false);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navLinks = links.map((l) =>
    l.label === "Contact" ? { ...l, href: contactHref } : l
  );

  return (
    <>
      {/* Hamburger button — only on mobile */}
      <button
        className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] text-neutral-400 hover:text-white hover:border-white/25 transition-all z-[200] relative"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {open ? <IconX size={16} /> : <IconMenu2 size={16} />}
      </button>

      {/* Overlay + drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-[#0a0a0a] border-l border-white/10 z-[160] flex flex-col sm:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                <span className="text-white font-black text-sm tracking-tight">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                >
                  <IconX size={14} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-4 py-6 gap-1">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-xl text-sm text-neutral-300 hover:text-white hover:bg-white/[0.05] transition-all"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-auto px-6 pb-8">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
