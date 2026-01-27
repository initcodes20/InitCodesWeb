"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout failed");
    }
  };

  const navItems = ['Dashboard', 'Revenue', 'Blogs', 'Projects', 'Teams'];

  return (
    <>
      {/* Mobile Toggle Button (Visible only on small screens) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-6 left-6 z-[60] bg-black text-white p-2 rounded-lg active:scale-95 transition-transform shadow-xl"
      >
        <span className="material-symbols-outlined text-2xl">menu</span>
      </button>

      {/* Mobile Drawer Overlay */}
      <div className={`
        fixed inset-0 z-[70] md:hidden transition-all duration-500
        ${isOpen ? "visible opacity-100" : "invisible opacity-0"}
      `}>
        {/* Dark Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Drawer Content */}
        <aside className={`
          relative w-72 bg-black h-full p-8 flex flex-col transition-transform duration-500 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <div className="flex justify-between items-center mb-12">
            <div className="retro-text text-xl tracking-tighter text-white">{"< INIT >"}</div>
            <button onClick={() => setIsOpen(false)} className="text-white opacity-50 hover:opacity-100">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <nav className="space-y-8 flex-1">
            {navItems.map((item) => (
              <Link 
                key={item} 
                href={item === 'Dashboard' ? '/admin/dashboard' : `/admin/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-[11px] font-bold uppercase tracking-[0.3em] text-white opacity-60 hover:opacity-100 hover:text-[#FF4D00] transition-all"
              >
                {item}
              </Link>
            ))}
          </nav>

          <button 
            onClick={handleLogout} 
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 border border-red-500/20 p-3 text-center rounded-lg"
          >
            Terminate Session
          </button>
        </aside>
      </div>

      {/* Desktop Sidebar (Permanent) */}
      <aside className="w-64 bg-black text-white p-8 flex flex-col hidden md:flex h-screen sticky top-0 mt-20">
        <div className="retro-text text-xl mb-12 tracking-tighter">
          <Link href={"/"}>{"< INIT >"}</Link>
        </div>
        
        <nav className="space-y-6 flex-1">
          {navItems.map((item) => (
            <Link 
              key={item} 
              href={item === 'Dashboard' ? '/admin/dashboard' : `/admin/${item.toLowerCase()}`}
              className="block text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 hover:opacity-100 hover:text-[#FF4D00] transition-all"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button 
          onClick={handleLogout} 
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 hover:text-red-400 text-left transition-colors"
        >
          Terminate Session
        </button>
      </aside>
    </>
  );
}