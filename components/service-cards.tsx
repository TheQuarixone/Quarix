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
          initial={{ y: 50, opacity: 0, scale: 0.97 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/8 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                {service.iconLg}
              </div>
              <h2 className="text-white font-black text-xl">{service.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/8 hover:border-white/25 transition-all"
            >
              <IconX size={14} className="text-neutral-400" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto flex-1 p-6 flex flex-col gap-6">
            {/* Description */}
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
            className="px-6 py-4 border-t border-white/8 flex items-center justify-between gap-3 shrink-0"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">

        {/* iOS */}
        <motion.div
          whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
          onClick={() => setSelected(services.find(s => s.id === "ios")!)}
          className={`${cardBase} md:col-span-1 p-6 flex flex-col gap-8 justify-between min-h-[200px]`}
        >
          <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
            <SiApple size={20} className="text-white/70" />
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-1">iOS Dev</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">Native & cross-platform apps for App Store.</p>
          </div>
          <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <IconArrowRight size={14} className="text-neutral-400 -rotate-45" />
          </span>
        </motion.div>

        {/* Web Dev */}
        <motion.div
          whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
          onClick={() => setSelected(services.find(s => s.id === "web")!)}
          className={`${cardBase} sm:col-span-1 md:col-span-3 p-7 sm:p-8 flex flex-col justify-between min-h-[200px]`}
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
              <TbCube3dSphere size={24} className="text-white/70" />
            </div>
            <div>
              <h3 className="text-white font-black text-xl sm:text-2xl lg:text-3xl leading-tight mb-2">Web Development</h3>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                Custom, high-performance websites and web apps tailored to your brand — from landing pages to full-stack platforms.
              </p>
            </div>
          </div>
          <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <IconArrowRight size={14} className="text-neutral-400 -rotate-45" />
          </span>
        </motion.div>

        {/* MCP Servers */}
        <motion.div
          whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
          onClick={() => setSelected(services.find(s => s.id === "mcp")!)}
          className={`${cardBase} md:col-span-2 p-6 sm:p-7 flex flex-col gap-8 justify-between min-h-[200px]`}
        >
          <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
            <TbServerBolt size={20} className="text-white/70" />
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-1">MCP Servers</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">Connect AI to tools, databases & APIs via Model Context Protocol.</p>
          </div>
          <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <IconArrowRight size={14} className="text-neutral-400 -rotate-45" />
          </span>
        </motion.div>

        {/* AI Agents */}
        <motion.div
          whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
          onClick={() => setSelected(services.find(s => s.id === "agents")!)}
          className={`${cardBase} sm:col-span-2 md:col-span-2 lg:col-span-4 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start min-h-[180px]`}
        >
          <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
            <TbRobot size={24} className="text-white/70" />
          </div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <h3 className="text-white font-black text-xl lg:text-2xl">AI Agents</h3>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-lg">
              Autonomous agents that research, reason, and act — automating complex workflows so your team can focus on what matters most.
            </p>
          </div>
          <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <IconArrowRight size={14} className="text-neutral-400 -rotate-45" />
          </span>
        </motion.div>

        {/* Android */}
        <motion.div
          whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
          onClick={() => setSelected(services.find(s => s.id === "android")!)}
          className={`${cardBase} md:col-span-1 p-6 flex flex-col gap-8 justify-between min-h-[180px]`}
        >
          <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
            <SiAndroid size={20} className="text-white/70" />
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-1">Android Dev</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">Apps for every Android device and screen size.</p>
          </div>
          <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <IconArrowRight size={14} className="text-neutral-400 -rotate-45" />
          </span>
        </motion.div>

        {/* AI Chatbots */}
        <motion.div
          whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
          onClick={() => setSelected(services.find(s => s.id === "chatbots")!)}
          className={`${cardBase} md:col-span-1 p-6 flex flex-col gap-8 justify-between min-h-[180px]`}
        >
          <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
            <SiOpenai size={20} className="text-white/70" />
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-1">AI Chatbots</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">Context-aware bots that convert leads 24/7.</p>
          </div>
          <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <IconArrowRight size={14} className="text-neutral-400 -rotate-45" />
          </span>
        </motion.div>

      </div>

      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
