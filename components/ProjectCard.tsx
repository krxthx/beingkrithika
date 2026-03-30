"use client";

import { useState } from "react";
import { c } from "@/lib/layout";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="glass-card project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-card-header">
        <span style={{ fontFamily: c.mono, fontSize: "10px", letterSpacing: "0.08em", color: c.textDim }}>
          0{index + 1}
        </span>
        <div className="project-links">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: c.mono, fontSize: "10px", letterSpacing: "0.08em", color: hovered ? c.violet : c.textDim, textDecoration: "none", transition: "color 0.2s" }}>
              github ↗
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: c.mono, fontSize: "10px", letterSpacing: "0.08em", color: hovered ? c.teal : c.textDim, textDecoration: "none", transition: "color 0.2s" }}>
              visit ↗
            </a>
          )}
        </div>
      </div>

      <div>
        <h3 style={{
          fontSize: "1.2rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: hovered ? c.violet : c.text,
          transition: "color 0.2s",
          marginBottom: "5px",
        }}>
          {project.name}
        </h3>
        <p style={{ fontFamily: c.mono, fontSize: "10px", letterSpacing: "0.06em", color: c.textDim }}>
          {project.tagline}
        </p>
      </div>

      <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: c.textSub, flexGrow: 1 }}>
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tags.map(tag => (
          <span key={tag} className="tag-chip">{tag}</span>
        ))}
      </div>
    </article>
  );
}
