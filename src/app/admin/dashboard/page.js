"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function Dashboard() {

    const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });

      // Force reload so middleware re-runs
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout failed");
    }
  };
  // Mock stats - in a real app, these would be fetched from your API
  const stats = [
    { label: "Total Insights", value: "24", growth: "+2 this week" },
    { label: "System Uptime", value: "99.9%", growth: "Stable" },
    { label: "Active Sessions", value: "03", growth: "Admin Only" },
  ];

  return (
    <div className="min-h-screen !bg-[#e5e4e1] flex selection:bg-black selection:text-white mt-20 ">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-black text-white p-8 flex flex-col hidden md:flex">
        <div className="retro-text text-xl mb-12 tracking-tighter">
          {"< INIT >"}
        </div>
        
        <nav className="space-y-6 flex-1 ">
          {['Revenue', 'Manage Blogs', 'Project Editor', 'Team Trust'].map((item) => (
            <Link 
              key={item} 
              href={`/admin/${item.toLocaleLowerCase()}`}
              className="block text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 hover:opacity-100 hover:text-[#FF4D00] transition-all"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button onClick={handleLogout} className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 hover:text-red-400 text-left">
          Terminate Session
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 md:p-12 relative overflow-hidden">
        <div className="line-bg opacity-5"></div>

        {/* Top Header */}
        <header className="flex justify-between items-end border-b-2 border-black pb-6 mb-12 relative z-10">
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
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-bold">Recent Logs</h2>
            <button className="bg-black text-white px-4 py-2 text-[9px] font-bold uppercase tracking-widest hover:bg-[#FF4D00] transition-colors">
              + New Insight
            </button>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-black/5 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#f8f9fa] rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg opacity-40">description</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-bold">Moving from Monolith to Micro-frontends...</p>
                    <p className="text-[9px] uppercase tracking-tighter opacity-40 font-bold">Drafted 2 hours ago</p>
                  </div>
                </div>
                <span className="material-symbols-outlined opacity-20 cursor-pointer hover:opacity-100 transition-opacity">edit</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}