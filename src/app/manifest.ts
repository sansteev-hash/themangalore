import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";

/** Lets phones add the site to the home screen with the right name, colours and icon. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "TheMangalore",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b1424",
    icons: [
      { src: "/icon/large", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
