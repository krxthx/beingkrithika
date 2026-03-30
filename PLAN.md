# Portfolio Rebuild Plan — beingkrithika.com

## Who you are now (source of truth)
- **Engineer – Generative AI & Platform at Presidio** (Aug 2024–present)
  - Building agentic frameworks, LLM platforms, developer tooling
  - Specifai, HAI Framework, AI Studio, HAI Build
- **M.Tech AI & ML at BITS Pilani** (2025–present)
- Writes on Medium (Android Dev Notes pub) — LLM system design, VS Code internals, PTY architecture, dev tooling
- Runs lorewave.me — educational explainer blog
- Certifications: Terraform Associate, Azure AI-102, AZ-900, DP-900, GCP Cloud Digital Leader
- Presidio Spot Award, Creative Nomads winner (frontend dev competition)
- Skills: TypeScript, Python, Next.js, React, Electron, Kotlin, MCP, LangChain, LangFuse, AWS, Azure, Terraform

---

## What to build

**Single-page Next.js app** with four scroll sections + sticky nav:

| Section | Content |
|---|---|
| **Hero** | Name, current role, one-liner |
| **About** | Short bio (present tense). Resume PDF link. Links to Medium + lorewave.me |
| **Projects** | 5–6 project cards: name, what it does, tech tags, GitHub + live links |
| **Contact** | Email, GitHub, LinkedIn, Medium |

---

## Projects to feature

| Project | What it is | Type | Tech |
|---|---|---|---|
| **Revelio** | Interactive RAG visualizer — makes the embedding pipeline visible and explorable | Personal | Next.js, TypeScript, Three.js, Python, sentence-transformers |
| **Accio-AI** | Terminal-first AI news digest — 6-stage pipeline, LLM filtering + structured output | Personal | Python, LangGraph, AWS Bedrock, Playwright |
| **Specifai** | AI-powered requirement generation platform — consolidated LLM backend into Electron, multi-model orchestration | Work (Presidio) | TypeScript, Electron, OpenRouter, Ollama, LangFuse |
| **HAI Playground** | WebSocket-driven runtime + UI for real-time agent experimentation | Work (Presidio) | TypeScript, WebSocket |
| **lorewave.me** | Educational explainer blog — plain words, things explained right | Side project | — |

> Note: Sorting Visualizer, Sudoku, Licetronicles, Attribuer, Tempestas — skip. College era.

---

## Content details

**Email:** krithikanithyanandam7@gmail.com
**GitHub:** github.com/krxthx
**LinkedIn:** linkedin.com/in/krithikanithyanandam
**Medium:** medium.com/@krithikanithyanandam
**Resume:** PDF included — will go in `public/resume.pdf`

**Proposed tagline (open for your input):**
> "Building things that make AI legible."
or
> "Software engineer. I build AI systems and explain how they work."

---

## Tech stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS + CSS variables
- **Fonts:** Fraunces (serif display, headings) + JetBrains Mono (tags, nav) + Inter (body)
- **Animations:** Framer Motion — subtle scroll reveals, no performance theatre
- **Icons:** Lucide React

---

## Design direction: "quiet nerd with taste"

Not a loud dev portfolio. Not a generic dark theme with neon green. Something that feels like it was designed by someone who actually cares about design.

**Color palette (updated — blue/violet/pink/teal era):**
- Background: `#0a0a0f` (cool near-black, slight blue undertone)
- Surface: `#13131a` (cards, raised sections)
- Text primary: `#ededf0` (cool off-white)
- Text muted: `#6b6b7a`
- Accent violet: `#7c6af5`
- Accent teal: `#4fc4c4`
- Accent pink: `#d47fa6`
- Tag bg: `#1a1a2e` with violet text

**Typography:**
- Headings: Fraunces — serif, expressive, confident
- Nav / tags / labels: JetBrains Mono — small, tracked out, technical
- Body: Inter — clean, readable

**Layout quirks (personality, not gimmicks):**
- Hero: name in large serif with violet-to-teal gradient. Role in small mono below. Subtle animated gradient shimmer.
- Section labels: `— 01 ✦ about` style, mono, muted
- Project cards: border-only (`border: 1px solid rgba(124,106,245,0.2)`), tech tags as pill badges in teal/violet
- About: 2-column on desktop — bio left, quick facts + links right
- Hover: color shift + sliding underline, no box-shadow pop
- Footer: `made by krithika ✦ 2025`

**What makes it quirky:**
- Serif + mono font pairing (unusual for dev portfolios)
- `✦` symbols as section separators
- Numbered sections in mono
- Cards that feel like notebook entries, not SaaS product tiles
- Cool-toned dark bg (not the generic warm black)
- Iridescent gradient text on hero name

---

## File structure

```
app/
  layout.tsx            # fonts, metadata, global styles
  page.tsx              # section composition
  globals.css           # CSS variables, base resets

components/
  Nav.tsx               # sticky nav with section scroll links
  Hero.tsx              # name, role, tagline, gradient
  About.tsx             # bio, resume link, side links
  Projects.tsx          # project grid
  ProjectCard.tsx       # individual card
  Contact.tsx           # links section
  Footer.tsx

lib/
  projects.ts           # typed project data

public/
  resume.pdf            # Krithika N.pdf → renamed
```

---

## Steps to execute

1. [ ] Initialize Next.js 15 (TypeScript + Tailwind + App Router)
2. [ ] Copy resume PDF to `public/resume.pdf`
3. [ ] Install framer-motion, lucide-react
4. [ ] Set up fonts (Fraunces + JetBrains Mono + Inter via next/font/google)
5. [ ] Set up globals.css with CSS variables and base styles
6. [ ] Build layout.tsx with metadata
7. [ ] Build Nav component
8. [ ] Build Hero section
9. [ ] Build About section
10. [ ] Write project data in lib/projects.ts
11. [ ] Build ProjectCard + Projects section
12. [ ] Build Contact section + Footer
13. [ ] Polish: responsive, spacing, transitions
14. [ ] Restore CNAME

---

## Open questions (still need answers)

1. **lorewave.me** — project card, or just mentioned in About?
2. **Work projects (Specifai, HAI)** — ok to name them publicly on the portfolio?
3. **Tagline** — do you want to write one, or pick from my drafts above?
