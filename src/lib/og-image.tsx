import { ImageResponse } from "next/og";
import { BrandMark } from "./brand-mark";
import { ogSize } from "./seo";

export { ogSize };
export const ogContentType = "image/png";

type OgImageProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

/** Branded 1200×630 social card. Inline styles + flexbox only (next/og limitation). */
export function ogImage({ eyebrow, title, description }: OgImageProps) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: "#ffffff",
        background:
          "radial-gradient(circle at 85% 0%, rgba(37,99,235,0.45) 0%, rgba(11,20,36,0) 55%), #0b1424",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <BrandMark size={64} />
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>
          <span>TheMangalore</span>
          <span style={{ color: "#60a5fa" }}>.in</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 600,
            color: "#60a5fa",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.35,
              color: "#94a3b8",
              maxWidth: 980,
            }}
          >
            {description}
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
          color: "#94a3b8",
        }}
      >
        <span>themangalore.in</span>
        <span>Mangalore, India</span>
      </div>
    </div>,
    ogSize,
  );
}
