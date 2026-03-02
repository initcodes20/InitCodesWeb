"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="px-6 md:px-10 py-40 bg-[#e5e4e1] text-center relative overflow-hidden">
      {/* Background Grid Overlay */}
      <div className="line-bg opacity-10 fixed inset-0 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-7xl font-medium tracking-tighter uppercase retro-text text-black mb-4">
          Building Software
          <br />
          That Solves<span className="text-[#FF4D00]">_</span>
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-[#FF4D00] uppercase tracking-tighter mb-12">
          For People. For Scale.
        </h3>

        <p className="max-w-2xl mx-auto text-lg font-medium text-black/60 mb-16 leading-relaxed uppercase italic tracking-wider">
          From smart queue systems to CRMs and cloud-native hospital apps —
          <span className="text-black font-bold"> InitCodes</span> transforms
          your ideas into reliable, real-world tools that grow with your
          business.
        </p>

        <button className="bg-black text-white px-12 py-6 rounded-2xl text-xs font-bold uppercase tracking-[0.4em] hover:bg-[#FF4D00] transition-all duration-500 shadow-2xl active:scale-95 flex items-center gap-4 mx-auto group">
          Start Your Project
          <ArrowRight
            className="group-hover:translate-x-2 transition-transform"
            size={20}
          />
        </button>
      </motion.div>
    </section>
  );
}
