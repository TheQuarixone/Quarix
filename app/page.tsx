import { IconArrowRight, IconMail, IconBrandGithub, IconSparkles, IconTarget, IconRocket } from "@tabler/icons-react";
import { SiApple, SiAndroid, SiOpenai, SiX, SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorldWww, TbServerBolt, TbRobot } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ProjectCards } from "@/components/project-cards";
import { ServiceCards } from "@/components/service-cards";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Marquee } from "@/components/ui/marquee";
import { Meteors } from "@/components/ui/meteors";
import { MobileNav } from "@/components/mobile-nav";
import { Footer } from "@/components/footer";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO @ Luminary",
    avatar: "https://i.pravatar.cc/40?img=47",
    body: "Quarix delivered our entire web platform in 3 weeks. The attention to detail and code quality were exceptional — far beyond what we expected.",
    stars: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Founder @ NexaAI",
    avatar: "https://i.pravatar.cc/40?img=12",
    body: "The AI agent they built for us reduced our support workload by 60% on day one. Incredible engineering team.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    role: "Product Lead @ FitTrack",
    avatar: "https://i.pravatar.cc/40?img=29",
    body: "Our iOS app hit 4.9 stars on launch day. Quarix nailed the UX and the CoreML integration was flawless.",
    stars: 5,
  },
  {
    name: "James Okoye",
    role: "CEO @ DeliverEase",
    avatar: "https://i.pravatar.cc/40?img=15",
    body: "Real-time GPS, push notifications, and a driver dashboard — all in 4 weeks. These guys just get it.",
    stars: 5,
  },
  {
    name: "Anika Patel",
    role: "Head of AI @ ShopBot",
    avatar: "https://i.pravatar.cc/40?img=32",
    body: "The chatbot handles 10k+ queries a day with zero issues. GPT-4 integration was buttery smooth.",
    stars: 5,
  },
  {
    name: "Tom Whitfield",
    role: "Founder @ ContextBridge",
    avatar: "https://i.pravatar.cc/40?img=8",
    body: "Building an MCP server from scratch is no joke — Quarix made it look easy and it's running flawlessly in production.",
    stars: 5,
  },
  {
    name: "Yuki Tanaka",
    role: "Design Lead @ Stellarworks",
    avatar: "https://i.pravatar.cc/40?img=41",
    body: "Best collaboration experience I've had with any dev agency. Fast, communicative, and the output is always top tier.",
    stars: 5,
  },
  {
    name: "Diego Flores",
    role: "CTO @ Voxelify",
    avatar: "https://i.pravatar.cc/40?img=53",
    body: "We went from idea to App Store in 6 weeks. Quarix handled everything — design, dev, deployment.",
    stars: 5,
  },
];

function TestimonialCard({ name, role, avatar, body, stars }: typeof testimonials[0]) {
  return (
    <div className="w-72 shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col gap-3 hover:bg-white/[0.05] transition-colors">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-xs">★</span>
        ))}
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed">&ldquo;{body}&rdquo;</p>
      <div className="flex items-center gap-2.5 mt-auto pt-2 border-t border-white/8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatar} alt={name} className="w-7 h-7 rounded-full object-cover border border-white/10" />
        <div>
          <p className="text-white text-xs font-semibold leading-none">{name}</p>
          <p className="text-neutral-600 text-[10px] mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}

const avatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=4",
  "https://i.pravatar.cc/40?img=5",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col relative">

      {/* ── Dashed lines wrapper — ends before contact section ── */}
      <div className="relative">

        {/* Vertical dashed lines — scoped to this wrapper only */}
        <div className="absolute inset-0 pointer-events-none z-[100] flex justify-center">
          <div className="relative w-full max-w-7xl">
            <div className="absolute inset-y-0 left-4 lg:left-10 border-l border-dashed border-white/25" />
            <div className="absolute inset-y-0 right-4 lg:right-10 border-r border-dashed border-white/25" />
          </div>
        </div>

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-dashed border-white/25 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 lg:px-10 py-3 sm:py-4 flex items-center justify-between">
          <a href="/">
            <Image src="/logo.svg" alt="Quarix" width={140} height={42} className="w-[110px] sm:w-[140px] lg:w-[170px] h-auto" priority />
          </a>

          {/* Desktop nav links */}
          <nav className="hidden sm:flex items-center gap-1">
            {[
              { label: "About", href: "#about" },
              { label: "Service", href: "#service" },
              { label: "Works", href: "#works" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <a key={item.label} href={item.href}
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors rounded-md hover:bg-white/5">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <MobileNav />
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="flex-1 relative overflow-hidden">
        {/* Dot pattern — strictly clipped inside the dashed lines */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-14 lg:px-20 pt-10 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-0 w-full">

          {/* Left */}
          <div className="flex flex-col gap-5 sm:gap-6 w-full lg:max-w-2xl">

            {/* Badge */}
            <a
              href="#services"
              className="inline-flex items-center gap-2 self-start text-xs font-medium bg-white/10 border border-white/10 rounded-full px-3 py-1.5 hover:bg-white/15 transition-colors"
            >
              <span className="text-sm">🚀</span>
              <span className="text-neutral-300">Now offering MCP Servers</span>
              <span className="text-white/40 hidden sm:inline">|</span>
              <span className="text-neutral-400 hidden sm:inline">See what&apos;s new</span>
              <IconArrowRight size={12} className="text-neutral-400 hidden sm:block" />
            </a>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-white">
              Plan. Build.{" "}
              <span style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>
                Ship.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl">
              We provide professional and high-quality websites, AI agents, AI chatbots,
              iOS, and Android application design and development services based on your ideas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors w-full sm:w-auto"
              >
                Explore Services
                <IconArrowRight size={14} />
              </a>
              <Link href="/contact" className="w-full sm:w-auto">
                <ShimmerButton className="text-sm font-semibold px-6 py-3 w-full sm:w-auto">
                  Get in Touch
                </ShimmerButton>
              </Link>
            </div>

            {/* Social proof — below CTAs */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center -space-x-2">
                {avatars.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt={`user ${i + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-black object-cover"
                  />
                ))}
              </div>
              <Link
                href="/team"
                className="group flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                View team
                <IconArrowRight size={14} className="group-hover:-rotate-45 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Mascot */}
          <div className="hidden lg:flex items-center justify-center shrink-0 lg:ml-8">
            <Image
              src="/mascot-hello.png"
              alt="Quarix mascot"
              width={320}
              height={320}
              className="w-[260px] xl:w-[320px] h-auto drop-shadow-2xl"
              priority
            />
          </div>

        </div>
      </section>

      {/* ── Social Links ── */}
      <div className="border-y border-dashed border-white/25">
      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-20 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

          {/* X / Twitter */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0">
                <SiX size={18} className="text-white" />
              </div>
              <span className="text-white font-medium text-sm">X</span>
            </div>
            <IconArrowRight size={16} className="text-neutral-600 group-hover:text-white group-hover:-rotate-45 transition-all" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0">
                <SiGithub size={18} className="text-white" />
              </div>
              <span className="text-white font-medium text-sm">GitHub</span>
            </div>
            <IconArrowRight size={16} className="text-neutral-600 group-hover:text-white group-hover:-rotate-45 transition-all" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A66C2] flex items-center justify-center shrink-0">
                <FaLinkedinIn size={18} className="text-white" />
              </div>
              <span className="text-white font-medium text-sm">LinkedIn</span>
            </div>
            <IconArrowRight size={16} className="text-neutral-600 group-hover:text-white group-hover:-rotate-45 transition-all" />
          </a>

        </div>
      </div>
      </div>

      {/* ── About QuariX ── */}
      <section id="about" className="relative bg-black border-b border-dashed border-white/25 overflow-hidden">
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="relative w-full max-w-7xl">
            <div className="absolute inset-y-0 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 overflow-hidden opacity-30">
              <DotPattern width={24} height={24} cr={1}
                className="text-white/20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_20%,white_20%,transparent_100%)]" />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-14 lg:px-20 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 self-start text-xs font-medium bg-white/10 border border-white/10 rounded-full px-3 py-1.5">
                <IconSparkles size={14} className="text-amber-200/80" />
                <span className="text-neutral-300">About QuariX</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-white leading-[1.08]">
                A product studio for{" "}
                <span style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>
                  modern teams.
                </span>
              </h2>

              <div className="flex flex-col gap-4 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                <p>
                  <strong className="text-neutral-200 font-semibold">QuariX</strong> is a freelance studio that plans, builds, and ships
                  digital products end-to-end. We work with founders, startups, and product teams who need serious execution —
                  not slide decks — on the web, on mobile, and in AI.
                </p>
                <p>
                  Our focus spans <strong className="text-neutral-300 font-medium">custom websites &amp; web apps</strong>,{" "}
                  <strong className="text-neutral-300 font-medium">native and cross-platform iOS &amp; Android apps</strong>,{" "}
                  <strong className="text-neutral-300 font-medium">AI agents &amp; chatbots</strong>, and{" "}
                  <strong className="text-neutral-300 font-medium">MCP servers</strong> that connect models to your data and tools.
                  Every project gets clear communication, pragmatic timelines, and code you can maintain.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <a href="#service" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors">
                  Explore services <IconArrowRight size={14} />
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/15 text-neutral-300 text-sm font-medium hover:bg-white/5 hover:border-white/25 transition-colors">
                  Start a conversation
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4 relative min-h-[160px] sm:min-h-[200px] items-center justify-center pt-16 sm:pt-24 lg:pt-32">
              {/* Giant watermark — right center */}
              <div
                className="pointer-events-none select-none text-[80px] sm:text-[110px] lg:text-[140px] font-black tracking-tighter leading-none whitespace-nowrap"
                style={{ WebkitTextStroke: "2px rgba(255,255,255,0.35)", color: "transparent" }}
              >
                QuariX
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="service" className="relative bg-black pt-8 sm:pt-10">
        {/* Background gradient image — clipped inside the dashed lines */}
        <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none flex justify-center px-4 sm:px-6 lg:px-0">
          <div className="relative w-full max-w-7xl overflow-hidden">
            <div
              className="absolute inset-x-8 top-0 h-full"
              style={{
                backgroundImage: "url('/service.png')",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>
        </div>
          <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-20 py-8 sm:py-10 relative z-10">

          {/* Header */}
          <div className="flex flex-col gap-4 mb-8">
            <span className="inline-flex items-center gap-2 self-start text-xs font-medium bg-white/10 border border-white/10 rounded-full px-3 py-1.5">
              <span>⚡</span>
              <span className="text-neutral-300">What we do</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Everything you need to{" "}
              <span style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>
                ship faster.
              </span>
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg max-w-xl leading-relaxed">
              From concept to deployment — we cover the full stack of modern digital product development.
            </p>
          </div>

          {/* Bento Grid */}
          <ServiceCards />
        </div>
      </section>

      {/* ── Testimonials Marquee ── */}
      <section className="relative bg-black py-14 overflow-hidden border-y border-dashed border-white/25">
        {/* Clip to dashed lines */}
        <div className="flex justify-center px-4 sm:px-6 lg:px-0">
          <div className="relative w-full max-w-7xl overflow-hidden">
            <div className="absolute inset-y-0 left-8 right-8 overflow-hidden">

              {/* Fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-black to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-black to-transparent" />

              {/* Single row — right to left */}
              <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem]">
                {testimonials.map((t) => (
                  <TestimonialCard key={t.name} {...t} />
                ))}
              </Marquee>

            </div>
            {/* Spacer so the section has height */}
            <div className="invisible px-6">
              <TestimonialCard {...testimonials[0]} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Works / Portfolio ── */}
      <section id="works" className="relative bg-black py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-20">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="flex flex-col gap-3">
              <span className="inline-flex items-center gap-2 self-start text-xs font-medium bg-white/10 border border-white/10 rounded-full px-3 py-1.5">
                <span>🗂️</span>
                <span className="text-neutral-300">Our Work</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Projects we&apos;ve{" "}
                <span style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>
                  shipped.
                </span>
              </h2>
              <p className="text-neutral-500 text-sm sm:text-base max-w-lg leading-relaxed">
                A selection of real-world products we&apos;ve designed and built for our clients.
              </p>
            </div>
          </div>

          {/* Project Cards Grid */}
          <ProjectCards />
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" className="relative bg-black py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-20">
          <div className="rounded-3xl border border-white/10 bg-neutral-950 overflow-hidden">

            {/* Centered content */}
            <div className="flex flex-col items-center text-center px-5 sm:px-10 py-14 sm:py-20 gap-6 sm:gap-7 relative">

              {/* Meteors effect */}
              <Meteors number={18} />

              {/* Dot background */}
              <div className="absolute inset-0 pointer-events-none">
                <DotPattern width={28} height={28} cr={1}
                  className="text-white/[0.06] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,white_20%,transparent_100%)]" />
              </div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl border border-white/15 bg-white/5 flex items-center justify-center">
                <IconMail size={26} className="text-white/70" />
              </div>

              {/* Heading */}
              <div className="relative z-10 flex flex-col gap-3 max-w-2xl">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
                  Contact Quarix to{" "}
                  <span style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>
                    start your idea.
                  </span>
                </h2>
                <p className="text-neutral-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
                  Do you have a big idea? Or a small project to complete? Quarix is here to help you bring it to life.
                </p>
              </div>

              {/* CTA */}
              <div className="relative z-10">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors">
                    Contact us now <IconArrowRight size={15} />
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      </div>{/* end dashed lines wrapper */}

      <Footer />

      </main>
  );
}
