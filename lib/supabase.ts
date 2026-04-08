import { createClient } from "@supabase/supabase-js";

/**
 * Important: don't create the Supabase client at module load time.
 * Vercel "collecting page data" can import this file during build, and if
 * env vars are missing the build will fail. We create the client lazily in
 * runtime instead.
 */
export function getSupabase() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url) throw new Error("Supabase URL is required (set SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL).");
  if (!key) throw new Error("Supabase service role key is required (set SUPABASE_SERVICE_ROLE_KEY).");

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
