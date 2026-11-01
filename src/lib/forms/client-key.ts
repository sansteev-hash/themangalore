import "server-only";
import { headers } from "next/headers";

/** Best-effort visitor identifier (IP address) for rate limiting. */
export async function getClientKey() {
  const requestHeaders = await headers();
  return (
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown"
  );
}
