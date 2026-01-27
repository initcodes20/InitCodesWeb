"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import Sidebar from '@/app/components/Sidebar';

export default function Dashboard() {

    const router = useRouter();

  // Mock stats - in a real app, these would be fetched from your API
  const stats = [
    { label: "Total Insights", value: "24", growth: "+2 this week" },
    { label: "System Uptime", value: "99.9%", growth: "Stable" },
    { label: "Active Sessions", value: "03", growth: "Admin Only" },
  ];

  return (
    <div className="min-h-screen !bg-[#e5e4e1] flex selection:bg-black selection:text-white">
      <>
      <Sidebar/>
      </>
      {/* Main Content Area */}
      <main className="flex-1 p-8 md:p-12 relative overflow-hidden">
        <div className="line-bg opacity-5"></div>

        {/* Top Header */}
        <header className="flex justify-between items-end border-b-2 border-black pb-6 mb-12 relative z-10 mt-15">
          <div>
            <h1 className="retro-text text-3xl uppercase tracking-tighter text-bold">
              Admin Dashboard
            </h1>
            <p className="normal-text text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mt-1">
              Auth: System Architect / Harshit Dubey
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></div>
            <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">System Online</span>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white border border-black/5 p-6 rounded-2xl shadow-sm">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a1a1a1] mb-2">{stat.label}</p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-bold">{stat.value}</span>
                <span className="text-[9px] font-bold text-[#4ADE80] uppercase">{stat.growth}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Table / Recent Activity */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-white relative z-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-bold">Revenue Dashboard</h2>
            <button className="bg-black text-white px-4 py-2 text-[9px] font-bold uppercase tracking-widest hover:bg-[#FF4D00] transition-colors">
              Current Year Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
