import Link from "next/link";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import TeamSection from "@/app/components/ourTeam";
import { projects } from "@/app/data/project";

export default function Home() {
  return (
    <>
      <main className=" selection:bg-[#000000e0] relative min-h-[88vh] md:min-h-screen overflow-hidden flex flex-col items-center justify-center text-center  px-6 bg-primary">
        {/* Background Dot Grid */}
        <div className="line-bg"></div>

        <div className="relative z-10">
          <div className="mb-8 inline-block px-4 py-1 border border-black/20 text-[10px] uppercase tracking-[0.3em] font-bold">
            System Version 2.0.0
          </div>

          <h1 className="font-display text-4xl md:text-9xl mb-6 tracking-tighter retro-text">
            {"< INITCODES >"}
          </h1>

          <p className="text-md md:text-xl font-mono max-w-2xl mx-auto opacity-80 leading-relaxed mb-12 uppercase tracking-wide">
            Initiating Excellence through Code. We architect robust software
            solutions for the next generation of the web.
          </p>

          <div className="flex gap-6 justify-center">
            <Link
              href="/projects"
              className="group relative px-10 py-4 bg-black text-white font-bold uppercase tracking-widest text-sm overflow-hidden inline-block"
            >
              <span className="relative z-10">Explore Work</span>

              <div
                className="
      absolute inset-0 bg-[#FF4D00]
      translate-y-full
      group-hover:translate-y-0
      group-active:translate-y-0
      group-focus-visible:translate-y-0
      transition-transform duration-300 ease-out
    "
              />
            </Link>

            <Link
              href="/"
              className="group relative px-10 py-4 border-2 border-black font-bold uppercase tracking-widest text-sm overflow-hidden inline-block"
            >
              <span
                className="
      relative z-10
      group-hover:text-white
      group-active:text-white
      group-focus-visible:text-white
      transition-colors duration-300
    "
              >
                Get In Touch
              </span>

              <div
                className="
      absolute inset-0 bg-black
      -translate-y-full
      group-hover:translate-y-0
      group-active:translate-y-0
      group-focus-visible:translate-y-0
      transition-transform duration-300 ease-out
    "
              />
            </Link>
          </div>
        </div>
      </main>
      {/* FEATURED PROJECTS SECTION */}
      <div>
        <FeaturedProjects projects={projects.slice(0, 3)} />
      </div>
      {/* OUR TEAM */}
      <div>
        <TeamSection />
      </div>
    </>
  );
}
