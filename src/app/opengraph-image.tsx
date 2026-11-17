import { ImageResponse } from "next/og";

export const alt = "TEXTORA — Fancy text generator berbasis Unicode";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const chips = ["100+ gaya Unicode", "Simbol", "Nickname", "Bio Instagram"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 76px",
          background:
            "linear-gradient(135deg, #08090F 0%, #100E24 52%, #0A1730 100%)",
          color: "#F4F5FA",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -80,
            width: 560,
            height: 560,
            borderRadius: 999,
            background:
              "linear-gradient(140deg, rgba(124,58,237,0.4), rgba(37,99,235,0.06))",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 999,
            background:
              "linear-gradient(140deg, rgba(37,99,235,0.32), rgba(124,58,237,0.04))",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 38,
                height: 10,
                borderRadius: 3,
                background: "#ffffff",
              }}
            />
            <div
              style={{
                width: 12,
                height: 22,
                borderRadius: 2,
                background: "#ffffff",
                marginTop: 3,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 38,
              fontWeight: 700,
              letterSpacing: 9,
            }}
          >
            TEXTORA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -2.5,
            }}
          >
            <div style={{ display: "flex" }}>Make Every Text</div>
            <div style={{ display: "flex", color: "#C4B5FD" }}>
              Stand Out.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 820,
              fontSize: 30,
              lineHeight: 1.5,
              color: "#A7ABC0",
            }}
          >
            Fancy text generator, simbol, nickname, dan bio Instagram. Teks
            diproses di browser, tanpa diunggah ke server.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {chips.map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 23,
                color: "#D7DAEA",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
