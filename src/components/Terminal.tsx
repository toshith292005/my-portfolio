"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const Terminal = () => {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Initial boot sequence simulation
  const [isBooting, setIsBooting] = useState(true);
  const [bootText, setBootText] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const sequence = [
      <p key="1">{">"} Loading scalable architectures... <span className="text-primary">OK</span></p>,
      <p key="2">{">"} Initializing microservices... <span className="text-primary">OK</span></p>,
      <p key="3">{">"} Establishing secure connections... <span className="text-primary">OK</span></p>,
      <p key="4" className="text-emerald-400 mt-2">SYSTEM READY. Type 'help' to begin.</p>,
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      setBootText((prev) => [...prev, sequence[currentStep]]);
      currentStep++;
      if (currentStep >= sequence.length) {
        clearInterval(interval);
        setIsBooting(false);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, bootText]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="text-zinc-300">
            Available commands:
            <br /> <span className="text-primary">ls</span>       - List available directories
            <br /> <span className="text-primary">whoami</span>   - Display current user info
            <br /> <span className="text-primary">status</span>   - Display system status
            <br /> <span className="text-primary">clear</span>    - Clear terminal output
          </div>
        );
        break;
      case "ls":
        output = <div className="text-zinc-300">projects/ skills/ experience/ contact/</div>;
        break;
      case "whoami":
        output = <div className="text-zinc-300">Venkat Sai Toshith Aleti - Systems Engineer & Full-Stack Developer</div>;
        break;
      case "status":
        output = (
          <div className="text-emerald-400">
            SYSTEM: ONLINE
            <br /> UPTIME: 99.9%
            <br /> NODES: 12_ACTIVE
            <br /> SECURITY: SECURE
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = <div className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</div>;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  return (
    <div 
      className="w-full h-full flex flex-col font-mono text-sm md:text-base cursor-text glass rounded-xl overflow-hidden shadow-2xl relative"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-4 text-[10px] font-mono text-muted uppercase tracking-widest flex items-center gap-2">
          <TerminalIcon size={12} /> toshith@systems: ~/portfolio
        </span>
      </div>
      <div className="flex-1 overflow-y-auto p-6 scrollbar-hide space-y-4 relative">
        {/* Boot Sequence */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-primary">$</span>
            <span className="text-foreground">./init_portfolio.sh</span>
          </div>
          <div className="space-y-2 text-muted-foreground pl-5 border-l border-primary/30">
            {bootText}
          </div>
        </div>

        {/* History */}
        {history.map((item, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-primary">$</span>
              <span className="text-foreground">{item.command}</span>
            </div>
            <div className="pl-5">{item.output}</div>
          </div>
        ))}

        {/* Active Input Line */}
        {!isBooting && (
          <form onSubmit={handleCommand} className="flex items-center gap-3 text-primary pt-2">
            <span>$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/50"
              placeholder="Type a command..."
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
