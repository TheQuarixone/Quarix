"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Meteors } from "@/components/ui/meteors";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { IconLock } from "@tabler/icons-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin/contacts");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Invalid password");
      }
    } catch {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <Meteors number={20} />
      
      <div className="w-full max-w-md relative z-10">
        <div className="bg-neutral-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-8">
            <Image src="/logo.svg" alt="Quarix" width={140} height={42} className="mb-6" priority />
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-4">
              <IconLock className="text-neutral-400" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Admin Access</h1>
            <p className="text-sm text-neutral-500 mt-2">Enter the master password to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-center tracking-widest"
              />
            </div>

            {error && (
              <p className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3 text-center">
                {error}
              </p>
            )}

            <ShimmerButton
              type="submit"
              disabled={loading}
              className="w-full py-3.5 text-sm font-semibold mt-2"
            >
              {loading ? "Authenticating..." : "Unlock Dashboard"}
            </ShimmerButton>
          </form>
        </div>
      </div>
    </div>
  );
}
