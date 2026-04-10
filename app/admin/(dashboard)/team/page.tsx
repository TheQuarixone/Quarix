import { getSupabase } from "@/lib/supabase";
import { IconUsers, IconClock, IconLink, IconBriefcase, IconMail } from "@tabler/icons-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const revalidate = 0; // Disable caching for admin panel

export default async function TeamAdminPage() {
  const supabase = getSupabase();
  const { data: applications, error } = await supabase
    .from("team_applications")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <Card className="border-red-500/20 bg-red-500/10">
        <CardContent className="pt-6 text-red-400">
          Failed to load applications: {error.message}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <IconUsers className="text-neutral-400" size={32} />
            Team Applications
          </h1>
          <p className="text-neutral-500 mt-2">Manage applications from quarix.one/join</p>
        </div>
        <Badge variant="secondary" className="text-sm px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white border-white/10">
          Total: {applications?.length || 0}
        </Badge>
      </div>

      {applications?.length === 0 ? (
        <Card className="bg-transparent border-dashed border-white/10">
          <CardContent className="flex flex-col items-center justify-center py-20 text-neutral-500">
            <IconUsers size={48} className="mb-4 opacity-20" />
            <p>No team applications found.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {applications?.map((app) => (
            <Card key={app.id} className="bg-[#0a0a0a] border-white/10 hover:border-white/20 transition-colors overflow-hidden">
              <CardHeader className="pb-4 border-b border-white/5">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <CardTitle className="text-xl font-bold text-white tracking-tight">{app.name}</CardTitle>
                    <CardDescription>
                      <a href={`mailto:${app.email}`} className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors">
                        <IconMail size={14} />
                        {app.email}
                      </a>
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-white/5 border-white/10 text-neutral-300 gap-1.5 py-1">
                      <IconClock size={12} />
                      {new Date(app.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </Badge>
                    <Badge variant="default" className="bg-white text-black hover:bg-neutral-200 gap-1.5 py-1">
                      <IconBriefcase size={12} />
                      {app.role}
                    </Badge>
                    {app.portfolio && (
                      <a href={app.portfolio} target="_blank" rel="noopener noreferrer">
                        <Badge variant="outline" className="bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20 gap-1.5 py-1 cursor-pointer transition-colors">
                          <IconLink size={12} />
                          Portfolio
                        </Badge>
                      </a>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              {app.message && (
                <CardContent className="pt-6">
                  <div className="bg-black/40 border border-white/5 rounded-xl p-5 relative">
                    <div className="absolute top-0 left-4 -translate-y-1/2 px-2 bg-[#0a0a0a] text-[10px] uppercase tracking-widest font-semibold text-neutral-500">
                      Cover Letter / Message
                    </div>
                    <p className="text-sm text-neutral-300 whitespace-pre-wrap leading-relaxed">
                      {app.message}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
