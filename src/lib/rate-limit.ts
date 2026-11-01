/**
 * Simple in-memory "sliding window" rate limiter.
 *
 * Limitation: on Vercel each server instance has its own memory, so this is a
 * first line of defence, not a guarantee. A shared store (e.g. Supabase or
 * Upstash) can replace it later without changing the callers.
 */
export function createRateLimiter({
  limit,
  windowMs,
}: {
  limit: number;
  windowMs: number;
}) {
  const hits = new Map<string, number[]>();

  return {
    /** Records an attempt for `key` and returns false if it's over the limit. */
    check(key: string, now = Date.now()): boolean {
      // Occasionally drop expired entries so memory doesn't grow forever.
      if (hits.size > 1000) {
        for (const [k, times] of hits) {
          if (times.every((t) => now - t >= windowMs)) hits.delete(k);
        }
      }

      const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
      if (recent.length >= limit) {
        hits.set(key, recent);
        return false;
      }
      recent.push(now);
      hits.set(key, recent);
      return true;
    },
  };
}

export type RateLimiter = ReturnType<typeof createRateLimiter>;
