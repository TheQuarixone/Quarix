"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { ServiceModal } from "@/components/service-cards";
import type { Service } from "@/lib/services";

const footerServiceMap: { label: string; id: string }[] = [
  { label: "Web Dev", id: "web" },
  { label: "iOS Apps", id: "ios" },
  { label: "Android Apps", id: "android" },
  { label: "AI Agents", id: "agents" },
  { label: "AI Chatbots", id: "chatbots" },
  { label: "MCP Servers", id: "mcp" },
];

export function FooterServiceLinks() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <>
      <div className="flex flex-col gap-2.5">
        {footerServiceMap.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(services.find((s) => s.id === item.id)!)}
            className="text-[13px] text-neutral-300 hover:text-white transition-colors w-fit text-left group flex items-center gap-1"
          >
            {item.label}
            <span className="opacity-0 group-hover:opacity-60 transition-opacity text-[10px]">↗</span>
          </button>
        ))}
      </div>

      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
