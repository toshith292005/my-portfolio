"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Users, Globe, Zap, ArrowLeft, BarChart3, TrendingUp } from "lucide-react";
import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsPage = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Visitors",
        data: [420, 580, 490, 710, 630, 890, 950],
        backgroundColor: "rgba(16, 185, 129, 0.5)",
        borderColor: "#10b981",
        borderWidth: 1,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { grid: { color: "rgba(255, 255, 255, 0.05)" }, ticks: { color: "#6b7280" } },
      x: { grid: { display: false }, ticks: { color: "#6b7280" } },
    },
  };

  const stats = [
    { label: "Total Views", value: "14.2k", icon: <Users size={20} />, trend: "+12%" },
    { label: "Avg. Session", value: "4m 12s", icon: <Activity size={20} />, trend: "+5%" },
    { label: "Geos", value: "48", icon: <Globe size={20} />, trend: "Global" },
    { label: "System Uptime", value: "99.99%", icon: <Zap size={20} />, trend: "Stable" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-12">
          <ArrowLeft size={18} /> Back to Public View
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
              <BarChart3 className="text-primary" /> System <span className="text-gradient">Analytics</span>
            </h1>
            <p className="text-muted">Real-time performance and visitor insights for portfolio systems.</p>
          </div>
          <div className="px-4 py-2 rounded-lg glass border-primary/20 text-xs font-mono text-primary flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            LIVE_DATA_STREAM_ACTIVE
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl border-white/5"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded">
                  {stat.trend}
                </span>
              </div>
              <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass p-8 rounded-3xl border-white/5">
            <div className="flex items-center justify-between mb-8">
              <h4 className="font-bold flex items-center gap-2">
                <TrendingUp size={18} className="text-primary" /> Traffic Overview
              </h4>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-64">
              <Bar data={data} options={options} />
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border-white/5">
            <h4 className="font-bold mb-6">Recent System Logs</h4>
            <div className="space-y-4 font-mono text-[10px]">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-muted">
                <span className="text-primary">[2026-04-23 18:44]</span> DEPLOYMENT_SUCCESS: PROD_v2.4.1
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-muted">
                <span className="text-primary">[2026-04-23 16:12]</span> CACHE_PURGE: REDIS_NODE_01
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-muted">
                <span className="text-primary">[2026-04-23 12:05]</span> SECURITY_SCAN: 0_VULNERABILITIES
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-muted">
                <span className="text-primary">[2026-04-23 09:30]</span> API_LATENCY: 12ms (STABLE)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
