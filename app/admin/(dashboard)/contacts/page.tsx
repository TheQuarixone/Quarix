import { getSupabase } from "@/lib/supabase";
import { IconMail, IconClock, IconPhone, IconBriefcase } from "@tabler/icons-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const revalidate = 0; // Disable caching for admin panel

export default async function ContactsAdminPage() {
  const supabase = getSupabase();
  const { data: messages, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <Card className="border-red-500/20 bg-red-500/10">
        <CardContent className="pt-6 text-red-400">
          Failed to load messages: {error.message}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <IconMail className="text-neutral-400" size={32} />
            Contact Messages
          </h1>
          <p className="text-neutral-500 mt-2">Manage inquiries from quarix.one/contact</p>
        </div>
        <Badge variant="secondary" className="text-sm px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white border-white/10">
          Total: {messages?.length || 0}
        </Badge>
      </div>

      {messages?.length === 0 ? (
        <Card className="bg-transparent border-dashed border-white/10">
          <CardContent className="flex flex-col items-center justify-center py-20 text-neutral-500">
            <IconMail size={48} className="mb-4 opacity-20" />
            <p>No contact messages found.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {messages?.map((msg) => (
            <Card key={msg.id} className="bg-[#0a0a0a] border-white/10 hover:border-white/20 transition-colors overflow-hidden">
              <CardHeader className="pb-4 border-b border-white/5">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <CardTitle className="text-xl font-bold text-white tracking-tight">{msg.name}</CardTitle>
                    <CardDescription>
                      <a href={`mailto:${msg.email}`} className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors">
                        <IconMail size={14} />
                        {msg.email}
                      </a>
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-white/5 border-white/10 text-neutral-300 gap-1.5 py-1">
                      <IconClock size={12} />
                      {new Date(msg.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </Badge>
                    <Badge variant="default" className="bg-white text-black hover:bg-neutral-200 gap-1.5 py-1">
                      <IconBriefcase size={12} />
                      {msg.service}
                    </Badge>
                    {msg.phone && (
                      <Badge variant="outline" className="bg-green-500/10 border-green-500/20 text-green-400 gap-1.5 py-1">
                        <IconPhone size={12} />
                        {msg.phone}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="bg-black/40 border border-white/5 rounded-xl p-5 relative">
                  <div className="absolute top-0 left-4 -translate-y-1/2 px-2 bg-[#0a0a0a] text-[10px] uppercase tracking-widest font-semibold text-neutral-500">
                    Project Details
                  </div>
                  <p className="text-sm text-neutral-300 whitespace-pre-wrap leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
