import { getSupabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconMail, IconUsers, IconActivity } from "@tabler/icons-react";

export const revalidate = 0;

export default async function AdminDashboard() {
  const supabase = getSupabase();

  // Fetch counts
  const [{ count: contactsCount }, { count: teamCount }] = await Promise.all([
    supabase.from("contact_messages").select("*", { count: "exact", head: true }),
    supabase.from("team_applications").select("*", { count: "exact", head: true }),
  ]);

  // Fetch recent activity
  const [{ data: recentContacts }, { data: recentTeam }] = await Promise.all([
    supabase.from("contact_messages").select("id, name, created_at, service").order("created_at", { ascending: false }).limit(3),
    supabase.from("team_applications").select("id, name, created_at, role").order("created_at", { ascending: false }).limit(3),
  ]);

  const recentActivity = [
    ...(recentContacts || []).map((c) => ({ ...c, type: "contact" as const })),
    ...(recentTeam || []).map((t) => ({ ...t, type: "team" as const })),
  ]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 5);

  return (
    <div className="flex flex-col gap-8">
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight">Overview</h1>
        <p className="text-neutral-500 mt-2">Welcome to the QuariX admin dashboard.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-[#0a0a0a] border-white/10 hover:border-white/20 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-400">Total Inquiries</CardTitle>
            <IconMail className="text-neutral-500" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{contactsCount || 0}</div>
            <p className="text-xs text-neutral-500 mt-1">From quarix.one/contact</p>
          </CardContent>
        </Card>

        <Card className="bg-[#0a0a0a] border-white/10 hover:border-white/20 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-400">Team Applications</CardTitle>
            <IconUsers className="text-neutral-500" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{teamCount || 0}</div>
            <p className="text-xs text-neutral-500 mt-1">From quarix.one/join</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-[#0a0a0a] border-white/10 overflow-hidden">
          <CardHeader className="border-b border-white/5 bg-white/[0.02]">
            <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
              <IconActivity size={20} className="text-neutral-400" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {recentActivity.length === 0 ? (
              <div className="p-8 text-center text-neutral-500">No recent activity.</div>
            ) : (
              <div className="flex flex-col">
                {recentActivity.map((item, i) => (
                  <div
                    key={`${item.type}-${item.id}`}
                    className={`flex items-center justify-between p-4 sm:px-6 hover:bg-white/[0.02] transition-colors ${
                      i !== recentActivity.length - 1 ? "border-b border-white/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                        item.type === "contact" 
                          ? "bg-blue-500/10 border-blue-500/20 text-blue-400" 
                          : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      }`}>
                        {item.type === "contact" ? <IconMail size={18} /> : <IconUsers size={18} />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {item.name} <span className="text-neutral-500 font-normal">submitted a {item.type === "contact" ? "contact inquiry" : "team application"}</span>
                        </p>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          {item.type === "contact" ? item.service : item.role}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-neutral-500 whitespace-nowrap hidden sm:block">
                      {new Date(item.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
