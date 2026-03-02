"use client";

import { motion } from "framer-motion";
import {
  LayoutGrid,
  Cloud,
  Zap,
} from "lucide-react";

const problemNodes = [
  {
    icon: <LayoutGrid size={18} />,
    title: "Manual Operations",
    problem:
      "Businesses still rely on spreadsheets and manual tracking.",
    solution:
      "We build centralized systems that automate workflows and track operations in real time.",
  },
  {
    icon: <Zap size={18} />,
    title: "Disconnected Tools",
    problem:
      "Internal tools often don’t integrate well or require too much manual effort.",
    solution:
      "We create API-connected platforms that reduce redundancy and improve usability.",
  },
  {
    icon: <Cloud size={18} />,
    title: "Scaling Challenges",
    problem:
      "Growing systems struggle with performance, search, and deployment complexity.",
    solution:
      "We implement scalable architecture, structured search, and CI/CD-ready environments.",
  },
];

export function ProblemSection() {
  return (
    <section className="px-6 md:px-10 py-24 bg-[#e5e4e1] relative overflow-hidden">
      <div className="line-bg opacity-10 fixed inset-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-black">

        {/* HEADER */}
        <header className="mb-16 border-b border-black/20 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[#FF4D00]"></div>
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-40">
              System_Pain_Points
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-medium uppercase retro-text tracking-tight">
            Problems We Solve
            <span className="text-[#FF4D00] animate-pulse">_</span>
          </h2>

          <p className="text-xs font-medium opacity-50 mt-4 max-w-xl">
            We simplify complex systems and remove operational friction.
          </p>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemNodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 bg-white border border-black/20 
              hover:border-[#FF4D00] transition-all duration-300"
            >
              {/* ICON */}
              <div className="w-10 h-10 border border-black flex items-center justify-center mb-6 
                group-hover:bg-black group-hover:text-white transition-colors">
                {node.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold uppercase tracking-tight mb-3 group-hover:text-[#FF4D00] transition-colors">
                {node.title}
              </h3>

              {/* PROBLEM */}
              <p className="text-sm text-black/60 leading-relaxed mb-6">
                {node.problem}
              </p>

              {/* SOLUTION */}
              <div className="pt-4 border-t border-dashed border-black/10">
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#FF4D00] mb-2">
                  Solution
                </p>
                <p className="text-sm font-medium leading-relaxed">
                  {node.solution}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}