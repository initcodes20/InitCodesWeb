"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function BlogPage() {
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogList(data.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Registry Sync Failed.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#e5e4e1] pt-32 md:pt-48 pb-20 px-6 font-sans selection:bg-[#FF4D00] selection:text-white relative overflow-hidden">
      {/* Background Infrastructure Layer */}
      <div className="line-bg opacity-10 fixed inset-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Section Header */}
        <header className="mb-32">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-1 w-12 bg-[#FF4D00]"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">System_Archive</span>
          </div>
          <h1 className="text-5xl md:text-7xl italic uppercase tracking-tighter retro-text text-black mb-8">
            Insights<span className="text-[#FF4D00] animate-pulse">_</span>
          </h1>
          <p className="max-w-xl text-lg text-[#4a4a4a] leading-relaxed normal-text">
            Reflections on engineering excellence, scalable architectures, and 
            the future of software development at InitCodes.
          </p>
        </header>

        {/* Blog Post List */}
        <div className="space-y-32">
          {loading ? (
             /* THEME-SPECIFIC LOADER */
             <div className="py-24 flex flex-col items-start gap-6">
               <div className="flex items-end gap-1.5 h-8">
                 <div className="w-1 bg-[#FF4D00] animate-[loading-bar_1s_ease-in-out_infinite] h-full"></div>
                 <div className="w-1 bg-[#FF4D00] animate-[loading-bar_1s_ease-in-out_0.2s_infinite] h-3/4"></div>
                 <div className="w-1 bg-[#FF4D00] animate-[loading-bar_1s_ease-in-out_0.4s_infinite] h-1/2"></div>
                 <div className="w-1 bg-[#FF4D00] animate-[loading-bar_1s_ease-in-out_0.1s_infinite] h-full"></div>
               </div>
               <div className="space-y-2">
                 <p className="retro-text text-[10px] tracking-[0.5em] uppercase text-black animate-pulse">
                   Accessing_Registry...
                 </p>
                 <p className="text-[9px] font-bold uppercase tracking-widest opacity-20">
                   Synchronizing encrypted data packets
                 </p>
               </div>
               
               {/* Custom CSS for the bars if not using tailwind.config */}
               <style jsx>{`
                 @keyframes loading-bar {
                   0%, 100% { height: 10px; opacity: 0.3; }
                   50% { height: 32px; opacity: 1; }
                 }
               `}</style>
             </div>
          ) : (
            blogList.map((post) => (
              <article
                key={post._id}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 group"
              >
                {/* Left Side: Metadata Column */}
                <div className="md:col-span-3 pt-2">
                  <div className="text-[11px] font-bold tracking-[0.2em] text-[#7a7a7a] mb-4 uppercase">
                    {post.date || new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <span className="inline-block border border-black/10 rounded-full px-4 py-1 text-[10px] font-black tracking-widest text-[#4a4a4a] bg-black/5 uppercase">
                    {post.category}
                  </span>
                </div>

                {/* Right Side: Content Column */}
                <div className="md:col-span-9 max-w-3xl">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1a1f2e] leading-[1.1] mb-6 tracking-tight group-hover:text-[#FF4D00] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="normal-text text-lg text-[#4a4a4a] leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                      {post.description.slice(0,200) + '...'}
                    </p>

                    <div className="inline-flex items-center gap-3 bg-[#1a1f2e] text-white px-8 py-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black transition-all active:scale-95 shadow-lg shadow-black/5">
                      Read Post
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        north_east
                      </span>
                    </div>
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

        {/* System Footer */}
        <footer className="mt-40 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-[9px] font-bold uppercase tracking-[0.4em]">
          <p>InitCodes // Insight Registry v2.0.4</p>
          <p>© 2026 Architectural Archives</p>
        </footer>
      </div>
    </div>
  );
}