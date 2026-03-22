"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconArrowRight, IconX } from "@tabler/icons-react";
import { SiApple, SiAndroid } from "react-icons/si";
import { TbServerBolt, TbRobot, TbCube3dSphere } from "react-icons/tb";
import { SiOpenai } from "react-icons/si";
import { type Service, services } from "@/lib/services";

export function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

        <motion.div
          className="relative w-full sm:max-w-2xl bg-black/40 backdrop-blur-2xl border border-white/10 rounded-t-3xl sm:rounded-3xl overflow-hidden z-10 flex flex-col max-h-[90vh] shadow-2xl"
          initial={{ y: 60, opacity: 0, scale: 0.97 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 60, opacity: 0, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 border-b border-white/8 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                {service.iconLg}
              </div>
              <h2 className="text-white font-black text-lg sm:text-xl">{service.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/8 hover:border-white/25 transition-all"
            >
              <IconX size={14} className="text-neutral-400" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto flex-1 p-5 sm:p-6 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-neutral-300 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-5 sm:px-6 py-4 border-t border-white/8 flex items-center justify-between gap-3 shrink-0"
          >
            <button onClick={onClose} className="text-xs text-neutral-600 hover:text-white transition-colors">
              Close
            </button>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
            >
              Contact Us <IconArrowRight size={13} />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ServiceCards() {
  const [selected, setSelected] = useState<Service | null>(null);

  const cardBase = "group relative rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all overflow-hidden cursor-pointer";

  return (
    <>
      {/*
        Mobile  (< 768px):  2-col with grid-flow-dense
          Row 1 → iOS (1) + MCP fills the gap (dense)
          Row 2 → Web Dev (span-2, full width)
          Row 3 → AI Agents (span-2, full width)
          Row 4 → Android (1) + Chatbots (1)
        Tablet  (md 768-1024): 4-col bento
        Desktop (lg 1024+):   6-col bento
      */}
      <div className="grid grid-flow-dense grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">

        {/* ── iOS Dev ── */}
        <motion.div
          whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
          onClick={() => setSelected(services.find(s => s.id === "ios")!)}
          className={`${cardBase} col-span-1 md:col-span-1 lg:col-span-1 p-5 sm:p-6 flex flex-col gap-6 justify-between min-h-[160px] sm:min-h-[200px]`}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
            <SiApple size={18} className="text-white/70" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-1">iOS Dev</h3>
            <p className="text-neutral-500 text-[11px] sm:text-xs leading-relaxed">Native & cross-platform apps for App Store.</p>
          </div>
          <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <IconArrowRight size={13} className="text-neutral-400 -rotate-45" />
          </span>
        </motion.div>

        {/* ── Web Dev — spans full width on mobile (col-span-2), 3 cols on md/lg ── */}
        <motion.div
          whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
          onClick={() => setSelected(services.find(s => s.id === "web")!)}
          className={`${cardBase} col-span-2 md:col-span-3 lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[200px]`}
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
              <TbCube3dSphere size={22} className="text-white/70" />
            </div>
            <div>
              <h3 className="text-white font-black text-xl sm:text-2xl lg:text-3xl leading-tight mb-1 sm:mb-2">Web Development</h3>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-sm">
                Custom, high-performance websites and web apps tailored to your brand — from landing pages to full-stack platforms.
              </p>
            </div>
          </div>
          <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <IconArrowRight size={13} className="text-neutral-400 -rotate-45" />
          </span>
        </motion.div>

        {/* ── MCP Servers — fills gap next to iOS on mobile (dense), 2 cols on md ── */}
        <motion.div
          whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
          onClick={() => setSelected(services.find(s => s.id === "mcp")!)}
          className={`${cardBase} col-span-1 md:col-span-2 lg:col-span-2 p-5 sm:p-6 sm:p-7 flex flex-col gap-6 justify-between min-h-[160px] sm:min-h-[200px]`}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
            <TbServerBolt size={18} className="text-white/70" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-1">MCP Servers</h3>
            <p className="text-neutral-500 text-[11px] sm:text-xs leading-relaxed">Connect AI to tools, databases & APIs via Model Context Protocol.</p>
          </div>
          <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <IconArrowRight size={13} className="text-neutral-400 -rotate-45" />
          </span>
        </motion.div>

        {/* ── AI Agents — full width on mobile, 4 cols on lg ── */}
        <motion.div
          whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
          onClick={() => setSelected(services.find(s => s.id === "agents")!)}
          className={`${cardBase} col-span-2 md:col-span-4 lg:col-span-4 p-5 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8 items-start min-h-[150px] sm:min-h-[180px]`}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
            <TbRobot size={22} className="text-white/70" />
          </div>
          <div className="flex flex-col gap-1.5 sm:gap-3">
            <h3 className="text-white font-black text-lg sm:text-xl lg:text-2xl">AI Agents</h3>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-lg">
              Autonomous agents that research, reason, and act — automating complex workflows so your team can focus on what matters most.
            </p>
          </div>
          <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <IconArrowRight size={13} className="text-neutral-400 -rotate-45" />
          </span>
        </motion.div>

        {/* ── Android Dev ── */}
        <motion.div
          whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
          onClick={() => setSelected(services.find(s => s.id === "android")!)}
          className={`${cardBase} col-span-1 md:col-span-1 lg:col-span-1 p-5 sm:p-6 flex flex-col gap-6 justify-between min-h-[150px] sm:min-h-[180px]`}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
            <SiAndroid size={18} className="text-white/70" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-1">Android Dev</h3>
            <p className="text-neutral-500 text-[11px] sm:text-xs leading-relaxed">Apps for every Android device and screen size.</p>
          </div>
          <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <IconArrowRight size={13} className="text-neutral-400 -rotate-45" />
          </span>
        </motion.div>

        {/* ── AI Chatbots ── */}
        <motion.div
          whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
          onClick={() => setSelected(services.find(s => s.id === "chatbots")!)}
          className={`${cardBase} col-span-1 md:col-span-1 lg:col-span-1 p-5 sm:p-6 flex flex-col gap-6 justify-between min-h-[150px] sm:min-h-[180px]`}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
            <SiOpenai size={18} className="text-white/70" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-1">AI Chatbots</h3>
            <p className="text-neutral-500 text-[11px] sm:text-xs leading-relaxed">Context-aware bots that convert leads 24/7.</p>
          </div>
          <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <IconArrowRight size={13} className="text-neutral-400 -rotate-45" />
          </span>
        </motion.div>

      </div>

      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
