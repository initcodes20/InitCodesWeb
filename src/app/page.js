import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-[88vh] md:min-h-screen overflow-hidden flex flex-col items-center justify-center text-center  px-6 bg-primary">
      {/* Background Dot Grid */}
      <div className="line-bg"></div>

      <div className="relative z-10">
        <div className="mb-8 inline-block px-4 py-1 border border-black/20 text-[10px] uppercase tracking-[0.3em] font-bold">
          System Version 2.0.0
        </div>

        <h1 className="font-display text-5xl md:text-9xl mb-6 tracking-tighter retro-text">
          {"< INITCODES >"}
        </h1>

        <p className="text-md md:text-xl font-mono max-w-2xl mx-auto opacity-80 leading-relaxed mb-12 uppercase tracking-wide">
          Initiating Excellence through Code. We architect robust software
          solutions for the next generation of the web.
        </p>

        <div className="flex gap-6 justify-center">
          <Link
            href="/"
            className="group relative px-10 py-4 bg-black text-white font-bold uppercase tracking-widest text-sm overflow-hidden inline-block"
          >
            {/* The Text Layer (Must be relative and z-10 to stay on top of the fill) */}
            <span className="relative z-10">Explore Work</span>

            {/* The Fill Layer (Starts below the button, slides up on hover) */}
            <div className="absolute inset-0 bg-[#FF4D00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>
          <Link
            href="/"
            className="group relative px-10 py-4 border-2 border-black font-bold uppercase tracking-widest text-sm overflow-hidden inline-block transition-colors duration-300"
          >
            {/* The Text Layer */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Get In Touch
            </span>

            {/* The Fill Layer (Starts ABOVE the button, slides DOWN on hover) */}
            <div className="absolute inset-0 bg-black -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>
        </div>
      </div>
    </main>
  );
}
