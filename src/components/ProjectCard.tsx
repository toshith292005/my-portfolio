"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Database, Cpu, Layers } from "lucide-react";
import { GithubIcon as Github } from "./Icons";

interface ProjectProps {
  project: {
    id: string;
    title: string;
    tagline: string;
    description: string;
    features: string[];
    tech: string[];
    tag: string;
    github: string;
    demo: string;
    stats?: {
      stars: number;
      forks: number;
    };
    systemDesign?: {
      architecture: string;
      diagram: string;
    };
  };
  onViewSystem?: (id: string) => void;
}

const ProjectCard = ({ project, onViewSystem }: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass rounded-2xl p-6 flex flex-col h-full group relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary uppercase tracking-widest">
          {project.tag}
        </span>
        <div className="flex gap-3">
          {project.stats && (
            <div className="flex gap-3 text-[10px] font-mono text-muted mr-2">
              <span className="flex items-center gap-1">★ {project.stats.stars}</span>
              <span className="flex items-center gap-1">⑂ {project.stats.forks}</span>
            </div>
          )}
          <a href={project.github} className="text-muted hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href={project.demo} className="text-muted hover:text-primary transition-colors">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
      <p className="text-muted text-sm mb-4 flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-foreground/70 font-mono">
            {t}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-white/5 flex gap-2">
        <button
          onClick={() => onViewSystem?.(project.id)}
          className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold hover:bg-primary/10 hover:border-primary/50 transition-all flex items-center justify-center gap-2"
        >
          <Cpu size={14} />
          System Design View
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
