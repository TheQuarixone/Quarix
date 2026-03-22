import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { IconArrowLeft, IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { MobileNav } from "@/components/mobile-nav";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} — Quarix`,
    description: project.description,
  };
}

export default async function WorkPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const others = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      {/* ── Dashed lines ── */}
      <div className="fixed inset-0 pointer-events-none z-[100] flex justify-center">
        <div className="relative w-full max-w-7xl">
          <div className="absolute inset-y-0 left-4 lg:left-10 border-l border-dashed border-white/25" />
          <div className="absolute inset-y-0 right-4 lg:right-10 border-r border-dashed border-white/25" />
        </div>
      </div>

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-dashed border-white/25 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 lg:px-10 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="Quarix" width={140} height={42} className="w-[110px] sm:w-[140px] h-auto" priority />
          </Link>
          <nav className="hidden sm:flex items-center gap-1">
            {[
              { label: "About", href: "/#about" },
              { label: "Services", href: "/#services" },
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

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-14 lg:px-20 py-6 sm:py-10 w-full flex flex-col gap-6 sm:gap-10 relative z-10">

        {/* Back link */}
        <Link
          href="/#works"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors self-start"
        >
          <IconArrowLeft size={13} />
          Back to Projects
        </Link>

        {/* Top header row */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-neutral-400">{project.category}</span>
              <span className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-neutral-400">{project.type}</span>
              <span className="text-xs text-neutral-600">{project.year}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">{project.description}</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-2.5">
            <a
              href={project.link || "#"}
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl border border-white/15 text-white text-xs sm:text-sm font-medium hover:bg-white/8 transition-colors"
            >
              <IconBrandGithub size={14} /> View Code
            </a>
            <a
              href={project.link || "#"}
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-white text-black text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              Live Demo <IconExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* ── Preview area ── */}
        <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#0d0d0d]">
          {/* Browser chrome */}
          <div className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 h-9 sm:h-10 border-b border-white/8 bg-white/[0.03]">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10" />
            <div className="flex-1 mx-2 sm:mx-4 h-5 rounded-md bg-white/5 flex items-center px-2 sm:px-3">
              <span className="text-[9px] sm:text-[10px] text-neutral-600 truncate">quarix.io/works/{project.id}</span>
            </div>
          </div>

          {/* Preview body */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{ minHeight: "clamp(180px, 40vw, 440px)" }}
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Giant label */}
            <span
              className="relative font-black text-white/[0.05] select-none leading-none"
              style={{ fontSize: "clamp(70px, 20vw, 280px)" }}
            >
              {project.label}
            </span>

            {/* Stack pills */}
            <div className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 flex gap-1.5 sm:gap-2 flex-wrap justify-end max-w-[60%] sm:max-w-none">
              {project.stack.map((s) => (
                <span key={s} className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/70 border border-white/10 text-neutral-400 backdrop-blur-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Detail columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Overview */}
          <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-4">
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-white/30">About this project</p>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">{project.overview}</p>
          </div>

          {/* Key features */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-white/30">Key Features</p>
            <ul className="flex flex-col gap-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-dashed border-white/15" />

        {/* ── More projects ── */}
        <div className="flex flex-col gap-5 sm:gap-6 pb-12 sm:pb-16">
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-white/30">More Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {others.map((p) => (
              <Link
                key={p.id}
                href={`/works/${p.id}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 hover:bg-white/[0.04] transition-all"
              >
                <div className="relative h-28 sm:h-36 bg-white/[0.03] border-b border-white/10 flex items-center justify-center overflow-hidden">
                  <span className="text-4xl sm:text-5xl font-black text-white/5 select-none">{p.label}</span>
                  <div className="absolute bottom-2 sm:bottom-2.5 left-2.5 sm:left-3 flex gap-1.5">
                    <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-500">{p.category}</span>
                  </div>
                </div>
                <div className="p-3.5 sm:p-4 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-white font-semibold text-xs sm:text-sm">{p.title}</p>
                    <p className="text-neutral-600 text-[10px] sm:text-xs mt-0.5">{p.year}</p>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors shrink-0 mt-0.5">
                    <IconArrowLeft size={10} className="text-neutral-500 rotate-180" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
