"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const BLOG_POSTS = [
  {
    title: "Scaling Microservices with Kubernetes",
    excerpt: "A deep dive into orchestration, service discovery, and auto-scaling in production environments.",
    date: "April 12, 2026",
    readTime: "8 min read",
    category: "System Design",
  },
  {
    title: "Building Real-time Systems with Socket.io",
    excerpt: "Best practices for low-latency communication and handling state in distributed chat applications.",
    date: "March 28, 2026",
    readTime: "6 min read",
    category: "Backend",
  },
  {
    title: "The Future of AI in SaaS Automation",
    excerpt: "How generative AI is transforming lead discovery and customer outreach workflows.",
    date: "March 15, 2026",
    readTime: "10 min read",
    category: "AI",
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-12 group">
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Terminal
        </Link>

        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold mb-6 tracking-tighter">Tech <span className="text-gradient">Insights</span></h1>
          <p className="text-muted text-lg">
            Documenting my journey through system design, distributed systems, and scalable product engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 group hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-[10px] font-mono text-primary uppercase tracking-widest">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-xs text-muted font-mono">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-muted mb-6 leading-relaxed">{post.excerpt}</p>
              
              <div className="flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all">
                Read Analysis <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
