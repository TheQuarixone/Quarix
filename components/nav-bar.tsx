"use client";

import { NavBar as TubelightNav } from "@/components/ui/tubelight-navbar";
import { Home, Briefcase, FolderOpen, Mail } from "lucide-react";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Services", url: "#services", icon: Briefcase },
  { name: "Portfolio", url: "#works", icon: FolderOpen },
  { name: "Contact", url: "#contact", icon: Mail },
];

export function NavBar() {
  return <TubelightNav items={navItems} />;
}
