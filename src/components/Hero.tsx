"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, FileText } from "lucide-react";
import { GithubIcon as Github } from "./Icons";
import { Terminal } from "./Terminal";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 md:pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          SYSTEM_STATUS: STABLE // READY_FOR_DEPLOYMENT
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          Venkat Sai Toshith <br />
          <span className="text-gradient">Aleti</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium"
        >
          Full-Stack Developer | Systems Engineer | Cloud Enthusiast <br />
          <span className="text-foreground/80">
            I build scalable systems, SaaS products, and real-world solutions.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-background font-bold rounded-lg flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_20px_#06b6d440]"
            >
              View Projects
              <ChevronRight size={20} />
            </a>
            <a
              href="https://github.com/toshith292005"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 glass rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95 font-medium"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Interactive Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-4xl px-6 mt-20 relative z-20 h-[350px]"
      >
        <Terminal />
      </motion.div>
    </section>
  );
};

export default Hero;
