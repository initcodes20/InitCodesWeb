import Link from "next/link";
import { blogPosts } from "@/app/data/blogPosts";

export default function BlogPage() {
  return (
    <div className="min-h-screen !bg-[#e5e4e1] pt-40 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section Header matching your screenshot */}
        <header className="mb-32">
          <h1 className="text-8xl font-bold tracking-tighter text-[#1a1f2e] mb-8">
            Insights<span className="text-[#a1a1a1]">.</span>
          </h1>
          <p className="max-w-xl text-xl text-[#4a4a4a] leading-relaxed normal-text">
            Reflections on engineering excellence, scalable architectures, and 
            the future of software development at InitCodes.
          </p>
        </header>

        {/* Blog Post List */}
        <div className="space-y-32">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              {/* Left Side: Metadata Column */}
              <div className="md:col-span-3 pt-2">
                <div className="text-[11px] font-bold tracking-[0.2em] text-[#7a7a7a] mb-4 uppercase">
                  {post.date}
                </div>
                <span className="inline-block border border-black/10 rounded-full px-4 py-1 text-[10px] font-bold tracking-widest text-[#4a4a4a] bg-black/5">
                  {post.category}
                </span>
              </div>

              {/* Right Side: Content Column */}
              <div className="md:col-span-9 max-w-3xl">
                <Link href={`/blog/${post.id}`} className="group block">
                  <h2 className="text-5xl font-bold text-[#1a1f2e] leading-[1.1] mb-6 tracking-tight group-hover:text-black transition-colors">
                    {post.title}
                  </h2>
                  <p className="normal-text text-lg text-[#4a4a4a] leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                    {post.description}
                  </p>

                  <div className="inline-flex items-center gap-3 bg-[#1a1f2e] text-white px-8 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-black transition-all">
                    Read Post
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      north_east
                    </span>
                  </div>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}