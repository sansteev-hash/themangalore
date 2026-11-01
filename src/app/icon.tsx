import { ImageResponse } from "next/og";
import { BrandMark } from "@/lib/brand-mark";

export const contentType = "image/png";

// Two sizes: a small browser-tab icon and a large one for app installs and search results.
export function generateImageMetadata() {
  return [
    { id: "small", size: { width: 32, height: 32 }, contentType },
    { id: "large", size: { width: 512, height: 512 }, contentType },
  ];
}

export default async function Icon({ id }: { id: Promise<string> }) {
  const size = (await id) === "small" ? 32 : 512;
  return new ImageResponse(<BrandMark size={size} />, {
    width: size,
    height: size,
  });
}
