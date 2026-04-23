"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Terminal as TerminalIcon, Sparkles } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "System initialized. Hello, I am Toshith's virtual assistant. Ask me about his projects, skills, or experience." }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Mock AI Response Logic
    setTimeout(() => {
      let response = "I'm not sure about that. Try asking about 'Mail Scraper', 'Skills', or 'Experience'.";
      const query = input.toLowerCase();

      if (query === "sudo beastmode") {
        response = "BEAST_MODE: ACTIVATED. System performance maximized. Neon overrides engaged.";
        // Pulse effect logic could be added here
        document.body.classList.add("neon-pulse");
        setTimeout(() => document.body.classList.remove("neon-pulse"), 5000);
      } else if (query.includes("skill") || query.includes("stack")) {
        response = "Toshith is proficient in Python, C++, JavaScript, and SQL. His backend stack includes Node.js, Express, and Redis, while his systems expertise covers Docker and Kubernetes.";
      } else if (query.includes("project") || query.includes("build")) {
        response = "He has built several high-end projects including 'Mail Scraper SaaS', 'FlowState Pro' (an enterprise task manager), and multiple microservices architectures.";
      } else if (query.includes("mail scraper")) {
        response = "The Mail Scraper SaaS is a production-grade tool for automated lead discovery with Gmail integration and AI-powered replies. It uses BullMQ and Redis for background processing.";
      } else if (query.includes("contact") || query.includes("email")) {
        response = "You can reach Toshith via the contact form on this page or directly at saitoshith.aleti@gmail.com.";
      } else if (query.includes("resume")) {
        response = "Toshith's resume is currently available upon request. Feel free to contact him directly at saitoshith.aleti@gmail.com.";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 md:w-96 glass rounded-2xl overflow-hidden shadow-2xl border-primary/20 flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                  <TerminalIcon size={14} className="text-primary" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest">TOSHITH_AI_v1.0</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-4 py-2 rounded-xl text-sm ${
                    msg.role === "user" 
                      ? "bg-primary text-background font-medium" 
                      : "bg-white/5 border border-white/10 text-muted"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a command..."
                  className="w-full bg-black/40 border border-white/10 rounded-lg pl-4 pr-10 py-2 text-xs font-mono focus:outline-none focus:border-primary/50"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-primary transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-2xl ${
          isOpen ? "bg-white/10 rotate-90" : "bg-primary text-background hover:neon-glow hover:scale-110"
        }`}
      >
        {isOpen ? <X size={24} /> : <Sparkles size={24} />}
      </button>
    </div>
  );
};

export default Chatbot;
