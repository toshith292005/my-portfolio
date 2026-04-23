"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center font-mono"
        >
          <div className="w-full max-w-md px-6">
            <div className="mb-8 text-primary text-sm flex justify-between uppercase tracking-widest">
              <span>Initializing System</span>
              <span>{progress}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-primary"
              />
            </div>

            <div className="space-y-2 opacity-50">
              <p className="text-[10px]">{"[ OK ]"} Core modules loaded</p>
              <p className="text-[10px]">{"[ OK ]"} Neural networks established</p>
              <p className="text-[10px]">{"[ OK ]"} Security protocols active</p>
              <p className="text-[10px] text-primary">{"[ .. ]"} Deploying portfolio terminal...</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
