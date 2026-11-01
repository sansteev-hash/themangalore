import { NotFoundContent } from "@/components/sections/not-found-content";

/**
 * Shown when a marketing page calls notFound() (e.g. an unknown service slug).
 * The marketing layout already provides the header and footer.
 */
export default function MarketingNotFound() {
  return <NotFoundContent />;
}
