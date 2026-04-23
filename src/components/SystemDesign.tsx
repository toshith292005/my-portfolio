"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, Database, Server, Lock } from "lucide-react";

const SystemDesign = () => {
  const concepts = [
    {
      title: "Microservices Architecture",
      icon: <Server className="text-primary" />,
      description: "Decoupled services communicating via gRPC or REST, containerized with Docker for seamless orchestration.",
      animation: "grid",
    },
    {
      title: "Secure Auth Flow",
      icon: <Lock className="text-secondary" />,
      description: "Implementing OAuth2.0, JWT, and MFA with persistent session management in high-speed Redis clusters.",
      animation: "flow",
    },
    {
      title: "Scalable Infrastructure",
      icon: <Globe className="text-accent" />,
      description: "Auto-scaling Kubernetes clusters with multi-region availability and intelligent load balancing.",
      animation: "scale",
    }
  ];

  return (
    <section id="systems" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Architecting for <span className="text-gradient">Scale</span></h2>
          <p className="text-muted text-lg">
            Beyond the UI, I focus on building robust backends and resilient systems that can handle enterprise-level traffic and data complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {concepts.map((concept, idx) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-white/5 flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                {concept.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{concept.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-8">{concept.description}</p>
              
              {/* Visual Decorative Element */}
              <div className="mt-auto w-full h-32 rounded-xl bg-black/40 border border-white/5 overflow-hidden relative">
                {concept.animation === "grid" && (
                  <div className="absolute inset-0 flex items-center justify-center gap-2">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        className="w-12 h-12 rounded bg-primary/20 border border-primary/40 flex items-center justify-center text-[8px] font-mono"
                      >
                        SVC_0{i}
                      </motion.div>
                    ))}
                  </div>
                )}
                {concept.animation === "flow" && (
                  <div className="absolute inset-0 flex items-center justify-center px-8">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-[8px]">USER</div>
                      <motion.div
                        animate={{ x: [0, 100, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#06b6d4]"
                      />
                      <div className="w-12 h-12 rounded bg-secondary/20 border border-secondary/40 flex items-center justify-center text-[8px]">AUTH</div>
                    </div>
                  </div>
                )}
                {concept.animation === "scale" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 border-2 border-dashed border-accent/30 rounded-full flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40"
                      />
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Health Ticker */}
        <div className="mt-12 glass py-4 px-8 rounded-2xl flex items-center justify-between overflow-hidden">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
            <span className="text-[10px] font-mono text-primary flex items-center gap-2">
              <Zap size={12} /> LATEST_DEPLOY: SUCCESSFUL [VERSION 2.4.0]
            </span>
            <span className="text-[10px] font-mono text-muted flex items-center gap-2">
              <Shield size={12} /> SECURITY_SCAN: PASSED
            </span>
            <span className="text-[10px] font-mono text-muted flex items-center gap-2">
              <Database size={12} /> CLUSTER_LATENCY: 14MS
            </span>
            <span className="text-[10px] font-mono text-muted flex items-center gap-2">
              <Server size={12} /> UPTIME: 99.99%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;
