/**
 * The square brand mark ("M" with a blue accent) drawn for next/og ImageResponse.
 * Used by the favicon, app icons and social images, so they always match.
 * (ImageResponse supports inline styles and flexbox only.)
 */
export function BrandMark({
  size,
  rounded = true,
}: {
  size: number;
  rounded?: boolean;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "linear-gradient(135deg, #0b1424 0%, #13254a 100%)",
        borderRadius: rounded ? size * 0.22 : 0,
        color: "#ffffff",
        fontSize: size * 0.62,
        fontWeight: 800,
        letterSpacing: -size * 0.02,
      }}
    >
      M
      <div
        style={{
          position: "absolute",
          right: size * 0.11,
          bottom: size * 0.11,
          width: size * 0.14,
          height: size * 0.14,
          borderRadius: size,
          background: "#60a5fa",
        }}
      />
    </div>
  );
}
