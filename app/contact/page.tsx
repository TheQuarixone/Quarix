"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { IconArrowRight, IconCheck, IconChevronDown } from "@tabler/icons-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShineBorder } from "@/components/ui/shine-border";
import { MobileNav } from "@/components/mobile-nav";

const services = [
  "Website Development",
  "iOS App Development",
  "Android App Development",
  "AI Agent",
  "AI Chatbot",
  "MCP Server",
  "Other",
];


export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      {/* Dashed lines */}
      <div className="fixed inset-0 pointer-events-none z-[100] flex justify-center">
        <div className="relative w-full max-w-7xl">
          <div className="absolute inset-y-0 left-6 lg:left-10 border-l border-dashed border-white/25" />
          <div className="absolute inset-y-0 right-6 lg:right-10 border-r border-dashed border-white/25" />
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-dashed border-white/25 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="Quarix" width={140} height={42} className="w-[110px] sm:w-[140px] h-auto" priority />
          </Link>
          <nav className="hidden sm:flex items-center gap-1">
            {[
              { label: "About", href: "/#about" },
              { label: "Service", href: "/#service" },
              { label: "Works", href: "/#works" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link key={item.label} href={item.href}
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors rounded-md hover:bg-white/5">
                {item.label}
              </Link>
            ))}
          </nav>
          <MobileNav contactHref="/contact" />
        </div>
      </header>

      <div className="flex-1 relative">
        {/* Background dot pattern */}
        <div className="absolute inset-0 flex justify-center pointer-events-none overflow-hidden">
          <div className="relative w-full max-w-7xl">
            <div className="absolute inset-y-0 left-8 right-8 overflow-hidden">
              <DotPattern
                width={24} height={24} cr={1}
                className="text-white/10 [mask-image:radial-gradient(ellipse_80%_40%_at_50%_0%,white_20%,transparent_100%)]"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-14 lg:px-20 py-10 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* ── Left: info panel ── */}
            <div className="lg:col-span-2 flex flex-col gap-8 lg:sticky lg:top-28">
              <div className="flex flex-col gap-4">
                <span className="inline-flex items-center gap-2 self-start text-xs font-medium bg-white/10 border border-white/10 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-neutral-300">Available for projects</span>
                </span>
                    <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1]">
                  We can{" "}
                  <span style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>
                    help you.
                  </span>
                </h1>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                  Whether it&apos;s a website, mobile app, AI agent, or MCP server — share your idea and we&apos;ll get back with a tailored proposal within 24 hours.
                </p>
              </div>

              {/* Info cards */}
              <div className="flex flex-col gap-3">
                {[
                  { label: "Response time", value: "< 24 hours" },
                  { label: "Email", value: "hello@quarix.io" },
                  { label: "Based in", value: "India 🇮🇳" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between px-5 py-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <span className="text-xs text-neutral-500">{item.label}</span>
                    <span className="text-xs text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Services we offer */}
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/25">What we build</p>
                <div className="flex flex-wrap gap-2">
                  {["Websites", "iOS Apps", "Android Apps", "AI Agents", "AI Chatbots", "MCP Servers"].map((s) => (
                    <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-neutral-500">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                      <ShineBorder shineColor={["#ffffff40", "#ffffff10", "#ffffff50"]} duration={8} borderWidth={1} />

                      <form onSubmit={handleSubmit} className="p-7 sm:p-8 flex flex-col gap-5">

                        {/* Service select */}
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-semibold uppercase tracking-widest text-white/30">Service</label>
                          <div className="relative">
                            <select
                              required
                              value={form.service}
                              onChange={(e) => setForm({ ...form, service: e.target.value })}
                              className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all cursor-pointer"
                            >
                              <option value="" disabled className="bg-black">Select a service</option>
                              {services.map((s) => (
                                <option key={s} value={s} className="bg-black">{s}</option>
                              ))}
                            </select>
                            <IconChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                          </div>
                        </div>

                        {/* Name */}
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-semibold uppercase tracking-widest text-white/30">Full Name</label>
                          <input
                            required
                            type="text"
                            placeholder="John Appleseed"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all"
                          />
                        </div>

                        {/* Phone + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-semibold uppercase tracking-widest text-white/30">Phone</label>
                            <input
                              type="tel"
                              placeholder="+1 234 567 890"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-semibold uppercase tracking-widest text-white/30">Email</label>
                            <input
                              required
                              type="email"
                              placeholder="you@company.com"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all"
                            />
                          </div>
                        </div>


                        {/* Message */}
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-semibold uppercase tracking-widest text-white/30">Project Details</label>
                          <textarea
                            required
                            rows={5}
                            placeholder="Describe your idea — e.g., Web application, iOS app, AI agent; main features; timeline..."
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all resize-none"
                          />
                        </div>

                        {/* Submit */}
                        <div className="flex items-center justify-between gap-4 pt-1">
                          <p className="text-xs text-neutral-600">We reply within 24 hours · No spam.</p>
                          <ShimmerButton
                            type="submit"
                            className="text-sm font-semibold px-6 py-3 gap-2"
                            disabled={loading}
                          >
                            {loading ? (
                              <span className="flex items-center gap-2">
                                <motion.span
                                  className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full"
                                  animate={{ rotate: 360 }}
                                  transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                                />
                                Sending...
                              </span>
                            ) : (
                              <span className="flex items-center gap-2">
                                Send Message <IconArrowRight size={14} />
                              </span>
                            )}
                          </ShimmerButton>
                        </div>

                      </form>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden p-16 flex flex-col items-center text-center gap-6"
                  >
                    <ShineBorder shineColor={["#ffffff40", "#ffffff10", "#ffffff50"]} duration={8} borderWidth={1} />
                    <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                      <IconCheck size={28} className="text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-white font-black text-2xl">Message sent!</h2>
                      <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                        Thanks {form.name}! We&apos;ve received your message and will reply within 24 hours.
                      </p>
                    </div>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors mt-2"
                    >
                      ← Back to homepage
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
