"use client";

import { motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/projects";

export function ProjectCards() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="group relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => router.push(`/works/${project.id}`)}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Preview area */}
          <div className="relative h-40 sm:h-48 bg-white/[0.03] border-b border-white/10 overflow-hidden">
            <span className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl font-black text-white/5 select-none">
              {project.label}
            </span>
            <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 flex gap-1.5 sm:gap-2 flex-wrap">
              <span className="text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400">{project.category}</span>
              <span className="text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400">{project.type}</span>
            </div>
          </div>

          {/* Card body */}
          <div className="p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-white font-bold text-base sm:text-lg leading-tight">{project.title}</h3>
              <div className="shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
                <IconArrowRight size={12} className="text-neutral-400 group-hover:text-white transition-colors -rotate-45" />
              </div>
            </div>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
              {project.stack.map((t) => (
                <span key={t} className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-md bg-white/5 text-neutral-500">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
