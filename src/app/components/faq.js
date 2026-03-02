"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Can you build solutions for startups too?",
    answer:
      "Yes. We architect scalable MVPs and growth-ready systems tailored for startup velocity."
  },
  {
    question: "How does InitCodes handle data privacy?",
    answer:
      "We implement encryption at rest, secure authentication, RBAC, audit logging, and compliance-aligned infrastructure."
  },
  {
    question: "Do you support post-launch maintenance?",
    answer:
      "Yes. We provide monitoring, performance optimization, upgrades, and long-term infrastructure support."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <section className="py-20 bg-white text-[#1a1a1a] relative w-full">
  <div className="line-bg opacity-10 fixed inset-0 pointer-events-none"></div>

  <div className="w-full px-12 lg:px-20">

    {/* HEADER */}
    <div className="mb-20 border-b border-black/20 pb-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-[2px] w-14 bg-[#FF4D00]" />
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.5em] text-[#FF4D00]">
          Registry::Knowledge_Base
        </span>
      </div>

      <h2 className="text-5xl md:text-6xl font-medium uppercase retro-text tracking-tight italic">
        Frequently Asked Questions
        <span className="text-[#FF4D00] animate-pulse">_</span>
      </h2>
    </div>

    {/* FAQ LIST */}
    <div className="border-t border-black/20">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-black/20">

          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center py-10 text-left group"
          >
            <span className="font-mono text-[14px] font-bold uppercase tracking-wide">
              {faq.question}
            </span>

            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180 text-[#FF4D00]" : ""
              }`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-6 border-l-2 border-[#FF4D00]">
              <p className="font-mono text-[13px] leading-relaxed opacity-70 max-w-4xl">
                {faq.answer}
              </p>
            </div>
          </motion.div>

        </div>
      ))}
    </div>
  </div>
</section>
  );
}