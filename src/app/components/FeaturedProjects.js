import Link from "next/link";

const projects = [
  {
    title: "Neural Nexus",
    description:
      "A high-performance analytics engine for decentralized financial networks.",
    tags: ["React", "Node.js", "AWS"],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Aegis Guard",
    description:
      "Real-time threat detection system using advanced machine learning models.",
    tags: ["Python", "Tensorflow"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Flux Core",
    description:
      "Microservices orchestration platform designed for extreme scalability.",
    tags: ["Vue.js", "GraphQL", "Go"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-6 !bg-[#eeeeec] relative overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto relative z-10 text-black">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-black pb-6 mb-12">
          <div>
            <h2 className="retro-text text-4xl md:text-5xl uppercase tracking-tighter">
              Featured Projects
            </h2>
            <p className="normal-text opacity-60 uppercase tracking-[0.2em] text-xs mt-2 font-bold">
              A selection of our latest deployments
            </p>
          </div>

          {/* #TODO; */}
          <Link
            href="/"
            className="hidden md:flex items-center gap-2 group font-bold uppercase text-[11px] tracking-[0.2em]"
          >
            View All Projects
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
              arrow_right_alt
            </span>
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container with Grayscale Effect */}
              <div className="relative aspect-[16/9] mb-6 overflow-hidden border border-black/10 bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Tech Tags */}
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-bold tracking-tighter bg-black/10 px-3 py-1 border border-black/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title and Description */}
              <h3 className="retro-text text-2xl mb-3 tracking-tighter">
                {project.title}
              </h3>
              <p className="normal-text text-sm opacity-70 leading-relaxed mb-6 font-medium">
                {project.description}
              </p>

              {/* Footer Link */}
              <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.3em] group-hover:text-[#FF4D00] transition-colors">
                Show More
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
