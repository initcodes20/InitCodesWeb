"use client";
import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout failed");
    }
  };

  return (
    <aside className="w-64 bg-black text-white p-8 flex flex-col hidden md:flex h-screen sticky top-0 mt-20">
      <div className="retro-text text-xl mb-12 tracking-tighter">
        {"< INIT >"}
      </div>
      
      <nav className="space-y-6 flex-1">
        {['Revenue', 'Blogs', 'Projects', 'Teams'].map((item) => (
          <Link 
            key={item} 
            href={`/admin/${item.toLowerCase()}`}
            className="block text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 hover:opacity-100 hover:text-[#FF4D00] transition-all"
          >
            {item}
          </Link>
        ))}
      </nav>

      <button 
        onClick={handleLogout} 
        className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 hover:text-red-400 text-left"
      >
        Terminate Session
      </button>
    </aside>
  );
}