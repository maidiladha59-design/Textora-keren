import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 104,
              height: 24,
              borderRadius: 7,
              background: "#ffffff",
            }}
          />
          <div
            style={{
              width: 28,
              height: 64,
              borderRadius: 5,
              background: "#ffffff",
              marginTop: 7,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
