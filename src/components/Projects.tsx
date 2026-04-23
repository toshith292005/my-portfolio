"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, Server, Network } from "lucide-react";

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = PROJECTS.find((p) => p.id === selectedProjectId);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-muted max-w-xl">
              Scalable SaaS products and systems-focused applications built with production-grade architectures.
            </p>
          </div>
          <div className="flex gap-4 text-sm font-mono">
            <span className="text-primary">TOTAL_BUILD: {PROJECTS.length}</span>
            <span className="text-muted">// STATUS: DEPLOYED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewSystem={(id) => setSelectedProjectId(id)}
            />
          ))}
        </div>
      </div>

      {/* System Design Modal */}
      <AnimatePresence>
        {selectedProjectId && selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectId(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl glass rounded-2xl overflow-hidden shadow-2xl border-primary/20"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                    <Cpu size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest">{selectedProject.title}</h4>
                    <p className="text-[10px] text-muted font-mono uppercase tracking-widest">System Architecture Deep Dive</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProjectId(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <div className="space-y-4">
                    <h5 className="text-xs font-mono text-primary uppercase tracking-widest flex items-center gap-2">
                      <Network size={14} /> // Visual Flow
                    </h5>
                    <div className="p-6 rounded-xl bg-black/40 border border-white/5 font-mono text-xs leading-relaxed text-muted min-h-[200px] flex items-center justify-center italic">
                      {/* Simple Diagram Representation */}
                      <div className="flex flex-col items-center gap-4">
                        <div className="px-4 py-2 border border-primary/50 bg-primary/10 rounded">Client Application</div>
                        <div className="w-px h-8 bg-primary/30" />
                        <div className="px-4 py-2 border border-secondary/50 bg-secondary/10 rounded">API Gateway / Load Balancer</div>
                        <div className="w-px h-8 bg-secondary/30" />
                        <div className="flex gap-4">
                          <div className="px-4 py-2 border border-accent/50 bg-accent/10 rounded">Service A</div>
                          <div className="px-4 py-2 border border-accent/50 bg-accent/10 rounded">Service B</div>
                        </div>
                        <div className="w-px h-8 bg-accent/30" />
                        <div className="px-4 py-2 border border-white/20 bg-white/5 rounded">Shared Database (Redis/PostgreSQL)</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <h6 className="font-bold mb-1 text-primary">Scalability</h6>
                      <p className="text-xs text-muted">Horizontal scaling with K8s pods and Redis caching layers.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <h6 className="font-bold mb-1 text-primary">Security</h6>
                      <p className="text-xs text-muted">JWT based auth with persistent session storage in Redis.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h5 className="text-xs font-mono text-primary uppercase tracking-widest flex items-center gap-2">
                      <Server size={14} /> // Infrastructure
                    </h5>
                    <div className="space-y-3">
                      {selectedProject.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-muted">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-xs font-mono text-primary uppercase tracking-widest">
                      // Tech Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <a
                      href={selectedProject.github}
                      className="w-full py-3 bg-primary text-background font-bold rounded-xl flex items-center justify-center gap-2 text-sm hover:neon-glow transition-all"
                    >
                      Explore Source
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
