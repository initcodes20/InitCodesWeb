"use client";

import { motion } from "framer-motion";
import { Terminal, Box } from "lucide-react";

export function CapabilitiesSection() {
  const capabilities = [
    "Business systems like CRMs and attendance trackers",
    "Online stores with admin panels and payments",
    "Backend systems with search and API capabilities",
    "Mobile-friendly interfaces that work smoothly",
    "Data dashboards to visualize important information",
  ];

  return (
    <section className="px-6 md:px-10 py-32 bg-[#eeeeec] relative overflow-hidden">
      <div className="line-bg opacity-10 fixed inset-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Visual Node */}
        <div className="relative group order-2 md:order-1">
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#FF4D00] z-20"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#f8f8f8] border-2 border-black p-16 rounded-[3rem] text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Terminal size={120} />
            </div>
            <Box size={48} className="mx-auto mb-6 text-[#FF4D00]" />
            <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4">
              Business_Tools
            </h4>
            <p className="text-xs font-bold text-black/40 uppercase tracking-widest leading-relaxed">
              We build management systems for businesses — from CRMs to
              attendance trackers.
            </p>
          </motion.div>
        </div>

        {/* Content Node */}
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter uppercase retro-text mb-8">
            Stuff we build
            <br />
            that actually works<span className="text-[#FF4D00]">.</span>
          </h2>
          <p className="text-lg font-medium text-black/70 mb-10 leading-relaxed max-w-lg">
            We're a team of friends who build practical solutions - no
            over-engineering, just things that work well and are easy to use.
          </p>

          <ul className="space-y-5">
            {capabilities.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-2 h-2 bg-[#FF4D00] group-hover:scale-150 transition-transform"></div>
                <span className="text-sm font-bold uppercase tracking-widest text-black/80">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
