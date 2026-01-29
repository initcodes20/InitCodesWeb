"use client";

import React, { useState } from "react";
import {
  Download,
  Terminal,
  Archive,
  Info,
  Grid,
  Layers,
  Network,
  Database,
} from "lucide-react";


const BrochurePage = () => {
  const [view, setView] = useState("outside");

  return (
    <div className="min-h-screen bg-[#e5e4e1] text-[#1a1a1a] font-sans selection:bg-[#FF4D00] selection:text-white relative overflow-hidden mt-10">
      {/* Background Infrastructure Layer - CRT Scanlines */}
      <div className="line-bg opacity-10 fixed inset-0 pointer-events-none"></div>
      

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative z-10">
        
        {/* Heading Section */}
        <div className="mb-16 border-b border-black/10 pb-8">
          <div className="flex items-center gap-3 mb-4">
             <div className="h-0.5 w-12 bg-[#FF4D00]"></div>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Documentation_Registry</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase retro-text text-black">
            {view === "outside" ? "Outside_Panels" : "Inside_Panels"}<span className="text-[#FF4D00] animate-pulse">_</span>
          </h1>
          <p className="text-[#757575] font-bold uppercase tracking-[0.2em] text-[10px] mt-4">
            Tri-fold Brochure Spec • 2026 Edition // Node_Archive
          </p>
        </div>

        {/* Brochure Rendering */}
        <div className="relative bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-2 border-black overflow-hidden transition-all duration-500 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 min-h-[650px] relative">

            {/* Architectural Fold Lines */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-black/5 z-10" />
            <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-black/5 z-10" />

            {view === "outside" ? (
              <>
                {/* Back Panel (Contact) */}
                <div className="p-12 flex flex-col justify-between border-b md:border-b-0 group bg-white">
                  <div className="space-y-12">
                    <div className="h-0.5 w-12 bg-[#FF4D00] group-hover:w-20 transition-all duration-500" />
                    <div className="space-y-6">
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#757575]">Contact_Uplink</h3>
                      <div className="space-y-2">
                        <p className="text-sm font-bold tracking-tight">initcodes20@gmail.com</p>
                        <p className="text-sm font-bold tracking-tight">www.initcodes.in</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#757575] mb-2">Location</h3>
                      <p className="text-2xl font-bold uppercase tracking-tighter">INDIA</p>
                    </div>
                    <div className="pt-8 border-t border-black/5 text-[9px] font-bold tracking-[0.3em] opacity-40 uppercase">
                      Code that scales<br/>with your product.
                    </div>
                  </div>
                </div>

                {/* Middle Panel (Secondary Identity) */}
                <div className="p-12 flex flex-col items-center justify-center bg-[#fafafa] border-b md:border-b-0 border-x border-black/5 relative">
                  <Terminal size={48} className="text-[#FF4D00] opacity-20 mb-8" />
                  <div className="text-center space-y-2">
                    <p className="text-3xl font-light tracking-[0.4em]">&lt; INIT &gt;</p>
                    <p className="text-3xl font-bold tracking-[0.4em]">CODES</p>
                    <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#757575] pt-6 opacity-40">Est. 2025</p>
                  </div>
                </div>

                {/* Front Panel (Cover) */}
                <div className="p-12 flex flex-col justify-center bg-white relative overflow-hidden">
                  <div className="space-y-12">
                    <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter retro-text leading-[0.85] text-black">
                      &lt; INIT &gt;<br />CODES
                    </h1>
                    <div className="h-1.5 w-20 bg-[#FF4D00]" />
                    <div className="space-y-6">
                      <p className="text-xs font-bold tracking-[0.2em] text-[#757575] leading-relaxed uppercase">
                        Engineering<br/>Digital Products
                      </p>
                      <p className="text-[11px] font-medium text-black/50 max-w-[220px] leading-relaxed">
                        Precision-crafted software solutions for high-growth enterprises and startups.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Inside 1: About */}
                <div className="p-12 flex flex-col justify-between bg-white">
                  <div className="space-y-12">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">[01] ABOUT</span>
                      <Info size={18} className="text-[#FF4D00]" />
                    </div>
                    <h2 className="text-4xl font-medium tracking-tighter uppercase retro-text leading-tight">
                      Engineering<br/>for High<br/>Performance.
                    </h2>
                    <p className="text-sm font-medium opacity-60 leading-relaxed max-w-[280px]">
                      INITCODES is a technical software studio focused on building scalable, secure, and resilient digital infrastructure.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-8 border-t border-dashed border-black/10 text-[10px] font-bold tracking-widest opacity-40 uppercase">
                    <div><p className="mb-1">Location</p><p className="text-black">Mumbai_In</p></div>
                    <div><p className="mb-1">Established</p><p className="text-black">2025_26</p></div>
                  </div>
                </div>

                {/* Inside 2: Build & Stack */}
                <div className="p-12 bg-[#fcfcfc] border-x border-black/5 flex flex-col">
                  <div className="flex justify-between mb-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">[02] BUILD</span>
                    <GridView size={18} className="text-[#FF4D00]" />
                  </div>
                  <ul className="space-y-4 mb-12">
                    {['Web Applications', 'Mobile Ecosystems', 'Admin Systems', 'AI Automations'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#FF4D00]" />
                        <span className="text-xs font-bold uppercase tracking-widest">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="flex justify-between mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">[03] STACK</span>
                      <Layers size={18} className="text-[#FF4D00]" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                       {['Next.js', 'Node.js', 'MongoDB', 'Python'].map(s => (
                         <div key={s} className="px-3 py-2 border border-black/5 bg-white text-[9px] font-bold uppercase tracking-widest text-center">{s}</div>
                       ))}
                    </div>
                  </div>
                </div>

                {/* Inside 3: Process Logic */}
                <div className="p-12 flex flex-col bg-white">
                  <div className="flex justify-between mb-12">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">[04] PROCESS</span>
                    <Network size={18} className="text-[#FF4D00]" />
                  </div>
                  <div className="relative pl-6 border-l-2 border-black/5 flex-1 space-y-8">
                    {['Analyze', 'Design', 'Develop', 'Deploy'].map((step, i) => (
                      <div key={step} className="relative">
                        <div className="absolute -left-[33px] top-1 w-2 h-2 bg-black" />
                        <p className="text-[8px] font-bold opacity-30 mb-1 tracking-widest uppercase">Step_0{i+1}</p>
                        <p className="text-lg font-medium tracking-tighter uppercase retro-text">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BrochurePage;

