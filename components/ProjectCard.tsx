"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { c } from "@/lib/layout";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="glass-card project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-card-header">
        <div className="project-card-body">
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
        <div className="project-links">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link"
              aria-label={`View ${project.name} on GitHub`} title="View on GitHub"
              style={{ color: hovered ? c.violet : c.textDim }}>
              <FaGithub size={16} aria-hidden="true" />
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link"
              aria-label={`Visit ${project.name}`} title="Visit project"
              style={{ color: hovered ? c.teal : c.textDim }}>
              <ExternalLink size={16} strokeWidth={1.7} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <p className="project-description" style={{ fontSize: "0.875rem", lineHeight: 1.8, color: c.textSub }}>
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
