import { ArrowLeft, Globe, Terminal, Box } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProject(id) {
  // Use a fallback for the site URL to prevent build-time crashes
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/admin/projects/${id}`, { cache: "no-store" });

  if (!res.ok) return null;
  return res.json();
}

export default async function SingleProjectPage(props) {
  const params = await props.params;
  const id = params.id;

  if (!id) return notFound();

  const projectData = await getProject(id);
  const project = projectData?.data;

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#e5e4e1] pt-25 md:pt-30 pb-20 px-6 relative selection:bg-[#FF4D00] selection:text-white">
      {/* Background Infrastructure Layer */}
      <div className="line-bg opacity-10 fixed inset-0 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 hover:opacity-100 mb-12 transition-all group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          Back_to_Registry
        </Link>

        {/* Header Grid */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b-2 border-black pb-12 mb-16 relative">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-black text-white text-[9px] font-bold px-3 py-1 uppercase tracking-[0.2em]">
                {project.category || "Deployment_Node"}
              </span>
              <div className="h-[1px] w-8 bg-[#FF4D00]"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                Verified_Production
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter retro-text leading-[0.9] text-black">
              {project.title}
              <span className="text-[#FF4D00] animate-pulse">_</span>
            </h1>
          </div>

          <div className="md:col-span-4 flex md:justify-end items-end">
            <div className="text-left md:text-right">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-30 mb-1">Status</p>
              <div className="flex items-center md:justify-end gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-bold uppercase tracking-tighter">Operational</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Main Visuals & Description */}
          <div className="lg:col-span-8 space-y-12">
            <div className="relative group">
              {/* Decorative Corner Pixel */}
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#FF4D00] z-20"></div>
              
              <div className="aspect-video overflow-hidden border-2 border-black bg-black shadow-[20px_20px_0px_-10px_rgba(0,0,0,0.05)]">
                <img
                  src={project.imageUrl}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  alt={project.title}
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FF4D00]">
                Project_Brief
              </h3>
              <p className="text-xl leading-relaxed text-black/80 font-medium whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </div>

          {/* Sidebar Info */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Tech Stack Module */}
            <div className="p-8 bg-white border-2 border-black rounded-3xl shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">Tech_Stack</h3>
                <Terminal size={16} className="text-[#FF4D00]" />
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 border border-black/10 bg-[#f8f8f8] text-[9px] font-bold uppercase tracking-widest hover:border-[#FF4D00] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Launch Action */}
            <div className="space-y-4">
               <p className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-30 px-2">Access_Point</p>
               <a
                href={project.redirectLink || project.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full bg-black text-white p-6 rounded-2xl hover:bg-[#FF4D00] transition-all duration-500 shadow-2xl active:scale-95"
              >
                <span className="text-xs font-bold uppercase tracking-[0.3em]">Live_Uplink</span>
                <Globe size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Meta Registry */}
            <div className="pt-8 border-t border-black/5">
               <div className="space-y-2">
                  <p className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-20">Registry_ID: {id.slice(-8).toUpperCase()}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-20 text-black">Architect: {project.author || "InitCodes_Core"}</p>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}