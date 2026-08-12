"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { FaDev, FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa6";
import { c } from "@/lib/layout";

const links = [
  { label: "GitHub", icon: FaGithub, value: "krxthx", href: "https://github.com/krxthx", accent: c.violet },
  { label: "LinkedIn", icon: FaLinkedinIn, value: "krithikanithyanandam", href: "https://www.linkedin.com/in/krithikanithyanandam", accent: c.teal },
  { label: "Medium", icon: FaMedium, value: "@krithikanithyanandam", href: "https://medium.com/@krithikanithyanandam", accent: c.violet },
  { label: "DEV", icon: FaDev, value: "@thatcaffeinateddev", href: "https://dev.to/thatcaffeinateddev", accent: c.pink },
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
    <section id="contact" ref={ref} className="section-block compact" style={{ borderTop: `1px solid ${c.border}` }}>
      <div className="page-wrap">
        <p className="section-label">03 / Contact</p>

        <div className="contact-grid">
          <div className="contact-copy">
            <h2 style={{ fontSize: "clamp(2.2rem, 10vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, color: c.text, marginBottom: "18px" }}>
              say hello.
            </h2>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.9, color: c.textSub }}>
              I&apos;m always interested in interesting problems.
              If you&apos;re working on something worth talking
              about, reach out.
            </p>
          </div>

          <div className="contact-list">
            {links.map(l => {
              const Icon = l.icon;

              return (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${l.label} profile`}
                  className="glass-card contact-link"
                >
                  <span className="contact-link-icon" style={{ color: c.textDim }}>
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="contact-link-value" style={{ fontSize: "0.85rem", color: c.textSub, transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = l.accent)}
                    onMouseLeave={e => (e.currentTarget.style.color = c.textSub)}
                  >
                    <span className="contact-link-text">{l.value}</span>
                    <ExternalLink size={14} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
