"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// We add the { limit } prop here
export default function FeaturedProjects({ limit }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/admin/projects");
      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      // 1. Filter for only featured projects
      let featured = data.data.filter((p) => p.isFeatured);

      // 2. If a limit is provided (like on the Home page), slice the array
      if (limit) {
        featured = featured.slice(0, limit);
      }

      setProjects(featured);
    } catch (error) {
      toast.error("Failed to load featured projects");
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
          {/* Header Skeleton */}
          <div className="border-b-2 border-black pb-6 mb-12 flex flex-col gap-4">
            <div className="h-10 w-64 bg-black/10 animate-pulse"></div>
            <div className="h-3 w-48 bg-black/5 animate-pulse"></div>
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-2 border-black/5 p-3 bg-white/30 relative overflow-hidden">
                {/* Image Placeholder */}
                <div className="aspect-[16/9] bg-black/5 mb-6 relative">
                  {/* Technical Scanning Bar Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF4D00]/10 to-transparent h-1/2 w-full animate-scan"></div>
                </div>
                
                {/* Content Placeholders */}
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
    <section className="py-24 px-6 !bg-[#eeeeec] relative overflow-hidden border-2 border-black/5">
      {/* Background Dot Grid Effect */}
      <div className="line-bg opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-black">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-black pb-6 mb-12">
          <div>
            <h2 className="retro-text text-4xl md:text-5xl uppercase tracking-tighter">
              Featured Projects
            </h2>
            <p className="normal-text opacity-60 uppercase tracking-[0.2em] text-xs mt-2 font-bold">
              {limit ? "A selection of our latest deployments" : "All active system registry deployments"}
            </p>
          </div>

          {/* Only show the "View All" link if we are in limited/home mode */}
          {limit && (
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 group font-bold uppercase text-[11px] tracking-[0.2em]"
            >
              View All Projects
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_right_alt
              </span>
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={project.redirectLink || "/"}
              target="_blank"
              className="group cursor-pointer border-2 border-black/5 p-3 hover:border-neutral-500/30 transition-all bg-white/50 backdrop-blur-sm"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] mb-6 overflow-hidden border border-black/10 bg-black">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-tighter bg-black/5 px-2 py-0.5 border border-black/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Title */}
              <h3 className="retro-text text-xl md:text-2xl mb-3 tracking-tighter">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="normal-text text-sm opacity-70 leading-relaxed mb-6 font-medium line-clamp-3">
                {project.description}
              </p>

              {/* Call to Action */}
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-[#FF4D00] transition-colors">
                Show More
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}