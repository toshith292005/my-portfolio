"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-muted text-xs font-mono">
          &copy; {new Date().getFullYear()} VENKAT SAI TOSHITH ALETI. ALL SYSTEMS OPERATIONAL.
        </div>
        <div className="flex gap-8 text-[10px] font-mono text-muted uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terminals of Service</a>
          <a href="#" className="hover:text-primary transition-colors">API Status</a>
        </div>
      </div>
      
      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
    </footer>
  );
};

export default Footer;
