"use client";

import { useEffect, useRef } from "react";
import { wrap, c } from "@/lib/layout";

const stackItems = ["TypeScript", "Python", "Kotlin", "Next.js", "React", "Electron", "LangChain", "LiteLLM", "MCP", "AWS", "Azure", "Terraform"];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.classList.add("reveal");
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ padding: "120px 0", borderTop: `1px solid ${c.border}`, position: "relative", zIndex: 2 }}>
      <div style={wrap}>
        <p className="section-label">01 / About</p>

        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ fontSize: "1.08rem", fontWeight: 500, lineHeight: 1.85, color: c.text }}>
              I&apos;m a software engineer at Presidio working on Generative AI
              systems and frontend platforms — building agentic frameworks,
              LLM tooling, and the developer experience around them.
            </p>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.9, color: c.textSub }}>
              Doing an M.Tech in AI &amp; ML at BITS Pilani. I like understanding
              how things work at the seam between systems and intelligence —
              and then writing about it.
            </p>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.9, color: c.textSub }}>
              Outside of work I run{" "}
              <a href="https://lorewave.me" target="_blank" rel="noopener noreferrer"
                style={{ color: c.teal, textDecoration: "underline", textDecorationColor: "rgba(52,211,153,0.3)", textUnderlineOffset: "3px" }}>
                lorewave.me
              </a>{" "}
              and write on{" "}
              <a href="https://medium.com/@krithikanithyanandam" target="_blank" rel="noopener noreferrer"
                style={{ color: c.teal, textDecoration: "underline", textDecorationColor: "rgba(52,211,153,0.3)", textUnderlineOffset: "3px" }}>
                Medium
              </a>.
            </p>
            <div style={{ marginTop: "8px" }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: c.mono,
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: c.violet,
                  padding: "9px 18px",
                  border: "1px solid rgba(167,139,250,0.22)",
                  borderRadius: "6px",
                  background: "rgba(167,139,250,0.06)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(167,139,250,0.45)"; e.currentTarget.style.background = "rgba(167,139,250,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(167,139,250,0.22)"; e.currentTarget.style.background = "rgba(167,139,250,0.06)"; }}
              >
                résumé ↗
              </a>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div>
              <p style={{ fontFamily: c.mono, fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: c.textDim, marginBottom: "12px" }}>
                Currently
              </p>
              {["Engineer · Presidio", "M.Tech AI & ML · BITS Pilani"].map(item => (
                <p key={item} style={{ fontSize: "0.85rem", color: c.textSub, lineHeight: 1.75, marginBottom: "3px" }}>
                  {item}
                </p>
              ))}
            </div>

            <div>
              <p style={{ fontFamily: c.mono, fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: c.textDim, marginBottom: "12px" }}>
                Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {stackItems.map(item => (
                  <span key={item} className="tag-chip">{item}</span>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontFamily: c.mono, fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: c.textDim, marginBottom: "12px" }}>
                Certifications
              </p>
              {["Terraform Associate", "Azure AI-102", "GCP Cloud Digital Leader"].map(item => (
                <p key={item} style={{ fontSize: "0.85rem", color: c.textSub, lineHeight: 1.75, marginBottom: "3px" }}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
