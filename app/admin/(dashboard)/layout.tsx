import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IconUsers, IconMail, IconLogout, IconLayoutDashboard } from "@tabler/icons-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get("quarix_admin_auth")?.value === "true";

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 bg-[#0a0a0a] flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Link href="/">
            <Image src="/logo.svg" alt="Quarix" width={120} height={36} className="w-[100px] h-auto" priority />
          </Link>
          <p className="text-xs text-neutral-500 mt-2 font-medium uppercase tracking-widest">Admin Dashboard</p>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <Link 
            href="/admin" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <IconLayoutDashboard size={18} />
            Overview
          </Link>
          <Link 
            href="/admin/contacts" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <IconMail size={18} />
            Contact Messages
          </Link>
          <Link 
            href="/admin/team" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <IconUsers size={18} />
            Team Applications
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <form action="/api/admin/logout" method="POST" className="w-full">
            <button 
              type="submit" 
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all"
            >
              <IconLogout size={18} />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-auto">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
