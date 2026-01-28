import FeaturedProjects from "@/app/components/FeaturedProjects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-primary md:px-10 px-5 py-30">
      {/* Background Dot Grid */}
      <div className="line-bg"></div>
      {/* <h1 className="retro-text text-6xl mb-12">All Projects</h1> */}
      <FeaturedProjects />
    </main>
  );
}
