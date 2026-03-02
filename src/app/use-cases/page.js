"use client";

import {
  Globe,
  ShieldCheck,
  Building2,
  Bot,
  Cloud,
  Database,
  ShoppingCart,
  Shield,
  BarChart3,
  Briefcase,
  Terminal,
  Activity,
  Cpu,
} from "lucide-react";

import { motion } from "framer-motion";
import FAQPage from "../components/faq";

const items = [
  {
    icon: Globe,
    title: "Automated Logistics Routing",
    category: "Logistics",
    problem:
      "Manual route planning caused delays and inefficiencies across fleets.",
    solution:
      "Developed a real-time logistics engine using traffic data and driver behavior.",
    impact:
      "Reduced delivery time by 35% and improved on-time performance by 98%.",
  },
  {
    icon: ShieldCheck,
    title: "Telehealth Consultation System",
    category: "Healthcare",
    problem: "Rural patients had no access to consistent medical consultation.",
    solution:
      "Built a HIPAA-compliant telehealth app with video calls and prescription tracking.",
    impact: "Served 10,000+ rural users with virtual care monthly.",
  },
  {
    icon: Building2,
    title: "Custom ERP Suite for Manufacturers",
    category: "Manufacturing",
    problem:
      "Legacy tools created gaps between inventory and order management.",
    solution:
      "Created a full-stack ERP with modules for inventory, production, and HR.",
    impact: "Reduced inventory mismatch by 90%, automated 80% of reporting.",
  },
  {
    icon: Bot,
    title: "AI-Powered Support Chatbot",
    category: "SaaS / Retail",
    problem: "Customer support was overwhelmed with repetitive questions.",
    solution:
      "Deployed GPT-based chatbot trained on FAQs and live ticket data.",
    impact: "Automated 60% of queries and boosted CSAT by 25%.",
  },
  {
    icon: Cloud,
    title: "FinOps & Cloud Cost Dashboard",
    category: "Fintech / SaaS",
    problem: "Cloud infrastructure costs spiked with no visibility.",
    solution:
      "Built a dashboard to monitor cloud usage, idle resources, and savings reports.",
    impact: "Saved over $120,000/year via cost optimizations.",
  },
  {
    icon: Database,
    title: "Real-Time Risk Scoring Engine",
    category: "Finance",
    problem: "Risk assessments were slow and static for credit applications.",
    solution:
      "Developed an ML-based scoring engine using real-time financial data.",
    impact: "Cut approval time by 70% while increasing model accuracy by 40%.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Platform Modernization",
    category: "Retail / B2C",
    problem: "Legacy storefronts struggled with mobile performance and SEO.",
    solution:
      "Migrated to Next.js storefront with server-side rendering and mobile-first UX.",
    impact: "Improved conversions by 32% and reduced bounce rate by 28%.",
  },
  // {
  //   icon: Shield,
  //   title: "ISO 27001 Compliant Data Lake",
  //   category: "Enterprise SaaS",
  //   problem:
  //     "Disparate data silos led to fragmented analytics and non-compliance.",
  //   solution:
  //     "Built centralized data lake with RBAC, encryption, and audit trails.",
  //   impact:
  //     "Unified analytics across departments and passed ISO 27001 audit in 3 months.",
  // },
  {
    icon: BarChart3,
    title: "Smart Inventory Forecasting",
    category: "eCommerce / Retail",
    problem: "Frequent stockouts due to inaccurate demand forecasting.",
    solution:
      "Built a forecasting engine using historical data, trends, and ML models.",
    impact: "Decreased stockouts by 45% and improved inventory turnover.",
  },
  {
    icon: Briefcase,
    title: "Cross-System CRM Integration",
    category: "Consulting / Enterprise",
    problem:
      "Sales and support used isolated CRM systems causing misalignment.",
    solution:
      "Integrated Salesforce, HubSpot, and internal tools into a unified view.",
    impact:
      "Improved sales-support handoffs and increased deal closure rate by 18%.",
  },
];

export default function HowWeDeliver() {
  return (
    <section className="py-27 bg-[#e5e4e1] text-[#1a1a1a] relative overflow-hidden selection:bg-[#FF4D00] selection:text-white">

      {/* Background Effects */}
      <div className="line-bg opacity-10 fixed inset-0 pointer-events-none"></div>
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] 
        bg-[linear-gradient(to_right,#000_1px,transparent_1px),
        linear-gradient(to_bottom,#000_1px,transparent_1px)]
        bg-[size:40px_40px]"></div>

      {/* ===== CONSTRAINED CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <header className="mb-24 border-b border-black/20 pb-14 relative">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-14 bg-[#FF4D00]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.5em] text-[#FF4D00]">
              Registry::Value_Delivery_Logs
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase retro-text leading-[0.95] italic">
            How We Deliver Value
            <span className="text-[#FF4D00] animate-pulse">_</span>
          </h2>

          <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-xl font-mono text-[11px] font-bold uppercase tracking-widest opacity-40 leading-relaxed italic">
              // Executing precision software deployments at the intersection of
              minimalist design and high-performance infrastructure.
            </p>

            <div className="flex items-center gap-4">
              <div className="font-mono text-[9px] font-bold opacity-30 uppercase text-right leading-tight">
                <div>Coord: 19.0760° N, 72.8777° E</div>
                <div>Status: Operational</div>
              </div>
              <Cpu size={18} className="text-[#FF4D00] animate-spin-slow" />
            </div>
          </div>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.03 }}
  className="group p-8 bg-white border border-black/20 
  hover:border-[#FF4D00] transition-all duration-300 relative"
>
  {/* NODE ID */}
  <span className="absolute top-4 right-6 font-mono text-[8px] font-bold opacity-20 group-hover:text-[#FF4D00]">
    LOG_NODE_{String(index + 1).padStart(2, "0")}
  </span>

  {/* ICON */}
  <div
    className="mb-6 w-12 h-12 border border-black 
    flex items-center justify-center 
    group-hover:bg-black transition-all relative"
  >
    <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#FF4D00]"></div>
    <Icon size={18} className="group-hover:text-white transition-colors" />
  </div>

  {/* TITLE */}
  <div className="mb-6">
    <h3 className="text-lg font-bold uppercase tracking-tight retro-text group-hover:text-[#FF4D00] transition-colors leading-snug">
      {item.title}
    </h3>

    <p className="font-mono text-[8px] font-bold uppercase tracking-[0.25em] opacity-40 mt-2">
      CAT_LOG // {item.category}
    </p>
  </div>

  {/* PROBLEM */}
  <div className="border-l-2 border-black/10 pl-4 mb-6 group-hover:border-[#FF4D00] transition-all">
    <p className="font-mono text-[8px] font-bold uppercase opacity-30 mb-2">
      Problem_Spec:
    </p>
    <p className="text-[12px] font-medium leading-relaxed text-black/80">
      {item.problem}
    </p>
  </div>

  {/* SOLUTION + IMPACT */}
  <div className="pt-6 border-t border-dashed border-black/20">
    <div className="flex items-center gap-2 mb-3">
      <Terminal size={12} className="text-[#FF4D00]" />
      <span className="font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-[#FF4D00]">
        Engineering_Deployment:
      </span>
    </div>

    <p className="text-xs font-bold leading-relaxed uppercase tracking-tight mb-6 bg-[#f3f3f3] p-3 border-l-2 border-black">
      {item.solution}
    </p>

    <div className="border border-black/20 p-4 group-hover:border-[#FF4D00] transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <Activity size={12} className="text-[#FF4D00]" />
        <span className="font-mono text-[8px] font-bold uppercase tracking-widest">
          Impact_Metric
        </span>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[#FF4D00]">
        {item.impact}
      </p>
    </div>
  </div>
</motion.div>
            );
          })}
        </div>

      </div>
      {/* ===== END CONSTRAINED ===== */}

      {/* ===== FULL WIDTH FAQ ===== */}
      <div className="w-full mt-32 relative z-10">
        <FAQPage />
      </div>

      {/* ===== FOOTER (CONSTRAINED AGAIN) ===== */}
      <div className="max-w-7xl mx-auto px-6">
        <footer className="mt-5 pt-10 border-t border-black/20 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
          <div className="flex gap-8">
            <span>SYS_AUTH: AES-256</span>
            <span>KERNEL: INIT_V2.4</span>
            <span className="hidden md:inline">LOC: MUMBAI_IN</span>
          </div>
          <span>© 2026_INITCODES_REGISTRY</span>
        </footer>
      </div>

    </section>
  );
}