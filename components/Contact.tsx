"use client";

import { useEffect, useRef } from "react";
import { wrap, c } from "@/lib/layout";

const links = [
  { label: "email", value: "krithikanithyanandam7@gmail.com", href: "mailto:krithikanithyanandam7@gmail.com", accent: c.pink },
  { label: "github", value: "krxthx", href: "https://github.com/krxthx", accent: c.violet },
  { label: "linkedin", value: "krithikanithyanandam", href: "https://www.linkedin.com/in/krithikanithyanandam", accent: c.teal },
  { label: "medium", value: "@krithikanithyanandam", href: "https://medium.com/@krithikanithyanandam", accent: c.violet },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.classList.add("reveal");
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} style={{ padding: "80px 0 120px", borderTop: `1px solid ${c.border}`, position: "relative", zIndex: 2 }}>
      <div style={wrap}>
        <p className="section-label">03 / Contact</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: "2.8rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, color: c.text, marginBottom: "18px" }}>
              say hello.
            </h2>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.9, color: c.textSub }}>
              I&apos;m always interested in interesting problems.
              If you&apos;re working on something worth talking
              about, reach out.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass-card"
                style={{ display: "flex", alignItems: "center", gap: "18px", padding: "14px 18px", textDecoration: "none" }}
              >
                <span style={{ fontFamily: c.mono, fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: c.textDim, width: "52px", flexShrink: 0 }}>
                  {l.label}
                </span>
                <span style={{ fontSize: "0.85rem", color: c.textSub, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = l.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = c.textSub)}
                >
                  {l.value} ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
