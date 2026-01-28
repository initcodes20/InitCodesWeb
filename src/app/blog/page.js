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
    <div className="min-h-screen bg-[#e5e4e1] pt-32 md:pt-48 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section Header matching your screenshot */}
        <header className="mb-32">
          {/* <h1 className="text-5xl font-semibold italic retro-text tracking-tighter text-[#1a1f2e] mb-8">
            Insights<span className="text-[#a1a1a1] !text-orange-500">.</span>
          </h1> */}
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
             <div className="py-20 flex flex-col items-start opacity-20">
               <p className="text-xs font-bold uppercase tracking-widest animate-pulse">Synchronizing Registry...</p>
             </div>
          ) : (
            blogList.map((post) => (
              <article
                key={post._id}
                className="grid grid-cols-1 md:grid-cols-12 gap-8"
              >
                {/* Left Side: Metadata Column */}
                <div className="md:col-span-3 pt-2">
                  <div className="text-[11px] font-bold tracking-[0.2em] text-[#7a7a7a] mb-4 uppercase">
                    {/* Assuming post.date exists, otherwise use createdAt */}
                    {post.date || new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <span className="inline-block border border-black/10 rounded-full px-4 py-1 text-[11px] font-bold tracking-widest text-[#4a4a4a] bg-black/5 uppercase">
                    {post.category}
                  </span>
                </div>

                {/* Right Side: Content Column */}
                <div className="md:col-span-9 max-w-3xl">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1a1f2e] leading-[1.1] mb-6 tracking-tight group-hover:text-black transition-colors">
                      {post.title}
                    </h2>
                    <p className="normal-text text-lg text-[#4a4a4a] leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                      {post.description.slice(0,200)+' ......'}
                    </p>

                    {/* Button matching the screenshot */}
                    <div className="inline-flex items-center gap-3 bg-[#1a1f2e] text-white px-8 py-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black transition-all">
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
      </div>
    </div>
  );
}