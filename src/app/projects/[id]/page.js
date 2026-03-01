import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Project from "@/models/Project";
import { connectDB } from "@/lib/mongodb";

export default async function SingleProjectPage(props) {
  const params = await props.params;
  const id = params.id;

  if (!id) return notFound();

  await connectDB();

  const project = await Project.findById(id).lean();

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#eeeeec] pt-40 pb-20 px-6 relative">
      <div className="line-bg opacity-10 fixed inset-0 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/projects"
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 hover:opacity-100 mb-12 transition-all"
        >
          <ArrowLeft size={14} /> Back to Registry
        </Link>

        <header className="border-b-2 border-black pb-12 mb-12">
          <span className="bg-black text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">
            {project.category || "Deployment"}
          </span>

          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter retro-text leading-tight text-black mt-6">
            {project.title}
            <span className="text-[#FF4D00]">.</span>
          </h1>
        </header>

        <div className="aspect-video overflow-hidden border-2 border-black mb-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)]">
          <img
            src={project.imageUrl}
            className="w-full h-full object-cover"
            alt={project.title}
          />
        </div>

        <h3 className="text-xs font-black uppercase tracking-[0.4em] opacity-30 mb-6">
          Project_Brief
        </h3>

        <p className="text-lg leading-relaxed text-black/80 whitespace-pre-line">
          {project.description}
        </p>
      </div>
    </main>
  );
}