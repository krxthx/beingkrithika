import { wrap, c } from "@/lib/layout";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${c.border}`, padding: "24px 0", position: "relative", zIndex: 2 }}>
      <div style={{ ...wrap, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontFamily: c.mono, fontSize: "10px", letterSpacing: "0.1em", color: c.textDim }}>
          krithika nithyanandam
        </p>
        <p style={{ fontFamily: c.mono, fontSize: "10px", letterSpacing: "0.1em", color: c.textDim }}>
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
