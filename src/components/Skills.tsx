"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Skills = () => {
  const radarData = {
    labels: ["Frontend", "Backend", "Systems", "Cloud", "Security", "AI"],
    datasets: [
      {
        label: "Proficiency",
        data: [85, 95, 90, 80, 85, 75],
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        borderColor: "#10b981",
        borderWidth: 2,
        pointBackgroundColor: "#10b981",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#10b981",
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: { color: "rgba(255, 255, 255, 0.1)" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        pointLabels: { color: "#9ca3af", font: { size: 12 } },
        ticks: { display: false, stepSize: 20 },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Technical <span className="text-primary">Arsenal</span></h2>
          <p className="text-muted max-w-2xl mx-auto">
            Deep expertise in backend systems, scalable infrastructure, and modern full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 flex items-center justify-center aspect-square max-w-md mx-auto w-full"
          >
            <Radar data={radarData} options={radarOptions} />
          </motion.div>

          {/* Detailed Skills List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 glass rounded-2xl border-white/5 hover:border-primary/30 transition-all group"
              >
                <h3 className="text-xs font-mono text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm font-medium group-hover:bg-primary/5 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
