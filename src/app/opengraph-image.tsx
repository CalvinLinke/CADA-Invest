import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CADA Invest GmbH — Immobilienankauf in Sachsen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#16542c",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#aa734a",
            marginBottom: 28,
            display: "flex",
          }}
        >
          CADA Invest GmbH · Dresden
        </div>

        <div
          style={{
            fontSize: 82,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Immobilienankauf</span>
          <span>
            in <span style={{ color: "#aa734a" }}>Sachsen.</span>
          </span>
        </div>

        <div style={{ marginTop: 36, width: 64, height: 3, background: "#aa734a", display: "flex" }} />

        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            fontWeight: 400,
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.4,
            maxWidth: "20em",
            display: "flex",
          }}
        >
          Wir kaufen Ihre Immobilie — diskret, schnell und ohne Aufwand.
        </div>

        <div style={{ marginTop: 52, display: "flex", gap: 56 }}>
          {[
            { value: "48 Std.", label: "Angebot" },
            { value: "< 4 Wo.", label: "Notartermin" },
            { value: "32+", label: "Projekte" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 44, fontWeight: 700, color: "#aa734a", lineHeight: 1, display: "flex" }}>
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: 14,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  display: "flex",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
