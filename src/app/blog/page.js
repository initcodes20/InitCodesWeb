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
    <div className="min-h-screen !bg-[#e5e4e1] pt-32 md:pt-48 pb-20 px-6 selection:bg-[#FF4D00] selection:text-white relative overflow-hidden">
      {/* Background Infrastructure Layer */}
      <div className="line-bg opacity-10 fixed inset-0 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <header className="mb-24 inline-block w-full">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-1 w-12 bg-[#FF4D00]"></div>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">System_Archive</span>
          </div>
          <h1 className="text-4xl md:text-6xl italic uppercase tracking-tighter retro-text text-black mb-8">
            Insights<span className="text-[#FF4D00]">_</span>
          </h1>
          <div className="h-px w-full bg-black/10 mb-8"></div>
          <p className="max-w-xl text-sm md:text-base font-bold uppercase tracking-widest leading-relaxed opacity-60">
            Technical logs and architectural reflections on the future of software engineering.
          </p>
        </header>

        {/* Blog Registry */}
        <div className="space-y-12">
          {loading ? (
             /* Technical Loading State */
             <div className="py-20 flex flex-col items-center">
               <div className="w-8 h-8 border-4 border-black/10 border-t-[#FF4D00] rounded-full animate-spin"></div>
               <p className="retro-text text-[10px] mt-6 tracking-[0.4em] opacity-40 uppercase">Accessing_Database...</p>
             </div>
          ) : (
            blogList.map((post) => (
              <article
                key={post._id}
                className="group relative border-2 border-black/5 hover:border-black/20 transition-all duration-500 p-8 md:p-12 bg-white/30 backdrop-blur-sm"
              >
                {/* Accent Corner logic used in InitCodes UI */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Metadata Column */}
                  <div className="md:col-span-3">
                    <div className="flex flex-col gap-4">
                      <span className="inline-block self-start px-3 py-1 bg-black text-white text-[12px] font-bold uppercase tracking-widest">
                        {post.category}
                      </span>
                      <div className="space-y-1">
                        <p className="text-[9px] font-bold uppercase opacity-30 tracking-[0.2em]">Read_Time</p>
                        <p className="text-xs font-bold uppercase">{post.readTime}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="md:col-span-9 relative">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h2 className="text-3xl md:text-5xl font-medium tracking-tight retro-text leading-none mb-6 group-hover:text-[#FF4D00] transition-colors">
                        {post.title}
                      </h2>
                      <p className="normal-text text-sm md:text-lg opacity-60 leading-relaxed mb-10 line-clamp-3">
                        {post.description.trim().slice(0, 200)}...
                      </p>

                      {/* Action Button */}
                      <div className="inline-flex items-center gap-4 py-2 group/btn">
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-black">
                          Enter_Log
                        </span>
                        <div className="h-[2px] w-12 bg-black group-hover/btn:w-20 group-hover/btn:bg-[#FF4D00] transition-all duration-500"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* System Footer */}
        <footer className="mt-40 py-12 border-t-2 border-black text-center">
           <div className="mb-4 inline-block px-4 py-1 border border-black/20 text-[9px] font-bold uppercase tracking-[0.3em]">
             InitCodes // Insight Registry v2.0.4
           </div>
           <p className="text-[8px] font-bold tracking-[0.5em] uppercase opacity-20 mt-4">
             Unauthorized Access to Registry is strictly prohibited.
           </p>
        </footer>
      </div>
    </div>
  );
}
