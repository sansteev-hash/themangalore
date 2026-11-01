import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Supabase client with the SECRET key. It bypasses Row Level Security, so it
 * must only ever run on the server — the "server-only" import above makes the
 * build fail if a browser component imports this file.
 */
export function createSupabaseAdminClient() {
  const url = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (!url || !secretKey) {
    throw new Error(
      "Supabase is not configured: set SUPABASE_URL and SUPABASE_SECRET_KEY.",
    );
  }

  return createClient(url, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
