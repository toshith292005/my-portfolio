"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE, CERTIFICATIONS } from "@/lib/constants";
import { Briefcase, Award, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Briefcase className="text-primary" /> Professional Experience
            </h2>
            <div className="space-y-8">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-white/10 group"
                >
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-primary border-2 border-background group-hover:scale-150 transition-transform" />
                  <div className="mb-1 text-xs font-mono text-primary flex items-center gap-2">
                    <Calendar size={12} /> CURRENT / PREVIOUS
                  </div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-muted font-medium mb-3">{exp.company}</p>
                  <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Award className="text-secondary" /> Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 glass rounded-2xl border-white/5 hover:border-secondary/30 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Award size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold leading-tight mb-1">{cert.name}</h4>
                    <p className="text-[10px] font-mono text-muted uppercase tracking-widest">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
