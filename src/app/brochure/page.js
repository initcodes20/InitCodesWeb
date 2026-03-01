"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Info,
  Grid, 
  Network,
} from "lucide-react";

const BrochurePage = () => {
  const [view, setView] = useState("outside");

  const buildItems = [
    { title: "Web Applications", desc: "Complex SaaS & Client Logic" },
    { title: "Mobile Ecosystems", desc: "Native & Hybrid Architectures" },
    { title: "Admin Systems", desc: "Custom Internal Management Tools" },
    { title: "AI / ML Automations", desc: "Workflow Intelligence Systems" },
  ];

  const stackItems = ["Next.js", "Node.js", "MongoDB", "Python", "Tailwind", "CI/CD"];

  const processSteps = [
    { step: "01", title: "ANALYZE", desc: "Requirement Mapping." },
    { step: "02", title: "DESIGN", desc: "Architectural Blueprint." },
    { step: "03", title: "DEVELOP", desc: "Sprint Engineering." },
    { step: "04", title: "DEPLOY", desc: "Production Rollout." },
  ];

  return (
    <div className="min-h-screen mt-10 md:mt-17 bg-[#e5e4e1] text-[#1a1a1a] selection:bg-[#FF4D00] selection:text-white p-4 md:p-12 relative overflow-hidden font-sans">
      <div className="line-bg opacity-10 fixed inset-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 border-b-2 border-black pb-8 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-12 bg-[#FF4D00]"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">Brochure_Registry_v2.1</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase italic retro-text text-black">
              Brochure<span className="text-[#FF4D00] animate-pulse">_</span>
            </h1>
          </div>
          
          {/* Toggle Switch */}
          <div className="flex bg-black p-1 rounded-xl shadow-xl w-full md:w-auto">
            <button 
              onClick={() => setView("outside")}
              className={`flex-1 md:flex-none px-6 md:px-10 py-3 text-[10px] font-bold tracking-[0.3em] uppercase transition-all rounded-lg ${view === 'outside' ? 'bg-[#FF4D00] text-white' : 'text-white/40 hover:text-white'}`}
            >
              Exterior
            </button>
            <button 
              onClick={() => setView("inside")}
              className={`flex-1 md:flex-none px-6 md:px-10 py-3 text-[10px] font-bold tracking-[0.3em] uppercase transition-all rounded-lg ${view === 'inside' ? 'bg-[#FF4D00] text-white' : 'text-white/40 hover:text-white'}`}
            >
              Logic
            </button>
          </div>
        </header>

        {/* Brochure Body */}
        <div className="relative bg-white border-2 border-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="flex flex-col md:grid md:grid-cols-3 min-h-fit md:min-h-[700px]"
            >
              {view === "outside" ? (
                <>
                  {/* EXTERIOR PANELS (Condensed for mobile) */}
                  <div className="p-8 md:p-12 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-black/5 bg-white group">
                    <div className="space-y-8 md:space-y-12">
                      <div className="h-0.5 w-12 bg-[#FF4D00] md:group-hover:w-20 transition-all duration-500"></div>
                      <div className="space-y-4">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#757575]">Contact_Uplink</h3>
                        <p className="text-sm font-bold tracking-tight uppercase break-all">initcodes20@gmail.com</p>
                      </div>
                    </div>
                    <div className="mt-12 md:mt-0">
                      <p className="text-4xl font-bold tracking-tighter uppercase retro-text">India</p>
                    </div>
                  </div>

                  <div className="p-12 flex flex-col items-center justify-center bg-[#fafafa] border-b-2 md:border-b-0 md:border-r-2 border-black/5">
                    <Terminal size={48} className="text-[#FF4D00] mb-6 opacity-20" />
                    <p className="text-4xl font-bold tracking-[0.4em] text-black">CODES</p>
                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                    <h2 className="text-5xl lg:text-7xl font-medium tracking-tighter leading-[0.85] uppercase italic retro-text text-black">
                      Code<br /><span className="text-[#FF4D00]">That</span><br />Scales
                    </h2>
                  </div>
                </>
              ) : (
                <>
                  {/* INSIDE 01: MISSION NODE */}
                  <div className="p-8 md:p-12 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-black/5 bg-white">
                    <div className="space-y-8 md:space-y-12">
                      <div className="flex justify-between items-center text-[#FF4D00]">
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">[01] MISSION</span>
                        <Info size={20} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-medium tracking-tighter uppercase leading-tight retro-text">
                        Engineering<br className="hidden md:block"/> for High Performance<span className="text-[#FF4D00]">_</span>
                      </h2>
                      <p className="text-sm font-bold text-black/60 leading-relaxed border-l-4 border-[#FF4D00] pl-6">
                        INITCODES specializes in building resilient digital infrastructure at the intersection of minimalist design and robust engineering.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-10 mt-8 md:mt-0 border-t-2 border-black/5 text-[9px] font-bold uppercase tracking-[0.4em] opacity-40">
                      <div><p className="mb-1 text-[#FF4D00]">Location</p><p className="text-black">Mumbai_IN</p></div>
                      <div><p className="mb-1 text-[#FF4D00]">Registry</p><p className="text-black">v2.0_2026</p></div>
                    </div>
                  </div>

                  {/* INSIDE 02: CAPABILITIES NODE */}
                  <div className="p-8 md:p-12 flex flex-col bg-[#fcfcfc] border-b-2 md:border-b-0 md:border-r-2 border-black/5">
                    <div className="flex justify-between items-center text-[#FF4D00] mb-8 md:mb-12">
                      <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">[02] CAPABILITIES</span>
                      <Grid size={20} />
                    </div>
                    <ul className="space-y-6 flex-1">
                      {buildItems.map((item, i) => (
                        <li key={i} className="group">
                          <div className="flex items-center gap-3 mb-1">
                            <div className="w-1.5 h-1.5 bg-[#FF4D00]"></div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-black">{item.title}</p>
                          </div>
                          <p className="text-[9px] opacity-40 uppercase font-bold tracking-tight ml-4 italic">{item.desc}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-10 border-t border-black/5 mt-8 md:mt-0">
                      <p className="text-[9px] font-bold mb-4 opacity-30 uppercase tracking-[0.4em] italic text-[#FF4D00]">Stack_Modules</p>
                      <div className="grid grid-cols-3 gap-2">
                        {stackItems.map(s => (
                          <div key={s} className="px-1 py-2 border border-black/5 bg-white text-[9px] font-bold uppercase text-center hover:bg-black hover:text-white transition-all tracking-tighter">{s}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* INSIDE 03: PIPELINE NODE */}
                  <div className="p-8 md:p-12 flex flex-col bg-white">
                    <div className="flex justify-between items-center text-[#FF4D00] mb-12 md:mb-16">
                      <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">[03] PIPELINE</span>
                      <Network size={20} />
                    </div>
                    <div className="relative pl-8 md:pl-10 border-l-2 border-black/5 space-y-10 md:space-y-12 flex-1">
                      {processSteps.map((step) => (
                        <div key={step.step} className="relative group">
                          {/* Adjusted circle position for mobile */}
                          <div className="absolute -left-[35px] md:-left-[49px] top-1.5 w-4 h-4 bg-white border-2 border-black rounded-full" />
                          <p className="text-[8px] font-bold text-[#FF4D00] tracking-[0.3em] uppercase mb-1">NODE_{step.step}</p>
                          <p className="text-xl md:text-2xl font-medium tracking-tighter uppercase italic retro-text text-black">{step.title}</p>
                          <p className="text-[10px] font-bold opacity-30 uppercase tracking-tight italic">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BrochurePage;