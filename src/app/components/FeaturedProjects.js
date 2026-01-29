"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function FeaturedProjects({ limit }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/admin/projects");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      let featured = data.data.filter((p) => p.isFeatured);
      if (limit) {
        featured = featured.slice(0, limit);
      }
      setProjects(featured);
    } catch (error) {
      toast.error("Failed to sync project registry");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6 !bg-[#eeeeec] relative overflow-hidden border-2 border-black/5">
        <div className="line-bg opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="border-b-2 border-black pb-6 mb-12 flex flex-col gap-4">
            <div className="h-10 w-64 bg-black/10 animate-pulse"></div>
            <div className="h-3 w-48 bg-black/5 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-2 border-black/5 p-3 bg-white/30 relative overflow-hidden">
                <div className="aspect-[16/9] bg-black/5 mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF4D00]/10 to-transparent h-1/2 w-full animate-scan"></div>
                </div>
                <div className="flex gap-2 mb-4">
                  <div className="h-4 w-12 bg-black/5"></div>
                  <div className="h-4 w-12 bg-black/5"></div>
                </div>
                <div className="h-6 w-3/4 bg-black/10 mb-3"></div>
                <div className="h-12 w-full bg-black/5"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex flex-col items-center">
             <p className="retro-text text-[10px] tracking-[0.4em] opacity-40 animate-pulse uppercase">
               Synchronizing_Registry_Nodes...
             </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
          }
          .animate-scan {
            animation: scan 2s linear infinite;
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 !bg-[#eeeeec] relative overflow-hidden border-2 border-black/5 selection:bg-[#FF4D00] selection:text-white">
      <div className="line-bg opacity-10 fixed inset-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-black">
        <header className="flex flex-col md:flex-row justify-between items-end border-b-2 border-black pb-6 mb-12">
          <div>
            <h2 className="retro-text text-4xl md:text-5xl uppercase tracking-tighter">
              Featured Projects<span className="text-[#FF4D00]">_</span>
            </h2>
            <p className="normal-text opacity-60 uppercase tracking-[0.2em] text-[10px] mt-2 font-bold italic">
              {limit ? "// Latest system deployments" : "// Active node registry"}
            </p>
          </div>

          {limit && (
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 group font-bold uppercase text-[10px] tracking-[0.3em] hover:text-[#FF4D00] transition-colors"
            >
              View Full Registry
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_right_alt
              </span>
            </Link>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={project.redirectLink || "/"}
              target="_blank"
              className="group cursor-pointer border-2 border-black/5 p-4 hover:border-[#FF4D00]/30 transition-all duration-500 bg-white/40 backdrop-blur-sm relative"
            >
              <div className="absolute top-0 right-0 w-2 h-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative aspect-[16/9] mb-6 overflow-hidden border border-black/10 bg-[#0d0d0d]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100 opacity-70 group-hover:opacity-100"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold uppercase tracking-widest bg-black text-white px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="retro-text text-xl md:text-2xl mb-3 tracking-tighter group-hover:text-[#FF4D00] transition-colors">
                {project.title}
              </h3>

              <p className="normal-text text-xs opacity-60 leading-relaxed mb-8 font-medium line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-black">
                <span className="h-px w-8 bg-black group-hover:w-12 group-hover:bg-[#FF4D00] transition-all duration-500"></span>
                Uplink
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}