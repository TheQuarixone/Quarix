"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconArrowRight, IconLock } from "@tabler/icons-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MobileNav } from "@/components/mobile-nav";
import { Footer } from "@/components/footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ShineBorder } from "@/components/ui/shine-border";
import { motion } from "motion/react";

const team = [
  {
    name: "Gokulakrishnan",
    role: "Founder & Lead Engineer",
    image: "https://i.pravatar.cc/400?img=11",
    bio: "Full-stack developer and AI specialist with a passion for building scalable products. Leads architecture and engineering at QuariX.",
    socials: {
      x: "https://x.com",
      github: "https://github.com/Gokulakrishnxn",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Alex Rivera",
    role: "Product Designer",
    image: "https://i.pravatar.cc/400?img=12",
    bio: "Crafting intuitive and beautiful user experiences for web and mobile. Obsessed with micro-interactions and clean typography.",
    socials: {
      x: "https://x.com",
      linkedin: "https://linkedin.com",
    },
  },
];

export default function TeamPage() {
  const [hasAccess, setHasAccess] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem("quarix_team_access") === "true") {
      setHasAccess(true);
    }
  }, []);

  const handleAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate API call / validation
    await new Promise((r) => setTimeout(r, 800));
    sessionStorage.setItem("quarix_team_access", "true");
    setHasAccess(true);
    setLoading(false);
  };

  if (!mounted) return null;

  if (!hasAccess) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col relative">
        <div className="relative flex-1 flex flex-col">
          {/* Vertical dashed lines */}
          <div className="absolute inset-0 pointer-events-none z-[100] flex justify-center">
            <div className="relative w-full max-w-7xl">
              <div className="absolute inset-y-0 left-6 lg:left-10 border-l border-dashed border-white/25" />
              <div className="absolute inset-y-0 right-6 lg:right-10 border-r border-dashed border-white/25" />
            </div>
          </div>

          {/* Navbar */}
          <header className="sticky top-0 z-50 border-b border-dashed border-white/25 bg-black/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between">
              <Link href="/">
                <Image src="/logo.svg" alt="Quarix" width={140} height={42} className="w-[110px] sm:w-[140px] lg:w-[170px] h-auto" priority />
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
              <MobileNav />
            </div>
          </header>

          <div className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 flex justify-center pointer-events-none">
              <DotPattern width={24} height={24} cr={1} className="text-white/10 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,white_20%,transparent_100%)]" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10 w-full max-w-md"
            >
              <div className="relative rounded-3xl border border-white/10 bg-neutral-950 overflow-hidden p-8 sm:p-10 flex flex-col items-center text-center gap-6">
                <ShineBorder shineColor={["#ffffff40", "#ffffff10", "#ffffff50"]} duration={8} borderWidth={1} />
                
                <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center shadow-xl mb-2">
                  <IconLock size={28} className="text-white/70" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">Team Access</h1>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Please enter your email address to view our team members and their portfolios.
                  </p>
                </div>

                <form onSubmit={handleAccess} className="w-full flex flex-col gap-4 mt-2 relative z-20">
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all text-center"
                  />
                  <ShimmerButton type="submit" className="w-full py-3.5 text-sm font-semibold" disabled={loading}>
                    {loading ? "Verifying..." : "Get Access"}
                  </ShimmerButton>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col relative">

      {/* ── Dashed lines wrapper ── */}
      <div className="relative">

        {/* Vertical dashed lines — scoped to this wrapper only */}
        <div className="absolute inset-0 pointer-events-none z-[100] flex justify-center">
          <div className="relative w-full max-w-7xl">
            <div className="absolute inset-y-0 left-6 lg:left-10 border-l border-dashed border-white/25" />
            <div className="absolute inset-y-0 right-6 lg:right-10 border-r border-dashed border-white/25" />
          </div>
        </div>

        {/* ── Navbar ── */}
        <header className="sticky top-0 z-50 border-b border-dashed border-white/25 bg-black/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between">
            <Link href="/">
              <Image src="/logo.svg" alt="Quarix" width={140} height={42} className="w-[110px] sm:w-[140px] lg:w-[170px] h-auto" priority />
            </Link>

            {/* Desktop nav links */}
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

            {/* Mobile hamburger */}
            <MobileNav />
          </div>
        </header>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-dashed border-white/25">
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <div className="relative w-full max-w-7xl">
              <div className="absolute inset-y-0 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 overflow-hidden">
                <DotPattern
                  width={24}
                  height={24}
                  cr={1}
                  className="text-white/20 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white_30%,transparent_100%)]"
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-14 lg:px-20 pt-16 sm:pt-24 pb-16 sm:pb-20 flex flex-col items-center text-center gap-6">
            <span className="inline-flex items-center gap-2 text-xs font-medium bg-white/10 border border-white/10 rounded-full px-3 py-1.5">
              <span className="text-neutral-300">The Team</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] max-w-3xl">
              The people building the{" "}
              <span style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>
                future.
              </span>
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl">
              We are a collective of engineers, designers, and AI specialists dedicated to crafting exceptional digital products.
            </p>
          </div>
        </section>

        {/* ── Team Grid ── */}
        <section className="relative bg-black py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-14 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {team.map((member) => (
                <div key={member.name} className="group flex flex-col gap-5">
                  {/* Image */}
                  <div className="relative w-full aspect-square rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-3">
                    <div>
                      <h3 className="text-white font-bold text-xl">{member.name}</h3>
                      <p className="text-neutral-500 text-sm mt-0.5">{member.role}</p>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Socials */}
                    <div className="flex items-center gap-2 mt-1">
                      {member.socials.x && (
                        <a href={member.socials.x} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/25 hover:bg-white/[0.07] transition-all">
                          <IconBrandX size={14} />
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/25 hover:bg-white/[0.07] transition-all">
                          <IconBrandGithub size={14} />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/25 hover:bg-white/[0.07] transition-all">
                          <IconBrandLinkedin size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative bg-black pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-14 lg:px-20">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl sm:text-3xl font-black text-white">Want to join the team?</h2>
                <p className="text-neutral-400 text-sm sm:text-base max-w-md">
                  We&apos;re always looking for talented freelancers to collaborate with on exciting projects.
                </p>
              </div>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors shrink-0"
              >
                Join the team <IconArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

      </div>{/* end dashed lines wrapper */}

      <Footer />

    </main>
  );
}
