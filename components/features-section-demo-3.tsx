"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { TbRobot, TbBrandOpenai, TbDeviceMobile, TbWorldWww } from "react-icons/tb";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "AI Agents that work for you",
      description:
        "Autonomous agents that research, reason, and act — automating complex workflows so your team can focus on what matters.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-white/10",
    },
    {
      title: "Shipped to every device",
      description:
        "Native iOS and Android apps — fast, polished, and built to App Store and Play Store standards.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-white/10",
    },
    {
      title: "AI Chatbots — always on, always smart",
      description:
        "Context-aware chatbots powered by GPT-4 and Claude that convert leads, resolve queries, and integrate with your stack.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r border-white/10",
    },
    {
      title: "We ship for clients worldwide",
      description:
        "From San Francisco to Singapore — our remote team has shipped products used by people across the globe.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b border-white/10 lg:border-none",
    },
  ];

  return (
    <div className="relative z-20 mx-auto max-w-7xl py-10 lg:py-20">
      <div className="px-8 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 text-xs font-medium bg-white/10 border border-white/10 rounded-full px-3 py-1.5 mb-4">
          <span>✦</span>
          <span className="text-neutral-300">Why Quarix</span>
        </span>
        <h2 className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          Everything you need,{" "}
          <span style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>
            nothing you don&apos;t.
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-sm text-neutral-400 leading-relaxed">
          We combine deep technical expertise with sharp product thinking to build
          digital products that actually ship — on time, on budget, on point.
        </p>
      </div>

      <div className="relative mt-12">
        <div className="grid grid-cols-1 rounded-2xl lg:grid-cols-6 border border-white/10 overflow-hidden">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative overflow-hidden p-6 sm:p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors", className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-left text-lg font-bold tracking-tight text-white md:text-xl">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="my-2 max-w-sm text-left text-sm text-neutral-500 leading-relaxed">
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  const steps = [
    { icon: <TbRobot size={14} />, label: "Agent initialised", status: "done" },
    { icon: <TbBrandOpenai size={14} />, label: "Fetching context from Notion…", status: "done" },
    { icon: <TbBrandOpenai size={14} />, label: "Running GPT-4o reasoning pass", status: "active" },
    { icon: <TbWorldWww size={14} />, label: "Querying internal database", status: "pending" },
    { icon: <TbRobot size={14} />, label: "Drafting response & actions", status: "pending" },
  ];

  return (
    <div className="relative flex h-full flex-col gap-2 py-6 px-2">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12 }}
          className={cn(
            "flex items-center gap-3 rounded-xl border px-4 py-2.5 text-xs",
            step.status === "done" && "border-white/10 bg-white/5 text-neutral-300",
            step.status === "active" && "border-white/20 bg-white/10 text-white",
            step.status === "pending" && "border-white/5 bg-white/[0.02] text-neutral-600",
          )}
        >
          <span className={cn(step.status === "active" ? "text-white" : "text-neutral-500")}>
            {step.icon}
          </span>
          <span>{step.label}</span>
          {step.status === "active" && (
            <span className="ml-auto flex gap-0.5">
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="w-1 h-1 rounded-full bg-white"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 1, delay: d * 0.2 }}
                />
              ))}
            </span>
          )}
          {step.status === "done" && (
            <span className="ml-auto text-neutral-500">✓</span>
          )}
        </motion.div>
      ))}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const platforms = [
    { label: "iOS", sub: "App Store", icon: <TbDeviceMobile size={20} /> },
    { label: "Android", sub: "Play Store", icon: <TbDeviceMobile size={20} /> },
  ];

  const stats = [
    { value: "60+", label: "Apps shipped" },
    { value: "4.9★", label: "Avg rating" },
    { value: "2M+", label: "End users" },
  ];

  return (
    <div className="flex flex-col gap-4 py-6">
      <div className="flex gap-3">
        {platforms.map((p) => (
          <div key={p.label} className="flex-1 flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-5">
            <span className="text-white/60">{p.icon}</span>
            <span className="text-white font-bold text-sm">{p.label}</span>
            <span className="text-neutral-600 text-xs">{p.sub}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-0.5 rounded-xl border border-white/8 bg-white/[0.025] py-3">
            <span className="text-white font-black text-base">{s.value}</span>
            <span className="text-neutral-600 text-[10px]">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  const messages = [
    { from: "user", text: "What's the status of my order #4821?" },
    { from: "bot", text: "Your order #4821 is out for delivery — arriving today by 6 PM. 📦" },
    { from: "user", text: "Can I change the delivery address?" },
    { from: "bot", text: "Sure! I've updated your address. Anything else I can help with?" },
  ];

  return (
    <div className="relative flex flex-col gap-2 py-6 px-2">
      {messages.map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          className={cn(
            "max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed",
            msg.from === "user"
              ? "self-end bg-white/10 text-neutral-200 rounded-br-sm"
              : "self-start bg-white/5 border border-white/10 text-neutral-400 rounded-bl-sm"
          )}
        >
          {msg.text}
        </motion.div>
      ))}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative mt-4 h-52 w-full overflow-hidden rounded-xl">
      {/* Earth image */}
      <img
        src="/earth .avif"
        alt="Earth"
        className="absolute inset-0 w-full h-full object-cover object-center scale-110"
      />
    </div>
  );
};
