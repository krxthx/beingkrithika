"use client";

import { useEffect, useRef } from "react";
import { c } from "@/lib/layout";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Stagger hero lines
    const lines = el.querySelectorAll<HTMLElement>(".hero-line");
    lines.forEach((line, i) => {
      line.style.opacity = "0";
      line.style.transform = "translateY(16px)";
      line.style.transition = `opacity 0.7s ease ${80 + i * 130}ms, transform 0.7s ease ${80 + i * 130}ms`;
    });
    el.style.opacity = "1";
    setTimeout(() => {
      lines.forEach(line => {
        line.style.opacity = "1";
        line.style.transform = "translateY(0)";
      });
    }, 50);

    // Cursor glow
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;
    const handle = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <>
      <div id="cursor-glow" />
      <section className="hero-section">
        <div className="page-wrap">
          <div ref={ref} className="hero-copy" style={{ opacity: 0 }}>

            <div className="hero-line" style={{ marginBottom: "32px" }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: c.mono,
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: c.textDim,
              }}>
                {/* <span style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: c.teal,
                  display: "inline-block",
                  boxShadow: `0 0 8px ${c.teal}`,
                }} /> */}
                Chennai, India
              </span>
            </div>

            <h1 className="hero-line" style={{
              fontSize: "clamp(3rem, 6.5vw, 5.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              marginBottom: "clamp(24px, 4vw, 32px)",
            }}>
              <span className="gradient-name">Krithika<br />Nithyanandam</span>
            </h1>

            <p className="hero-line" style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: c.textSub,
              maxWidth: "44ch",
              width: "min(100%, 44ch)",
              marginBottom: "clamp(32px, 7vw, 52px)",
            }}>
              Software engineer specialising in Generative AI
              systems and frontend platforms. Building things
              at Presidio. M.Tech AI &amp; ML at BITS Pilani.
            </p>

            <div className="hero-line hero-actions">
              <a
                href="#about"
                style={{
                  fontFamily: c.mono,
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: c.text,
                  padding: "10px 22px",
                  border: `1px solid ${c.border}`,
                  borderRadius: "6px",
                  background: "rgba(255,255,255,0.03)",
                  transition: "border-color 0.2s, background 0.2s, color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.45)";
                  e.currentTarget.style.background = "rgba(167,139,250,0.07)";
                  e.currentTarget.style.color = c.violet;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = c.border;
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.color = c.text;
                }}
              >
                explore ↓
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: c.mono,
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: c.textDim,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = c.textSub)}
                onMouseLeave={e => (e.currentTarget.style.color = c.textDim)}
              >
                résumé ↗
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
