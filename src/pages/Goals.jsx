"use client"; // <-- only needed if you are using Next.js App Router

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Target, Sparkles } from "lucide-react";

export default function Goals() {
  const goals = [
    {
      category: "Professional Growth",
      gradient: "from-purple-500 to-pink-500",
      items: [
        { text: "Master advanced prototyping in Framer", completed: true },
        { text: "Lead a major product redesign project", completed: true },
        { text: "Speak at 2 design conferences", completed: false },
        { text: "Mentor 3 junior designers", completed: true },
        { text: "Build a comprehensive design system", completed: false },
      ],
    },
    {
      category: "Learning & Skills",
      gradient: "from-blue-500 to-cyan-500",
      items: [
        { text: "Learn React and modern web development", completed: true },
        { text: "Complete UX research certification", completed: false },
        { text: "Master 3D design in Spline", completed: false },
        { text: "Improve accessibility knowledge", completed: true },
        { text: "Study user psychology and behavior", completed: false },
      ],
    },
    {
      category: "Content & Community",
      gradient: "from-emerald-500 to-teal-500",
      items: [
        { text: "Write 12 design articles (1 per month)", completed: false },
        { text: "Grow Twitter following to 5K", completed: true },
        { text: "Create 20 design tutorials", completed: false },
        { text: "Collaborate with 5 other designers", completed: true },
        { text: "Launch a design newsletter", completed: false },
      ],
    },
    {
      category: "Side Projects",
      gradient: "from-orange-500 to-red-500",
      items: [
        { text: "Launch a SaaS product", completed: false },
        { text: "Create 50 Etsy design templates", completed: true },
        { text: "Build a design resource website", completed: false },
        { text: "Develop a UI kit for Figma", completed: true },
        { text: "Start a design podcast", completed: false },
      ],
    },
  ];

  const completedGoals = goals.reduce(
    (acc, cat) => acc + cat.items.filter((i) => i.completed).length,
    0
  );
  const totalGoals = goals.reduce((acc, cat) => acc + cat.items.length, 0);
  const progressPercentage = Math.round((completedGoals / totalGoals) * 100);

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 md:p-10">
      {/* ==== Header ==== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
          2024 Goals
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tracking progress with clarity, focus, and a little magic
        </p>
      </motion.div>

      {/* ==== Progress Ring ==== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-md mx-auto mb-16"
      >
        <div className="relative backdrop-blur-xl bg-white/60 border border-white/20 rounded-3xl p-8 shadow-xl">
          <div className="flex flex-col items-center">
            {/* SVG Ring */}
            <div className="relative w-48 h-48 mb-6">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                {/* Background circle */}
                <circle
                  cx="96"
                  cy="96"
                  r={radius}
                  stroke="rgba(229,231,235,0.6)"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Animated progress circle */}
                <motion.circle
                  cx="96"
                  cy="96"
                  r={radius}
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{ strokeDasharray: circumference }}
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  key={progressPercentage}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  {progressPercentage}%
                </motion.span>
                <span className="text-sm text-gray-500 mt-1">Complete</span>
              </div>
            </div>

            {/* Stats line */}
            <div className="flex items-center gap-2 text-gray-700">
              <Target className="w-5 h-5 text-purple-600" />
              <span className="font-medium">
                {completedGoals} / {totalGoals} goals achieved
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ==== Goals Grid ==== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {goals.map((category, idx) => {
          const catCompleted = category.items.filter((i) => i.completed).length;
          const catTotal = category.items.length;
          const catProgress = Math.round((catCompleted / catTotal) * 100);

          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group"
            >
              {/* Category badge */}
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-20 blur-xl transition-opacity group-hover:opacity-30`}
                />
                <div className="relative inline-flex items-center gap-3 px-5 py-2 rounded-full backdrop-blur-md bg-white/70 border border-white/30 shadow-lg">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient}`}
                  />
                  <h2 className="font-semibold text-gray-800">
                    {category.category}
                  </h2>
                  <span className="text-sm text-gray-500 ml-2">
                    ({catProgress}%)
                  </span>
                  <Sparkles className="w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Goal items */}
              <div className="space-y-3">
                <AnimatePresence>
                  {category.items.map((item, iIdx) => (
                    <motion.div
                      key={item.text}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.4, delay: iIdx * 0.05 }}
                      whileHover={{ x: 4 }}
                      className={`relative p-4 rounded-2xl backdrop-blur-md transition-all duration-300
                        ${
                          item.completed
                            ? "bg-white/50 border border-white/30 shadow-md"
                            : "bg-white/30 border border-white/20 shadow-sm"
                        } hover:shadow-lg hover:bg-white/70`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Check / Circle */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: item.completed ? 1 : 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        </motion.div>
                        <motion.div
                          initial={{ scale: 1 }}
                          animate={{ scale: item.completed ? 0 : 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        >
                          <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        </motion.div>

                        <span
                          className={`text-sm md:text-base font-medium transition-all ${
                            item.completed
                              ? "text-gray-500 line-through"
                              : "text-gray-800"
                          }`}
                        >
                          {item.text}
                        </span>
                      </div>

                      {/* Pulse for completed items */}
                      {item.completed && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl pointer-events-none"
                          initial={{ boxShadow: "0 0 0 0 rgba(34,197,94,0.4)" }}
                          animate={{
                            boxShadow: "0 0 0 12px rgba(34,197,94,0)",
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        />
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
