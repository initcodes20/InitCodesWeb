import { blogPosts } from "../../data/blogPosts";
import Link from "next/link";

export default async function SingleBlogPage({ params }) {
  const { id } = await params;

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Blog not found
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#e5e4e1] pt-40 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <Link href="/blog" className="text-xs uppercase opacity-50">
          ← Back to Insights
        </Link>

        {/* Header */}
        <header className="my-16">
          <span className="text-xs font-bold">
            {post.category} • {post.readTime}
          </span>

          <h1 className="text-6xl font-bold mt-6">
            {post.title}
          </h1>

          <p className="mt-4 uppercase text-xs">
            By {post.author}
          </p>
        </header>

        {/* Content */}
        <div className="prose max-w-none text-lg leading-relaxed">
          {post.content}
        </div>

      </div>
    </article>
  );
}
