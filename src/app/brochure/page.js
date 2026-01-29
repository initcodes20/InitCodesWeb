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
    <div className="min-h-screen mt-17 bg-[#e5e4e1] text-[#1a1a1a] selection:bg-[#FF4D00] selection:text-white p-4 md:p-12 relative overflow-hidden font-sans">
      {/* Background Infrastructure Scanlines */}
      {/* <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]"></div> */}
      <div className="line-bg opacity-10 fixed inset-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation & Documentation Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-black pb-8 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-12 bg-[#FF4D00]"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">Brochure_Registry_v2.1</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase italic retro-text text-black">
              Brochure<span className="text-[#FF4D00] animate-pulse">_</span>
            </h1>
          </div>
          
          <div className="flex bg-black p-1.5 rounded-xl shadow-xl">
            <button 
              onClick={() => setView("outside")}
              className={`px-10 py-3 text-[10px] font-bold tracking-[0.3em] uppercase transition-all rounded-lg ${view === 'outside' ? 'bg-[#FF4D00] text-white' : 'text-white/40 hover:text-white'}`}
            >
              Exterior_Node
            </button>
            <button 
              onClick={() => setView("inside")}
              className={`px-10 py-3 text-[10px] font-bold tracking-[0.3em] uppercase transition-all rounded-lg ${view === 'inside' ? 'bg-[#FF4D00] text-white' : 'text-white/40 hover:text-white'}`}
            >
              Logic_Node
            </button>
          </div>
        </header>

        {/* The Brochure Body */}
        <div className="relative bg-white border-2 border-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden min-h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="grid grid-cols-1 md:grid-cols-3 min-h-[700px]"
            >
              {view === "outside" ? (
                <>
                  {/* PANEL 01: CONTACT ARCHIVE */}
                  <div className="p-12 flex flex-col justify-between border-r-2 border-black/5 bg-white group">
                    <div className="space-y-12">
                      <div className="h-0.5 w-12 bg-[#FF4D00] group-hover:w-20 transition-all duration-500"></div>
                      <div className="space-y-6">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#757575]">Contact_Uplink</h3>
                        <div className="space-y-3">
                          <p className="text-sm font-bold tracking-tight uppercase">initcodes20@gmail.com</p>
                          <p className="text-sm font-bold tracking-tight uppercase underline decoration-2 decoration-[#FF4D00] underline-offset-4 cursor-pointer">www.initcodes.in</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-30 mb-2 italic">Registry_Origin</p>
                        <p className="text-4xl font-bold tracking-tighter uppercase retro-text">India</p>
                      </div>
                    </div>
                  </div>

                  {/* PANEL 02: CORE IDENTITY */}
                  <div className="p-12 flex flex-col items-center justify-center bg-[#fafafa] border-r-2 border-black/5 relative">
                    <Terminal size={56} className="text-[#FF4D00] mb-10 opacity-20" />
                    <div className="text-center">
                      <p className="text-3xl font-light tracking-[0.5em] opacity-20 mb-2">&lt; INIT &gt;</p>
                      <p className="text-4xl font-bold tracking-[0.4em] text-black">CODES</p>
                      <div className="mt-8 flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 italic">System_Operational</span>
                      </div>
                    </div>
                  </div>

                  {/* PANEL 03: COVER MANIFESTO */}
                  <div className="p-12 flex flex-col justify-center bg-white relative overflow-hidden">
                    <div className="space-y-12 relative z-10">
                      <h2 className="text-5xl lg:text-7xl font-medium tracking-tighter leading-[0.85] uppercase italic retro-text text-black">
                        Code<br /><span className="text-[#FF4D00]">That</span><br />Scales
                      </h2>
                      <div className="h-2 w-20 bg-[#FF4D00]"></div>
                      <p className="text-xs font-bold tracking-[0.2em] text-[#757575] uppercase leading-relaxed max-w-[240px]">
                        Engineering digital products for the next generation of scalable startups.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* INSIDE 01: MISSION NODE */}
                  <div className="p-12 flex flex-col justify-between border-r-2 border-black/5 bg-white">
                    <div className="space-y-12">
                      <div className="flex justify-between items-center text-[#FF4D00]">
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30 select-none">[01] MISSION_ARCH</span>
                        <Info size={20} />
                      </div>
                      <h2 className="text-4xl lg:text-4xl font-medium tracking-tighter uppercase leading-tight retro-text">
                        Engineering<br/>for High<br/>Performance<span className="text-[#FF4D00]">_</span>
                      </h2>
                      <p className="text-sm font-bold text-black/60 leading-relaxed border-l-4 border-[#FF4D00] pl-6 max-w-[280px]">
                        INITCODES specializes in building scalable, secure, and resilient digital infrastructure at the intersection of minimalist design and robust engineering.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 pt-10 border-t-2 border-black/5 text-[9px] font-bold uppercase tracking-[0.4em] opacity-40">
                      <div><p className="mb-1 text-[#FF4D00]">Location</p><p className="text-black">Mumbai_IN</p></div>
                      <div><p className="mb-1 text-[#FF4D00]">Registry</p><p className="text-black">v2.0_2026</p></div>
                    </div>
                  </div>

                  {/* INSIDE 02: CAPABILITIES NODE */}
                  <div className="p-12 flex flex-col bg-[#fcfcfc] border-r-2 border-black/5">
                    <div className="flex justify-between items-center text-[#FF4D00] mb-12">
                      <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30 select-none">[02] CAPABILITIES</span>
                      <Grid size={20} />
                    </div>
                    <ul className="space-y-6 flex-1">
                      {buildItems.map((item, i) => (
                        <li key={i} className="group cursor-crosshair">
                          <div className="flex items-center gap-3 mb-1">
                            <div className="w-1.5 h-1.5 bg-[#FF4D00]"></div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-black group-hover:translate-x-1 transition-transform">{item.title}</p>
                          </div>
                          <p className="text-[9px] opacity-40 uppercase font-bold tracking-tight ml-4 italic">{item.desc}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-10 border-t border-black/5">
                      <p className="text-[9px] font-bold mb-4 opacity-30 uppercase tracking-[0.4em] italic text-[#FF4D00]">Stack_Modules</p>
                      <div className="grid grid-cols-3 gap-2">
                        {stackItems.map(s => (
                          <div key={s} className="px-1 py-2 border border-black/5 bg-white text-[9px] font-bold uppercase text-center hover:bg-black hover:text-white transition-all cursor-none tracking-tighter">{s}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* INSIDE 03: PIPELINE NODE */}
                  <div className="p-12 flex flex-col bg-white">
                    <div className="flex justify-between items-center text-[#FF4D00] mb-16">
                      <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30 select-none">[03] PIPELINE_LOG</span>
                      <Network size={20} />
                    </div>
                    <div className="relative pl-10 border-l-2 border-black/5 space-y-12 flex-1">
                      {processSteps.map((step) => (
                        <div key={step.step} className="relative group">
                          <div className="absolute -left-[49px] top-1.5 w-4 h-4 bg-white border-2 border-black group-hover:bg-[#FF4D00] group-hover:scale-125 transition-all" />
                          <p className="text-[8px] font-bold text-[#FF4D00] tracking-[0.3em] uppercase mb-1">NODE_{step.step}</p>
                          <p className="text-2xl font-medium tracking-tighter uppercase italic retro-text text-black">{step.title}</p>
                          <p className="text-[10px] font-bold opacity-30 uppercase max-w-[160px] tracking-tight italic">{step.desc}</p>
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