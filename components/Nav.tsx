"use client";

import { useEffect, useState } from "react";
import { wrap, c } from "@/lib/layout";

const sections = ["about", "projects", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); return; }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(7,6,15,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(24px)" : "none",
      borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.07)" : "transparent"}`,
      transition: "background 0.3s, border-color 0.3s",
    }}>
      <nav className="site-nav" style={wrap}>
        <a
          href="#"
          className="nav-brand"
          style={{ fontFamily: c.mono, fontSize: "clamp(9px, 2.4vw, 10px)", letterSpacing: "0.18em", color: c.textSub, textDecoration: "none", transition: "color 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.color = c.text)}
          onMouseLeave={e => (e.currentTarget.style.color = c.textSub)}
        >
          krxthx
        </a>
        <div className="nav-links">
          {sections.map((id, i) => (
            <a key={id} href={`#${id}`}
              className="nav-link"
              style={{
                fontFamily: c.mono,
                fontSize: "clamp(8px, 2.3vw, 10px)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: active === id ? c.violet : c.textDim,
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={e => { if (active !== id) e.currentTarget.style.color = c.textSub; }}
              onMouseLeave={e => { if (active !== id) e.currentTarget.style.color = c.textDim; }}
            >
              <span className="nav-link-index" style={{ opacity: 0.45, marginRight: "4px", fontSize: "clamp(7px, 2vw, 9px)" }}>0{i + 1}</span>
              {id}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
