"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border-white/5">
          {/* Info Side */}
          <div className="md:w-2/5 bg-primary/10 p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's build <br />something <span className="text-primary">great</span>.</h2>
              <p className="text-muted text-sm leading-relaxed mb-8">
                Available for high-impact roles, startup collaborations, and system design consultations.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:saitoshith.aleti@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="text-sm font-medium">saitoshith.aleti@gmail.com</span>
                </a>
                <a href="https://linkedin.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                    <Linkedin size={20} />
                  </div>
                  <span className="text-sm font-medium">LinkedIn Profile</span>
                </a>
                <a href="https://github.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                    <Github size={20} />
                  </div>
                  <span className="text-sm font-medium">GitHub Projects</span>
                </a>
              </div>
            </div>

            <div className="mt-12 text-[10px] font-mono text-muted uppercase tracking-[0.2em]">
              EST_LOC: HYDERABAD, INDIA
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-3/5 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-muted uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-muted uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-muted uppercase tracking-widest">Subject</label>
                <input
                  type="text"
                  placeholder="Inquiry about System Design"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-muted uppercase tracking-widest">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-background font-bold rounded-xl flex items-center justify-center gap-2 hover:neon-glow transition-all active:scale-[0.98]"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
